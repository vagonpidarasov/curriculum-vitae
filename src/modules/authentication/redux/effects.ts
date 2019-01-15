import {Injectable} from '@angular/core';
import {Store, INIT} from '@ngrx/store';
import {Actions, Effect, ofType} from '@ngrx/effects';

import {Observable, of, defer} from 'rxjs';
import {catchError, map, exhaustMap, withLatestFrom, filter, switchMap, tap} from 'rxjs/operators';

import {Action, ActionWithPayload, toPayload} from 'src/modules/redux-helpers';

import {AuthenticationRepository} from '../authentication.repository';
import {UserData, SignInPayload} from '../types';
import {FeatureState as AuthFeatureState} from './feature';
import {
    SignInFail,
    SetProgress,
    SignInSuccess,
    SetError,
    SetUserData,
    ResetUserData,
    SignOutSuccess,
    SignOut,
} from './actions';
import {SIGN_IN, SIGN_IN_SUCCESS, SIGN_IN_FAIL, SIGN_OUT, SIGN_OUT_SUCCESS} from './action-types';

@Injectable()
export class AuthenticationEffects {
    private signIn(payload:SignInPayload):Observable<ActionWithPayload> {
        return this.authenticationRepository.signIn(payload).pipe(
            map((response:UserData) => new SignInSuccess(response)),
            catchError((e:any) => of(new SignInFail(e))),
        );
    }

    private signOut():Observable<Action> {
        return this.authenticationRepository.signOut().pipe(
            map(() => new SignOutSuccess())
        );
    }

    constructor(
        private actions$:Actions,
        private store:Store<AuthFeatureState>,
        private authenticationRepository:AuthenticationRepository,
    ) {}

    /**
     * @Effect watches for the authentication status changes and signs out if necessary
     * @type {Observable<any>}
     */
    @Effect() IsAuthenticatedEffect$:Observable<Action> = defer(() => of({type: INIT})).pipe(
        ofType(INIT),
        switchMap(() => this.authenticationRepository.isAuthenticated()),
        filter((isAuthenticated:boolean) => !isAuthenticated),
        withLatestFrom(this.store, (a:Action, s:AuthFeatureState) => s.authentication.isAuthenticated),
        filter((isAuthenticated:boolean) => isAuthenticated),
        map(() => new SignOut())
    );

    /**
     * SingIn
     * @type {Observable<any>}
     */
    @Effect() ResetErrorEffect$:Observable<ActionWithPayload> = this.actions$.pipe(
        ofType(SIGN_IN),
        map(() => new SetError(null)),
    );

    @Effect() SetProgressEffect$:Observable<ActionWithPayload> = this.actions$.pipe(
        ofType(SIGN_IN),
        map(() => new SetProgress(true)),
    );

    @Effect() SignInEffect$:Observable<ActionWithPayload> = this.actions$.pipe(
        ofType(SIGN_IN),
        map(toPayload),
        exhaustMap((payload:SignInPayload) => this.signIn(payload)),
    );

    @Effect() SetUserDataEffect$:Observable<Action> = this.actions$.pipe(
        ofType(SIGN_IN_SUCCESS),
        map(toPayload),
        map((payload:UserData) => new SetUserData(payload)),
    );

    /**
     * @Effect fires previously stored action upon successful authentication
     * @type {Observable<Action>}
     */
    @Effect() SingInSuccessEffect$:Observable<Action> = this.actions$.pipe(
        ofType(SIGN_IN_SUCCESS),
        withLatestFrom(this.store, (a:Action, s:AuthFeatureState) => s.authentication.authenticationRequest),
        filter((authenticationRequest:Action) => !!authenticationRequest)
    );

    @Effect() SingInFailEffect$:Observable<ActionWithPayload> = this.actions$.pipe(
        ofType(SIGN_IN_FAIL),
        map(toPayload),
        map((payload:any) => new SetError(payload)),
    );

    @Effect() ResetProgressEffect$:Observable<ActionWithPayload> = this.actions$.pipe(
        ofType(SIGN_IN_SUCCESS, SIGN_IN_FAIL),
        map(() => new SetProgress(false)),
    );

    /**
     * SignOut
     */
    @Effect() SignOutEffect$ = this.actions$.pipe(
        ofType(SIGN_OUT),
        exhaustMap(() => this.signOut()),
    );

    @Effect() SignOutSuccessEffect$ = this.actions$.pipe(
        ofType(SIGN_OUT_SUCCESS),
        map(() => new ResetUserData()),
    );
}

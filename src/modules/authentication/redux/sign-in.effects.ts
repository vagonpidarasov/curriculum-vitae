import {Injectable} from '@angular/core';
import {Store} from '@ngrx/store';
import {Actions, Effect, ofType} from '@ngrx/effects';
import {Observable, of} from 'rxjs';
import {catchError, map, exhaustMap, withLatestFrom, filter} from 'rxjs/operators';

import {Action, toPayload} from 'src/modules/redux';

import {AuthenticationRepository} from '../authentication.repository';
import {UserData, SignInPayload} from '../types';
import {FeatureState as AuthFeatureState} from './feature';
import {SIGN_IN, SIGN_IN_SUCCESS, SIGN_IN_FAIL} from './action-types';
import {
    SignInFail,
    SetProgress,
    SignInSuccess,
    SetError,
    SetUserData,
} from './actions';

@Injectable()
export class SignInEffects {
    private signIn(payload:SignInPayload):Observable<Action> {
        return this.authenticationRepository.signIn(payload).pipe(
            map((response:UserData) => new SignInSuccess(response)),
            catchError((e:any) => of(new SignInFail(e))),
        );
    }

    constructor(
        private actions$:Actions,
        private store:Store<AuthFeatureState>,
        private authenticationRepository:AuthenticationRepository,
    ) {}

    @Effect() ResetErrorEffect$:Observable<Action> = this.actions$.pipe(
        ofType(SIGN_IN),
        map(() => new SetError(null)),
    );

    @Effect() SetProgressEffect$:Observable<Action> = this.actions$.pipe(
        ofType(SIGN_IN),
        map(() => new SetProgress(true)),
    );

    @Effect() SignInEffect$:Observable<Action> = this.actions$.pipe(
        ofType(SIGN_IN),
        map(toPayload),
        exhaustMap((payload:SignInPayload) => this.signIn(payload)),
    );

    @Effect() SetUserDataEffect$:Observable<Action> = this.actions$.pipe(
        ofType(SIGN_IN_SUCCESS),
        map(toPayload),
        map((payload:UserData) => new SetUserData(payload)),
    );

    @Effect() SingInFailEffect$:Observable<Action> = this.actions$.pipe(
        ofType(SIGN_IN_FAIL),
        map(toPayload),
        map((payload:any) => new SetError(payload)),
    );

    @Effect() ResetProgressEffect$:Observable<Action> = this.actions$.pipe(
        ofType(SIGN_IN_SUCCESS, SIGN_IN_FAIL),
        map(() => new SetProgress(false)),
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
}

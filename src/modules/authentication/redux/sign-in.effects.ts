import {Injectable} from '@angular/core';
import {Store} from '@ngrx/store';
import {Actions, Effect, ofType} from '@ngrx/effects';
import {Observable, of} from 'rxjs';
import {catchError, map, exhaustMap, withLatestFrom, filter, switchMap} from 'rxjs/operators';
import {Action, toPayload} from 'yet-another-redux-helpers';
import {AuthenticationRepository} from '../authentication.repository';
import {UserData, SignInPayload} from '../types';
import {FeatureState as AuthFeatureState} from './feature';
import {
    SignIn,
    SignInFail,
    SetProgress,
    SignInSuccess,
    SetError,
    SetUserData,
    AuthenticationDiscard,
    SetAuthenticationDiscard,
    SetAuthenticationRequest,
} from './actions';

export type SignInType = SignInFail|SignInSuccess;
export type AuthRequestDiscardType = SetAuthenticationRequest|SetAuthenticationDiscard;

@Injectable()
export class SignInEffects {
    private signIn(payload:SignInPayload):Observable<SignInType> {
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

    @Effect() ResetErrorEffect$:Observable<SetError> = this.actions$.pipe(
        ofType(SignIn.type),
        map(() => new SetError(null)),
    );

    @Effect() SetProgressEffect$:Observable<SetProgress> = this.actions$.pipe(
        ofType(SignIn.type),
        map(() => new SetProgress(true)),
    );

    @Effect() SignInEffect$:Observable<SignInType> = this.actions$.pipe(
        ofType(SignIn.type),
        map(toPayload),
        exhaustMap((payload:SignInPayload) => this.signIn(payload)),
    );

    @Effect() SetUserDataEffect$:Observable<SetUserData> = this.actions$.pipe(
        ofType(SignInSuccess.type),
        map(toPayload),
        map((payload:UserData) => new SetUserData(payload)),
    );

    @Effect() SingInFailEffect$:Observable<SetError> = this.actions$.pipe(
        ofType(SignInFail.type),
        map(toPayload),
        map((payload:any) => new SetError(payload)),
    );

    @Effect() ResetProgressEffect$:Observable<SetProgress> = this.actions$.pipe(
        ofType(SignInSuccess.type, SignInFail.type),
        map(() => new SetProgress(false)),
    );

    /**
     * @Effect fires previously stored action upon successful authentication
     * @type {Observable<Action>}
     */
    @Effect() SingInSuccessEffect$:Observable<Action> = this.actions$.pipe(
        ofType(SignInSuccess.type),
        withLatestFrom(this.store, (a:Action, s:AuthFeatureState) => s.authentication.authenticationRequest),
        filter((action:Action) => !!action),
    );

    /**
     * @Effect fires previously stored fallback action upon auth discard
     * @type {Observable<Action>}
     */
    @Effect() AuthDiscardEffect$:Observable<Action> = this.actions$.pipe(
        ofType(AuthenticationDiscard.type),
        withLatestFrom(this.store, (a:Action, s:AuthFeatureState) => s.authentication.authenticationDiscard),
        filter((action:Action) => !!action),
    );

    /**
     * @Effects resets request and discard actions upon sing-in or discard
     * @type {Observable<Action | SetAuthenticationRequest | SetAuthenticationDiscard>}
     */
    @Effect() AuthEffect$:Observable<AuthRequestDiscardType> = this.actions$.pipe(
        ofType(SignInSuccess.type, AuthenticationDiscard.type),
        switchMap(() => of(
            new SetAuthenticationRequest(null),
            new SetAuthenticationDiscard(null),
        )),
    );
}

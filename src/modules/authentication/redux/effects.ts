import {Injectable} from '@angular/core';
import {Action} from '@ngrx/store';
import {Actions, Effect, ofType} from '@ngrx/effects';

import {Observable, of} from 'rxjs';
import {catchError, map, exhaustMap} from 'rxjs/operators';

import {toPayload} from 'src/modules/redux-helpers';
import {normalizeError} from 'src/modules/error';

import {AuthenticationRepository} from '../authentication.repository';
import {AuthenticationPayload, AuthenticationResponse} from '../interfaces';

import {
    AuthenticationActions,
    SignInFail,
    SetProgress,
    SignInSuccess,
    SetError,
    AuthenticationDiscard,
} from './actions';

@Injectable()
export class AuthenticationEffects {
    constructor(
        private actions$:Actions,
        private authenticationRepository:AuthenticationRepository
    ) {}

    @Effect() SignInEffect$:Observable<Action> = this.actions$.pipe(
        ofType(AuthenticationActions.SIGN_IN),
        map(toPayload),
        exhaustMap((payload:AuthenticationPayload) => this.authenticate(payload))
    );

    private authenticate(payload:AuthenticationPayload) {
        return this.authenticationRepository.authenticate(payload).pipe(
            map((response:AuthenticationResponse) => new SignInSuccess({username: response.username})),
            catchError((e:any) => of(new SignInFail(normalizeError(e))))
        );
    }

    @Effect() SingInFailEffect$:Observable<Action> = this.actions$.pipe(
        ofType(AuthenticationActions.SIGN_IN_FAIL),
        map(toPayload),
        map((payload:any) => new SetError(payload))
    );

    @Effect() ResetErrorEffect$:Observable<Action> = this.actions$.pipe(
        ofType(AuthenticationActions.SIGN_IN),
        map(() => new SetError(null))
    );

    @Effect() SetProgressEffect$:Observable<Action> = this.actions$.pipe(
        ofType(AuthenticationActions.SIGN_IN),
        map(() => new SetProgress(true))
    );

    @Effect() ResetProgressEffect$:Observable<Action> = this.actions$.pipe(
        ofType(
            AuthenticationActions.SIGN_IN_SUCCESS,
            AuthenticationActions.SIGN_IN_FAIL,
        ),
        map(() => new SetProgress(false))
    );

    @Effect() SignInSuccessEffect$:Observable<Action> = this.actions$.pipe(
        ofType(AuthenticationActions.SIGN_IN_SUCCESS),
        map(() => new AuthenticationDiscard())
    );
}

import {Injectable} from '@angular/core';
import {Store} from '@ngrx/store';
import {Actions, Effect, ofType} from '@ngrx/effects';

import {Observable, of} from 'rxjs';
import {catchError, map, exhaustMap, withLatestFrom, filter} from 'rxjs/operators';

import {Action, ActionWithPayload, toPayload} from 'src/modules/redux-helpers';
import {firebaseAuthError} from 'src/modules/error';

import {AuthenticationRepository} from '../authentication.repository';
import {AuthenticationPayload, AuthenticationResponse} from '../interfaces';
import {FeatureState as AuthFeatureState} from './feature';
import {SignInFail, SetProgress, SignInSuccess, SetError} from './actions';
import {SIGN_IN, SIGN_IN_SUCCESS, SIGN_IN_FAIL} from './action-types';

@Injectable()
export class AuthenticationEffects {
    private authenticate(payload:AuthenticationPayload):Observable<ActionWithPayload> {
        return this.authenticationRepository.authenticate(payload).pipe(
            map((response:AuthenticationResponse) => new SignInSuccess({username: response.username})),
            catchError((e:any) => of(new SignInFail(firebaseAuthError(e)))),
        );
    }

    constructor(
        private actions$:Actions,
        private store:Store<AuthFeatureState>,
        private authenticationRepository:AuthenticationRepository,
    ) {}

    @Effect() SignInEffect$:Observable<ActionWithPayload> = this.actions$.pipe(
        ofType(SIGN_IN),
        map(toPayload),
        exhaustMap((payload:AuthenticationPayload) => this.authenticate(payload)),
    );

    @Effect() SingInFailEffect$:Observable<ActionWithPayload> = this.actions$.pipe(
        ofType(SIGN_IN_FAIL),
        map(toPayload),
        map((payload:any) => new SetError(payload)),
    );

    @Effect() ResetErrorEffect$:Observable<ActionWithPayload> = this.actions$.pipe(
        ofType(SIGN_IN),
        map(() => new SetError(null)),
    );

    @Effect() SetProgressEffect$:Observable<ActionWithPayload> = this.actions$.pipe(
        ofType(SIGN_IN),
        map(() => new SetProgress(true)),
    );

    @Effect() ResetProgressEffect$:Observable<ActionWithPayload> = this.actions$.pipe(
        ofType(SIGN_IN_SUCCESS, SIGN_IN_FAIL),
        map(() => new SetProgress(false)),
    );

    @Effect() SingInSuccessEffect$:Observable<Action> = this.actions$.pipe(
        ofType(SIGN_IN_SUCCESS),
        withLatestFrom(this.store, (a:Action, s:AuthFeatureState) => s.authentication.authenticationRequest),
        filter((authenticationRequest:Action) => !!authenticationRequest)
    );
}

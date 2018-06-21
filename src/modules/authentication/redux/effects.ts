import {Injectable} from '@angular/core';
import {Action} from '@ngrx/store';
import {Actions, Effect, ofType} from '@ngrx/effects';

import {Observable, of} from 'rxjs';
import {catchError, map, switchMap} from 'rxjs/operators';

import {toPayload} from 'src/modules/redux-helpers';

import {AuthenticationActions, SignInFail, SetProgress, SignInSuccess} from './actions';
import {AuthenticationRepository} from '../authentication.repository';
import {AuthenticationPayload} from '../authentication-payload.interface';
import {AuthenticationResponse} from '../authentication-response.interface';

@Injectable()
export class AuthenticationEffects {
    constructor(
        private actions$:Actions,
        private authenticationRepository:AuthenticationRepository
    ) {}

    @Effect() SignInEffect$:Observable<Action> = this.actions$.pipe(
        ofType(AuthenticationActions.SIGN_IN),
        map(toPayload),
        switchMap((payload:AuthenticationPayload) => this.authenticate(payload))
    );

    private authenticate(payload:AuthenticationPayload) {
        return this.authenticationRepository.authenticate(payload).pipe(
            map((response:AuthenticationResponse) => new SignInSuccess({username: response.username})),
            catchError((e) => of(new SignInFail({reason: 'unknown'})))
        );
    }

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
}

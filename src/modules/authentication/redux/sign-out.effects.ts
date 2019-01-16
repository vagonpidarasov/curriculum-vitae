import {Injectable} from '@angular/core';
import {Actions, Effect, ofType} from '@ngrx/effects';
import {map, exhaustMap} from 'rxjs/operators';

import {AuthenticationRepository} from '../authentication.repository';
import {SIGN_OUT, SIGN_OUT_SUCCESS} from './action-types';
import {ResetUserData, SignOutSuccess} from './actions';

@Injectable()
export class SignOutEffects {
    constructor(
        private actions$:Actions,
        private authenticationRepository:AuthenticationRepository,
    ) {}

    @Effect() SignOutEffect$ = this.actions$.pipe(
        ofType(SIGN_OUT),
        exhaustMap(() => this.authenticationRepository.signOut()),
        map(() => new SignOutSuccess()),
    );

    @Effect() SignOutSuccessEffect$ = this.actions$.pipe(
        ofType(SIGN_OUT_SUCCESS),
        map(() => new ResetUserData()),
    );
}

import {Injectable} from '@angular/core';
import {Actions, Effect, ofType} from '@ngrx/effects';
import {map, exhaustMap} from 'rxjs/operators';

import {AuthenticationRepository} from '../authentication.repository';
import {ResetUserData, SignOutSuccess, SignOut} from './actions';

@Injectable()
export class SignOutEffects {
    constructor(
        private actions$:Actions,
        private authenticationRepository:AuthenticationRepository,
    ) {}

    @Effect() SignOutEffect$ = this.actions$.pipe(
        ofType(SignOut.type),
        exhaustMap(() => this.authenticationRepository.signOut()),
        map(() => new SignOutSuccess()),
    );

    @Effect() SignOutSuccessEffect$ = this.actions$.pipe(
        ofType(SignOutSuccess.type),
        map(() => new ResetUserData()),
    );
}

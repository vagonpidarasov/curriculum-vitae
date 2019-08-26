import {Injectable} from '@angular/core';
import {Store, INIT} from '@ngrx/store';
import {Actions, Effect, ofType} from '@ngrx/effects';
import {Observable} from 'rxjs';
import {map, withLatestFrom, filter, switchMap} from 'rxjs/operators';
import {Action} from 'yet-another-redux-helpers';

import {AuthenticationRepository} from '../authentication.repository';
import {FeatureState as AuthFeatureState} from './feature';
import {SetError, SignOut} from './actions';

@Injectable()
export class AuthenticationEffects {
    constructor(
        private actions$:Actions,
        private store:Store<AuthFeatureState>,
        private authenticationRepository:AuthenticationRepository,
    ) {}

    /**
     * @Effect watches for the authentication status changes and signs out if necessary
     */
    @Effect() IsAuthenticatedEffect$:Observable<SignOut> = this.actions$.pipe(
        ofType(INIT),
        switchMap(() => this.authenticationRepository.isAuthenticated()),
        filter((isAuthenticated:boolean) => !isAuthenticated),
        withLatestFrom<any, any>(this.store, (a:Action, s:AuthFeatureState) => s.authentication.isAuthenticated),
        filter((isAuthenticated:boolean) => isAuthenticated),
        map(() => new SignOut())
    );

    /**
     * @Effect resets error upon app init
     */
    @Effect() InitResetErrorEffect$:Observable<SetError> = this.actions$.pipe(
        ofType(INIT),
        map(() => new SetError(null)),
    );
}

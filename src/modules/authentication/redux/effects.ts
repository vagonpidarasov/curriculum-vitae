import {Injectable} from '@angular/core';
import {Store, INIT} from '@ngrx/store';
import {Actions, Effect, ofType} from '@ngrx/effects';
import {Observable} from 'rxjs';
import {map, withLatestFrom, filter, switchMap} from 'rxjs/operators';

import {Action} from 'src/modules/redux';

import {AuthenticationRepository} from '../authentication.repository';
import {FeatureState as AuthFeatureState} from './feature';
import {SignOut} from './actions';

@Injectable()
export class AuthenticationEffects {
    constructor(
        private actions$:Actions,
        private store:Store<AuthFeatureState>,
        private authenticationRepository:AuthenticationRepository,
    ) {}

    /**
     * @Effect watches for the authentication status changes and signs out if necessary
     * @type {Observable<any>}
     */
    @Effect() IsAuthenticatedEffect$:Observable<Action> = this.actions$.pipe(
        ofType(INIT),
        switchMap(() => this.authenticationRepository.isAuthenticated()),
        filter((isAuthenticated:boolean) => !isAuthenticated),
        withLatestFrom(this.store, (a:Action, s:AuthFeatureState) => s.authentication.isAuthenticated),
        filter((isAuthenticated:boolean) => isAuthenticated),
        map(() => new SignOut())
    );
}

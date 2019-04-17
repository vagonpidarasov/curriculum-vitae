import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot} from '@angular/router';
import {Actions, Effect, ofType} from '@ngrx/effects';
import {ROUTER_CANCEL} from '@ngrx/router-store';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';

import {Action, toPayload} from 'src/modules/redux';
import {AuthenticationRequest, SIGN_OUT} from 'src/modules/authentication';

import {toCanceledRoute} from '../to-canceled-route';
import {toDefaultRoute} from '../to-default-route';
import {SetCurrentRoute} from './actions';

@Injectable()
export class AuthenticationEffects {
    constructor(private actions$:Actions) {}

    /**
     * @Effect saves canceled route as a SetCurrentRoute action
     * @type {Observable<any>}
     */
    @Effect() ProtectedRouteRequestEffect$:Observable<Action> = this.actions$.pipe(
        ofType(ROUTER_CANCEL),
        map(toPayload),
        map(toCanceledRoute),
        map((route:ActivatedRouteSnapshot) => new SetCurrentRoute(route)),
        map((action:SetCurrentRoute) => new AuthenticationRequest(action)),
    );

    @Effect() SignOutEffect$:Observable<Action> = this.actions$.pipe(
        ofType(SIGN_OUT),
        map(toDefaultRoute),
        map((route:ActivatedRouteSnapshot) => new SetCurrentRoute(route)),
    );
}

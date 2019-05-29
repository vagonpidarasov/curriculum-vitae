import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot} from '@angular/router';
import {Actions, Effect, ofType} from '@ngrx/effects';
import {ROUTER_CANCEL} from '@ngrx/router-store';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';

import {Action, toPayload} from 'src/modules/redux';
import {
    AuthenticationRequest,
    SetAuthenticationDiscard,
    SetAuthenticationRequest,
    SIGN_OUT,
} from 'src/modules/authentication';

import {toCanceledRoute} from '../to-canceled-route';
import {toDefaultRoute} from '../to-default-route';
import {SetCurrentRoute} from './actions';

@Injectable()
export class AuthenticationEffects {
    constructor(private actions$:Actions) {}

    /**
     * @Effect saves current route to be fired once auth is discarded
     * @type {Observable<any>}
     */
    @Effect() SetAuthRequestEffect$:Observable<Action> = this.actions$.pipe(
        ofType(ROUTER_CANCEL),
        map(toDefaultRoute),
        map((route:ActivatedRouteSnapshot) => new SetCurrentRoute(route)),
        map((action:SetCurrentRoute) => new SetAuthenticationDiscard(action)),
    );

    /**
     * @Effect saves canceled route to be fired once auth is succeeded
     * @type {Observable<any>}
     */
    @Effect() SetAuthDiscardEffect$:Observable<Action> = this.actions$.pipe(
        ofType(ROUTER_CANCEL),
        map(toPayload),
        map(toCanceledRoute),
        map((route:ActivatedRouteSnapshot) => new SetCurrentRoute(route)),
        map((action:SetCurrentRoute) => new SetAuthenticationRequest(action)),
    );

    /**
     * @Effect fires AuthRequest action when protected route is navigated
     * @type {Observable<any>}
     */
    @Effect() AuthRequestActionEffect$:Observable<Action> = this.actions$.pipe(
        ofType(ROUTER_CANCEL),
        map(() => new AuthenticationRequest()),
    );

    /**
     * @Effect navigates to the default route upon sign out
     * @type {Observable<SetCurrentRoute>}
     */
    @Effect() SignOutEffect$:Observable<Action> = this.actions$.pipe(
        ofType(SIGN_OUT),
        map(toDefaultRoute),
        map((route:ActivatedRouteSnapshot) => new SetCurrentRoute(route)),
    );
}

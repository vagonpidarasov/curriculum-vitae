import {Injectable} from '@angular/core';
import {Actions, Effect, ofType} from '@ngrx/effects';
import {ROUTER_CANCEL} from '@ngrx/router-store';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import {toPayload} from 'yet-another-redux-helpers';
import {
    AuthenticationRequest,
    SetAuthenticationDiscard,
    SetAuthenticationRequest,
    SignOut,
} from 'src/modules/authentication';
import {toCanceledRouteUrl} from '../to-canceled-route-url';
import {toDefaultRouteUrl} from '../to-default-route-url';
import {SetCurrentRoute} from './actions';

@Injectable()
export class AuthenticationEffects {
    constructor(private actions$:Actions) {}

    /**
     * @Effect saves current route to be fired once auth is discarded
     */
    @Effect() SetAuthDiscardEffect$:Observable<SetAuthenticationDiscard> = this.actions$.pipe(
        ofType(ROUTER_CANCEL),
        map(toDefaultRouteUrl),
        map((route:string) => new SetCurrentRoute(route)),
        map((action:SetCurrentRoute) => new SetAuthenticationDiscard(action)),
    );

    /**
     * @Effect saves canceled route to be fired once auth is succeeded
     */
    @Effect() SetAuthRequestEffect$:Observable<SetAuthenticationRequest> = this.actions$.pipe(
        ofType(ROUTER_CANCEL),
        map(toPayload),
        map(toCanceledRouteUrl),
        map((payload:string) => new SetCurrentRoute(payload)),
        map((action:SetCurrentRoute) => new SetAuthenticationRequest(action)),
    );

    /**
     * @Effect fires AuthRequest action when protected route is navigated
     */
    @Effect() AuthRequestActionEffect$:Observable<AuthenticationRequest> = this.actions$.pipe(
        ofType(ROUTER_CANCEL),
        map(() => new AuthenticationRequest()),
    );

    /**
     * @Effect navigates to the default route upon sign out
     */
    @Effect() SignOutEffect$:Observable<SetCurrentRoute> = this.actions$.pipe(
        ofType(SignOut.type),
        map(toDefaultRouteUrl),
        map((route:string) => new SetCurrentRoute(route)),
    );
}

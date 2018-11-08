import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot} from '@angular/router';
import {Action, Store} from '@ngrx/store';
import {Actions, Effect, ofType} from '@ngrx/effects';
import {ROUTER_CANCEL, ROUTER_NAVIGATION} from '@ngrx/router-store';
import {Observable} from 'rxjs';
import {filter, map, withLatestFrom} from 'rxjs/operators';

import {toPayload} from 'src/modules/redux-helpers';
import {
    FeatureState as AuthFeatureState,
    AuthenticationActions,
    AuthenticationRequest,
} from 'src/modules/authentication';

import {extractActivatedRoute} from '../extract-activated-route';
import {NavigationActions, SyncCurrentRoute, SetRequestedRoute, SetCurrentRoute} from './actions';
import {defaultRoute} from '../default-route.const';

@Injectable()
export class NavigationEffects {
    constructor(private store:Store<AuthFeatureState>, private actions$:Actions) {}

    /**
     * @Effect listens for ROUTER_CANCEL action, extracts activated route and fires ProtectedRouteRequest
     */
    @Effect() ProtectedRouteRequestEffect$:Observable<Action> = this.actions$.pipe(
        ofType(ROUTER_CANCEL),
        map(toPayload),
        map((payload:any) => extractActivatedRoute(payload)),
        map((route:ActivatedRouteSnapshot) => new SetRequestedRoute(route)),
    );

    /**
     * @Effect listens for ProtectedRouteRequest and checks authentication status
     */
    @Effect() AuthRequiredEffect$:Observable<Action> = this.actions$.pipe(
        ofType(NavigationActions.SET_REQUESTED_ROUTE),
        filter((action:SetRequestedRoute) => !!action.payload),
        withLatestFrom(this.store, (action:Action, store:AuthFeatureState) => store.authentication.isAuthenticated),
        filter((isAuthenticated:boolean) => !isAuthenticated),
        map(() => new AuthenticationRequest())
    );

    /**
     * @Effect listens for SIGN_IN_SUCCESS action and fires SyncCurrentRoute
     */
    @Effect() ResetProgressEffect$:Observable<Action> = this.actions$.pipe(
        ofType(AuthenticationActions.SIGN_IN_SUCCESS),
        map(() => new SyncCurrentRoute())
    );

    /**
     * @Effect listens for SIGN_OUT action and navigation to the default route
     */
    @Effect() SignOutEffectEffect$:Observable<Action> = this.actions$.pipe(
        ofType(AuthenticationActions.SIGN_OUT),
        map(() => new SetCurrentRoute(defaultRoute))
    );

    /**
     * @Effect resets requestedRoute upon navigation
     */
    @Effect() NavigationSuccessEffect$:Observable<Action> = this.actions$.pipe(
        ofType(ROUTER_NAVIGATION),
        map(() => new SetRequestedRoute(null)),
    );

    @Effect() AuthenticationDiscardEffect$:Observable<Action> = this.actions$.pipe(
        ofType(AuthenticationActions.AUTHENTICATION_DISCARD),
        map(() => new SetRequestedRoute(null)),
    );
}

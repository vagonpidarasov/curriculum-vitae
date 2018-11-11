import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, Router} from '@angular/router';
import {Action, Store} from '@ngrx/store';
import {Actions, Effect, ofType} from '@ngrx/effects';
import {ROUTER_CANCEL} from '@ngrx/router-store';
import {Observable} from 'rxjs';
import {map, tap} from 'rxjs/operators';

import {toPayload} from 'src/modules/redux-helpers';
import {
    FeatureState as AuthFeatureState,
    AuthenticationActions,
    AuthenticationRequest,
} from 'src/modules/authentication';

import {extractActivatedRoute} from '../extract-activated-route';
import {NavigationActions, SetCurrentRoute} from './actions';
import {defaultRoute} from '../default-route.const';

@Injectable()
export class NavigationEffects {
    constructor(
        private store:Store<AuthFeatureState>,
        private actions$:Actions,
        private router:Router,
    ) {}

    @Effect() ProtectedRouteRequestEffect$:Observable<Action> = this.actions$.pipe(
        ofType(ROUTER_CANCEL),
        map(toPayload),
        map((payload:any) => extractActivatedRoute(payload)),
        map((route:ActivatedRouteSnapshot) => new AuthenticationRequest(new SetCurrentRoute(route))),
    );

    @Effect() SignOutEffect$:Observable<Action> = this.actions$.pipe(
        ofType(AuthenticationActions.SIGN_OUT),
        map(() => new SetCurrentRoute(defaultRoute)),
    );

    /**
     * @Effect performs navigation upon currentRoute change
     */
    @Effect({dispatch: false}) SetCurrentRouteEffect$ = this.actions$.pipe(
        ofType(NavigationActions.SET_CURRENT_ROUTE),
        map(toPayload),
        map((route:ActivatedRouteSnapshot) => route.url.toString()),
        tap((route:string) => this.router.navigateByUrl(route)),
    );
}

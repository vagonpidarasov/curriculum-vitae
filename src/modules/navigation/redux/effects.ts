import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot} from '@angular/router';
import {Action, Store} from '@ngrx/store';
import {Actions, Effect, ofType} from '@ngrx/effects';
import {ROUTER_CANCEL} from '@ngrx/router-store';
import {Observable} from 'rxjs';
import {filter, map, withLatestFrom} from 'rxjs/operators';

import {toPayload} from 'src/modules/redux-helpers';
import {AppState} from 'src/modules/authentication';

import {extractActivatedRoute} from '../extract-activated-route';
import {NavigationActions, ProtectedRouteRequest} from './actions';

@Injectable()
export class NavigationEffects {
    constructor(private store:Store<AppState>, private actions$:Actions) {}

    /**
     * @Effect listens for ROUTER_CANCEL action, extracts activated route and fires ProtectedRouteRequest
     */
    @Effect() ProtectedRouteRequestEffect$:Observable<Action> = this.actions$.pipe(
        ofType(ROUTER_CANCEL),
        map(toPayload),
        map((payload:any) => extractActivatedRoute(payload)),
        map((route:ActivatedRouteSnapshot) => new ProtectedRouteRequest(route)),
    );

    /**
     * @Effect listens for ProtectedRouteRequest and checks authentication status
     */
    @Effect() AuthRequiredEffect$:Observable<Action> = this.actions$.pipe(
        ofType(NavigationActions.PROTECTED_ROUTE_REQUEST),
        withLatestFrom(this.store, (action:Action, store:AppState) => store.authentication.isAuthenticated),
        filter((isAuthenticated:boolean) => !isAuthenticated),
        map(() => ({type: 'NULL', payload: console.log('Got protected route while not authenticated')}))
    );
}

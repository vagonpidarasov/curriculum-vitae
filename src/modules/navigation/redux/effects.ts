import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot} from '@angular/router';
import {Actions, Effect, ofType} from '@ngrx/effects';
import {ROUTER_CANCEL} from '@ngrx/router-store';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';

import {ActionWithPayload, toPayload} from 'src/modules/redux';
import {AuthenticationRequest, SIGN_OUT} from 'src/modules/authentication';

import {toActivatedRoute} from '../to-activated-route';
import {SetCurrentRoute} from './actions';
import {toDefaultRoute} from '../to-default-route';

@Injectable()
export class AuthenticationEffects {
    constructor(private actions$:Actions) {}

    @Effect() ProtectedRouteRequestEffect$:Observable<ActionWithPayload> = this.actions$.pipe(
        ofType(ROUTER_CANCEL),
        map(toPayload),
        map(toActivatedRoute),
        map((route:ActivatedRouteSnapshot) => new SetCurrentRoute(route)),
        map((action:SetCurrentRoute) => new AuthenticationRequest(action)),
    );

    @Effect() SignOutEffect$:Observable<ActionWithPayload> = this.actions$.pipe(
        ofType(SIGN_OUT),
        map(toDefaultRoute),
        map((route:ActivatedRouteSnapshot) => new SetCurrentRoute(route)),
    );
}

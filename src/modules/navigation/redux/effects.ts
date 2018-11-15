import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot} from '@angular/router';
import {Action} from '@ngrx/store';
import {Actions, Effect, ofType} from '@ngrx/effects';
import {ROUTER_CANCEL} from '@ngrx/router-store';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';

import {toPayload} from 'src/modules/redux-helpers';
import {AuthenticationActions, AuthenticationRequest} from 'src/modules/authentication';

import {extractActivatedRoute} from '../extract-activated-route';
import {SetCurrentRoute} from './actions';
import {defaultRoute} from '../default-route.const';

@Injectable()
export class AuthenticationEffects {
    constructor(private actions$:Actions) {}

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
}

import {Action} from '@ngrx/store';
import {ActivatedRouteSnapshot} from '@angular/router';

export enum NavigationActions {
    PROTECTED_ROUTE_REQUEST = 'Navigation:PROTECTED_ROUTE_REQUEST',
    NAVIGATE_TO_REQUEST = 'Navigation:NAVIGATE_TO_REQUEST',
}

export class ProtectedRouteRequest implements Action {
    readonly type = NavigationActions.PROTECTED_ROUTE_REQUEST;
    constructor(public payload:ActivatedRouteSnapshot) {}
}

// TODO rename to NavigateToRequest, requestedRoute
export class NavigateToRequest implements Action {
    readonly type = NavigationActions.NAVIGATE_TO_REQUEST;
    constructor(public payload:ActivatedRouteSnapshot) {}
}

import {Action} from '@ngrx/store';
import {ActivatedRouteSnapshot} from '@angular/router';

export enum NavigationActions {
    SET_REQUESTED_ROUTE = 'Navigation:SET_REQUESTED_ROUTE',
    SET_CURRENT_ROUTE = 'Navigation:SET_CURRENT_ROUTE',
    SYNC_CURRENT_ROUTE = 'Navigation:SYNC_CURRENT_ROUTE',
}

export class SetRequestedRoute implements Action {
    readonly type = NavigationActions.SET_REQUESTED_ROUTE;
    constructor(public payload:ActivatedRouteSnapshot) {}
}

export class SyncCurrentRoute implements Action {
    readonly type = NavigationActions.SYNC_CURRENT_ROUTE;
}

export class SetCurrentRoute implements Action {
    readonly type = NavigationActions.SET_CURRENT_ROUTE;
    constructor(public payload:ActivatedRouteSnapshot) {}
}

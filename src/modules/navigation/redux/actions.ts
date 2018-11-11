import {Action} from '@ngrx/store';
import {ActivatedRouteSnapshot} from '@angular/router';

export enum NavigationActions {
    SET_CURRENT_ROUTE = 'Navigation:SET_CURRENT_ROUTE',
}

export class SetCurrentRoute implements Action {
    readonly type = NavigationActions.SET_CURRENT_ROUTE;
    constructor(public payload:ActivatedRouteSnapshot) {}
}

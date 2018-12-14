import {Action} from '@ngrx/store';
import {ActivatedRouteSnapshot} from '@angular/router';
import {SET_CURRENT_ROUTE} from './action-types';

export class SetCurrentRoute implements Action {
    readonly type = SET_CURRENT_ROUTE;
    constructor(public payload:ActivatedRouteSnapshot) {}
}

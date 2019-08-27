import {Action} from '@ngrx/store';
import {SET_CURRENT_ROUTE} from './action-types';

export class SetCurrentRoute implements Action {
    static type = SET_CURRENT_ROUTE;
    readonly type = SET_CURRENT_ROUTE;
    constructor(public payload:string) {}
}

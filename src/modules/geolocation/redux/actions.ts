import {Action} from '@ngrx/store';
import {ActionWithPayload} from 'src/modules/redux-helpers';
import {
    RESOLVE_GEOLOCATION,
    SET_GEOLOCATION,
    RESET_GEOLOCATION,
    RESOLVE_GEOLOCATION_SUCCESS,
    RESOLVE_GEOLOCATION_FAIL
} from './action-types';

export class ResolveGeolocation implements ActionWithPayload {
    readonly type = RESOLVE_GEOLOCATION;
    constructor(public payload:boolean) {}
}

export class SetGeolocation implements ActionWithPayload {
    readonly type = SET_GEOLOCATION;
    constructor(public payload:Position) {}
}

export class ResetGeolocation implements Action {
    readonly type = RESET_GEOLOCATION;
}

export class ResolveGeolocationSuccess implements ActionWithPayload {
    readonly type = RESOLVE_GEOLOCATION_SUCCESS;
    constructor(public payload:Position) {}
}

export class ResolveGeolocationFail implements ActionWithPayload {
    readonly type = RESOLVE_GEOLOCATION_FAIL;
    constructor(public payload:PositionError) {}
}

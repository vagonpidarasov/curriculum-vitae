import {Action} from 'yet-another-redux-helpers';
import {
    RESOLVE_GEOLOCATION,
    SET_GEOLOCATION,
    RESET_GEOLOCATION,
    RESOLVE_GEOLOCATION_SUCCESS,
    RESOLVE_GEOLOCATION_FAIL
} from './action-types';

export class ResolveGeolocation implements Action {
    static type = RESOLVE_GEOLOCATION;
    readonly type = RESOLVE_GEOLOCATION;
    constructor(public payload:boolean) {}
}

export class SetGeolocation implements Action {
    static type = SET_GEOLOCATION;
    readonly type = SET_GEOLOCATION;
    constructor(public payload:Position) {}
}

export class ResetGeolocation implements Action {
    static type = RESET_GEOLOCATION;
    readonly type = RESET_GEOLOCATION;
}

export class ResolveGeolocationSuccess implements Action {
    static type = RESOLVE_GEOLOCATION_SUCCESS;
    readonly type = RESOLVE_GEOLOCATION_SUCCESS;
    constructor(public payload:Position) {}
}

export class ResolveGeolocationFail implements Action {
    static type = RESOLVE_GEOLOCATION_FAIL;
    readonly type = RESOLVE_GEOLOCATION_FAIL;
    constructor(public payload:PositionError) {}
}

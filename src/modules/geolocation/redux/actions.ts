import {Action} from '@ngrx/store';

export enum GeolocationActions {
    RESOLVE_GEOLOCATION = 'Geolocation:Resolve',
    SET_GEOLOCATION = 'Geolocation:Set',
    RESET_GEOLOCATION = 'Geolocation:Reset',
    RESOLVE_GEOLOCATION_SUCCESS = 'Geolocation:Resolve-Success',
    RESOLVE_GEOLOCATION_FAIL = 'Geolocation:Resolve-Fail',
}

export class ResolveGeolocation implements Action {
    readonly type = GeolocationActions.RESOLVE_GEOLOCATION;
    constructor(public payload:boolean) {}
}

export class SetGeolocation implements Action {
    readonly type = GeolocationActions.SET_GEOLOCATION;
    constructor(public payload:Position) {}
}

export class ResetGeolocation implements Action {
    readonly type = GeolocationActions.RESET_GEOLOCATION;
}

export class ResolveGeolocationSuccess implements Action {
    readonly type = GeolocationActions.RESOLVE_GEOLOCATION_SUCCESS;
    constructor(public payload:Position) {}
}

export class ResolveGeolocationFail implements Action {
    readonly type = GeolocationActions.RESOLVE_GEOLOCATION_FAIL;
    constructor(public payload:PositionError) {}
}

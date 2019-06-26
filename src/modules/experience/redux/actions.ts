import {Action} from 'src/modules/redux';
import {Experience} from '../experience.model';
import {
    RESOLVE_EXPERIENCE,
    RESOLVE_EXPERIENCE_FAIL,
    RESOLVE_EXPERIENCE_SUCCESS,
    SET_CURRENT_POSITION,
    SET_EXPERIENCE,
} from './action-types';

export class ResolveExperience implements Action {
    static type = RESOLVE_EXPERIENCE;
    readonly type = RESOLVE_EXPERIENCE;
}

export class ResolveExperienceSuccess implements Action {
    static type = RESOLVE_EXPERIENCE_SUCCESS;
    readonly type = RESOLVE_EXPERIENCE_SUCCESS;
    constructor(public payload:Experience[]) {}
}

export class ResolveExperienceFail implements Action {
    static type = RESOLVE_EXPERIENCE_FAIL;
    readonly type = RESOLVE_EXPERIENCE_FAIL;
    constructor(public payload:any) {}
}

export class SetExperience implements Action {
    static type = SET_EXPERIENCE;
    readonly type = SET_EXPERIENCE;
    constructor(public payload:Experience[]) {}
}

export class SetCurrentPosition implements Action {
    static type = SET_CURRENT_POSITION;
    readonly type = SET_CURRENT_POSITION;
    constructor(public payload:Experience) {}
}

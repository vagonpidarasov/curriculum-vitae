import {Action} from 'yet-another-redux-helpers';
import {Education} from '../education.model';
import {RESOLVE_EDUCATIONS, RESOLVE_EDUCATIONS_FAIL, RESOLVE_EDUCATIONS_SUCCESS, SET_EDUCATION} from './action-types';

export class ResolveEducations implements Action {
    static type = RESOLVE_EDUCATIONS;
    readonly type = RESOLVE_EDUCATIONS;
}

export class ResolveEducationsSuccess implements Action {
    static type = RESOLVE_EDUCATIONS_SUCCESS;
    readonly type = RESOLVE_EDUCATIONS_SUCCESS;
    constructor(public payload:Education[]) {}
}

export class ResolveEducationsFail implements Action {
    static type = RESOLVE_EDUCATIONS_FAIL;
    readonly type = RESOLVE_EDUCATIONS_FAIL;
    constructor(public payload:any) {}
}

export class SetEducation implements Action {
    static type = SET_EDUCATION;
    readonly type = SET_EDUCATION;
    constructor(public payload:Education) {}
}

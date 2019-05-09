import {Action} from 'src/modules/redux';
import {Employee, Education} from '../models';
import {
    RESOLVE_EMPLOYEES,
    RESOLVE_EMPLOYEES_FAIL,
    RESOLVE_EMPLOYEES_SUCCESS,
    SET_EMPLOYEE,
    SET_AVATAR_URL,
    RESOLVE_EDUCATIONS,
    RESOLVE_EDUCATIONS_FAIL,
    RESOLVE_EDUCATIONS_SUCCESS,
    SET_EDUCATION,
} from './action-types';

export class ResolveEmployees implements Action {
    readonly type = RESOLVE_EMPLOYEES;
}

export class ResolveEmployeesSuccess implements Action {
    readonly type = RESOLVE_EMPLOYEES_SUCCESS;
    constructor(public payload:Employee[]) {}
}

export class ResolveEmployeesFail implements Action {
    readonly type = RESOLVE_EMPLOYEES_FAIL;
    constructor(public payload:any) {}
}

export class SetEmployee implements Action {
    readonly type = SET_EMPLOYEE;
    constructor(public payload:Employee) {}
}

export class SetAvatarUrl implements Action {
    readonly type = SET_AVATAR_URL;
    constructor(public payload:string) {}
}

export class ResolveEducations implements Action {
    readonly type = RESOLVE_EDUCATIONS;
}

export class ResolveEducationsSuccess implements Action {
    readonly type = RESOLVE_EDUCATIONS_SUCCESS;
    constructor(public payload:Education[]) {}
}

export class ResolveEducationsFail implements Action {
    readonly type = RESOLVE_EDUCATIONS_FAIL;
    constructor(public payload:any) {}
}

export class SetEducation implements Action {
    readonly type = SET_EDUCATION;
    constructor(public payload:Education) {}
}

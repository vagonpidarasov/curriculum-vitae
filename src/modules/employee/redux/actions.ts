import {Action} from 'src/modules/redux';
import {Employee, Education, Experience, Location} from '../models';
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
    RESOLVE_EXPERIENCE,
    RESOLVE_EXPERIENCE_FAIL,
    RESOLVE_EXPERIENCE_SUCCESS,
    SET_CURRENT_POSITION,
    SET_EXPERIENCE,
    SET_EXPERTISE,
    SAVE_AS_PDF,
    RESOLVE_EMPLOYEE_ADDRESS,
    RESOLVE_EMPLOYEE_ADDRESS_FAIL,
    RESOLVE_EMPLOYEE_ADDRESS_SUCCESS,
    SET_EMPLOYEE_ADDRESS,
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

export class ResolveExperience implements Action {
    readonly type = RESOLVE_EXPERIENCE;
}

export class ResolveExperienceSuccess implements Action {
    readonly type = RESOLVE_EXPERIENCE_SUCCESS;
    constructor(public payload:Experience[]) {}
}

export class ResolveExperienceFail implements Action {
    readonly type = RESOLVE_EXPERIENCE_FAIL;
    constructor(public payload:any) {}
}

export class SetExperience implements Action {
    readonly type = SET_EXPERIENCE;
    constructor(public payload:Experience[]) {}
}

export class SetCurrentPosition implements Action {
    readonly type = SET_CURRENT_POSITION;
    constructor(public payload:Experience) {}
}

export class SetExpertise implements Action {
    readonly type = SET_EXPERTISE;
    constructor(public payload:string[]) {}
}

export class SaveAsPdf implements Action {
    readonly type = SAVE_AS_PDF;
}

export class ResolveEmployeeAddress implements Action {
    static type = RESOLVE_EMPLOYEE_ADDRESS;
    readonly type = RESOLVE_EMPLOYEE_ADDRESS;
    constructor(public payload:Location) {}
}

export class ResolveEmployeeAddressSucceess implements Action {
    static type = RESOLVE_EMPLOYEE_ADDRESS_SUCCESS;
    readonly type = RESOLVE_EMPLOYEE_ADDRESS_SUCCESS;
    constructor(public payload:any) {}
}

export class SetEmployeeAddress implements Action {
    static type = SET_EMPLOYEE_ADDRESS;
    readonly type = SET_EMPLOYEE_ADDRESS;
    constructor(public payload:string) {}
}

export class ResolveEmployeeAddressFail implements Action {
    static type = RESOLVE_EMPLOYEE_ADDRESS_FAIL;
    readonly type = RESOLVE_EMPLOYEE_ADDRESS_FAIL;
    constructor(public payload:any) {}
}

import {Action} from 'src/modules/redux';
import {Employee, Location} from '../models';
import {
    RESOLVE_EMPLOYEES,
    RESOLVE_EMPLOYEES_FAIL,
    RESOLVE_EMPLOYEES_SUCCESS,
    SET_EMPLOYEE,
    SET_AVATAR_URL,
    SET_EXPERTISE,
    RESOLVE_EMPLOYEE_ADDRESS,
    RESOLVE_EMPLOYEE_ADDRESS_FAIL,
    RESOLVE_EMPLOYEE_ADDRESS_SUCCESS,
    SET_EMPLOYEE_ADDRESS,
    SET_FILENAME,
} from './action-types';

export class ResolveEmployees implements Action {
    static type = RESOLVE_EMPLOYEES;
    readonly type = RESOLVE_EMPLOYEES;
}

export class ResolveEmployeesSuccess implements Action {
    static type = RESOLVE_EMPLOYEES_SUCCESS;
    readonly type = RESOLVE_EMPLOYEES_SUCCESS;
    constructor(public payload:Employee[]) {}
}

export class ResolveEmployeesFail implements Action {
    static type = RESOLVE_EMPLOYEES_FAIL;
    readonly type = RESOLVE_EMPLOYEES_FAIL;
    constructor(public payload:any) {}
}

export class SetEmployee implements Action {
    static type = SET_EMPLOYEE;
    readonly type = SET_EMPLOYEE;
    constructor(public payload:Employee) {}
}

export class SetAvatarUrl implements Action {
    static type = SET_AVATAR_URL;
    readonly type = SET_AVATAR_URL;
    constructor(public payload:string) {}
}

export class SetExpertise implements Action {
    static type = SET_EXPERTISE;
    readonly type = SET_EXPERTISE;
    constructor(public payload:string[]) {}
}

export class ResolveEmployeeAddress implements Action {
    static type = RESOLVE_EMPLOYEE_ADDRESS;
    readonly type = RESOLVE_EMPLOYEE_ADDRESS;
    constructor(public payload:Location) {}
}

export class ResolveEmployeeAddressSuccess implements Action {
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

export class SetFilename implements Action {
    static type = SET_FILENAME;
    readonly type = SET_FILENAME;
    constructor(public payload:string) {}
}

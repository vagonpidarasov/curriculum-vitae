import {Action} from '@ngrx/store';
import {AuthenticationPayload} from '../interfaces/';

export enum AuthenticationActions {
    SIGN_IN = 'Authentication:SIGN_IN',
    SIGN_IN_SUCCESS = 'Authentication:SIGN_IN_SUCCESS',
    SIGN_IN_FAIL = 'Authentication:SIGN_IN_FAIL',
    SIGN_OUT = 'Authentication:SIGN_OUT',
    RESET = 'Authentication:RESET',
    SET_PROGRESS = 'Authentication:SET_PROGRESS',
    SET_ERROR = 'Authentication:SET_ERROR',
    AUTHENTICATION_REQUEST = 'Authentication:AUTHENTICATION_REQUEST',
    AUTHENTICATION_DISCARD = 'Authentication:AUTHENTICATION_DISCARD',
}

export class SignIn implements Action {
    readonly type = AuthenticationActions.SIGN_IN;
    constructor(public payload:AuthenticationPayload) {}
}

export class SignInSuccess implements Action {
    readonly type = AuthenticationActions.SIGN_IN_SUCCESS;
    constructor(public payload:{username:string}) {}
}

export class SignInFail implements Action {
    readonly type = AuthenticationActions.SIGN_IN_FAIL;
    constructor(public payload:any) {}
}

export class SignOut implements Action {
    readonly type = AuthenticationActions.SIGN_OUT;
}

export class Reset implements Action {
    readonly type = AuthenticationActions.RESET;
}

export class SetProgress implements Action {
    readonly type = AuthenticationActions.SET_PROGRESS;
    constructor(public payload:boolean) {}
}

export class SetError implements Action {
    readonly type = AuthenticationActions.SET_ERROR;
    constructor(public payload:string) {}
}

export class AuthenticationRequest implements Action {
    readonly type = AuthenticationActions.AUTHENTICATION_REQUEST;
}

export class AuthenticationDiscard implements Action {
    readonly type = AuthenticationActions.AUTHENTICATION_DISCARD;
}

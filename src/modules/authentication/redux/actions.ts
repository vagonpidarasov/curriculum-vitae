import {Action} from 'src/modules/redux';
import {SignInPayload, UserData} from '../types';

import {
    SIGN_IN,
    SIGN_IN_SUCCESS,
    SIGN_IN_FAIL,
    SIGN_OUT,
    SIGN_OUT_SUCCESS,
    SET_PROGRESS,
    SET_ERROR,
    AUTHENTICATION_REQUEST,
    AUTHENTICATION_DISCARD,
    SET_AUTHENTICATION_DISCARD,
    SET_AUTHENTICATION_REQUEST,
    SET_USER_DATA,
    RESET_USER_DATA,
} from './action-types';

export class SignIn implements Action {
    static type = SIGN_IN;
    readonly type = SIGN_IN;
    constructor(public payload:SignInPayload) {}
}

export class SignInSuccess implements Action {
    static type = SIGN_IN_SUCCESS;
    readonly type = SIGN_IN_SUCCESS;
    constructor(public payload:UserData) {}
}

export class SignInFail implements Action {
    static type = SIGN_IN_FAIL;
    readonly type = SIGN_IN_FAIL;
    constructor(public payload:string) {}
}

export class SetUserData implements Action {
    static type = SET_USER_DATA;
    readonly type = SET_USER_DATA;
    constructor(public payload:UserData) {}
}

export class ResetUserData implements Action {
    static type = RESET_USER_DATA;
    readonly type = RESET_USER_DATA;
}

export class SignOut implements Action {
    static type = SIGN_OUT;
    readonly type = SIGN_OUT;
}

export class SignOutSuccess implements Action {
    static type = SIGN_OUT_SUCCESS;
    readonly type = SIGN_OUT_SUCCESS;
}

export class SetProgress implements Action {
    static type = SET_PROGRESS;
    readonly type = SET_PROGRESS;
    constructor(public payload:boolean) {}
}

export class SetError implements Action {
    static type = SET_ERROR;
    readonly type = SET_ERROR;
    constructor(public payload:string) {}
}

export class AuthenticationRequest implements Action {
    static type = AUTHENTICATION_REQUEST;
    readonly type = AUTHENTICATION_REQUEST;
}

export class SetAuthenticationRequest implements Action {
    static type = SET_AUTHENTICATION_REQUEST;
    readonly type = SET_AUTHENTICATION_REQUEST;
    constructor(public payload:Action) {}
}

export class AuthenticationDiscard implements Action {
    static type = AUTHENTICATION_DISCARD;
    readonly type = AUTHENTICATION_DISCARD;
}

export class SetAuthenticationDiscard implements Action {
    static type = SET_AUTHENTICATION_DISCARD;
    readonly type = SET_AUTHENTICATION_DISCARD;
    constructor(public payload:Action) {}
}

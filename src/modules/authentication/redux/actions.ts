import {Action, ActionWithPayload} from 'src/modules/redux-helpers';
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
    SET_USER_DATA,
    RESET_USER_DATA,
} from './action-types';

export class SignIn implements ActionWithPayload {
    readonly type = SIGN_IN;
    constructor(public payload:SignInPayload) {}
}

export class SignInSuccess implements ActionWithPayload {
    readonly type = SIGN_IN_SUCCESS;
    constructor(public payload:UserData) {}
}

export class SignInFail implements ActionWithPayload {
    readonly type = SIGN_IN_FAIL;
    constructor(public payload:string) {}
}

export class SetUserData implements ActionWithPayload {
    readonly type = SET_USER_DATA;
    constructor(public payload:UserData) {}
}

export class ResetUserData implements Action {
    readonly type = RESET_USER_DATA;
}

export class SignOut implements Action {
    readonly type = SIGN_OUT;
}

export class SignOutSuccess implements Action {
    readonly type = SIGN_OUT_SUCCESS;
}

export class SetProgress implements ActionWithPayload {
    readonly type = SET_PROGRESS;
    constructor(public payload:boolean) {}
}

export class SetError implements ActionWithPayload {
    readonly type = SET_ERROR;
    constructor(public payload:string) {}
}

export class AuthenticationRequest implements ActionWithPayload {
    readonly type = AUTHENTICATION_REQUEST;
    constructor(public payload:Action) {}
}

export class AuthenticationDiscard implements Action {
    readonly type = AUTHENTICATION_DISCARD;
}

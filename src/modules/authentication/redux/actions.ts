import {Action, ActionWithPayload} from 'src/modules/redux-helpers';
import {AuthenticationPayload} from '../types';

import {
    SIGN_IN,
    SIGN_IN_SUCCESS,
    SIGN_IN_FAIL,
    SIGN_OUT,
    RESET,
    SET_PROGRESS,
    SET_ERROR,
    AUTHENTICATION_REQUEST,
    AUTHENTICATION_DISCARD,
} from './action-types';

export class SignIn implements ActionWithPayload {
    readonly type = SIGN_IN;
    constructor(public payload:AuthenticationPayload) {}
}

export class SignInSuccess implements ActionWithPayload {
    readonly type = SIGN_IN_SUCCESS;
    constructor(public payload:{username:string}) {}
}

export class SignInFail implements ActionWithPayload {
    readonly type = SIGN_IN_FAIL;
    constructor(public payload:any) {}
}

export class SignOut implements Action {
    readonly type = SIGN_OUT;
}

export class Reset implements Action {
    readonly type = RESET;
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

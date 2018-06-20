import {Action} from '@ngrx/store';
import {SignInPayload} from '../sign-in-payload.interface';

export enum AuthenticationActions {
    SIGN_IN = 'Authentication:SIGN_IN',
    SIGN_IN_SUCCESS = 'Authentication:SIGN_IN_SUCCESS',
    SIGN_OUT = 'Authentication:SIGN_OUT',
    RESET = 'Authentication:RESET',
}

export class SignIn implements Action {
    readonly type = AuthenticationActions.SIGN_IN;
    constructor(public payload:SignInPayload) {}
}

export class SignInSuccess implements Action {
    readonly type = AuthenticationActions.SIGN_IN_SUCCESS;
    constructor(public payload:{username:string}) {}
}

export class SignOut implements Action {
    readonly type = AuthenticationActions.SIGN_OUT;
}

export class Reset implements Action {
    readonly type = AuthenticationActions.RESET;
}

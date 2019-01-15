import {SignInError} from './types';

export function toAuthErrorCode(error:SignInError = {code: null, message: null}):string {
    return error.code || null;
}

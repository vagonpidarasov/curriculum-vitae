import {auth} from 'firebase/app';

export function firebaseAuthError(
    error:auth.Error = {code: null, message: null},
    fallback:string = 'Unknown Error',
):string {
    // return error.message || error.code || fallback;
    return error.code || error.message || fallback;
}

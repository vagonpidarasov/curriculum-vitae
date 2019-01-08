import {auth} from 'firebase/app';
import {AuthenticationResponse} from 'src/modules/authentication';

export function normalizeAuthResponse(response:auth.UserCredential):AuthenticationResponse {
    return {
        username: response.additionalUserInfo.username,
        displayName: response.user.displayName,
        email: response.user.email,
    };
}

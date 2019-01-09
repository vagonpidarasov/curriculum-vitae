import {AuthenticationSignInResponse} from 'src/modules/authentication';
import {FirebaseSignInResponse} from 'src/modules/firebase';

export function toAuthenticationResponse(response:FirebaseSignInResponse):AuthenticationSignInResponse {
    return {
        username: response.additionalUserInfo.username,
        displayName: response.user.displayName,
        email: response.user.email,
    };
}

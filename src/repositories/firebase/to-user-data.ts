import {UserData} from 'src/modules/authentication';
import {SignInResponse} from 'src/modules/firebase';

export function toUserData(response:SignInResponse):UserData {
    return Object.assign(new UserData(), {
        username: response.additionalUserInfo.username,
        displayName: response.user.displayName,
        email: response.user.email,
    });
}

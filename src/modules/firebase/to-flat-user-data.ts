import {SignInResponse} from './types';

export function toFlatUserData(response:SignInResponse):any {
    return {
        isNewUser: response.additionalUserInfo.isNewUser,
        username: response.additionalUserInfo.username,
        email: response.user.email,
        phoneNumber: response.user.phoneNumber,
        refreshToken: response.user.refreshToken,
        isAnonymous: response.user.isAnonymous,
        displayName: response.user.displayName,
        uid: response.user.uid,
    };
}

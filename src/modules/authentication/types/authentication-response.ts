export interface AuthenticationSignInResponse {
    username:string;
    uid?:string;
    displayName?:string;
    email?:string;
    isAnonymous?:boolean;
    phoneNumber?:string;
    refreshToken?:string;
}

export type AuthenticationSignOutResponse  = void;

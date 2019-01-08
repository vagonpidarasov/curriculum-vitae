export interface AuthenticationResponse {
    username:string;
    uid?:string;
    displayName?:string;
    email?:string;
    isAnonymous?:boolean;
    phoneNumber?:string;
    refreshToken?:string;
}

export class AuthenticationState {
    isAuthenticated:boolean = false;
    username:string = null;
    isInProgress:boolean = false;
    error:string = null;
    authenticationRequest:number = 0;
}

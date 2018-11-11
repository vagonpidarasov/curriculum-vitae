import {Action} from '@ngrx/store';
export class AuthenticationState {
    isAuthenticated:boolean = false;
    username:string = null;
    isInProgress:boolean = false;
    error:string = null;
    authenticationRequest:Action|null = null;
}

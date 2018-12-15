import {Action} from 'src/modules/redux-helpers';

export class AuthenticationState {
    isAuthenticated:boolean = false;
    username:string = null;
    isInProgress:boolean = false;
    error:string = null;
    authenticationRequest:Action|null = null;
}

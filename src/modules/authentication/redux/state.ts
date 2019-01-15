import {Action} from 'src/modules/redux-helpers';
import {UserData} from '../types';

export class AuthenticationState {
    isAuthenticated:boolean = false;
    userData:UserData|null = null;
    isInProgress:boolean = false;
    error:string = null;
    authenticationRequest:Action|null = null;
}

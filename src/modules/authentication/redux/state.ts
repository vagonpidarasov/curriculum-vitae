import {Action} from 'src/modules/redux';
import {UserData} from '../types';

export class AuthenticationState {
    isAuthenticated:boolean = false;
    userData:UserData|null = null;
    isInProgress:boolean = false;
    error:string = null;
    authenticationRequest:Action|null = null;
    authenticationDiscard:Action|null = null;
}

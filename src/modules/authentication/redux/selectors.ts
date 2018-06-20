import {AppState} from './app-state';
import {AuthenticationStateName} from './feature-state-name';

export function isAuthenticated(state:AppState):boolean {
    return state[AuthenticationStateName].isAuthenticated;
}

export function username(state:AppState):string {
    return state[AuthenticationStateName].username;
}

import {AuthenticationState} from './feature-state';
import {AuthenticationStateName} from './feature-state-name';

export interface AppState {
    [AuthenticationStateName]:AuthenticationState;
}

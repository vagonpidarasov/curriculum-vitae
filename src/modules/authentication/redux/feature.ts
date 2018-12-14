import {AuthenticationState} from './state';

export const FeatureStateName = 'authentication';
export interface FeatureState {
    [FeatureStateName]:AuthenticationState;
}

export function getFeatureState(state:FeatureState):AuthenticationState {
    return state[FeatureStateName];
}

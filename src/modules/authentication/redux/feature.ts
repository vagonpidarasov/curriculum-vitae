import {AuthenticationState} from './state';

export const FeatureStateName = 'authentication';
export interface FeatureState {
    [FeatureStateName]:AuthenticationState;
}

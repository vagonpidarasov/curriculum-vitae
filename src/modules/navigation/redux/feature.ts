import {NavigationState} from './state';

export const FeatureStateName = 'navigation';
export interface FeatureState {
    [FeatureStateName]:NavigationState;
}

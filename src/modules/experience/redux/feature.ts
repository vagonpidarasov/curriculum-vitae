import {ExperienceState} from './state';

export const FeatureStateName = 'employee';
export interface FeatureState {
    [FeatureStateName]:ExperienceState;
}

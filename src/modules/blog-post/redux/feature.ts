import {BlogPostState} from './state';

export const FeatureStateName = 'blogpost';
export interface FeatureState {
    [FeatureStateName]:BlogPostState;
}

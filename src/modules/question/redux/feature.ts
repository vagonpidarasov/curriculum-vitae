import {QuestionState} from './state';

export const FeatureStateName = 'question';
export interface FeatureState {
    [FeatureStateName]:QuestionState;
}

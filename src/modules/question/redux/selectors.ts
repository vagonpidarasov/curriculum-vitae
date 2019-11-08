import {FeatureState, FeatureStateName} from './feature';
import {QuestionState} from './state';
import {InterviewQuestion} from '../question.type';

export function getState(state:FeatureState):QuestionState {
    return state[FeatureStateName];
}

export function questions(state:FeatureState):InterviewQuestion[] {
    return getState(state).questions;
}

export function totalLength(state:FeatureState):number {
    return getState(state).totalLength;
}

export function pageIndex(state:FeatureState):number {
    return getState(state).pageIndex;
}

export function pageSize(state:FeatureState):number {
    return getState(state).pageSize;
}

export function inProgress(state:FeatureState):boolean {
    return getState(state).inProgress;
}

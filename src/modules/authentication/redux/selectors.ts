import {FeatureState, FeatureStateName} from './feature';

export function isAuthenticated(state:FeatureState):boolean {
    return state[FeatureStateName].isAuthenticated;
}

export function username(state:FeatureState):string {
    return state[FeatureStateName].username;
}

export function error(state:FeatureState):string {
    return state[FeatureStateName].error;
}

export function isInProgress(state:FeatureState):boolean {
    return state[FeatureStateName].isInProgress;
}

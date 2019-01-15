import {getFeatureState, FeatureState} from './feature';
import {UserData} from '../types';

export function isAuthenticated(state:FeatureState):boolean {
    return getFeatureState(state).isAuthenticated;
}

export function userData(state:FeatureState):UserData|null {
    return getFeatureState(state).userData;
}

export function error(state:FeatureState):string {
    return getFeatureState(state).error;
}

export function isInProgress(state:FeatureState):boolean {
    return getFeatureState(state).isInProgress;
}

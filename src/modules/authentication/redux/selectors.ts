import {getFeatureState, FeatureState} from './feature';

export function isAuthenticated(state:FeatureState):boolean {
    return getFeatureState(state).isAuthenticated;
}

// export function username(state:FeatureState):string {
//     return getFeatureState(state).username;
// }

export function error(state:FeatureState):string {
    return getFeatureState(state).error;
}

export function isInProgress(state:FeatureState):boolean {
    return getFeatureState(state).isInProgress;
}

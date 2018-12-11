import {FeatureState, FeatureStateName} from './feature';
import {GeolocationState} from './state';

export function getState(state:FeatureState):GeolocationState {
    return <GeolocationState>state[FeatureStateName];
}

export function position(state:FeatureState):Position {
    return getState(state).position;
}

export function error(state:FeatureState):PositionError {
    return getState(state).error;
}

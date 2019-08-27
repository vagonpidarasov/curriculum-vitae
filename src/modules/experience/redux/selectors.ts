import {FeatureState, FeatureStateName} from './feature';
import {ExperienceState} from './state';
import {Experience} from '../experience.model';

export function getState(state:FeatureState):ExperienceState {
    return <ExperienceState>state[FeatureStateName];
}

export function experience(state:FeatureState):Experience[] {
    return getState(state).experience;
}

export function currentPosition(state:FeatureState):Experience {
    return getState(state).currentPosition;
}

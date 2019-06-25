import {FeatureState, FeatureStateName} from './feature';
import {EducationState} from './state';
import {Education} from '../education.model';

export function getState(state:FeatureState):EducationState {
    return <EducationState>state[FeatureStateName];
}

export function education(state:FeatureState):Education {
    return getState(state).education;
}

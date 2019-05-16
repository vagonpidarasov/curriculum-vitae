import {FeatureState, FeatureStateName} from './feature';
import {EmployeeState} from './state';
import {Employee, Education, Experience} from '../models';

export function getState(state:FeatureState):EmployeeState {
    return <EmployeeState>state[FeatureStateName];
}

export function employee(state:FeatureState):Employee {
    return getState(state).employee;
}

export function education(state:FeatureState):Education {
    return getState(state).education;
}

export function experience(state:FeatureState):Experience[] {
    return getState(state).experience;
}

export function currentPosition(state:FeatureState):Experience {
    return getState(state).currentPosition;
}

export function avatarUrl(state:FeatureState):string {
    return getState(state).avatarUrl;
}

export function expertise(state:FeatureState):string[] {
    return getState(state).expertise;
}

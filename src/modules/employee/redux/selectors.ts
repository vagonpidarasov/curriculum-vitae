import {FeatureState, FeatureStateName} from './feature';
import {EmployeeState} from './state';
import {Employee} from '../models';

export function getState(state:FeatureState):EmployeeState {
    return <EmployeeState>state[FeatureStateName];
}

export function employee(state:FeatureState):Employee {
    return getState(state).employee;
}

export function avatarUrl(state:FeatureState):string {
    return getState(state).avatarUrl;
}

export function expertise(state:FeatureState):string[] {
    return getState(state).expertise;
}

export function address(state:FeatureState):string {
    return getState(state).address;
}

export function filename(state:FeatureState):string {
    return getState(state).filename;
}

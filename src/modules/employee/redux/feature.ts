import {EmployeeState} from './state';

export const FeatureStateName = 'employee';
export interface FeatureState {
    [FeatureStateName]:EmployeeState;
}

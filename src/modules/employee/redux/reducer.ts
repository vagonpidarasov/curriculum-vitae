import {Action, ReducerType, reduce} from 'src/modules/redux';
import {EmployeeState} from './state';
import {setEmployee, setAvatarUrl, setEducation} from './reducers';
import {SET_EMPLOYEE, SET_AVATAR_URL, SET_EDUCATION} from './action-types';

export const actionReducerMap = new Map<string, ReducerType<EmployeeState>>([
    [SET_EMPLOYEE, setEmployee],
    [SET_AVATAR_URL, setAvatarUrl],
    [SET_EDUCATION, setEducation],
]);

export function reducer(state:EmployeeState, action:Action):EmployeeState {
    return reduce<EmployeeState>(
        () => new EmployeeState(),
        actionReducerMap,
        state,
        action,
    );
}

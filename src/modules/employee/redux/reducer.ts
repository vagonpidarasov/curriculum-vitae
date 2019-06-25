import {Action, ReducerType, reduce} from 'src/modules/redux';
import {EmployeeState} from './state';
import {
    setEmployee,
    setAvatarUrl,
    setExperience,
    setCurrentPosition,
    setExpertise,
    setAddress,
    setFilename,
} from './reducers';
import {
    SET_EMPLOYEE,
    SET_AVATAR_URL,
    SET_CURRENT_POSITION,
    SET_EXPERIENCE,
    SET_EXPERTISE,
    SET_EMPLOYEE_ADDRESS,
    SET_FILENAME,
} from './action-types';

export const actionReducerMap = new Map<string, ReducerType<EmployeeState>>([
    [SET_EMPLOYEE, setEmployee],
    [SET_AVATAR_URL, setAvatarUrl],
    [SET_CURRENT_POSITION, setCurrentPosition],
    [SET_EXPERIENCE, setExperience],
    [SET_EXPERTISE, setExpertise],
    [SET_EMPLOYEE_ADDRESS, setAddress],
    [SET_FILENAME, setFilename],
]);

export function reducer(state:EmployeeState, action:Action):EmployeeState {
    return reduce<EmployeeState>(
        () => new EmployeeState(),
        actionReducerMap,
        state,
        action,
    );
}

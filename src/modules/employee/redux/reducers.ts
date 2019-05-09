import {EmployeeState} from './state';
import {SetEmployee, SetAvatarUrl} from './actions';
import {Employee, Education} from '../models';

export function setEmployee(state:EmployeeState, action:SetEmployee) {
    state.employee = Object.assign(new Employee(), {
        name: action.payload.name,
        title: action.payload.title,
        dateOfBirth: action.payload.dateOfBirth,
        age: 30,
    });
    return state;
}

export function setEducation(state:EmployeeState, action:SetEmployee) {
    state.education = Object.assign(new Education(), action.payload);
    return state;
}

export function setAvatarUrl(state:EmployeeState, action:SetAvatarUrl) {
    state.avatarUrl = action.payload;
    return state;
}

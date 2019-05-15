import {EmployeeState} from './state';
import {SetEmployee, SetAvatarUrl, SetExperience, SetCurrentPosition, SetEducation} from './actions';
import {Employee, Education, Experience} from '../models';

export function setEmployee(state:EmployeeState, action:SetEmployee) {
    state.employee = Object.assign(new Employee(), {...action.payload}, {
        age: new Date().getFullYear() - new Date(action.payload.dateOfBirth).getFullYear(),
        // TODO extract expertise array into separate state
        expertiseArray: action.payload.expertise.split(',').map(e => e.trim()).filter(e => !!e),
    });
    return state;
}

export function setEducation(state:EmployeeState, action:SetEducation) {
    state.education = Object.assign(new Education(), action.payload);
    return state;
}

export function setAvatarUrl(state:EmployeeState, action:SetAvatarUrl) {
    state.avatarUrl = action.payload;
    return state;
}

export function setExperience(state:EmployeeState, action:SetExperience) {
    state.experience = [...action.payload];
    return state;
}

export function setCurrentPosition(state:EmployeeState, action:SetCurrentPosition) {
    state.currentPosition = Object.assign(new Experience(), action.payload);
    return state;
}

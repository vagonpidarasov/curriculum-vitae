import {EmployeeState} from './state';
import {SetEmployee, SetAvatarUrl, SetExperience, SetCurrentPosition, SetEducation} from './actions';
import {Employee, Education, Experience} from '../models';

export function setEmployee(state:EmployeeState, action:SetEmployee) {
    state.employee = Object.assign(new Employee(), {
        name: action.payload.name,
        title: action.payload.title,
        dateOfBirth: action.payload.dateOfBirth,
        overview: action.payload.overview,
        age: 30,
        expertiseArray: action.payload.expertise.split(','),
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

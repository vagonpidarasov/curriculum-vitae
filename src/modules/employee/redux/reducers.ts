import {EmployeeState} from './state';
import {
    SetEmployee,
    SetAvatarUrl,
    SetExpertise,
    SetEmployeeAddress,
    SetFilename,
    SetBackgroundUrl,
} from './actions';
import {Employee} from '../employee.model';

export function setEmployee(state:EmployeeState, action:SetEmployee) {
    state.employee = Object.assign(new Employee(), {...action.payload}, {
        age: new Date().getFullYear() - new Date(action.payload.dateOfBirth).getFullYear(),
    });
    return state;
}

export function setAvatarUrl(state:EmployeeState, action:SetAvatarUrl) {
    state.avatarUrl = action.payload;
    return state;
}

export function setBackgroundUrl(state:EmployeeState, action:SetBackgroundUrl) {
    state.backgroundUrl = action.payload;
    return state;
}

export function setExpertise(state:EmployeeState, action:SetExpertise) {
    state.expertise = [...action.payload];
    return state;
}

export function setAddress(state:EmployeeState, action:SetEmployeeAddress) {
    state.address = action.payload;
    return state;
}

export function setFilename(state:EmployeeState, action:SetFilename) {
    state.filename = action.payload;
    return state;
}

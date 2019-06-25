import {EducationState} from './state';
import {SetEducation} from './actions';
import {Education} from '../education.model';

export function setEducation(state:EducationState, action:SetEducation) {
    state.education = Object.assign(new Education(), action.payload);
    return state;
}

import {ExperienceState} from './state';
import {SetExperience, SetCurrentPosition} from './actions';
import {Experience} from '../experience.model';

export function setExperience(state:ExperienceState, action:SetExperience) {
    state.experience = [...action.payload];
    return state;
}

export function setCurrentPosition(state:ExperienceState, action:SetCurrentPosition) {
    state.currentPosition = Object.assign(new Experience(), action.payload);
    return state;
}

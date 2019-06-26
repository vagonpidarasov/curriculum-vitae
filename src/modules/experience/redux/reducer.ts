import {Action, ReducerType, reduce} from 'src/modules/redux';
import {ExperienceState} from './state';
import {setExperience, setCurrentPosition} from './reducers';
import {
    SET_CURRENT_POSITION,
    SET_EXPERIENCE,
} from './action-types';

export const actionReducerMap = new Map<string, ReducerType<ExperienceState>>([
    [SET_CURRENT_POSITION, setCurrentPosition],
    [SET_EXPERIENCE, setExperience],
]);

export function reducer(state:ExperienceState, action:Action):ExperienceState {
    return reduce<ExperienceState>(
        () => new ExperienceState(),
        actionReducerMap,
        state,
        action,
    );
}

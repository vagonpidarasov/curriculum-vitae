import {Action, ReducerType, reduce} from 'yet-another-redux-helpers';
import {EducationState} from './state';
import {setEducation} from './reducers';
import {SET_EDUCATION} from './action-types';

export const actionReducerMap = new Map<string, ReducerType<EducationState>>([
    [SET_EDUCATION, setEducation],
]);

export function reducer(state:EducationState, action:Action):EducationState {
    return reduce<EducationState>(
        () => new EducationState(),
        actionReducerMap,
        state,
        action,
    );
}

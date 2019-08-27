import {Action, ReducerType, reduce} from 'yet-another-redux-helpers';
import {QuestionState} from './state';
import {
    setProgress,
    resetProgress,
    setQuestions,
    setTotalLength,
    setPageIndex,
    setSearchQuery,
} from './reducers';
import {
    SET_IN_PROGRESS,
    RESET_IN_PROGRESS,
    SET_INTERVIEW_QUESTIONS,
    SET_INTERVIEW_QUESTIONS_TOTAL_LENGTH,
    SET_PAGE_INDEX,
    SET_SEARCH_QUERY,
} from './action-types';

export const actionReducerMap = new Map<string, ReducerType<QuestionState>>([
    [SET_INTERVIEW_QUESTIONS, setQuestions],
    [SET_IN_PROGRESS, setProgress],
    [RESET_IN_PROGRESS, resetProgress],
    [SET_INTERVIEW_QUESTIONS_TOTAL_LENGTH, setTotalLength],
    [SET_PAGE_INDEX, setPageIndex],
    [SET_SEARCH_QUERY, setSearchQuery],
]);

export function reducer(state:QuestionState, action:Action):QuestionState {
    return reduce<QuestionState>(
        () => new QuestionState(),
        actionReducerMap,
        state,
        action,
    );
}

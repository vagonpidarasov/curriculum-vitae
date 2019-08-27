import {InterviewQuestion} from '../question.type';
import {QuestionState} from './state';
import {
    SetQuestions,
    SetProgress,
    ResetProgress,
    SetQuestionsTotalLength,
    SetPageIndex,
    SetSearchQuery,
} from './actions';

export function setQuestions(state:QuestionState, action:SetQuestions) {
    state.questions = action.payload.map((question:InterviewQuestion) => ({
        ...question,
        keywordsArray: question.keywords ? question.keywords.split(',').map(k => k.trim()).filter(k => !!k) : [],
    }));
    return state;
}

export function setProgress(state:QuestionState, action:SetProgress) {
    state.inProgress = true;
    return state;
}

export function resetProgress(state:QuestionState, action:ResetProgress) {
    state.inProgress = false;
    return state;
}

export function setTotalLength(state:QuestionState, action:SetQuestionsTotalLength) {
    state.totalLength = action.payload;
    return state;
}

export function setPageIndex(state:QuestionState, action:SetPageIndex) {
    state.pageIndex = action.payload;
    return state;
}

export function setSearchQuery(state:QuestionState, action:SetSearchQuery) {
    state.searchQuery = action.payload;
    return state;
}

import {Action} from 'yet-another-redux-helpers';
import {InterviewQuestion} from '../question.type';
import {
    RESOLVE_INTERVIEW_QUESTIONS,
    RESOLVE_INTERVIEW_QUESTIONS_FAIL,
    RESOLVE_INTERVIEW_QUESTIONS_SUCCESS,
    SET_INTERVIEW_QUESTIONS,
    SET_IN_PROGRESS,
    RESET_IN_PROGRESS,
    SET_INTERVIEW_QUESTIONS_TOTAL_LENGTH,
    SET_PAGE_INDEX,
    SET_SEARCH_QUERY,
} from './action-types';

export class ResolveQuestions implements Action {
    static type = RESOLVE_INTERVIEW_QUESTIONS;
    readonly type = RESOLVE_INTERVIEW_QUESTIONS;
    constructor(public payload:any) {}
}

export class ResolveQuestionsFail implements Action {
    static type = RESOLVE_INTERVIEW_QUESTIONS_FAIL;
    readonly type = RESOLVE_INTERVIEW_QUESTIONS_FAIL;
    constructor(public payload:any) {}
}

export class ResolveQuestionsSuccess implements Action {
    static type = RESOLVE_INTERVIEW_QUESTIONS_SUCCESS;
    readonly type = RESOLVE_INTERVIEW_QUESTIONS_SUCCESS;
    constructor(public payload:InterviewQuestion[]) {}
}

export class SetQuestions implements Action {
    static type = SET_INTERVIEW_QUESTIONS;
    readonly type = SET_INTERVIEW_QUESTIONS;
    constructor(public payload:InterviewQuestion[]) {}
}

export class SetQuestionsTotalLength implements Action {
    static type = SET_INTERVIEW_QUESTIONS_TOTAL_LENGTH;
    readonly type = SET_INTERVIEW_QUESTIONS_TOTAL_LENGTH;
    constructor(public payload:number) {}
}

export class SetProgress implements Action {
    static type = SET_IN_PROGRESS;
    readonly type = SET_IN_PROGRESS;
}

export class ResetProgress implements Action {
    static type = RESET_IN_PROGRESS;
    readonly type = RESET_IN_PROGRESS;
}

export class SetPageIndex implements Action {
    static type = SET_PAGE_INDEX;
    readonly type = SET_PAGE_INDEX;
    constructor(public payload:number) {}
}

export class SetSearchQuery implements Action {
    static type = SET_SEARCH_QUERY;
    readonly type = SET_SEARCH_QUERY;
    constructor(public payload:string) {}
}

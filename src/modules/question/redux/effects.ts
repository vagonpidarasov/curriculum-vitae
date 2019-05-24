import {Injectable} from '@angular/core';
import {Actions, Effect, ofType} from '@ngrx/effects';
import {Store} from '@ngrx/store';
import {Observable, of} from 'rxjs';
import {catchError, map, switchMap, withLatestFrom, filter} from 'rxjs/operators';

import {Action, toPayload} from 'src/modules/redux';

import {InterviewQuestion} from '../question.type';
import {InterviewQuestionRepository} from '../question.repository';
import {FeatureState as QuestionFeatureState} from './feature';
import {
    ResolveQuestionsFail,
    ResolveQuestionsSuccess,
    SetQuestions,
    SetProgress,
    ResetProgress,
    SetQuestionsTotalLength,
    SetPageIndex,
    ResolveQuestions,
} from './actions';
import {
    RESOLVE_INTERVIEW_QUESTIONS,
    RESOLVE_INTERVIEW_QUESTIONS_SUCCESS,
    RESOLVE_INTERVIEW_QUESTIONS_FAIL,
    SET_PAGE_INDEX,
    SET_SEARCH_QUERY,
} from './action-types';

@Injectable()
export class InterviewQuestionsEffects {
    private getQuestionEntries(payload:{skip:number, limit:number, query:string}):Observable<Action> {
        return this.interviewQuestionRepository.getQuestions(payload.query, payload.limit, payload.skip).pipe(
            map((response:InterviewQuestion[]) => new ResolveQuestionsSuccess(response)),
            catchError((e:PositionError) => of(new ResolveQuestionsFail(e))),
        );
    }

    constructor(
        private actions$:Actions,
        private store:Store<QuestionFeatureState>,
        private interviewQuestionRepository:InterviewQuestionRepository,
    ) {}

    /**
     * sets progress
     */
    @Effect() SetProgressEffect$:Observable<Action> = this.actions$.pipe(
        ofType(RESOLVE_INTERVIEW_QUESTIONS),
        map(() => new SetProgress()),
    );

    /**
     * resets progress
     */
    @Effect() ResetProgressEffect$:Observable<Action> = this.actions$.pipe(
        ofType(ResolveQuestionsSuccess.type, RESOLVE_INTERVIEW_QUESTIONS_FAIL),
        map(() => new ResetProgress()),
    );

    /**
     * reset page upon search query update
     */
    @Effect() ResetPageIndexEffect$:Observable<Action> = this.actions$.pipe(
        ofType(SET_SEARCH_QUERY),
        map(() => new SetPageIndex(0)),
    );

    /**
     * issues ResolveQuestions upon page index update
     */
    @Effect() SetPageIndexEffect$:Observable<Action> = this.actions$.pipe(
        ofType(SET_PAGE_INDEX),
        withLatestFrom(this.store, (a:Action, s:QuestionFeatureState) => ({
            skip: s.question.pageIndex * s.question.pageSize,
            limit: s.question.pageSize,
            query: s.question.searchQuery,
        })),
        map((payload:any) => new ResolveQuestions(payload)),
    );

    @Effect() ResolveQuestionsEffect$:Observable<Action> = this.actions$.pipe(
        ofType(RESOLVE_INTERVIEW_QUESTIONS),
        map(toPayload),
        switchMap((payload:any) => this.getQuestionEntries(payload)),
    );

    @Effect() SetQuestionsEffect$:Observable<Action> = this.actions$.pipe(
        ofType(RESOLVE_INTERVIEW_QUESTIONS_SUCCESS),
        map(toPayload),
        filter((payload:InterviewQuestion[]|any) => payload.total >= 0),
        map((payload:InterviewQuestion[]|any) => new SetQuestionsTotalLength(payload.total)),
    );

    @Effect() SetTotalLengthEffect$:Observable<Action> = this.actions$.pipe(
        ofType(RESOLVE_INTERVIEW_QUESTIONS_SUCCESS),
        map(toPayload),
        filter((payload:InterviewQuestion[]|any) => Array.isArray(payload)),
        map((payload:InterviewQuestion[]) => new SetQuestions(payload)),
    );
}

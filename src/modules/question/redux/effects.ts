import {Injectable} from '@angular/core';
import {Actions, Effect, ofType} from '@ngrx/effects';
import {Store} from '@ngrx/store';
import {Observable, of} from 'rxjs';
import {catchError, map, switchMap, withLatestFrom, filter} from 'rxjs/operators';
import {toPayload} from 'src/modules/redux';
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
    SetSearchQuery,
    ResolveQuestions,
} from './actions';

export type GetQuestionEntriesType = ResolveQuestionsFail|ResolveQuestionsSuccess;

@Injectable()
export class InterviewQuestionsEffects {
    private getQuestionEntries(payload:{skip:number, limit:number, query:string}):Observable<GetQuestionEntriesType> {
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
    @Effect() SetProgressEffect$:Observable<SetProgress> = this.actions$.pipe(
        ofType(ResolveQuestions.type),
        map(() => new SetProgress()),
    );

    /**
     * resets progress
     */
    @Effect() ResetProgressEffect$:Observable<ResetProgress> = this.actions$.pipe(
        ofType(ResolveQuestionsSuccess.type, ResolveQuestionsFail.type),
        map(() => new ResetProgress()),
    );

    /**
     * reset page upon search query update
     */
    @Effect() ResetPageIndexEffect$:Observable<SetPageIndex> = this.actions$.pipe(
        ofType(SetSearchQuery.type),
        map(() => new SetPageIndex(0)),
    );

    /**
     * issues ResolveQuestions upon page index update
     */
    @Effect() SetPageIndexEffect$:Observable<ResolveQuestions> = this.actions$.pipe(
        ofType(SetPageIndex.type),
        withLatestFrom(this.store, (a:any, s:QuestionFeatureState) => ({
            skip: s.question.pageIndex * s.question.pageSize,
            limit: s.question.pageSize,
            query: s.question.searchQuery,
        })),
        map((payload:any) => new ResolveQuestions(payload)),
    );

    @Effect() ResolveQuestionsEffect$:Observable<GetQuestionEntriesType> = this.actions$.pipe(
        ofType(ResolveQuestions.type),
        map(toPayload),
        switchMap((payload:any) => this.getQuestionEntries(payload)),
    );

    @Effect() SetQuestionsEffect$:Observable<SetQuestionsTotalLength> = this.actions$.pipe(
        ofType(ResolveQuestionsSuccess.type),
        map(toPayload),
        filter((payload:InterviewQuestion[]|any) => payload.total >= 0),
        map((payload:{total:number}) => new SetQuestionsTotalLength(payload.total)),
    );

    @Effect() SetTotalLengthEffect$:Observable<SetQuestions> = this.actions$.pipe(
        ofType(ResolveQuestionsSuccess.type),
        map(toPayload),
        filter((payload:InterviewQuestion[]|any) => Array.isArray(payload)),
        map((payload:InterviewQuestion[]) => new SetQuestions(payload)),
    );
}

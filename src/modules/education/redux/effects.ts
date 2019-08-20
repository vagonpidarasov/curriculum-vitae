import {Injectable} from '@angular/core';
import {INIT} from '@ngrx/store';
import {Actions, Effect, ofType} from '@ngrx/effects';
import {Observable, of} from 'rxjs';
import {catchError, map, switchMap} from 'rxjs/operators';
import {toPayload} from 'src/modules/redux';
import {Education} from '../education.model';
import {EducationRepository} from '../education.repository';
import {ResolveEducations, ResolveEducationsFail, ResolveEducationsSuccess, SetEducation} from './actions';

export type GetEducationEntriesType = ResolveEducationsFail|ResolveEducationsSuccess;

@Injectable()
export class EducationEffects {
    private getEducationEntries():Observable<GetEducationEntriesType> {
        return this.educationRepository.getEducationEntries().pipe(
            map((response:any[]) => new ResolveEducationsSuccess(response)),
            catchError((e:PositionError) => of(new ResolveEducationsFail(e))),
        );
    }

    constructor(
        private actions$:Actions,
        private educationRepository:EducationRepository,
    ) {}

    @Effect() InitEffect$:Observable<ResolveEducations> = this.actions$.pipe(
        ofType(INIT),
        map(() => new ResolveEducations()),
    );

    @Effect() ResolveEducationEffect$:Observable<GetEducationEntriesType> = this.actions$.pipe(
        ofType(ResolveEducations.type),
        switchMap(() => this.getEducationEntries()),
    );

    @Effect() ResolveEducationSuccessEffect$:Observable<SetEducation> = this.actions$.pipe(
        ofType(ResolveEducationsSuccess.type),
        map(toPayload),
        map((payload:Education[]) => payload[0]),
        map((payload:Education) => new SetEducation(payload)),
    );
}

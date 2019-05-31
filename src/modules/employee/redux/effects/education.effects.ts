import {Injectable} from '@angular/core';
import {INIT} from '@ngrx/store';
import {Actions, Effect, ofType} from '@ngrx/effects';
import {Observable, of} from 'rxjs';
import {catchError, map, switchMap} from 'rxjs/operators';

import {Action, toPayload} from 'src/modules/redux';

import {Education} from '../../models';
import {EmployeeRepository} from '../../employee.repository';
import {ResolveEducations, ResolveEducationsFail, ResolveEducationsSuccess, SetEducation} from '../actions';
import {RESOLVE_EDUCATIONS, RESOLVE_EDUCATIONS_SUCCESS} from '../action-types';

@Injectable()
export class EducationEffects {
    private getEducationEntries():Observable<Action> {
        return this.employeeRepository.getEducationEntries().pipe(
            map((response:any[]) => new ResolveEducationsSuccess(response)),
            catchError((e:PositionError) => of(new ResolveEducationsFail(e))),
        );
    }

    constructor(
        private actions$:Actions,
        private employeeRepository:EmployeeRepository,
    ) {}

    @Effect() InitEffect$:Observable<Action> = this.actions$.pipe(
        ofType(INIT),
        map(() => new ResolveEducations()),
    );

    @Effect() ResolveEducationEffect$:Observable<Action> = this.actions$.pipe(
        ofType(RESOLVE_EDUCATIONS),
        switchMap(() => this.getEducationEntries()),
    );

    @Effect() ResolveEducationSuccessEffect$:Observable<Action> = this.actions$.pipe(
        ofType(RESOLVE_EDUCATIONS_SUCCESS),
        map(toPayload),
        map((payload:Education[]) => payload[0]),
        map((payload:Education) => new SetEducation(payload)),
    );
}

import {Injectable} from '@angular/core';
import {INIT} from '@ngrx/store';
import {Actions, Effect, ofType} from '@ngrx/effects';
import {Observable, of} from 'rxjs';
import {catchError, map, switchMap} from 'rxjs/operators';

import {Action, toPayload} from 'src/modules/redux';
import {toUrl} from 'src/modules/contentful';

import {Education, Employee} from '../models';
import {EmployeeRepository} from '../employee.repository';
import {
    ResolveEmployees,
    ResolveEducations,
    ResolveEmployeesFail,
    ResolveEmployeesSuccess,
    ResolveEducationsFail,
    ResolveEducationsSuccess,
    SetEmployee,
    SetAvatarUrl,
    SetEducation,
} from './actions';
import {
    RESOLVE_EMPLOYEES,
    RESOLVE_EMPLOYEES_SUCCESS,
    SET_EMPLOYEE,
    RESOLVE_EDUCATIONS,
    RESOLVE_EDUCATIONS_SUCCESS,
} from './action-types';

@Injectable()
export class EmployeeEffects {
    private getEmployeeEntries():Observable<Action> {
        return this.employeeRepository.getEmployeeEntries().pipe(
            map((response:any[]) => new ResolveEmployeesSuccess(response)),
            catchError((e:PositionError) => of(new ResolveEmployeesFail(e))),
        );
    }

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
        switchMap(() => of(
            new ResolveEmployees(),
            new ResolveEducations(),
        )),
    );

    @Effect() ResolveEmployeeEffect$:Observable<Action> = this.actions$.pipe(
        ofType(RESOLVE_EMPLOYEES),
        switchMap(() => this.getEmployeeEntries()),
    );

    @Effect() ResolveEducationEffect$:Observable<Action> = this.actions$.pipe(
        ofType(RESOLVE_EDUCATIONS),
        switchMap(() => this.getEducationEntries()),
    );

    @Effect() ResolveEmployeeSuccessEffect$:Observable<Action> = this.actions$.pipe(
        ofType(RESOLVE_EMPLOYEES_SUCCESS),
        map(toPayload),
        map((payload:Employee[]) => payload[0]),
        map((payload:Employee) => new SetEmployee(payload)),
    );

    @Effect() ResolveEducationSuccessEffect$:Observable<Action> = this.actions$.pipe(
        ofType(RESOLVE_EDUCATIONS_SUCCESS),
        map(toPayload),
        map((payload:Education[]) => payload[0]),
        map((payload:Education) => new SetEducation(payload)),
    );

    @Effect() ResolveAvatarEffect$:Observable<Action> = this.actions$.pipe(
        ofType(SET_EMPLOYEE),
        map(toPayload),
        map((payload:Employee) => payload.avatar),
        map((payload:any) => toUrl(payload)),
        map((payload:string) => new SetAvatarUrl(payload)),
    );
}

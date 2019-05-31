import {Injectable} from '@angular/core';
import {INIT} from '@ngrx/store';
import {Actions, Effect, ofType} from '@ngrx/effects';
import {Observable, of} from 'rxjs';
import {catchError, map, switchMap} from 'rxjs/operators';

import {Action, toPayload} from 'src/modules/redux';
import {toUrl} from 'src/modules/contentful';
import {GeocodingRepository} from 'src/modules/geolocation';

import {Employee, Location} from '../../models';
import {EmployeeRepository} from '../../employee.repository';
import {RESOLVE_EMPLOYEES, RESOLVE_EMPLOYEES_SUCCESS, SET_EMPLOYEE} from '../action-types';
import {
    ResolveEmployees,
    ResolveEmployeesFail,
    ResolveEmployeesSuccess,
    SetEmployee,
    SetAvatarUrl,
    SetExpertise,
    ResolveEmployeeAddress,
    ResolveEmployeeAddressSucceess,
    ResolveEmployeeAddressFail, SetEmployeeAddress,
} from '../actions';

@Injectable()
export class EmployeeEffects {
    private getEmployeeEntries():Observable<Action> {
        return this.employeeRepository.getEmployeeEntries().pipe(
            map((response:any[]) => new ResolveEmployeesSuccess(response)),
            catchError((e:PositionError) => of(new ResolveEmployeesFail(e))),
        );
    }

    private getAddress({lon, lat}:Location):Observable<Action> {
        return this.geocodingRepository.getAddress(lon, lat).pipe(
            map((response:string) => new ResolveEmployeeAddressSucceess(response)),
            catchError((e:PositionError) => of(new ResolveEmployeeAddressFail(e))),
        );
    }

    constructor(
        private actions$:Actions,
        private employeeRepository:EmployeeRepository,
        private geocodingRepository:GeocodingRepository,
    ) {}

    @Effect() InitEffect$:Observable<Action> = this.actions$.pipe(
        ofType(INIT),
        map(() => new ResolveEmployees()),
    );

    @Effect() ResolveEmployeeEffect$:Observable<Action> = this.actions$.pipe(
        ofType(RESOLVE_EMPLOYEES),
        switchMap(() => this.getEmployeeEntries()),
    );

    @Effect() ResolveEmployeeSuccessEffect$:Observable<Action> = this.actions$.pipe(
        ofType(RESOLVE_EMPLOYEES_SUCCESS),
        map(toPayload),
        map((payload:Employee[]) => payload[0]),
        map((payload:Employee) => new SetEmployee(payload)),
    );

    @Effect() ResolveAvatarEffect$:Observable<Action> = this.actions$.pipe(
        ofType(SET_EMPLOYEE),
        map(toPayload),
        map((payload:Employee) => payload.avatar),
        map((payload:any) => toUrl(payload)),
        map((payload:string) => new SetAvatarUrl(payload)),
    );

    @Effect() SetExpertiseEffect$:Observable<Action> = this.actions$.pipe(
        ofType(SET_EMPLOYEE),
        map(toPayload),
        map((payload:Employee) => payload.expertise),
        map((payload:string) => payload.split(',').map(e => e.trim()).filter(e => !!e)),
        map((payload:string[]) => new SetExpertise(payload)),
    );

    @Effect() SetEmployeeEffect$:Observable<Action> = this.actions$.pipe(
        ofType(SET_EMPLOYEE),
        map(toPayload),
        map((payload:Employee) => payload.location),
        map((payload:Location) => new ResolveEmployeeAddress(payload)),
    );

    @Effect() ResolveEmployeeAddressEffect$:Observable<Action> = this.actions$.pipe(
        ofType(ResolveEmployeeAddress.type),
        map(toPayload),
        switchMap((payload:Location) => this.getAddress(payload)),
    );

    @Effect() ResolveEmployeeAddressSuccessEffect$:Observable<Action> = this.actions$.pipe(
        ofType(ResolveEmployeeAddressSucceess.type),
        map(toPayload),
        map((payload:{Country:string, City:string}) => `${payload.City}, ${payload.Country}`),
        map((payload:string) => new SetEmployeeAddress(payload)),
    );
}

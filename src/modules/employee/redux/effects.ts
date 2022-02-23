import {Injectable} from '@angular/core';
import {INIT} from '@ngrx/store';
import {Actions, Effect, ofType} from '@ngrx/effects';
import {Observable, of} from 'rxjs';
import {catchError, map, switchMap} from 'rxjs/operators';
import {toPayload} from 'yet-another-redux-helpers';
import {toUrl} from 'src/modules/contentful';
import {GeocodingRepository, Address} from 'src/modules/geolocation';
import {Employee} from '../employee.model';
import {LocationModel} from '../location.model';
import {EmployeeRepository} from '../employee.repository';
import {
    ResolveEmployees,
    ResolveEmployeesFail,
    ResolveEmployeesSuccess,
    SetEmployee,
    SetAvatarUrl,
    SetBackgroundUrl,
    SetExpertise,
    ResolveEmployeeAddress,
    ResolveEmployeeAddressSuccess,
    ResolveEmployeeAddressFail,
    SetEmployeeAddress,
    SetFilename,
} from './actions';

export type GetAddressType = ResolveEmployeeAddressSuccess|ResolveEmployeeAddressFail;
export type GetEmployeeEntriesType = ResolveEmployeesSuccess|ResolveEmployeesFail;

@Injectable()
export class EmployeeEffects {
    private getEmployeeEntries():Observable<GetEmployeeEntriesType> {
        return this.employeeRepository.getEmployeeEntries().pipe(
            map((response:any[]) => new ResolveEmployeesSuccess(response)),
            catchError((e:PositionError) => of(new ResolveEmployeesFail(e))),
        );
    }

    private getAddress({lon, lat}:LocationModel):Observable<GetAddressType> {
        return this.geocodingRepository.getAddress(lon, lat).pipe(
            map((response:Address) => new ResolveEmployeeAddressSuccess(response)),
            catchError((e:PositionError) => of(new ResolveEmployeeAddressFail(e))),
        );
    }

    constructor(
        private actions$:Actions,
        private employeeRepository:EmployeeRepository,
        private geocodingRepository:GeocodingRepository,
    ) {}

    @Effect() InitEffect$:Observable<ResolveEmployees> = this.actions$.pipe(
        ofType(INIT),
        map(() => new ResolveEmployees()),
    );

    @Effect() ResolveEmployeeEffect$:Observable<GetEmployeeEntriesType> = this.actions$.pipe(
        ofType(ResolveEmployees.type),
        switchMap(() => this.getEmployeeEntries()),
    );

    @Effect() ResolveEmployeeSuccessEffect$:Observable<SetEmployee> = this.actions$.pipe(
        ofType(ResolveEmployeesSuccess.type),
        map(toPayload),
        map((payload:Employee[]) => payload[0]),
        map((payload:Employee) => new SetEmployee(payload)),
    );

    @Effect() ResolveAvatarEffect$:Observable<SetAvatarUrl> = this.actions$.pipe(
        ofType(SetEmployee.type),
        map(toPayload),
        map((payload:Employee) => payload.avatar),
        map((payload:any) => toUrl(payload)),
        map((payload:string) => new SetAvatarUrl(payload)),
    );

    @Effect() ResolveBackgroundEffect$:Observable<SetBackgroundUrl> = this.actions$.pipe(
        ofType(SetEmployee.type),
        map(toPayload),
        map((payload:Employee) => payload.backgroundImage),
        map((payload:any) => toUrl(payload)),
        map((payload:string) => new SetBackgroundUrl(payload)),
    );

    @Effect() SetExpertiseEffect$:Observable<SetExpertise> = this.actions$.pipe(
        ofType(SetEmployee.type),
        map(toPayload),
        map((payload:Employee) => payload.expertise),
        map((payload:string) => payload.split(',').map(e => e.trim()).filter(e => !!e)),
        map((payload:string[]) => new SetExpertise(payload)),
    );

    @Effect() SetEmployeeEffect$:Observable<ResolveEmployeeAddress> = this.actions$.pipe(
        ofType(SetEmployee.type),
        map(toPayload),
        map((payload:Employee) => payload.location),
        map((payload:LocationModel) => new ResolveEmployeeAddress(payload)),
    );

    @Effect() SetFilenameEffect$:Observable<SetFilename> = this.actions$.pipe(
        ofType(SetEmployee.type),
        map(toPayload),
        map((payload:Employee) => `${payload.name.replace(/\s/g, '-')}-CV.pdf`),
        map((payload:string) => new SetFilename(payload)),
    );

    @Effect() ResolveEmployeeAddressEffect$:Observable<GetAddressType> = this.actions$.pipe(
        ofType(ResolveEmployeeAddress.type),
        map(toPayload),
        switchMap((payload:LocationModel) => this.getAddress(payload)),
    );

    @Effect() ResolveEmployeeAddressSuccessEffect$:Observable<SetEmployeeAddress> = this.actions$.pipe(
        ofType(ResolveEmployeeAddressSuccess.type),
        map(toPayload),
        map((payload:Address) => payload.city),
        map((payload:string) => new SetEmployeeAddress(payload)),
    );
}

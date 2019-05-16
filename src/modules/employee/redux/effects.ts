import {Injectable, Inject, Renderer2, RendererFactory2} from '@angular/core';
import {DOCUMENT} from '@angular/common';
import {INIT} from '@ngrx/store';
import {Actions, Effect, ofType} from '@ngrx/effects';
import {Observable, of} from 'rxjs';
import {catchError, map, switchMap, tap} from 'rxjs/operators';

import {Action, toPayload, NoDispatchMetadada} from 'src/modules/redux';
import {toUrl} from 'src/modules/contentful';

import {Education, Employee, Experience} from '../models';
import {EmployeeRepository} from '../employee.repository';
import {
    ResolveEmployees,
    ResolveEducations,
    ResolveEmployeesFail,
    ResolveEmployeesSuccess,
    ResolveEducationsFail,
    ResolveEducationsSuccess,
    ResolveExperience,
    ResolveExperienceSuccess,
    ResolveExperienceFail,
    SetExperience,
    SetCurrentPosition,
    SetEmployee,
    SetAvatarUrl,
    SetEducation,
    SetExpertise,
} from './actions';
import {
    RESOLVE_EMPLOYEES,
    RESOLVE_EMPLOYEES_SUCCESS,
    SET_EMPLOYEE,
    RESOLVE_EDUCATIONS,
    RESOLVE_EDUCATIONS_SUCCESS,
    RESOLVE_EXPERIENCE,
    RESOLVE_EXPERIENCE_SUCCESS,
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

    private getExperienceEntries():Observable<Action> {
        return this.employeeRepository.getExperienceEntries().pipe(
            map((response:any[]) => new ResolveExperienceSuccess(response)),
            catchError((e:PositionError) => of(new ResolveExperienceFail(e))),
        );
    }

    private renderer:Renderer2;
    constructor(
        private actions$:Actions,
        private employeeRepository:EmployeeRepository,
        private rendererFactory:RendererFactory2,
        @Inject(DOCUMENT) private document:Document,
    ) {
        this.renderer = rendererFactory.createRenderer(null, null);
    }

    @Effect() InitEffect$:Observable<Action> = this.actions$.pipe(
        ofType(INIT),
        switchMap(() => of(
            new ResolveEmployees(),
            new ResolveEducations(),
            new ResolveExperience(),
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
    @Effect() ResolveExperienceEffect$:Observable<Action> = this.actions$.pipe(
        ofType(RESOLVE_EXPERIENCE),
        switchMap(() => this.getExperienceEntries()),
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

    @Effect() SetExpertiseEffect$:Observable<Action> = this.actions$.pipe(
        ofType(SET_EMPLOYEE),
        map(toPayload),
        map((payload:Employee) => payload.expertise),
        map((payload:string) => payload.split(',').map(e => e.trim()).filter(e => !!e)),
        map((payload:string[]) => new SetExpertise(payload)),
    );

    @Effect() ResolveExperienceSuccessEffect$:Observable<Action> = this.actions$.pipe(
        ofType(RESOLVE_EXPERIENCE_SUCCESS),
        map(toPayload),
        map((payload:Experience[]) => payload
            .filter((entry:Experience) => entry.isCurrentPosition !== true)
            .sort((a:Experience, b:Experience) => new Date(b.startDate).getTime() - new Date(a.startDate).getTime())
        ),
        map((payload:Experience[]) => new SetExperience(payload)),
    );

    @Effect() SetCurrentPositionEffect$:Observable<Action> = this.actions$.pipe(
        ofType(RESOLVE_EXPERIENCE_SUCCESS),
        map(toPayload),
        map((payload:Experience[]) => payload.find((entry:Experience) => entry.isCurrentPosition === true)),
        map((payload:Experience) => new SetCurrentPosition(payload)),
    );

    @Effect(NoDispatchMetadada) SetBodyBackgroundEffect$ = this.actions$.pipe(
        ofType(SET_EMPLOYEE),
        map(toPayload),
        map((payload:Employee) => payload.backgroundImage),
        map((payload:any) => toUrl(payload)),
        map((payload:string) => `url(${payload})`), // TODO use pipe
        tap((payload:string) => this.renderer.setStyle(this.document.body, 'backgroundImage', payload)),
    );
}

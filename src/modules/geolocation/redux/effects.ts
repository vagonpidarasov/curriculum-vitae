import {Injectable} from '@angular/core';
import {Actions, Effect, ofType} from '@ngrx/effects';
import {Observable, of} from 'rxjs';
import {catchError, map, exhaustMap} from 'rxjs/operators';
import {toPayload} from 'yet-another-redux-helpers';
import {GeolocationRepository} from '../geolocation.repository';
import {ResolveGeolocationFail, ResolveGeolocationSuccess, SetGeolocation, ResolveGeolocation} from './actions';

export type ResolveGeolocationType = ResolveGeolocationFail|ResolveGeolocationSuccess;

@Injectable()
export class GeolocationEffects {
    private resolveGeolocation(payload:boolean):Observable<ResolveGeolocationType> {
        return this.geolocationRepository.getCurrentPosition(payload).pipe(
            map((response:Position) => new ResolveGeolocationSuccess(response)),
            catchError((e:PositionError) => of(new ResolveGeolocationFail(e))),
        );
    }

    constructor(
        private actions$:Actions,
        private geolocationRepository:GeolocationRepository,
    ) {}

    @Effect() ResolveGeolocationEffect$:Observable<ResolveGeolocationType> = this.actions$.pipe(
        ofType(ResolveGeolocation.type),
        map(toPayload),
        exhaustMap((payload:boolean) => this.resolveGeolocation(payload)),
    );

    @Effect() ResolveGeolocationSuccessEffect$:Observable<SetGeolocation> = this.actions$.pipe(
        ofType(ResolveGeolocationSuccess.type),
        map(toPayload),
        map((payload:Position) => new SetGeolocation(payload)),
    );
}

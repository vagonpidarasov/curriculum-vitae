import {Injectable} from '@angular/core';
import {Action} from '@ngrx/store';
import {Actions, Effect, ofType} from '@ngrx/effects';
import {Observable, of} from 'rxjs';
import {catchError, map, exhaustMap} from 'rxjs/operators';

import {toPayload} from 'src/modules/redux-helpers';

import {GeolocationRepository} from '../geolocation.repository';
import {RESOLVE_GEOLOCATION, RESOLVE_GEOLOCATION_SUCCESS} from './action-types';
import {ResolveGeolocationFail, ResolveGeolocationSuccess, SetGeolocation} from './actions';

@Injectable()
export class GeolocationEffects {
    constructor(
        private actions$:Actions,
        private geolocationRepository:GeolocationRepository,
    ) {}

    @Effect() ResolveGeolocationEffect$:Observable<Action> = this.actions$.pipe(
        ofType(RESOLVE_GEOLOCATION),
        map(toPayload),
        exhaustMap((payload:boolean) => this.resolveGeolocation(payload)),
    );

    private resolveGeolocation(payload:boolean):Observable<Action> {
        return this.geolocationRepository.getCurrentPosition(payload).pipe(
            map((response:Position) => new ResolveGeolocationSuccess(response)),
            catchError((e:PositionError) => of(new ResolveGeolocationFail(e))),
        );
    }

    @Effect() ResolveGeolocationSuccessEffect$:Observable<Action> = this.actions$.pipe(
        ofType(RESOLVE_GEOLOCATION_SUCCESS),
        map(toPayload),
        map((payload:Position) => new SetGeolocation(payload)),
    );
}

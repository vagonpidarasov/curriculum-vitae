import {Injectable} from '@angular/core';
import {Router} from '@angular/router';
import {Actions, Effect, ofType} from '@ngrx/effects';
import {map, tap} from 'rxjs/operators';

import {toPayload, NoDispatchMetadada} from 'src/modules/redux';

import {SetCurrentRoute} from './redux';

@Injectable()
export class NavigationEffects {
    constructor(private actions$:Actions, private router:Router) {}
    /**
     * @Effect performs navigation upon currentRoute change
     */
    @Effect(NoDispatchMetadada) SetCurrentRouteEffect$ = this.actions$.pipe(
        ofType(SetCurrentRoute.type),
        map(toPayload),
        tap((url:string) => this.router.navigateByUrl(url)),
    );
}

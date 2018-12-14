import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, Router} from '@angular/router';
import {Actions, Effect, ofType} from '@ngrx/effects';
import {map, tap} from 'rxjs/operators';

import {toPayload} from 'src/modules/redux-helpers';
import {SET_CURRENT_ROUTE} from './redux';

@Injectable()
export class NavigationEffects {
    constructor(private actions$:Actions, private router:Router) {}
    /**
     * @Effect performs navigation upon currentRoute change
     */
    @Effect({dispatch: false}) SetCurrentRouteEffect$ = this.actions$.pipe(
        ofType(SET_CURRENT_ROUTE),
        map(toPayload),
        map((route:ActivatedRouteSnapshot) => route.url.toString()),
        tap((route:string) => this.router.navigateByUrl(route)),
    );
}

import {Injectable} from '@angular/core';
import {Router} from '@angular/router';
import {Actions, Effect, ofType} from '@ngrx/effects';
import {map, tap} from 'rxjs/operators';

import {toPayload} from 'src/modules/redux-helpers';

import {SET_CURRENT_ROUTE} from './redux';
import {toUrl} from './to-url';

@Injectable()
export class NavigationEffects {
    constructor(private actions$:Actions, private router:Router) {}
    /**
     * @Effect performs navigation upon currentRoute change
     */
    @Effect({dispatch: false}) SetCurrentRouteEffect$ = this.actions$.pipe(
        ofType(SET_CURRENT_ROUTE),
        map(toPayload),
        map(toUrl),
        tap((url:string) => this.router.navigateByUrl(url)),
    );
}

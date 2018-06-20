import {Injectable} from '@angular/core';
import {Action} from '@ngrx/store';
import {Actions, Effect, ofType} from '@ngrx/effects';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';

import {AuthenticationActions, SignInSuccess} from './actions';

@Injectable()
export class AuthenticationEffects {
    constructor(private actions$:Actions) {}

    @Effect() SignInEffect$:Observable<Action> = this.actions$.pipe(
        ofType(AuthenticationActions.SIGN_IN),
        map(() => new SignInSuccess({username: 'Bruce Wayne'}))
    );
}

import {Injectable} from '@angular/core';
import {Action} from '@ngrx/store';
import {Actions, Effect, ofType} from '@ngrx/effects';

import {Observable} from 'rxjs';
import {tap} from 'rxjs/operators';

import {SignInDialogService} from './sign-in-dialog.service';
import {AuthenticationActions} from './redux';

@Injectable()
export class SingInDialogEffects {
    constructor(
        private actions$:Actions,
        private signInDialogService:SignInDialogService,
    ) {}

    /**
     * @Effect opens dialog upon AUTHENTICATION_REQUEST
     */
    @Effect({dispatch: false})
    OpenDialogEffect$:Observable<Action> = this.actions$.pipe(
        ofType(AuthenticationActions.AUTHENTICATION_REQUEST),
        tap(() => this.signInDialogService.open()),
    );

    /**
     * @Effect closes dialog upon AUTHENTICATION_DISCARD or SIGN_IN_SUCCESS
     */
    @Effect({dispatch: false})
    CloseDialogEffect$:Observable<Action> = this.actions$.pipe(
        ofType(
            AuthenticationActions.SIGN_IN_SUCCESS,
            AuthenticationActions.AUTHENTICATION_DISCARD,
        ),
        tap(() => this.signInDialogService.close()),
    );
}

import {Injectable} from '@angular/core';
import {Actions, Effect, ofType} from '@ngrx/effects';
import {tap} from 'rxjs/operators';

import {NoDispatchMetadada} from 'src/modules/redux';

import {SignInDialogService} from './sign-in-dialog.service';
import {AUTHENTICATION_REQUEST, SIGN_IN_SUCCESS, AUTHENTICATION_DISCARD} from './redux';

@Injectable()
export class SingInDialogEffects {
    constructor(
        private actions$:Actions,
        private signInDialogService:SignInDialogService,
    ) {}

    /**
     * @Effect opens dialog upon AUTHENTICATION_REQUEST
     */
    @Effect(NoDispatchMetadada) OpenDialogEffect$ = this.actions$.pipe(
        ofType(AUTHENTICATION_REQUEST),
        tap(() => this.signInDialogService.open()),
    );

    /**
     * @Effect closes dialog upon AUTHENTICATION_DISCARD or SIGN_IN_SUCCESS
     */
    @Effect(NoDispatchMetadada) CloseDialogEffect$ = this.actions$.pipe(
        ofType(SIGN_IN_SUCCESS, AUTHENTICATION_DISCARD),
        tap(() => this.signInDialogService.close()),
    );
}

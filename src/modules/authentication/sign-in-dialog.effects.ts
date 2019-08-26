import {Injectable} from '@angular/core';
import {Actions, Effect, ofType} from '@ngrx/effects';
import {tap} from 'rxjs/operators';
import {NoDispatchMetadada} from 'yet-another-redux-helpers';
import {SignInDialogService} from './sign-in-dialog.service';
import {AuthenticationRequest, SignInSuccess, AuthenticationDiscard} from './redux';

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
        ofType(AuthenticationRequest.type),
        tap(() => this.signInDialogService.open()),
    );

    /**
     * @Effect closes dialog upon AUTHENTICATION_DISCARD or SIGN_IN_SUCCESS
     */
    @Effect(NoDispatchMetadada) CloseDialogEffect$ = this.actions$.pipe(
        ofType(SignInSuccess.type, AuthenticationDiscard.type),
        tap(() => this.signInDialogService.close()),
    );
}

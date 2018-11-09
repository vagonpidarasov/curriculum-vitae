import {Component, OnDestroy} from '@angular/core';

import {AuthenticationPayload} from '../interfaces';
import {AuthenticationStore} from '../redux';

@Component({
    selector: 'sign-in-dialog',
    templateUrl: './sign-in-dialog.component.html',
    styleUrls: ['./sign-in-dialog.component.scss'],
})
export class SignInDialogComponent implements OnDestroy {
    constructor(public authenticationStore:AuthenticationStore) {}

    ngOnDestroy() {
        this.authenticationStore.setError(null);
    }

    signIn(payload:AuthenticationPayload) {
        this.authenticationStore.signIn(payload);
    }

    resetError(payload:any) {
        this.authenticationStore.setError(null);
    }

    close() {
        this.authenticationStore.authDiscard();
    }
}

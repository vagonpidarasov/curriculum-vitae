import {Component, OnDestroy} from '@angular/core';
import {MatDialogRef} from '@angular/material';

import {AuthenticationPayload} from '../interfaces';
import {AuthenticationStore} from '../redux';

@Component({
    selector: 'sign-in-dialog',
    templateUrl: './sign-in-dialog.component.html',
    styleUrls: ['./sign-in-dialog.component.scss'],
})
export class SignInDialogComponent implements OnDestroy {
    constructor(
        private dialogRef:MatDialogRef<SignInDialogComponent>,
        public authenticationStore:AuthenticationStore
    ) {}

    ngOnDestroy() {
        this.authenticationStore.setError(null);
    }

    signIn(payload:AuthenticationPayload) {
        this.authenticationStore.signIn(payload);
    }

    valueChanges(payload:AuthenticationPayload) {
        this.authenticationStore.setError(null);
    }

    close() {
        this.dialogRef.close();
        this.authenticationStore.authDiscard();
    }
}

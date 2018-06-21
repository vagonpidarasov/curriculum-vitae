import {Component, OnDestroy, OnInit} from '@angular/core';
import {MatDialogRef} from '@angular/material';

import {Subscription} from 'rxjs';
import {filter} from 'rxjs/operators';

import {AuthenticationPayload} from 'src/modules/authentication';
import {AuthenticationStore} from 'src/modules/authentication';

@Component({
    selector: 'sign-in-dialog',
    templateUrl: './sign-in-dialog.component.html',
})
export class SignInDialogComponent implements OnInit, OnDestroy {
    private isAuthenticatedSubscription:Subscription;

    constructor(
        private dialogRef:MatDialogRef<SignInDialogComponent>,
        public authenticationStore:AuthenticationStore
    ) {}

    ngOnInit() {
        this.isAuthenticatedSubscription = this.authenticationStore.isAuthenticated
            .pipe(filter((isAuthenticated:boolean) => isAuthenticated))
            .subscribe((isAuthenticated:boolean) => this.dialogRef.close())
        ;
    }

    ngOnDestroy() {
        this.isAuthenticatedSubscription.unsubscribe();
    }

    signIn(payload:AuthenticationPayload) {
        this.authenticationStore.signIn(payload);
    }
}

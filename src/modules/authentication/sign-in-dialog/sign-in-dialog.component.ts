import {Component, OnDestroy, OnInit} from '@angular/core';
import {MatDialogRef} from '@angular/material';
import {Subscription} from 'rxjs';
import {filter} from 'rxjs/operators';

import {AuthenticationPayload} from '../interfaces';
import {AuthenticationStore} from '../redux';

@Component({
    selector: 'sign-in-dialog',
    templateUrl: './sign-in-dialog.component.html',
    styleUrls: ['./sign-in-dialog.component.scss'],
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
            .subscribe((isAuthenticated:boolean) => this.close())
        ;
    }

    ngOnDestroy() {
        this.isAuthenticatedSubscription.unsubscribe();
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
    }
}

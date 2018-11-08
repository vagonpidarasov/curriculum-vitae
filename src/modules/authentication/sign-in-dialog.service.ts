import {Injectable, OnDestroy} from '@angular/core';
import {MatDialog, MatDialogRef} from '@angular/material';
import {Subscription} from 'rxjs';
import {filter} from 'rxjs/operators';

import {AuthenticationStore} from './redux';
import {SignInDialogComponent} from './sign-in-dialog';

@Injectable()
export class SignInDialogService implements OnDestroy {
    private dialogRef:MatDialogRef<SignInDialogComponent>;
    private authenticationRequestSubscription:Subscription;
    private isAuthenticatedSubscription:Subscription;

    constructor(
        private dialog:MatDialog,
        private authenticationStore:AuthenticationStore
    ) {}

    private open() {
        this.dialogRef = this.dialog.open(SignInDialogComponent);
    }

    private close() {
        if (this.dialogRef) {
            this.dialogRef.close();
        }
    }

    init() {
        this.authenticationRequestSubscription = this.authenticationStore.authenticationRequest
            .pipe(filter((authRequest:number) => authRequest > 0))
            .subscribe(() => this.open());

        this.isAuthenticatedSubscription = this.authenticationStore.isAuthenticated
            .pipe(filter((isAuthenticated:boolean) => isAuthenticated))
            .subscribe(() => this.close())
        ;
    }

    ngOnDestroy() {
        this.authenticationRequestSubscription.unsubscribe();
        this.isAuthenticatedSubscription.unsubscribe();
    }
}

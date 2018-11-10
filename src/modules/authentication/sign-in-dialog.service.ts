import {Injectable, OnDestroy} from '@angular/core';
import {MatDialog, MatDialogRef} from '@angular/material';
import {Subscription} from 'rxjs';
import {filter} from 'rxjs/operators';

import {AuthenticationStore} from './redux';
import {SignInDialogComponent} from './sign-in-dialog';

@Injectable()
export class SignInDialogService implements OnDestroy {
    private dialogRef:MatDialogRef<SignInDialogComponent>;
    private dialogOpenSubscription:Subscription;
    private dialogCloseSubscription:Subscription;

    constructor(
        private dialog:MatDialog,
        private authenticationStore:AuthenticationStore,
    ) {}

    private open() {
        this.dialogRef = this.dialog.open(SignInDialogComponent, {disableClose: true});
    }

    private close() {
        if (this.dialogRef) {
            this.dialogRef.close();
        }
    }

    init() {
        this.dialogOpenSubscription = this.authenticationStore.authenticationRequest
            .pipe(filter((authRequest:number) => authRequest > 0))
            .subscribe(() => this.open());

        this.dialogCloseSubscription = this.authenticationStore.authenticationRequest
            .pipe(filter((authRequest:number) => authRequest === 0))
            .subscribe(() => this.close());
    }

    ngOnDestroy() {
        this.dialogOpenSubscription.unsubscribe();
        this.dialogCloseSubscription.unsubscribe();
    }
}

import {Injectable} from '@angular/core';
import {MatDialog, MatDialogRef} from '@angular/material';
import {Subscription} from 'rxjs';
import {filter} from 'rxjs/operators';

import {AuthenticationStore} from '../redux';
import {SignInDialogComponent} from './sign-in-dialog.component';

// TODO move one dir up
@Injectable()
export class SignInDialogService {
    private dialogRef:MatDialogRef<SignInDialogComponent>;

    private subscription:Subscription;

    constructor(
        private dialog:MatDialog,
        private authenticationStore:AuthenticationStore
    ) {
        this.subscription = this.authenticationStore.authenticationRequest
            .pipe(filter((authRequest:number) => !!authRequest))
            .subscribe(() => this.open());
    }

    ngOnDestroy() {
        this.subscription.unsubscribe();
    }

    open():void {
        this.dialogRef = this.dialog.open(SignInDialogComponent);
    }
}

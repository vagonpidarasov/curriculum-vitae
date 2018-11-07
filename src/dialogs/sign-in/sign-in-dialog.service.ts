import {Injectable} from '@angular/core';
import {MatDialog, MatDialogRef} from '@angular/material';
import {Subscription} from 'rxjs';
import {filter} from 'rxjs/operators';

import {AuthenticationStore} from 'src/modules/authentication';
import {NavigationService} from 'src/modules/navigation';

import {SignInDialogComponent} from './sign-in-dialog.component';

@Injectable()
export class SignInDialogService {
    private dialogRef:MatDialogRef<SignInDialogComponent>;

    private subscription:Subscription;

    constructor(
        private dialog:MatDialog,
        private authenticationStore:AuthenticationStore,
        private navigationService:NavigationService,
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

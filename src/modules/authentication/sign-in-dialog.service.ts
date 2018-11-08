import {Injectable, OnDestroy} from '@angular/core';
import {MatDialog} from '@angular/material';
import {Subscription} from 'rxjs';
import {filter} from 'rxjs/operators';

import {AuthenticationStore} from './redux';
import {SignInDialogComponent} from './sign-in-dialog';

@Injectable()
export class SignInDialogService implements OnDestroy {
    private subscription:Subscription;

    constructor(
        private dialog:MatDialog,
        private authenticationStore:AuthenticationStore
    ) {}

    init() {
        this.subscription = this.authenticationStore.authenticationRequest
            .pipe(filter((authRequest:number) => !!authRequest))
            .subscribe(() => this.dialog.open(SignInDialogComponent));
    }

    ngOnDestroy() {
        this.subscription.unsubscribe();
    }
}

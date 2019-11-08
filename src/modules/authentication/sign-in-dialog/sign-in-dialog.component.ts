import {Component, OnDestroy, OnInit} from '@angular/core';
import {MatDialogRef} from '@angular/material';
import {Subscription} from 'rxjs';
import {filter} from 'rxjs/operators';

import {SignInPayload} from '../types';
import {AuthenticationStore} from '../redux';

export const EscapeKey:{key:string; keyCode:number} = {
    key: 'Escape',
    keyCode: 27,
};

@Component({
    selector: 'sign-in-dialog',
    templateUrl: './sign-in-dialog.component.html',
    styleUrls: ['./sign-in-dialog.component.scss'],
})
export class SignInDialogComponent implements OnDestroy, OnInit {
    private backdropClickSubscription:Subscription;
    private keydownEventsSubscription:Subscription;

    constructor(
        public authenticationStore:AuthenticationStore,
        private dialogRef:MatDialogRef<SignInDialogComponent>,
    ) {}

    ngOnInit() {
        this.backdropClickSubscription = this.dialogRef.backdropClick()
            .subscribe(() => this.authDiscard());

        this.keydownEventsSubscription = this.dialogRef.keydownEvents()
            .pipe(filter((e:KeyboardEvent) => e.key === EscapeKey.key))
            .subscribe(() => this.authDiscard());
    }

    authDiscard() {
        this.authenticationStore.authDiscard();
    }

    ngOnDestroy() {
        this.authenticationStore.setError(null);
        this.backdropClickSubscription.unsubscribe();
        this.keydownEventsSubscription.unsubscribe();
    }

    signIn(payload:SignInPayload) {
        this.authenticationStore.signIn(payload);
    }

    setError(payload:string) {
        this.authenticationStore.setError(payload);
    }
}

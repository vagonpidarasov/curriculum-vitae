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
            .pipe(filter((e:KeyboardEvent) => e.key === 'Escape'))
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

    signIn(payload:AuthenticationPayload) {
        this.authenticationStore.signIn(payload);
    }

    resetError(payload:any) {
        this.authenticationStore.setError(null);
    }
}

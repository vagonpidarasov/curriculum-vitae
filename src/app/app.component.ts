import {Component, ViewEncapsulation, OnInit, OnDestroy} from '@angular/core';
import {Router, RouterEvent, NavigationCancel} from '@angular/router';
import {MatSnackBar} from '@angular/material';

import {Subscription} from 'rxjs';
import {filter} from 'rxjs/operators';

import {AuthenticationStore} from 'src/modules/authentication';
import {insufficientPermissionsError} from 'src/modules/error';
import {SignInDialogService} from 'src/dialogs';

@Component({
    selector: 'app',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
    encapsulation: ViewEncapsulation.None,
})
export class AppComponent implements OnInit, OnDestroy {
    private isAuthenticatedSubscription:Subscription;
    private routerEventsSubscription:Subscription;

    constructor(
        public authenticationStore:AuthenticationStore,
        private router:Router,
        private snackBar:MatSnackBar,
        private signInDialog:SignInDialogService
    ) {}

    ngOnInit() {
        this.isAuthenticatedSubscription = this.authenticationStore.isAuthenticated
            .pipe(filter((isAuthenticated:boolean) => !isAuthenticated))
            .subscribe((isAuthenticated:boolean) => this.router.navigateByUrl('/'))
        ;

        this.routerEventsSubscription = this.router.events
            .pipe(filter((event:RouterEvent) => event instanceof NavigationCancel))
            .subscribe((event:NavigationCancel) => this.snackBar.open(
                insufficientPermissionsError(), 'OK', {duration: 2500}
            ))
        ;
    }

    ngOnDestroy() {
        this.isAuthenticatedSubscription.unsubscribe();
        this.routerEventsSubscription.unsubscribe();
    }

    signInRequest() {
        this.signInDialog.open();
    }

    signOutRequest() {
        this.authenticationStore.signOut();
    }
}

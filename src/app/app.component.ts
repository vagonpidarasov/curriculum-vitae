import {Component, ViewEncapsulation, OnInit, OnDestroy} from '@angular/core';
import {Router, RouterEvent, NavigationCancel} from '@angular/router';
import {MatSnackBar} from '@angular/material';
import {Subscription} from 'rxjs';

import {SignInPayload, AuthenticationStore} from 'src/modules/authentication';
import {filter} from 'rxjs/operators';

export const InsufficientPermissionsErrorMsg:string = 'Seems like you don not have permissions';

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
        private snackBar:MatSnackBar
    ) {}

    ngOnInit() {
        this.isAuthenticatedSubscription = this.authenticationStore.isAuthenticated.subscribe(
            (isAuthenticated:boolean) => !isAuthenticated ? this.router.navigateByUrl('/') : null
        );

        this.routerEventsSubscription = this.router.events
            .pipe(filter((event:RouterEvent) => event instanceof NavigationCancel))
            .subscribe((event:NavigationCancel) => this.snackBar.open(
                InsufficientPermissionsErrorMsg, 'OK', {duration: 2500}
            ));
    }

    ngOnDestroy() {
        this.isAuthenticatedSubscription.unsubscribe();
        this.routerEventsSubscription.unsubscribe();
    }

    signIn(payload:SignInPayload) {
        this.authenticationStore.signIn(payload);
    }

    signOut() {
        this.authenticationStore.signOut();
    }
}

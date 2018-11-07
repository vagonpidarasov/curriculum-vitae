import {Component, OnInit, OnDestroy} from '@angular/core';
import {Router, RouterEvent, NavigationCancel} from '@angular/router';
import {MatSnackBar} from '@angular/material';

import {Subscription} from 'rxjs';
import {filter} from 'rxjs/operators';

import {AuthenticationStore} from 'src/modules/authentication';
import {insufficientPermissionsError} from './insufficient-permissions-error';

@Component({
    selector: 'router-guard',
    template: '',
    styles: [':host{display:none;}']
})
export class RouterGuardComponent implements OnInit, OnDestroy {
    private isAuthenticatedSubscription:Subscription;
    private routerEventsSubscription:Subscription;

    constructor(
        private authenticationStore:AuthenticationStore,
        private router:Router,
        private snackBar:MatSnackBar,
    ) {}

    ngOnInit() {
        this.isAuthenticatedSubscription = this.authenticationStore.isAuthenticated
            .pipe(
                filter((isAuthenticated:boolean) => !isAuthenticated)
            )
            .subscribe(() => this.router.navigateByUrl('/'))
        ;

        this.routerEventsSubscription = this.router.events
            .pipe(
                filter((event:RouterEvent) => event instanceof NavigationCancel)
            )
            .subscribe(() => this.snackBar.open(
                insufficientPermissionsError(), 'OK', {duration: 2500}
            ))
        ;
    }

    ngOnDestroy() {
        this.isAuthenticatedSubscription.unsubscribe();
        this.routerEventsSubscription.unsubscribe();
    }
}

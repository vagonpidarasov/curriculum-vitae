import {Injectable, OnDestroy} from '@angular/core';
import {CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router} from '@angular/router';
import {Observable, Subscription} from 'rxjs';

import {AuthenticationStore} from 'src/modules/authentication';
import {filter} from 'rxjs/operators';
import {NavigationStore} from './redux';

@Injectable()
export class RouterGuardService implements CanActivate, OnDestroy {
    private currentRouteSubscription:Subscription;

    constructor(
        private authenticationStore:AuthenticationStore,
        private navigationStore:NavigationStore,
        private router:Router,
    ) {
        this.currentRouteSubscription = this.navigationStore.currentRoute
            .pipe(filter((route:ActivatedRouteSnapshot) => !!route))
            .subscribe((route:ActivatedRouteSnapshot) =>
                this.router.navigateByUrl(route.url.toString())
            );
    }

    canActivate(route:ActivatedRouteSnapshot, state:RouterStateSnapshot):Observable<boolean> {
        return this.authenticationStore.isAuthenticated;
    }

    ngOnDestroy() {
        this.currentRouteSubscription.unsubscribe();
    }
}

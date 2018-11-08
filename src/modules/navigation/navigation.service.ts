import {Injectable, OnDestroy} from '@angular/core';
import {ActivatedRouteSnapshot, Router} from '@angular/router';
import {Subscription} from 'rxjs';
import {filter} from 'rxjs/operators';

import {NavigationStore} from './redux';

@Injectable()
export class NavigationService implements OnDestroy {
    private currentRouteSubscription:Subscription;

    constructor(
        private navigationStore:NavigationStore,
        private router:Router,
    ) {}

    init() {
        this.currentRouteSubscription = this.navigationStore.currentRoute
            .pipe(filter((route:ActivatedRouteSnapshot) => !!route))
            .subscribe((route:ActivatedRouteSnapshot) =>
                this.router.navigateByUrl(route.url.toString())
            );
    }

    ngOnDestroy() {
        this.currentRouteSubscription.unsubscribe();
    }
}

import {Component, OnInit, OnDestroy} from '@angular/core';
import {Router, ActivatedRouteSnapshot} from '@angular/router';
import {Subscription} from 'rxjs';
import {filter} from 'rxjs/operators';

import {NavigationStore} from './redux';

@Component({
    selector: 'navigation-guard',
    template: '',
    styles: [':host{display:none;}']
})
export class NavigationGuardComponent implements OnInit, OnDestroy {
    private currentRouteSubscription:Subscription;

    constructor(
        private navigationStore:NavigationStore,
        private router:Router,
    ) {}

    ngOnInit() {
        /**
         * Navigates to currentRoute when it changes
         * @type {Subscription}
         */
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

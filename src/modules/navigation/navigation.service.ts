import {Injectable, OnDestroy} from '@angular/core';
import {ActivatedRouteSnapshot, Router} from '@angular/router';
import {Subscription} from 'rxjs';
import {filter} from 'rxjs/operators';

import {NavigationStore} from './redux';

@Injectable()
export class NavigationService implements OnDestroy {
    private subscription:Subscription;
    constructor(private router:Router, private navigationStore:NavigationStore) {
        this.subscription = this.navigationStore.currentRoute
            .pipe(filter((route:ActivatedRouteSnapshot) => !!route))
            .subscribe((route:ActivatedRouteSnapshot) => {
                this.router.navigateByUrl(route.url.toString()).then();
        });
    }

    ngOnDestroy():void {
        this.subscription.unsubscribe();
    }
}

import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, Router} from '@angular/router';
import {Subscription} from 'rxjs';

import {NavigationStore} from './redux';

@Injectable()
export class NavigationService {
    private subscription:Subscription;
    constructor(private router:Router, private navigationStore:NavigationStore) {}

    init():void {
        this.subscription = this.navigationStore.requestedRoute.subscribe((route:ActivatedRouteSnapshot) => {
            console.log(route);
            // this.router.navigateByUrl(route).then();
        });
    }

    destroy():void {
        this.subscription.unsubscribe();
    }
}

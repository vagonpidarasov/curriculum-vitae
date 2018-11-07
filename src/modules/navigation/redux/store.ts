import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot} from '@angular/router';
import {Store} from '@ngrx/store';
import {Observable} from 'rxjs';

import {FeatureState} from './feature';
import {requestedRoute} from './selectors';

@Injectable()
export class NavigationStore {
    constructor(private store:Store<FeatureState>) {}

    get requestedRoute():Observable<ActivatedRouteSnapshot> {
        return this.store.select(requestedRoute);
    }
}

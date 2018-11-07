import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot} from '@angular/router';
import {Store, select} from '@ngrx/store';
import {Observable} from 'rxjs';

import {FeatureState} from './feature';
import {currentRoute} from './selectors';

@Injectable()
export class NavigationStore {
    constructor(private store:Store<FeatureState>) {}

    get currentRoute():Observable<ActivatedRouteSnapshot> {
        return this.store.pipe(select(currentRoute));
    }
}

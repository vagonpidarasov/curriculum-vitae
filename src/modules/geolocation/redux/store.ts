import {Injectable} from '@angular/core';
import {Store, select} from '@ngrx/store';
import {Observable} from 'rxjs';

import {FeatureState} from './feature';
import {position, error} from './selectors';
import {ResolveGeolocation} from './actions';

@Injectable()
export class GeolocationStore {
    constructor(private store:Store<FeatureState>) {}

    get position():Observable<Position> {
        return this.store.pipe(select(position));
    }

    get error():Observable<PositionError> {
        return this.store.pipe(select(error));
    }

    resolveGeolocation(enableHighAccuracy:boolean = false):void {
        this.store.dispatch(new ResolveGeolocation(enableHighAccuracy));
    }
}

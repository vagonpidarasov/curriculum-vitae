import {Injectable} from '@angular/core';
import {Observable, of} from 'rxjs';

import {GeolocationRepository} from './geolocation.repository';

@Injectable()
export class GeolocationRepositoryStub implements GeolocationRepository {
    getCurrentPosition(enableHighAccuracy:boolean):Observable<Position> {
        return of({
            coords: {
                accuracy: 0,
                altitude: 0,
                altitudeAccuracy: 0,
                heading: 0,
                latitude: 0,
                longitude: 0,
                speed: 0,
            },
            timestamp: Date.now(),
        });
    }
}

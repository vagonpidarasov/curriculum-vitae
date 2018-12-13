import {Injectable} from '@angular/core';
import {Observable, Observer} from 'rxjs';

import {GeolocationRepository} from 'src/modules/geolocation';

@Injectable()
export class GeolocationNavigatorRepository implements GeolocationRepository {
    getCurrentPosition(enableHighAccuracy:boolean):Observable<Position> {
        return new Observable((observer:Observer<Position>) => {
            navigator.geolocation.getCurrentPosition(
                (position:Position) => {
                    observer.next(position);
                    observer.complete();
                },
                (error:PositionError) => {
                    observer.error(error);
                },
                {enableHighAccuracy}
            );
        });
    }
}

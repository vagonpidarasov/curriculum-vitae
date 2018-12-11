import {Injectable} from '@angular/core';
import {Observable, Observer} from 'rxjs';

import {GeolocationRepository} from 'src/modules/geolocation';

@Injectable()
export class GeolocationRepositoryImplementation implements GeolocationRepository {
    getCurrentPosition(enableHighAccuracy:boolean):Observable<Position> {
        return Observable.create((observer:Observer<Position>) => {
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

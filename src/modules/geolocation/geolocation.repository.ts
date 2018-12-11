import {Observable} from 'rxjs';

export abstract class GeolocationRepository {
    abstract getCurrentPosition(enableHighAccuracy:boolean):Observable<Position>;
}

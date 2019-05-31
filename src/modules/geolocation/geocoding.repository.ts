import {Observable} from 'rxjs';

export abstract class GeocodingRepository {
    abstract getAddress(longitude:number|string, latitude:number|string):Observable<any>;
}

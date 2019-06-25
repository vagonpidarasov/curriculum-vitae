import {Observable} from 'rxjs';
import {Address} from './address.model';

export abstract class GeocodingRepository {
    abstract getAddress(longitude:number|string, latitude:number|string):Observable<Address>;
}

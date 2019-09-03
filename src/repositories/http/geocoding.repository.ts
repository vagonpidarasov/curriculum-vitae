import {Injectable} from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import {GeocodingRepository, Address} from 'src/modules/geolocation';
import {GeocodingResponse} from './geocoding-response.model';
import {config} from './here.com.config';

@Injectable()
export class GeocodingRepositoryHttp implements GeocodingRepository {
    constructor(private http:HttpClient) {}
    getAddress(longitude:number|string, latitude:string|string):Observable<Address> {
        const maxResults = 1;
        const params = new HttpParams()
            .append('prox', `${latitude},${longitude},250`)
            .append('mode', 'retrieveAddresses')
            .append('maxresults', `${maxResults}`)
            .append('gen', '9')
            .append('app_id', config.appId)
            .append('app_code', config.appCode);

        return this.http.get<GeocodingResponse>(config.reverseGeocodeApiUrl, {params}).pipe(
            map((response:GeocodingResponse) => response.Response.View[0].Result[0].Location.Address),
            map((address:any) => ({country: address.Country, city: address.City}))
        );
    }
}

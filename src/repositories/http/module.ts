import {NgModule} from '@angular/core';
import {HttpClientModule} from '@angular/common/http';

import {GeocodingRepository} from 'src/modules/geolocation';
import {GeocodingRepositoryHttp} from './geocoding.repository';

@NgModule({
    imports: [HttpClientModule],
    providers: [
        {provide: GeocodingRepository, useClass: GeocodingRepositoryHttp},
    ],
})
export class HttpRepositoryModule {}

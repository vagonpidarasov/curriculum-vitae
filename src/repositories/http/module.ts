import {NgModule} from '@angular/core';
import {HttpClientModule} from '@angular/common/http';

import {AuthenticationRepository} from 'src/modules/authentication';
import {AuthenticationRepositoryHttp} from './authentication.repository';
import {GeocodingRepository} from 'src/modules/geolocation';
import {GeocodingRepositoryHttp} from './geocoding.repository';

@NgModule({
    imports: [HttpClientModule],
    providers: [
        {provide: GeocodingRepository, useClass: GeocodingRepositoryHttp},
        // {provide: AuthenticationRepository, useClass: AuthenticationRepositoryHttp},
    ],
})
export class HttpRepositoryModule {}

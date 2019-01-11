import {NgModule} from '@angular/core';
import {GeolocationRepository} from 'src/modules/geolocation';
import {GeolocationRepositoryNavigator} from './geolocation.repository';

@NgModule({
    providers: [
        {provide: GeolocationRepository, useClass: GeolocationRepositoryNavigator},
    ],
})
export class NavigatorRepositoryModule {}

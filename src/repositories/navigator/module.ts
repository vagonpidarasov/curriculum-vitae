import {NgModule} from '@angular/core';
import {GeolocationRepository} from 'src/modules/geolocation';
import {GeolocationRepositoryNavigator} from './geolocation';

@NgModule({
    providers: [
        {provide: GeolocationRepository, useClass: GeolocationRepositoryNavigator},
    ],
})
export class NavigatorRepositoryModule {}

import {NgModule} from '@angular/core';
import {HttpClientModule} from '@angular/common/http';

import {AuthenticationRepository} from 'src/modules/authentication';
import {GeolocationRepository} from 'src/modules/geolocation';

import {AuthenticationFirebaseRepository} from './firebase';
import {GeolocationNavigatorRepository} from './other';

@NgModule({
    imports: [HttpClientModule],
    providers: [
        {provide: AuthenticationRepository, useClass: AuthenticationFirebaseRepository},
        {provide: GeolocationRepository, useClass: GeolocationNavigatorRepository},
    ],
})
export class RepositoriesModule {}

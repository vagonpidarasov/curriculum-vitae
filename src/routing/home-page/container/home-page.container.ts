import {Component, Inject, LOCALE_ID} from '@angular/core';

import {AuthenticationStore} from 'src/modules/authentication';
import {GeolocationStore} from 'src/modules/geolocation';

@Component({
    selector: 'home-page',
    templateUrl: './home-page.container.html',
    styleUrls: ['./home-page.container.scss'],
})
export class HomePageContainer {
    constructor(
        @Inject(LOCALE_ID) public locale:string,
        public authenticationStore:AuthenticationStore,
        public geolocationStore:GeolocationStore,
    ) {}
}

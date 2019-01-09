import {Component, Inject, LOCALE_ID} from '@angular/core';
import {AuthenticationStore} from 'src/modules/authentication';
import {GeolocationStore} from 'src/modules/geolocation';

@Component({
    selector: 'private-page',
    templateUrl: './private-page.container.html',
    styleUrls: ['./private-page.container.scss'],
})
export class PrivatePageContainer {
    constructor(
        @Inject(LOCALE_ID) public locale:string,
        public authenticationStore:AuthenticationStore,
        public geolocationStore:GeolocationStore,
    ) {}
}

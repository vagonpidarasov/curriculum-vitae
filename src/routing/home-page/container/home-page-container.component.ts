import {Component, Inject, LOCALE_ID} from '@angular/core';
import {AuthenticationStore} from 'src/modules/authentication';

@Component({
    selector: 'home-page',
    templateUrl: './home-page-container.component.html',
    styleUrls: ['./home-page-container.component.scss'],
})
export class HomePageContainerComponent {
    constructor(
        @Inject(LOCALE_ID) public locale:string,
        public authenticationStore:AuthenticationStore,
    ) {}
}

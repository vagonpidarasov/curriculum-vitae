import {Component} from '@angular/core';
import {AuthenticationStore} from 'src/modules/authentication';

@Component({
    selector: 'home-page',
    templateUrl: './home-page.component.html',
    styleUrls: ['./home-page.component.scss'],
})
export class HomePageComponent {
    constructor(public authenticationStore:AuthenticationStore) {}
}

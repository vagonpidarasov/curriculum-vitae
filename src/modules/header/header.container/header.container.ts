import {Component} from '@angular/core';
import {AuthenticationStore} from 'src/modules/authentication';

@Component({
    selector: 'header-container',
    templateUrl: './header.container.html',
    styleUrls: ['./header.container.scss'],
})
export class HeaderContainer {
    constructor(public authenticationStore:AuthenticationStore) {}
}

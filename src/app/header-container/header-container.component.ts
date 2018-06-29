import {Component} from '@angular/core';

import {AuthenticationStore} from 'src/modules/authentication';
import {SignInDialogService} from 'src/dialogs';

@Component({
    selector: 'header-container',
    templateUrl: './header-container.component.html',
    styleUrls: ['./header-container.component.scss'],
})
export class HeaderContainerComponent {
    constructor(
        public authenticationStore:AuthenticationStore,
        public signInDialog:SignInDialogService
    ) {}
}
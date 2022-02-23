import {Component} from '@angular/core';
import {AuthenticationStore} from 'src/modules/authentication';
import {EmployeeStore} from '../../employee/redux';

@Component({
    selector: 'header-container',
    templateUrl: './header.container.html',
    styleUrls: ['./header.container.scss'],
})
export class HeaderContainer {
    constructor(public authenticationStore:AuthenticationStore, public employeeStore:EmployeeStore) {}
}

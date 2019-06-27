import {Component} from '@angular/core';
import {EmployeeStore} from 'src/modules/employee';

@Component({
    selector: 'home-page',
    templateUrl: './home-page.container.html',
    styleUrls: ['./home-page.container.scss'],
})
export class HomePageContainer {
    constructor(public employeeStore:EmployeeStore) {}
}

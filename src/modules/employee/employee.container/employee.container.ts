import {Component} from '@angular/core';
import {EmployeeStore} from '../redux';

@Component({
    selector: 'employee-container',
    templateUrl: './employee.container.html',
    styleUrls: ['./employee.container.scss'],
})
export class EmployeeContainer {
    constructor(public employeeStore:EmployeeStore) {}
}

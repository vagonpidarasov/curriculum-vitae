import {Component} from '@angular/core';
import {EmployeeStore} from '../../redux';

@Component({
    selector: 'summary-container',
    templateUrl: './summary.container.html',
    // styleUrls: ['./employee.container.scss'],
})
export class SummaryContainer {
    constructor(public employeeStore:EmployeeStore) {}
}

import {Component} from '@angular/core';
import {EmployeeStore} from '../../redux';

@Component({
    selector: 'summary-container',
    templateUrl: './summary.container.html',
})
export class SummaryContainer {
    constructor(public employeeStore:EmployeeStore) {}
}

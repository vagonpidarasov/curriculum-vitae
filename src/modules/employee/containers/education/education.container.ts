import {Component} from '@angular/core';
import {EmployeeStore} from '../../redux';

@Component({
    selector: 'education-container',
    templateUrl: './education.container.html',
})
export class EducationContainer {
    constructor(public employeeStore:EmployeeStore) {}
}

import {Component} from '@angular/core';
import {EmployeeStore} from '../../redux';

@Component({
    selector: 'experience-container',
    templateUrl: './experience.container.html',
})
export class ExperienceContainer {
    constructor(public employeeStore:EmployeeStore) {}
}

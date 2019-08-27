import {Component} from '@angular/core';
import {EmployeeStore} from 'src/modules/employee';
import {ExperienceStore} from 'src/modules/experience';
import {EducationStore} from 'src/modules/education';

@Component({
    selector: 'print-summary-container',
    templateUrl: './print-summary.container.html',
    styleUrls: ['./print-summary.container.scss'],
})
export class PrintSummaryContainer {
    constructor(
        public employeeStore:EmployeeStore,
        public experienceStore:ExperienceStore,
        public educationStore:EducationStore,
    ) {}
}

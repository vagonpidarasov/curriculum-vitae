import {Component, Input} from '@angular/core';
import {Employee} from '../../models';

export const EXPERTISE_LIMIT = 10;

@Component({
    selector: 'employee-overview',
    templateUrl: './employee-overview.component.html',
    styleUrls: ['./employee-overview.component.scss'],
})
export class EmployeeOverviewComponent {
    @Input() employee:Employee = null;
    expertiseExpanded:boolean = false;
    expertiseLimit:number = EXPERTISE_LIMIT;

    toggleExpertise() {
        this.expertiseLimit = this.expertiseExpanded ? EXPERTISE_LIMIT : this.employee.expertiseArray.length;
        this.expertiseExpanded = !this.expertiseExpanded;
    }
}

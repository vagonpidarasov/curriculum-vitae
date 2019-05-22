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
    @Input() expertise:string[] = [];

    expertiseExpanded:boolean = false;
    expertiseLimit:number = EXPERTISE_LIMIT;

    get isToggleShown():boolean {
        return this.expertise.length > EXPERTISE_LIMIT;
    }

    toggleExpertise() {
        this.expertiseLimit = this.expertiseExpanded ? EXPERTISE_LIMIT : this.expertise.length;
        this.expertiseExpanded = !this.expertiseExpanded;
    }
}

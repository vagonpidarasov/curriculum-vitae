import {Component, Input} from '@angular/core';
import {Employee} from '../../models';

@Component({
    selector: 'employee-overview',
    templateUrl: './employee-overview.component.html',
    styleUrls: ['./employee-overview.component.scss'],
})
export class EmployeeOverviewComponent {
    @Input() employee:Employee = null;
}

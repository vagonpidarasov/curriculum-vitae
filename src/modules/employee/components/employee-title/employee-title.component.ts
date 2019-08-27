import {Component, Input} from '@angular/core';
import {Employee} from '../../employee.model';

@Component({
    selector: 'employee-title',
    templateUrl: './employee-title.component.html',
    styleUrls: ['./employee-title.component.scss'],
})
export class EmployeeTitleComponent {
    @Input() employee:Employee = null;
    @Input() address:string = null;
}

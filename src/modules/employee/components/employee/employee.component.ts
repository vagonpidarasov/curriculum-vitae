import {Component, Input} from '@angular/core';
import {Employee} from '../../models';

@Component({
    selector: 'employee',
    templateUrl: './employee.component.html',
    styleUrls: ['./employee.component.scss'],
})
export class EmployeeComponent {
    @Input() employee:Employee = null;
    @Input() address:string = null;
}

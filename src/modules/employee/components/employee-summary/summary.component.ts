import {Component, Input} from '@angular/core';
import {Experience, Employee, Education} from '../../models';

@Component({
    selector: 'employee-summary',
    templateUrl: './summary.component.html',
    styleUrls: ['./summary.component.scss'],
})
export class SummaryComponent {
    @Input() position:Experience = null;
    @Input() experience:Experience[] = [];
    @Input() employee:Employee = null;
    @Input() education:Education = null;
    @Input() address:string = null;
    @Input() expertise:string[] = [];
}

import {Component, Input} from '@angular/core';
import {Employee} from 'src/modules/employee';
import {Experience} from 'src/modules/experience';
import {Education} from 'src/modules/education';

@Component({
    selector: 'print-summary',
    templateUrl: './print-summary.component.html',
    styleUrls: ['./print-summary.component.scss'],
})
export class PrintSummaryComponent {
    @Input() position:Experience = null;
    @Input() experience:Experience[] = [];
    @Input() employee:Employee = null;
    @Input() education:Education = null;
    @Input() address:string = null;
    @Input() expertise:string[] = [];
}

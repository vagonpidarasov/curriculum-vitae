import {Component, Input} from '@angular/core';
import {Education} from '../education.model';

@Component({
    selector: 'education-title',
    templateUrl: './education-title.component.html',
    styleUrls: ['./education-title.component.scss'],
})
export class EducationTitleComponent {
    @Input() education:Education = null;
}

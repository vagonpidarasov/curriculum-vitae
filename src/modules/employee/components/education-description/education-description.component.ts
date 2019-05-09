import {Component, Input} from '@angular/core';
import {Education} from '../../models';

@Component({
    selector: 'education-description',
    templateUrl: './education-description.component.html',
    styleUrls: ['./education-description.component.scss'],
})
export class EducationDescriptionComponent {
    @Input() education:Education = null;
}

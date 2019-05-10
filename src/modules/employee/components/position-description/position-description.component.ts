import {Component, Input} from '@angular/core';
import {Experience} from '../../models';

@Component({
    selector: 'position-description',
    templateUrl: './position-description.component.html',
    styleUrls: ['./position-description.component.scss'],
})
export class PositionDescriptionComponent {
    @Input() position:Experience = null;
}

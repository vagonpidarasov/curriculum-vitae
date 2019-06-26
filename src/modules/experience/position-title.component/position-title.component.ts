import {Component, Input} from '@angular/core';
import {Experience} from '../experience.model';

@Component({
    selector: 'position-title',
    templateUrl: './position-title.component.html',
    styleUrls: ['./position-title.component.scss'],
})
export class PositionTitleComponent {
    @Input() position:Experience = null;
}

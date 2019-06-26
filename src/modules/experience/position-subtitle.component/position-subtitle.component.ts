import {Component, Input} from '@angular/core';
import {Experience} from '../experience.model';

@Component({
    selector: 'position-subtitle',
    templateUrl: './position-subtitle.component.html',
    styleUrls: ['./position-subtitle.component.scss'],
})
export class PositionSubtitleComponent {
    @Input() position:Experience = null;
}

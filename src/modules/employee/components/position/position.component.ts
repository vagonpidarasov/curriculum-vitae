import {Component, Input} from '@angular/core';
import {Experience} from '../../models';

@Component({
    selector: 'position',
    templateUrl: './position.component.html',
    styleUrls: ['./position.component.scss'],
})
export class PositionComponent {
    @Input() position:Experience = null;
    @Input() inline:boolean = false;
}

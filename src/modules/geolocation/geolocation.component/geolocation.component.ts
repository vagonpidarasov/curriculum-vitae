import {
    Component,
    Output,
    EventEmitter,
    Input,
    ChangeDetectionStrategy,
    OnChanges,
} from '@angular/core';
import {trigger, style, animate, transition} from '@angular/animations';

@Component({
    selector: 'geolocation',
    templateUrl: './geolocation.component.html',
    styleUrls: ['./geolocation.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    animations: [
        trigger('onEnter', [
            transition(':enter', [
                style({ opacity: 0 }),
                animate('0.5s', style({ opacity: 1 })),
            ]),
        ]),
    ],
})
export class GeolocationComponent implements OnChanges {
    @Input() error:any = null;
    @Input() position:any = null;

    @Output() getGeolocationRequest = new EventEmitter();

    buttonDisabled:boolean = false;

    get longitude():number {
        return this.position ? (this.position).coords.longitude : null;
    }

    get latitude():number {
        return this.position ? (this.position).coords.latitude : null;
    }

    ngOnChanges() {
        this.buttonDisabled = false;
    }

    getGeolocation() {
        this.buttonDisabled = true;
        this.getGeolocationRequest.emit(null);
    }
}

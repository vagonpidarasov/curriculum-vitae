import {
    Component,
    Output,
    EventEmitter,
    Input,
    ChangeDetectionStrategy,
    SimpleChanges,
    OnChanges,
} from '@angular/core';

@Component({
    selector: 'geolocation',
    templateUrl: './geolocation.component.html',
    styleUrls: ['./geolocation.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class GeolocationComponent implements OnChanges{
    @Input() error:any = null;
    @Input() position:any = null;

    @Output() getGeolocationRequest = new EventEmitter();

    buttonDisabled:boolean = false;

    get longitude():number {
        return (<Position>this.position).coords.longitude;
    }

    get latitude():number {
        return (<Position>this.position).coords.latitude;
    }

    ngOnChanges(changes:SimpleChanges) {
        this.buttonDisabled = false;
    }

    getGeolocation() {
        this.buttonDisabled = true;
        this.getGeolocationRequest.emit(null);
    }
}

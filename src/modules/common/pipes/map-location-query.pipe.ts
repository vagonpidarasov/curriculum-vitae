import {Pipe, PipeTransform} from '@angular/core';

@Pipe({name: 'mapLocationQuery'})
export class MapLocationQuery implements PipeTransform {
    transform(value:any):string {
        return `https://www.google.com/maps/search/?api=1&query=${value.lat},${value.lon}`;
    }
}

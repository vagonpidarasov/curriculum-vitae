import {Pipe, PipeTransform} from '@angular/core';

@Pipe({name: 'monthDesctruct'})
export class MonthDesctructPipe implements PipeTransform {
    transform(value:number):string {
        const years = Math.floor(value / 12);
        const months = value % 12;
        const yearSuffix = years > 1 ? 's' : '';

        if (years === 0) {
            return `${months} months`;
        }

        if (months === 0) {
            return `${years} year${yearSuffix}`;
        }

        return `${years}y ${months}m`;

    }
}

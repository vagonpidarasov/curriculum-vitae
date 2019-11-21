import {Pipe, PipeTransform} from '@angular/core';

@Pipe({name: 'dateIncr'})
export class DateIncrPipe implements PipeTransform {
    transform(value:string, month:number):Date {
        const d = new Date(value);
        const m = d.getMonth();
        d.setMonth(m + month);
        return d;
    }
}

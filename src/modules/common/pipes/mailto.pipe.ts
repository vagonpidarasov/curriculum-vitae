import {Pipe, PipeTransform} from '@angular/core';

@Pipe({name: 'mailto'})
export class MailToPipe implements PipeTransform {
    transform(value:string):string {
        return `mailto:${value}`;
    }
}

import {Pipe, PipeTransform} from '@angular/core';

@Pipe({name: 'backgroundImageUrl'})
export class BackgroundUrlPipe implements PipeTransform {
    transform(value:string):string {
        return `url(${value})`;
    }
}

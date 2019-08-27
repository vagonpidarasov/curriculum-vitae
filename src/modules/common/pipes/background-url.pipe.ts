import {Pipe, PipeTransform} from '@angular/core';
import {toBackgroundUrl} from '../to-background-url';

@Pipe({name: 'backgroundImageUrl'})
export class BackgroundUrlPipe implements PipeTransform {
    transform(value:string):string {
        return toBackgroundUrl(value);
    }
}

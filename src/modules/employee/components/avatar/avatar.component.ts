import {Component, Input} from '@angular/core';
import {toAvatarUrl} from 'src/modules/contentful';

@Component({
    selector: 'avatar',
    templateUrl: './avatar.component.html',
    styleUrls: ['./avatar.component.scss'],
})
export class AvatarComponent {
    @Input() avatarUrl:string = null;
    avatarLoaded:boolean = false;
    avatarFailed:boolean = false;

    get isInProgress():boolean {
        return !this.avatarLoaded && !this.avatarFailed;
    }

    getSrcSet(format:string):string {
        return [
            `${toAvatarUrl(this.avatarUrl, 300, 300, format)} 1x`,
            `${toAvatarUrl(this.avatarUrl, 600, 600, format)} 2x`,
            `${toAvatarUrl(this.avatarUrl, 900, 900, format)} 3x`,
        ].join(',');
    }
}

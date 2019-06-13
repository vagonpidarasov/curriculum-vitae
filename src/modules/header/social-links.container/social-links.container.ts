import {Component} from '@angular/core';
import {ImageLinksStore} from 'src/modules/image-links';

@Component({
    selector: 'social',
    templateUrl: './social-links.container.html',
    styleUrls: ['./social-links.container.scss'],
})
export class SocialLinksContainer {
    constructor(public imageLinksStore:ImageLinksStore) {}
}

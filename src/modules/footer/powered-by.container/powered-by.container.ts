import {Component} from '@angular/core';
import {ImageLinksStore} from 'src/modules/image-links';

@Component({
    selector: 'footer',
    templateUrl: './powered-by.container.html',
    styleUrls: ['./powered-by.container.scss'],
})
export class PoweredByContainer {
    constructor(public imageLinksStore:ImageLinksStore) {}
}

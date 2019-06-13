import {Injectable} from '@angular/core';
import {Store, select} from '@ngrx/store';
import {Observable} from 'rxjs';

import {FeatureState} from './feature';
import {footerLinks, headerLinks} from './selectors';
import {ImageLink} from '../image-link.type';

@Injectable()
export class ImageLinksStore {
    constructor(private store:Store<FeatureState>) {}

    get footerLinks():Observable<ImageLink[]> {
        return this.store.pipe(select(footerLinks));
    }

    get headerLinks():Observable<ImageLink[]> {
        return this.store.pipe(select(headerLinks));
    }
}

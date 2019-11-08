import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';

import {ImageLink, LinksRepository} from 'src/modules/image-links';
import {ContentfulClient} from 'src/modules/contentful';

import {LINK_CONTENT_TYPE} from './content-types';

@Injectable()
export class LinksRepositoryContentful implements LinksRepository {
    constructor(private client:ContentfulClient) {}

    getLinks():Observable<ImageLink[]> {
        return (this.client.getEntries<ImageLink>(LINK_CONTENT_TYPE) as Observable<ImageLink[]>);
    }
}

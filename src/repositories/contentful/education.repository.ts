import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';

import {EducationRepository, Education} from 'src/modules/education';
import {ContentfulClient} from 'src/modules/contentful';

import {EDUCATION_CONTENT_TYPE} from './content-types';

@Injectable()
export class EducationRepositoryContentful implements EducationRepository {
    constructor(private client:ContentfulClient) {}

    getEducationEntries():Observable<Education[]> {
        return <Observable<Education[]>>this.client.getEntries<Education>(EDUCATION_CONTENT_TYPE);
    }
}

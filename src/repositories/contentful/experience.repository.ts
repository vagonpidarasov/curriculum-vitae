import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';

import {ExperienceRepository, Experience} from 'src/modules/experience';
import {ContentfulClient} from 'src/modules/contentful';

import {EXPERIENCE_CONTENT_TYPE} from './content-types';

@Injectable()
export class ExperienceRepositoryContentful implements ExperienceRepository {
    constructor(private client:ContentfulClient) {}

    getExperienceEntries():Observable<Experience[]> {
        return <Observable<Experience[]>>this.client.getEntries<Experience>(EXPERIENCE_CONTENT_TYPE);
    }
}

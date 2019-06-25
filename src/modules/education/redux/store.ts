import {Injectable} from '@angular/core';
import {Store, select} from '@ngrx/store';
import {Observable} from 'rxjs';

import {FeatureState} from './feature';
import {education} from './selectors';
import {Education} from '../education.model';

@Injectable()
export class EducationStore {
    constructor(private store:Store<FeatureState>) {}

    get education():Observable<Education> {
        return this.store.pipe(select(education));
    }
}

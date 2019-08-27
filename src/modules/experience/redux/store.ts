import {Injectable} from '@angular/core';
import {Store, select} from '@ngrx/store';
import {Observable} from 'rxjs';

import {FeatureState} from './feature';
import {experience, currentPosition} from './selectors';
import {Experience} from '../experience.model';

@Injectable()
export class ExperienceStore {
    constructor(private store:Store<FeatureState>) {}

    get experience():Observable<Experience[]> {
        return this.store.pipe(select(experience));
    }

    get currentPosition():Observable<Experience> {
        return this.store.pipe(select(currentPosition));
    }
}

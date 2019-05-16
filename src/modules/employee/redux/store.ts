import {Injectable} from '@angular/core';
import {Store, select} from '@ngrx/store';
import {Observable} from 'rxjs';

import {FeatureState} from './feature';
import {employee, avatarUrl, education, experience, expertise, currentPosition} from './selectors';
import {ResolveEmployees, SaveAsPdf} from './actions';
import {Employee, Education, Experience} from '../models';

@Injectable()
export class EmployeeStore {
    constructor(private store:Store<FeatureState>) {}

    get employee():Observable<Employee> {
        return this.store.pipe(select(employee));
    }

    get education():Observable<Education> {
        return this.store.pipe(select(education));
    }

    get experience():Observable<Experience[]> {
        return this.store.pipe(select(experience));
    }

    get currentPosition():Observable<Experience> {
        return this.store.pipe(select(currentPosition));
    }

    get avatarUrl():Observable<string> {
        return this.store.pipe(select(avatarUrl));
    }

    get expertise():Observable<string[]> {
        return this.store.pipe(select(expertise));
    }

    resolveEmployees():void {
        this.store.dispatch(new ResolveEmployees());
    }

    saveAsPdf():void {
        this.store.dispatch(new SaveAsPdf());
    }
}

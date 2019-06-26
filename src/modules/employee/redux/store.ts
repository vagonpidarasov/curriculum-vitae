import {Injectable} from '@angular/core';
import {Store, select} from '@ngrx/store';
import {Observable} from 'rxjs';

import {FeatureState} from './feature';
import {employee, avatarUrl, expertise, address, filename} from './selectors';
import {Employee} from '../models';

@Injectable()
export class EmployeeStore {
    constructor(private store:Store<FeatureState>) {}

    get employee():Observable<Employee> {
        return this.store.pipe(select(employee));
    }

    get avatarUrl():Observable<string> {
        return this.store.pipe(select(avatarUrl));
    }

    get expertise():Observable<string[]> {
        return this.store.pipe(select(expertise));
    }

    get address():Observable<string> {
        return this.store.pipe(select(address));
    }

    get filename():Observable<string> {
        return this.store.pipe(select(filename));
    }

}

import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';

import {EmployeeRepository, Employee, Education} from 'src/modules/employee';
import {ContentfulClient} from 'src/modules/contentful';

import {EMPLOYEE_CONTENT_TYPE, EDUCATION_CONTENT_TYPE} from './content-types';

@Injectable()
export class EmployeeRepositoryContentful implements EmployeeRepository {
    constructor(private client:ContentfulClient) {}

    getEmployeeEntries():Observable<Employee[]> {
        return this.client.getEntries<Employee>(EMPLOYEE_CONTENT_TYPE);
    }

    getEducationEntries():Observable<Education[]> {
        return this.client.getEntries<Education>(EDUCATION_CONTENT_TYPE);
    }
}

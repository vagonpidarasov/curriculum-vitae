import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';

import {EmployeeRepository, Employee} from 'src/modules/employee';
import {ContentfulClient} from 'src/modules/contentful';

import {EMPLOYEE_CONTENT_TYPE} from './content-types';

@Injectable()
export class EmployeeRepositoryContentful implements EmployeeRepository {
    constructor(private client:ContentfulClient) {}

    getEmployeeEntries():Observable<Employee[]> {
        return (this.client.getEntries<Employee>(EMPLOYEE_CONTENT_TYPE) as Observable<Employee[]>);
    }
}

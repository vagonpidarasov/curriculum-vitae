import {Observable} from 'rxjs';
import {Employee, Education} from './models';

export abstract class EmployeeRepository {
    abstract getEmployeeEntries():Observable<Employee[]>;
    abstract getEducationEntries():Observable<Education[]>;
}

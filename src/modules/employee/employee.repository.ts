import {Observable} from 'rxjs';
import {Employee} from './models';

export abstract class EmployeeRepository {
    abstract getEmployeeEntries():Observable<Employee[]>;
}

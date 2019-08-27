import {Observable} from 'rxjs';
import {Employee} from './employee.model';

export abstract class EmployeeRepository {
    abstract getEmployeeEntries():Observable<Employee[]>;
}

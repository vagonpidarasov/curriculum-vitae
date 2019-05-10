import {Observable} from 'rxjs';
import {Employee, Education, Experience} from './models';

export abstract class EmployeeRepository {
    abstract getEmployeeEntries():Observable<Employee[]>;
    abstract getEducationEntries():Observable<Education[]>;
    abstract getExperienceEntries():Observable<Experience[]>;
}

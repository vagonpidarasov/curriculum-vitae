import {Observable} from 'rxjs';
import {Education} from './education.model';

export abstract class EducationRepository {
    abstract getEducationEntries():Observable<Education[]>;
}

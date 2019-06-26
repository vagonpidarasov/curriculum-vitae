import {Observable} from 'rxjs';
import {Experience} from './experience.model';

export abstract class ExperienceRepository {
    abstract getExperienceEntries():Observable<Experience[]>;
}

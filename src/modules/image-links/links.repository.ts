import {Observable} from 'rxjs';
import {ImageLink} from './image-link.type';

export abstract class LinksRepository {
    abstract getLinks():Observable<ImageLink[]>;
}

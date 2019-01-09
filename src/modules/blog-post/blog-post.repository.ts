import {Observable} from 'rxjs';

export abstract class BlogPostRepository {
    abstract getBlogPosts():Observable<any[]>;
}

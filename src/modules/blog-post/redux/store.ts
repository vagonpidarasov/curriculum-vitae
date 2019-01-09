import {Injectable} from '@angular/core';
import {Store, select} from '@ngrx/store';
import {Observable} from 'rxjs';

import {FeatureState} from './feature';
import {blogPosts} from './selectors';
import {ResolvePosts} from './actions';

@Injectable()
export class BlogPostStore {
    constructor(private store:Store<FeatureState>) {}

    get blogPosts():Observable<any[]> {
        return this.store.pipe(select(blogPosts));
    }

    resolvePosts():void {
        this.store.dispatch(new ResolvePosts());
    }
}

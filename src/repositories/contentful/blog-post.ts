import {Injectable} from '@angular/core';
import {Observable, Observer} from 'rxjs';

import {BlogPostRepository} from 'src/modules/blog-post';
import {ContentfulClient} from './client';
import {Entry, EntryCollection} from 'contentful';

@Injectable()
export class BlogPostRepositoryContentful implements  BlogPostRepository {
    constructor(private client:ContentfulClient) {}

    getBlogPosts():Observable<any[]> {
        return new Observable((observer:Observer<any[]>) => {
            this.client.defaultSpace.getEntries()
                .then((response:EntryCollection<any[]>) => {
                    observer.next(response.items.map((item:Entry<any[]>) => item.fields));
                    observer.complete();
                })
                .catch((e:any) => observer.error(e));
        });
    }
}

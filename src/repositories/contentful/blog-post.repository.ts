import {Injectable} from '@angular/core';
import {EntryCollection, createClient, ContentfulClientApi} from 'contentful';
import {Observable, Observer} from 'rxjs';

import {BlogPostRepository, BlogPost} from 'src/modules/blog-post';
import {toItems} from 'src/modules/contentful';
import {config} from './config';

@Injectable()
export class BlogPostRepositoryContentful implements  BlogPostRepository {
    private client:ContentfulClientApi = createClient(config);

    getBlogPosts():Observable<BlogPost[]> {
        return new Observable((observer:Observer<BlogPost[]>) => {
            this.client.getEntries({content_type: 'blogPostEntry'})
                .then((response:EntryCollection<BlogPost>) => {
                    observer.next(toItems<BlogPost>(response));
                    observer.complete();
                })
                .catch((e:any) => observer.error(e));
        });
    }
}

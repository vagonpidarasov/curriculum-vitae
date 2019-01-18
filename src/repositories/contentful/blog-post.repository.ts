import {Injectable} from '@angular/core';
import {EntryCollection, createClient, ContentfulClientApi} from 'contentful';
import {Observable, Observer} from 'rxjs';

import {BlogPostRepository, BlogPost} from 'src/modules/blog-post';
import {config} from './config';
import {toBlogPosts} from './to-blog-post';
import {BlogPostEntry} from './blog-post-entry';
import {BLOG_POST_CONTENT_TYPE} from './content-types';

@Injectable()
export class BlogPostRepositoryContentful implements BlogPostRepository {
    private client:ContentfulClientApi = createClient(config);

    getBlogPosts():Observable<BlogPost[]> {
        return new Observable((observer:Observer<BlogPost[]>) => {
            this.client.getEntries<BlogPostEntry>({content_type: BLOG_POST_CONTENT_TYPE})
                .then((response:EntryCollection<BlogPostEntry>) => {
                    observer.next(toBlogPosts(response));
                    observer.complete();
                })
                .catch((e:any) => observer.error(e));
        });
    }
}

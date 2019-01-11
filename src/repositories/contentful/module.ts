import {NgModule} from '@angular/core';

import {BlogPostRepository} from 'src/modules/blog-post';
import {BlogPostRepositoryContentful} from './blog-post.repository';

@NgModule({
    providers: [
        {provide: BlogPostRepository, useClass: BlogPostRepositoryContentful},

    ],
})
export class ContentfulRepositoryModule {}

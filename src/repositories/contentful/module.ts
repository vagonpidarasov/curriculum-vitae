import {NgModule} from '@angular/core';

import {BlogPostRepository} from 'src/modules/blog-post';
import {BlogPostRepositoryContentful} from './blog-post';

import {ContentfulClient} from './client';

@NgModule({
    providers: [
        ContentfulClient,
        {provide: BlogPostRepository, useClass: BlogPostRepositoryContentful},

    ],
})
export class ContentfulRepositoryModule {}

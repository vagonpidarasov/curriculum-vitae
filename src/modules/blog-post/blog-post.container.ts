import {Component, OnInit} from '@angular/core';

import {BlogPostStore} from './redux';

@Component({
    selector: 'blog-post-list',
    templateUrl: './blog-post.container.html',
})
export class BlogPostContainer implements OnInit {
    constructor(
        public blogPostStore:BlogPostStore,
    ) {}

    ngOnInit() {
        this.blogPostStore.resolvePosts();
    }
}

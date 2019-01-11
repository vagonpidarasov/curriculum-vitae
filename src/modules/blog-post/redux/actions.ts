import {Action, ActionWithPayload} from 'src/modules/redux-helpers';
import {BlogPost} from '../blog-post.interface';
import {
    RESOLVE_BLOG_POSTS,
    RESOLVE_BLOG_POSTS_FAIL,
    RESOLVE_BLOG_POSTS_SUCCESS,
    SET_BLOG_POSTS,
} from './action-types';

export class ResolvePosts implements Action {
    readonly type = RESOLVE_BLOG_POSTS;
}

export class ResolvePostsSuccess implements Action {
    readonly type = RESOLVE_BLOG_POSTS_SUCCESS;
    constructor(public payload:BlogPost[]) {}
}

export class ResolvePostsFail implements Action {
    readonly type = RESOLVE_BLOG_POSTS_FAIL;
    constructor(public payload:any) {}
}

export class SetPosts implements ActionWithPayload {
    readonly type = SET_BLOG_POSTS;
    constructor(public payload:BlogPost[]) {}
}

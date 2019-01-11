import {Injectable} from '@angular/core';
import {Actions, Effect, ofType} from '@ngrx/effects';
import {Observable, of} from 'rxjs';
import {catchError, map, exhaustMap} from 'rxjs/operators';

import {Action, toPayload} from 'src/modules/redux-helpers';

import {BlogPost} from '../blog-post.interface';
import {BlogPostRepository} from '../blog-post.repository';
import {ResolvePostsFail, ResolvePostsSuccess, SetPosts} from './actions';
import {RESOLVE_BLOG_POSTS_SUCCESS, RESOLVE_BLOG_POSTS} from './action-types';

@Injectable()
export class BlogPostEffects {
    private getBlogPosts(payload:boolean):Observable<Action> {
        return this.blogPostRepository.getBlogPosts().pipe(
            map((response:any[]) => new ResolvePostsSuccess(response)),
            catchError((e:PositionError) => of(new ResolvePostsFail(e))),
        );
    }

    constructor(
        private actions$:Actions,
        private blogPostRepository:BlogPostRepository,
    ) {}

    @Effect() ResolveBlogPostsEffect$:Observable<Action> = this.actions$.pipe(
        ofType(RESOLVE_BLOG_POSTS),
        map(toPayload),
        exhaustMap((payload:any) => this.getBlogPosts(payload)),
    );

    @Effect() ResolveBlogPostsSuccessEffect$:Observable<Action> = this.actions$.pipe(
        ofType(RESOLVE_BLOG_POSTS_SUCCESS),
        map(toPayload),
        map((payload:BlogPost[]) => new SetPosts(payload)),
    );
}

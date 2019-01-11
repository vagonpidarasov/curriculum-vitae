import {Action, ActionWithPayload, ReducerType, reduce} from 'src/modules/redux-helpers';
import {BlogPostState} from './state';
import {setBlogPosts} from './reducers';
import {SET_BLOG_POSTS} from './action-types';

export const actionReducerMap = new Map<string, ReducerType<BlogPostState>>([
    [SET_BLOG_POSTS, setBlogPosts],
]);

export function reducer(state:BlogPostState, action:Action|ActionWithPayload):BlogPostState {
    return reduce<BlogPostState>(
        () => new BlogPostState(),
        actionReducerMap,
        state,
        action,
    );
}

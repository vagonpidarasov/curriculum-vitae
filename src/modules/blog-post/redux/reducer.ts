import {Action} from '@ngrx/store';
import {ReducerType} from 'src/modules/redux-helpers';
import {BlogPostState} from './state';
import {SetPosts} from './actions';
import {SET} from './action-types';

const actions = new Map<string, ReducerType<BlogPostState>>();

actions.set(SET, setBlogPosts);

export function BlogPostReducer(
    state:BlogPostState = new BlogPostState(),
    action:Action,
):BlogPostState {
    const actionMethod = actions.get(action.type);
    return actionMethod ? actionMethod(Object.assign(new BlogPostState(), state), action) : state;
}

export function setBlogPosts(state:BlogPostState, action:SetPosts) {
    state.blogPosts = [...action.payload];
    return state;
}

import {BlogPostState} from './state';
import {SetPosts} from './actions';

export function setBlogPosts(state:BlogPostState, action:SetPosts) {
    state.blogPosts = [...action.payload];
    return state;
}

import {toThumbnailUrl} from 'src/modules/contentful';
import {BlogPostState} from './state';
import {SetPosts} from './actions';

export function setBlogPosts(state:BlogPostState, action:SetPosts) {
    state.blogPosts = action.payload.map((blogPost) => ({
        ...blogPost,
        avatarThumbnailURL: toThumbnailUrl(blogPost.avatar),
    }));
    return state;
}

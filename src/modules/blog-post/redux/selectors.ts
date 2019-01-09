import {FeatureState, FeatureStateName} from './feature';
import {BlogPostState} from './state';

export function getState(state:FeatureState):BlogPostState {
    return <BlogPostState>state[FeatureStateName];
}

export function blogPosts(state:FeatureState):any[] {
    return getState(state).blogPosts;
}

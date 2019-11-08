import {FeatureState, FeatureStateName} from './feature';
import {ImageLinksState} from './state';
import {ImageLink} from '../image-link.type';

export function getState(state:FeatureState):ImageLinksState {
    return state[FeatureStateName];
}

export function footerLinks(state:FeatureState):ImageLink[] {
    return getState(state).footerLinks;
}

export function headerLinks(state:FeatureState):ImageLink[] {
    return getState(state).headerLinks;
}

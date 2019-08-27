import {ImageLinksState} from './state';
import {SetFooterLinks, SetHeaderLinks} from './actions';

export function setHeaderLinks(state:ImageLinksState, action:SetHeaderLinks) {
    state.headerLinks = [...action.payload];
    return state;
}

export function setFooterLinks(state:ImageLinksState, action:SetFooterLinks) {
    state.footerLinks = [...action.payload];
    return state;
}

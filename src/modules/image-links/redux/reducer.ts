import {Action, ReducerType, reduce} from 'src/modules/redux';
import {ImageLinksState} from './state';
import {setFooterLinks, setHeaderLinks} from './reducers';
import {SET_HEADER_LINKS, SET_FOOTER_LINKS} from './action-types';

export const actionReducerMap = new Map<string, ReducerType<ImageLinksState>>([
    [SET_HEADER_LINKS, setHeaderLinks],
    [SET_FOOTER_LINKS, setFooterLinks],
]);

export function reducer(state:ImageLinksState, action:Action):ImageLinksState {
    return reduce<ImageLinksState>(
        () => new ImageLinksState(),
        actionReducerMap,
        state,
        action,
    );
}

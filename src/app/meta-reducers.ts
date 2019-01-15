import {ActionReducer, MetaReducer} from '@ngrx/store';
import {localStorageSync} from 'ngrx-store-localstorage';

import {FeatureStateName as authState} from 'src/modules/authentication';
import {FeatureStateName as blopostState} from 'src/modules/blog-post';

export function localStorageSyncReducer(reducer:ActionReducer<any>):ActionReducer<any> {
    return localStorageSync({
        keys: [authState, blopostState],
        rehydrate: true,
    })(reducer);
}
export const metaReducers:Array<MetaReducer<any, any>> = [localStorageSyncReducer];

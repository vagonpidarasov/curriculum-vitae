import {ActionReducer, MetaReducer} from '@ngrx/store';
import {localStorageSync} from 'ngrx-store-localstorage';

import {FeatureStateName as authStateKey} from 'src/modules/authentication';

export function localStorageSyncReducer(reducer:ActionReducer<any>):ActionReducer<any> {
    return localStorageSync({
        keys: [authStateKey],
        rehydrate: true,
    })(reducer);
}
export const metaReducers:Array<MetaReducer<any, any>> = [localStorageSyncReducer];

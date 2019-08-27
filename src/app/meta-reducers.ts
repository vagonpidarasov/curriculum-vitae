import {ActionReducer, MetaReducer} from '@ngrx/store';
import {localStorageSync} from 'ngrx-store-localstorage';

import {FeatureStateName as authStateKey} from 'src/modules/authentication';
import {FeatureStateName as employeeStateKey} from 'src/modules/employee';
import {FeatureStateName as imageLinksStateKey} from 'src/modules/image-links';

export function localStorageSyncReducer(reducer:ActionReducer<any>):ActionReducer<any> {
    return localStorageSync({
        keys: [authStateKey, employeeStateKey, imageLinksStateKey],
        rehydrate: true,
    })(reducer);
}
export const metaReducers:Array<MetaReducer<any, any>> = [localStorageSyncReducer];

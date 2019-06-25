import {ActionReducer, MetaReducer} from '@ngrx/store';
import {localStorageSync} from 'ngrx-store-localstorage';

import {FeatureStateName as authStateKey} from 'src/modules/authentication';
import {FeatureStateName as employeeStateKey} from 'src/modules/employee';

export function localStorageSyncReducer(reducer:ActionReducer<any>):ActionReducer<any> {
    return localStorageSync({
        keys: [authStateKey, employeeStateKey],
        rehydrate: true,
    })(reducer);
}
export const metaReducers:Array<MetaReducer<any, any>> = [localStorageSyncReducer];

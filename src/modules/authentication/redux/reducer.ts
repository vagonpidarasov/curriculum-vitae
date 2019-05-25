import {Action, ReducerType, reduce} from 'src/modules/redux';
import {AuthenticationState} from './state';

import {
    SET_PROGRESS,
    SET_ERROR,
    AUTHENTICATION_REQUEST,
    AUTHENTICATION_DISCARD,
    SET_USER_DATA,
    RESET_USER_DATA,
    AUTHENTICATION_FALLBACK,
} from './action-types';

import {
    setUserData,
    resetUserData,
    setProgress,
    setError,
    authRequest,
    authDiscard,
    authFallback,
} from './reducers';

export const actionReducerMap = new Map<string, ReducerType<AuthenticationState>>([
    [SET_USER_DATA, setUserData],
    [RESET_USER_DATA, resetUserData],
    [SET_PROGRESS, setProgress],
    [SET_ERROR, setError],
    [AUTHENTICATION_REQUEST, authRequest],
    [AUTHENTICATION_DISCARD, authDiscard],
    [AUTHENTICATION_FALLBACK, authFallback],
]);

export function reducer(state:AuthenticationState, action:Action):AuthenticationState {
    return reduce<AuthenticationState>(
        () => new AuthenticationState(),
        actionReducerMap,
        state,
        action,
    );
}

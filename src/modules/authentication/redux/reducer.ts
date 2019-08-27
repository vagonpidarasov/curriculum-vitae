import {Action, ReducerType, reduce} from 'yet-another-redux-helpers';
import {AuthenticationState} from './state';

import {
    SET_PROGRESS,
    SET_ERROR,
    SET_AUTHENTICATION_REQUEST,
    SET_AUTHENTICATION_DISCARD,
    SET_USER_DATA,
    RESET_USER_DATA,
} from './action-types';

import {
    setUserData,
    resetUserData,
    setProgress,
    setError,
    setAuthRequest,
    setAuthDiscard,
} from './reducers';

export const actionReducerMap = new Map<string, ReducerType<AuthenticationState>>([
    [SET_USER_DATA, setUserData],
    [RESET_USER_DATA, resetUserData],
    [SET_PROGRESS, setProgress],
    [SET_ERROR, setError],
    [SET_AUTHENTICATION_REQUEST, setAuthRequest],
    [SET_AUTHENTICATION_DISCARD, setAuthDiscard],
]);

export function reducer(state:AuthenticationState, action:Action):AuthenticationState {
    return reduce<AuthenticationState>(
        () => new AuthenticationState(),
        actionReducerMap,
        state,
        action,
    );
}

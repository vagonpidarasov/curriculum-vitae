import {Action, ActionWithPayload, ReducerType, reduce} from 'src/modules/redux-helpers';
import {AuthenticationState} from './state';

import {
    SET_PROGRESS,
    SET_ERROR,
    AUTHENTICATION_REQUEST,
    AUTHENTICATION_DISCARD,
    SET_USER_DATA,
    RESET_USER_DATA,
} from './action-types';

import {
    setUserData,
    resetUserData,
    setProgress,
    setError,
    authRequest,
    authDiscard,
} from './reducers';

export const actionReducerMap = new Map<string, ReducerType<AuthenticationState>>([
    [SET_USER_DATA, setUserData],
    [RESET_USER_DATA, resetUserData],
    [SET_PROGRESS, setProgress],
    [SET_ERROR, setError],
    [AUTHENTICATION_REQUEST, authRequest],
    [AUTHENTICATION_DISCARD, authDiscard],
]);

export function reducer(state:AuthenticationState, action:Action|ActionWithPayload):AuthenticationState {
    return reduce<AuthenticationState>(
        () => new AuthenticationState(),
        actionReducerMap,
        state,
        action,
    );
}

import {Action, ActionWithPayload, ReducerType, reduce} from 'src/modules/redux-helpers';
import {AuthenticationState} from './state';

import {
    SIGN_IN_SUCCESS,
    SIGN_OUT,
    SET_PROGRESS,
    SET_ERROR,
    AUTHENTICATION_REQUEST,
    AUTHENTICATION_DISCARD,
} from './action-types';

import {
    signInSuccess,
    signOut,
    setProgress,
    setError,
    authRequest,
    authDiscard,
} from './reducers';

export const actionReducerMap = new Map<string, ReducerType<AuthenticationState>>([
    [SIGN_IN_SUCCESS, signInSuccess],
    [SIGN_OUT, signOut],
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

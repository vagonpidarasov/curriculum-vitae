import {Action} from '@ngrx/store';
import {ReducerType} from 'src/modules/redux-helpers';
import {AuthenticationState} from './state';
import {
    AuthenticationActions,
    SignInSuccess,
    SignOut,
    SetProgress,
    SetError,
    AuthenticationRequest,
    AuthenticationDiscard,
} from './actions';

const actions:Map<string, ReducerType<AuthenticationState>> = new Map<string, ReducerType<AuthenticationState>>();

actions.set(AuthenticationActions.AUTHENTICATION_DISCARD, authDiscard);
actions.set(AuthenticationActions.SIGN_IN_SUCCESS, signInSuccess);
actions.set(AuthenticationActions.SIGN_OUT, signOut);
actions.set(AuthenticationActions.SET_PROGRESS, setProgress);
actions.set(AuthenticationActions.SET_ERROR, setError);
actions.set(AuthenticationActions.AUTHENTICATION_REQUEST, authRequest);

export function AuthenticationReducer(
    state:AuthenticationState = new AuthenticationState(),
    action:Action
):AuthenticationState {
    const actionMethod = actions.get(action.type);
    return actionMethod ? actionMethod(Object.assign(new AuthenticationState(), state), action) : state;
}

export function signInSuccess(state:AuthenticationState, action:SignInSuccess) {
    state.isAuthenticated = true;
    state.username = action.payload.username;
    return state;
}

export function signOut(state:AuthenticationState, action:SignOut) {
    state.isAuthenticated = false;
    state.username = null;
    return state;
}

export function setProgress(state:AuthenticationState, action:SetProgress) {
    state.isInProgress = action.payload;
    return state;
}

export function setError(state:AuthenticationState, action:SetError) {
    state.error = action.payload;
    return state;
}

export function authRequest(state:AuthenticationState, action:AuthenticationRequest) {
    state.authenticationRequest = (new Date()).getTime();
    return state;
}

export function authDiscard(state:AuthenticationState, action:AuthenticationDiscard) {
    state.authenticationRequest = 0;
    return state;
}

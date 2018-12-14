import {AuthenticationState} from './state';
import {
    SignInSuccess,
    SignOut,
    SetProgress,
    SetError,
    AuthenticationRequest,
    AuthenticationDiscard,
} from './actions';

export function signInSuccess(state:AuthenticationState, action:SignInSuccess):AuthenticationState {
    state.isAuthenticated = true;
    state.username = action.payload.username;
    return state;
}

export function signOut(state:AuthenticationState, action:SignOut):AuthenticationState {
    state.isAuthenticated = false;
    state.username = null;
    return state;
}

export function setProgress(state:AuthenticationState, action:SetProgress):AuthenticationState {
    state.isInProgress = action.payload;
    return state;
}

export function setError(state:AuthenticationState, action:SetError):AuthenticationState {
    state.error = action.payload;
    return state;
}

export function authRequest(state:AuthenticationState, action:AuthenticationRequest):AuthenticationState {
    state.authenticationRequest = action.payload;
    return state;
}

export function authDiscard(state:AuthenticationState, action:AuthenticationDiscard):AuthenticationState {
    state.authenticationRequest = null;
    return state;
}

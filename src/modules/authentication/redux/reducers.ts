import {AuthenticationState} from './state';
import {UserData} from '../types';
import {
    SetUserData,
    SetProgress,
    SetError,
    SetAuthenticationRequest,
    SetAuthenticationDiscard,
    ResetUserData,
} from './actions';

export function setUserData(state:AuthenticationState, action:SetUserData):AuthenticationState {
    state.isAuthenticated = true;
    state.userData = Object.assign(new UserData(), action.payload);
    return state;
}

export function resetUserData(state:AuthenticationState, action:ResetUserData):AuthenticationState {
    state.isAuthenticated = false;
    state.userData = null;
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

export function setAuthRequest(state:AuthenticationState, action:SetAuthenticationRequest):AuthenticationState {
    state.authenticationRequest = action.payload;
    return state;
}

export function setAuthDiscard(state:AuthenticationState, action:SetAuthenticationDiscard):AuthenticationState {
    state.authenticationDiscard = action.payload;
    return state;
}

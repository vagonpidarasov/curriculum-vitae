import {Action} from '@ngrx/store';
import {ReducerType} from 'src/modules/redux-helpers';
import {AuthenticationState} from './state';
import {SignInSuccess, SignOut, SetProgress, AuthenticationActions, SetError} from './actions';

const actions:Map<string, ReducerType<AuthenticationState>> = new Map<string, ReducerType<AuthenticationState>>();

export function AuthenticationReducer(
    state:AuthenticationState = new AuthenticationState(),
    action:Action
):AuthenticationState {
    const actionMethod = actions.get(action.type);
    return actionMethod ? actionMethod(Object.assign(new AuthenticationState(), state), action) : state;
}

actions.set(AuthenticationActions.SIGN_IN_SUCCESS, signInSuccess);
export function signInSuccess(state:AuthenticationState, action:SignInSuccess) {
    state.isAuthenticated = true;
    state.username = action.payload.username;
    return state;
}

actions.set(AuthenticationActions.SIGN_OUT, signOut);
export function signOut(state:AuthenticationState, action:SignOut) {
    state.isAuthenticated = false;
    state.username = null;
    return state;
}

actions.set(AuthenticationActions.SET_PROGRESS, setProgress);
export function setProgress(state:AuthenticationState, action:SetProgress) {
    state.isInProgress = action.payload;
    return state;
}

actions.set(AuthenticationActions.SET_ERROR, setError);
export function setError(state:AuthenticationState, action:SetError) {
    state.error = action.payload;
    return state;
}

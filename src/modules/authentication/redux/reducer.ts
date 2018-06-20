import {Action} from '@ngrx/store';
import {AuthenticationState} from './feature-state';
import {SignInSuccess, AuthenticationActions} from './actions';

type AuthenticationReducer = (state:AuthenticationState, action:Action) => AuthenticationState;
const actions:Map<string, AuthenticationReducer> = new Map<string, AuthenticationReducer>();

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
export function signOut(state:AuthenticationState, action:SignInSuccess) {
    state.isAuthenticated = false;
    state.username = null;

    return state;
}

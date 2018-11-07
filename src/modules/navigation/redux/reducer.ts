import {Action} from '@ngrx/store';
import {ReducerType} from 'src/modules/redux-helpers';
import {NavigationState} from './state';
import {NavigationActions, SyncCurrentRoute, SetRequestedRoute, SetCurrentRoute} from './actions';

const reducers:Map<string, ReducerType<NavigationState>> = new Map<string, ReducerType<NavigationState>>();

reducers.set(NavigationActions.SET_REQUESTED_ROUTE, setRequestedRoute);
reducers.set(NavigationActions.SET_CURRENT_ROUTE, setCurrentRoute);
reducers.set(NavigationActions.SYNC_CURRENT_ROUTE, syncCurrentRoute);

export function NavigationReducer(
    state:NavigationState = new NavigationState(),
    action:Action
):NavigationState {
    const reducer = reducers.get(action.type);
    return reducer ? reducer(Object.assign(new NavigationState(), state), action) : state;
}

export function setRequestedRoute(state:NavigationState, action:SetRequestedRoute) {
    state.requestedRoute = action.payload;
    return state;
}

export function setCurrentRoute(state:NavigationState, action:SetCurrentRoute) {
    state.currentRoute = action.payload;
    return state;
}

export function syncCurrentRoute(state:NavigationState, action:SyncCurrentRoute) {
    state.currentRoute = state.requestedRoute;
    return state;
}

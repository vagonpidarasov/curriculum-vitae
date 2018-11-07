import {Action} from '@ngrx/store';
import {ReducerType} from 'src/modules/redux-helpers';
import {NavigationState} from './state';
import {NavigationActions, SyncCurrentRoute, SetRequestedRoute} from './actions';

const reducers:Map<string, ReducerType<NavigationState>> = new Map<string, ReducerType<NavigationState>>();

reducers.set(NavigationActions.SET_REQUESTED_ROUTE, setRequestedRoute);
reducers.set(NavigationActions.SYNC_CURRENT_ROUTE, syncCurrentRoute);

export function NavigationReducer(
    state:NavigationState = new NavigationState(),
    action:Action
):NavigationState {
    console.log(action);
    const reducer = reducers.get(action.type);
    return reducer ? reducer({...new NavigationState(), ...state}, action) : state;
}

export function setRequestedRoute(state:NavigationState, action:SetRequestedRoute) {
    state.requestedRoute = action.payload;
    return state;
}

export function syncCurrentRoute(state:NavigationState, action:SyncCurrentRoute) {
    state.currentRoute = state.requestedRoute;
    return state;
}

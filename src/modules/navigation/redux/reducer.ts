import {Action} from '@ngrx/store';
import {ReducerType} from 'src/modules/redux-helpers';
import {NavigationState} from './state';
import {NavigationActions, NavigateToRequest} from './actions';

const reducers:Map<string, ReducerType<NavigationState>> = new Map<string, ReducerType<NavigationState>>();

export function NavigationReducer(
    state:NavigationState = new NavigationState(),
    action:Action
):NavigationState {
    const reducer = reducers.get(action.type);
    return reducer ? reducer({...new NavigationState(), ...state}, action) : state;
}

reducers.set(NavigationActions.NAVIGATE_TO_REQUEST, navigateToRequest);
export function navigateToRequest(state:NavigationState, action:NavigateToRequest) {
    state.requestedRoute = action.payload;
    return state;
}

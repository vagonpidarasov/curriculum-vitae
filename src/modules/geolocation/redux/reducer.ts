import {Action} from '@ngrx/store';
import {ReducerType} from 'src/modules/redux-helpers';
import {GeolocationState} from './state';
import {GeolocationActions, SetGeolocation, ResetGeolocation} from './actions';

const actions:Map<string, ReducerType<GeolocationState>> = new Map<string, ReducerType<GeolocationState>>();

actions.set(GeolocationActions.SET_GEOLOCATION, setGeolocation);
actions.set(GeolocationActions.RESET_GEOLOCATION, resetGeolocation);

export function GeolocationReducer(
    state:GeolocationState = new GeolocationState(),
    action:Action
):GeolocationState {
    const actionMethod = actions.get(action.type);
    return actionMethod ? actionMethod(Object.assign(new GeolocationState(), state), action) : state;
}

export function setGeolocation(state:GeolocationState, action:SetGeolocation) {
    state.position = action.payload;
    return state;
}

export function resetGeolocation(state:GeolocationState, action:ResetGeolocation) {
    state.position = null;
    return state;
}

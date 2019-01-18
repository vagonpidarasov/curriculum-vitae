import {ActionReducerMapType, StateFactoryType, Action, ActionWithPayload} from './types';

export function reduce<StateType>(
    stateFactory:StateFactoryType<StateType>,
    actionReducerMap:ActionReducerMapType<StateType>,
    state:StateType,
    action:Action|ActionWithPayload,
):StateType {
    const originalState = state || stateFactory();
    const actionReducer = actionReducerMap.get(action.type);
    return actionReducer ?
        actionReducer(Object.assign(stateFactory(), originalState), action) :
        originalState;
}

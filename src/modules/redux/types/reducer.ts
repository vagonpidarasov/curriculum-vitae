import {Action} from './action';
export type ReducerType<S> = (state:S, action:Action) => S;

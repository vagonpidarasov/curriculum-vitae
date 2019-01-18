import {ReducerType} from './reducer';
import {ActionTypeType} from './action-type';
export type ActionReducerMapType<StateType> = Map<ActionTypeType, ReducerType<StateType>>;

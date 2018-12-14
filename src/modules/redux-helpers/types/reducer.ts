import {Action} from '@ngrx/store';
import {ActionWithPayload} from '../action-with-payload';
export type ReducerType<S> = (state:S, action:Action|ActionWithPayload) => S;

import {ActionWithPayload} from './types';
export function toPayload<T = any>(action:ActionWithPayload):T {
    return <T>action.payload;
}

import {ActionWithPayload} from './types';
export function toPayload<T>(action:ActionWithPayload):T {
    return <T>action.payload;
}

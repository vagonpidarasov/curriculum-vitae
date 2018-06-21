import {ActionWithPayload} from './action-with-payload';
export function toPayload(action:ActionWithPayload):any {
    return action.payload;
}

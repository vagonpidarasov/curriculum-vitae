import {Action} from './types';
export function toPayload<T = any>(action:Action):T {
    return <T>action.payload;
}

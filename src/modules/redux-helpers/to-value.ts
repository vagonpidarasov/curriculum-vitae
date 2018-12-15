import {ActionWithPayload} from './action-with-payload';
export function toValue(value:any) {
    return function(action:ActionWithPayload):any {
        return value;
    };
}

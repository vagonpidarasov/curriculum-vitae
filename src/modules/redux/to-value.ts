import {ActionWithPayload} from './types';
export function toValue(value:any) {
    return function(action:ActionWithPayload):any {
        return value;
    };
}

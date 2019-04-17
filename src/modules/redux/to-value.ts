import {Action} from './types';
export function toValue(value:any) {
    return function(action:Action):any {
        return value;
    };
}

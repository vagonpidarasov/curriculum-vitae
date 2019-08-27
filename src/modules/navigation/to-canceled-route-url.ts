import {RouterCancelPayload} from '@ngrx/router-store';

/**
 * Extracts canceled route url from a RouterCancelPayload
 */
export type PayloadType = RouterCancelPayload<any>;
export function toCanceledRouteUrl(payload:PayloadType):string {
    return payload.event.url;
}

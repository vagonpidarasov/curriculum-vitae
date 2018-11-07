import {ActivatedRouteSnapshot} from '@angular/router';
import {RouterCancelPayload} from '@ngrx/router-store';

/**
 * Extracts activated route from a payload
 * @param {RouterCancelPayload<any, ActivatedRouteSnapshot>} payload
 * @returns {ActivatedRouteSnapshot}
 */
export function extractActivatedRoute(payload:RouterCancelPayload<any, ActivatedRouteSnapshot>):ActivatedRouteSnapshot {
    return payload.routerState.root.firstChild;
}

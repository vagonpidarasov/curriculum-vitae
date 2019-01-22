import {ActivatedRouteSnapshot} from '@angular/router';
import {DEFAULT_ROUTE_URL} from './default-route-url';
import {toRouteSnapshot} from './to-route-snapshot';

export function toDefaultRoute():ActivatedRouteSnapshot {
    return toRouteSnapshot(DEFAULT_ROUTE_URL);
}

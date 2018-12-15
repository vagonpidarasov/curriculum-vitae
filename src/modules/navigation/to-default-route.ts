import {ActivatedRouteSnapshot} from '@angular/router';
import {DEFAULT_ROUTE_URL} from './default-route-url';
import {buildRoute} from './build-route';

export function toDefaultRoute(param:any):ActivatedRouteSnapshot {
    return buildRoute(DEFAULT_ROUTE_URL);
}

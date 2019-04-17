import {ActivatedRouteSnapshot} from '@angular/router';
import {DEFAULT_ROUTE_URL} from './default-route-url';
import {toRouteSnapshot} from './to-route-snapshot';

export type toDefaultRouteType = () => ActivatedRouteSnapshot;
export const toDefaultRoute = <toDefaultRouteType>toRouteSnapshot.bind(null, DEFAULT_ROUTE_URL);

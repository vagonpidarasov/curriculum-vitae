import {toDefaultRoute} from './to-default-route';
import {toRouteSnapshot} from './to-route-snapshot';
import {DEFAULT_ROUTE_URL} from './default-route-url';

describe('toDefaultRoute', () => {
    it('should return default route as ActivatedRouteSnapshot', () => {
        expect(toDefaultRoute()).toEqual(toRouteSnapshot(DEFAULT_ROUTE_URL));
    });
});

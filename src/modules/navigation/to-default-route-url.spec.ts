import {toDefaultRouteUrl} from './to-default-route-url';
import {DEFAULT_ROUTE_URL} from './default-route-url';

describe('toDefaultRouteUrl', () => {
    it('should return default route', () => {
        expect(toDefaultRouteUrl()).toEqual(DEFAULT_ROUTE_URL);
    });
});

import {toRouteSnapshot} from './to-route-snapshot';

describe('toRouteSnapshot', () => {
    it('should convert an url string to an ActivatedRouteSnapshot', () => {
        const url = 'url';
        expect(toRouteSnapshot(url).url.toString()).toBe(url);
    });
});

import {toCanceledRoute} from './to-canceled-route';

describe('toCanceledRoute', () => {
    it('should convert RouterCancelPayload to an ActivatedRouteSnapshot', () => {
        const outlet = 'outlet';
        const payload:any = {
            routerState: {
                root: {
                    firstChild: {outlet},
                },
            },
        };
        expect(toCanceledRoute(payload).outlet).toBe(outlet);
    });
});

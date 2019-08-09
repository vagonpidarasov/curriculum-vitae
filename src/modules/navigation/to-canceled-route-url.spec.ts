import {toCanceledRouteUrl} from './to-canceled-route-url';

describe('toCanceledRouteUrl', () => {
    it('should convert RouterCancelPayload to route url', () => {
        const url = 'url';
        const payload:any = {event: {url}};
        expect(toCanceledRouteUrl(payload)).toEqual(url);
    });
});

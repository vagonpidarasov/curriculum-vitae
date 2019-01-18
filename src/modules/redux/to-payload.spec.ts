import {toPayload} from './to-payload';

describe('toPayload', () => {
    it('should extract payload from an action', () => {
        const action = {type: 'action', payload: 'payload'};
        expect(toPayload(action)).toEqual('payload');
    });
});

import {HttpErrorResponse} from '@angular/common/http';
import {httpError} from './http-error';

describe('normalizeError', () => {
    it('should extract reason', () => {
        const reason = 'reason';
        const error = new HttpErrorResponse({error: {reason}});
        expect(httpError(error)).toEqual(reason);
    });

    it('should extract statusText', () => {
        const statusText = 'statusText';
        const error = new HttpErrorResponse({statusText});
        expect(httpError(error)).toEqual(statusText);
    });

    it('should extract default error', () => {
        expect(httpError()).toEqual('Unknown Error');
    });
});

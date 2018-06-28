import {HttpErrorResponse} from '@angular/common/http';
import {normalizeError} from './normalize-error';
import {unknownError} from './unknown-error';

describe('normalizeError', () => {
    it('should extract reason', () => {
        const reason = 'reason';
        const error = new HttpErrorResponse({error: {reason}});
        expect(normalizeError(error)).toEqual(reason);
    });

    it('should extract statusText', () => {
        const statusText = 'statusText';
        const error = new HttpErrorResponse({statusText});
        expect(normalizeError(error)).toEqual(statusText);
    });

    it('should extract default error', () => {
        expect(normalizeError()).toEqual(unknownError());
    });
});

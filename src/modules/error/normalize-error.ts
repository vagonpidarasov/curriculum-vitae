import {HttpErrorResponse} from '@angular/common/http';
import {unknownError} from './error-messages';

export function normalizeError(error:HttpErrorResponse = new HttpErrorResponse({})):string {
    const errorData:{reason:string} = error.error || {};
    return errorData.reason || error.statusText || unknownError();
}

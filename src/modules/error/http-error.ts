import {HttpErrorResponse} from '@angular/common/http';

export function httpError(
    error:HttpErrorResponse = new HttpErrorResponse({}),
    fallback:string = 'Unknown Error',
):string {
    const errorData:{reason:string} = error.error || {};
    return errorData.reason || error.statusText || fallback;
}

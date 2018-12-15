import {ActivatedRouteSnapshot, UrlSegment} from '@angular/router';

export function buildRoute(url:string):ActivatedRouteSnapshot {
    return Object.assign(
        new ActivatedRouteSnapshot(),
        {url: [new UrlSegment(url, {})]}
    );
}

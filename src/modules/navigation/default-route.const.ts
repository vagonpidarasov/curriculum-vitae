import {ActivatedRouteSnapshot, UrlSegment} from '@angular/router';

export const defaultRouteUrl:string = '';
export const defaultRoute:ActivatedRouteSnapshot = Object.assign(
    new ActivatedRouteSnapshot(),
    {url: [new UrlSegment(defaultRouteUrl, {})]}
);

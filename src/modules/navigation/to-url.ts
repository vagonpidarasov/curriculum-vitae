import {ActivatedRouteSnapshot} from '@angular/router';

export function toUrl(route:ActivatedRouteSnapshot):string {
    return route.url.toString();
}

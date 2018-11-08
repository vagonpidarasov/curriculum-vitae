import {Injectable} from '@angular/core';
import {CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot} from '@angular/router';
import {Observable} from 'rxjs';

import {AuthenticationStore} from 'src/modules/authentication';

@Injectable()
export class RouterGuardService implements CanActivate {
    constructor(private authenticationStore:AuthenticationStore) {}
    canActivate(route:ActivatedRouteSnapshot, state:RouterStateSnapshot):Observable<boolean> {
        return this.authenticationStore.isAuthenticated;
    }
}

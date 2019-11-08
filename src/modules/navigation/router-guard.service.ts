import {Injectable} from '@angular/core';
import {CanActivate} from '@angular/router';
import {Observable} from 'rxjs';

import {AuthenticationStore} from 'src/modules/authentication';

@Injectable()
export class RouterGuardService implements CanActivate {
    constructor(private authenticationStore:AuthenticationStore) {}
    canActivate():Observable<boolean> {
        return this.authenticationStore.isAuthenticated;
    }
}

import {Injectable} from '@angular/core';
import {Store} from '@ngrx/store';
import {Observable} from 'rxjs';

import {AppState} from './app-state';
import {isAuthenticated, username, isInProgress} from './selectors';
import {SignIn, SignOut} from './actions';
import {AuthenticationPayload} from '../authentication-payload.interface';

@Injectable()
export class AuthenticationStore {
    constructor(private store:Store<AppState>) {}

    get isAuthenticated():Observable<boolean> {
        return this.store.select(isAuthenticated);
    }

    get username():Observable<string> {
        return this.store.select(username);
    }

    get isInProgress():Observable<boolean> {
        return this.store.select(isInProgress);
    }

    signIn(payload:AuthenticationPayload):void {
        this.store.dispatch(new SignIn(payload));
    }

    signOut():void {
        this.store.dispatch(new SignOut());
    }
}

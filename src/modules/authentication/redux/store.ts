import {Injectable} from '@angular/core';
import {Store} from '@ngrx/store';
import {Observable} from 'rxjs';

import {AppState} from './app-state';
import {isAuthenticated} from './selectors';
import {SignIn, SignOut} from './actions';
import {SignInPayload} from '../sign-in-payload.interface';

@Injectable()
export class AuthenticationStore {
    constructor(private store:Store<AppState>) {}

    get isAuthenticated():Observable<boolean> {
        return this.store.select(isAuthenticated);
    }

    signIn(payload:SignInPayload):void {
        this.store.dispatch(new SignIn(payload));
    }

    signOut():void {
        this.store.dispatch(new SignOut());
    }
}

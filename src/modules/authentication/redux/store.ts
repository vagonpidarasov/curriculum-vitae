import {Injectable} from '@angular/core';
import {Store, select} from '@ngrx/store';
import {Observable} from 'rxjs';

import {Action} from 'src/modules/redux-helpers';

import {FeatureState} from './feature';
import {isAuthenticated, username, isInProgress, error} from './selectors';
import {SignIn, SignOut, SetError, AuthenticationRequest, AuthenticationDiscard} from './actions';
import {AuthenticationPayload} from '../interfaces';

@Injectable()
export class AuthenticationStore {
    constructor(private store:Store<FeatureState>) {}

    get isAuthenticated():Observable<boolean> {
        return this.store.pipe(select(isAuthenticated));
    }

    get username():Observable<string> {
        return this.store.pipe(select(username));
    }

    get isInProgress():Observable<boolean> {
        return this.store.pipe(select(isInProgress));
    }

    get error():Observable<string> {
        return this.store.pipe(select(error));
    }

    setError(payload:string):void {
        this.store.dispatch(new SetError(payload));
    }

    signIn(payload:AuthenticationPayload):void {
        this.store.dispatch(new SignIn(payload));
    }

    signOut():void {
        this.store.dispatch(new SignOut());
    }

    authRequest(payload:Action = null):void {
        this.store.dispatch(new AuthenticationRequest(payload));
    }

    authDiscard():void {
        this.store.dispatch(new AuthenticationDiscard());
    }
}

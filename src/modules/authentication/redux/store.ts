import {Injectable} from '@angular/core';
import {Store, select} from '@ngrx/store';
import {Observable} from 'rxjs';

import {FeatureState} from './feature';
import {isAuthenticated, isInProgress, error, userData} from './selectors';
import {SignIn, SignOut, SetError, AuthenticationRequest, AuthenticationDiscard} from './actions';
import {SignInPayload, UserData} from '../types';

@Injectable()
export class AuthenticationStore {
    constructor(private store:Store<FeatureState>) {}

    get isAuthenticated():Observable<boolean> {
        return this.store.pipe(select(isAuthenticated));
    }

    get userData():Observable<UserData|null> {
        return this.store.pipe(select(userData));
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

    signIn(payload:SignInPayload):void {
        this.store.dispatch(new SignIn(payload));
    }

    signOut():void {
        this.store.dispatch(new SignOut());
    }

    authRequest():void {
        this.store.dispatch(new AuthenticationRequest());
    }

    authDiscard():void {
        this.store.dispatch(new AuthenticationDiscard());
    }
}

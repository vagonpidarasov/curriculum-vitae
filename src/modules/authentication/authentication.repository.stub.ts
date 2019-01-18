import {Injectable} from '@angular/core';
import {Observable, of, EMPTY} from 'rxjs';

import {AuthenticationRepository} from './authentication.repository';
import {SignInPayload, UserData} from './types';

@Injectable()
export class AuthenticationRepositoryStub implements AuthenticationRepository {
    signIn(payload:SignInPayload):Observable<UserData> {
        return of(Object.assign(new UserData(), {username: payload.username}));
    }

    signOut():Observable<void> {
        return EMPTY;
    }

    isAuthenticated():Observable<boolean> {
        return of(false);
    }
}

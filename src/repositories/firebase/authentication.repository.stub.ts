import {Injectable} from '@angular/core';
import {Observable, of} from 'rxjs';

import {
    AuthenticationRepository,
    SignInPayload,
    UserData,
} from 'src/modules/authentication';

@Injectable()
export class AuthenticationRepositoryStub implements  AuthenticationRepository {

    signIn(payload:SignInPayload):Observable<UserData> {
        return of(new UserData());
    }

    signOut():Observable<void> {
        return of(null);
    }

    isAuthenticated():Observable<boolean> {
        return of(true);
    }
}

import {Injectable} from '@angular/core';
import {Observable, of, EMPTY} from 'rxjs';

import {AuthenticationRepository} from './authentication.repository';
import {
    AuthenticationPayload,
    AuthenticationSignInResponse,
    AuthenticationSignOutResponse
} from './types';

@Injectable()
export class AuthenticationRepositoryMock implements AuthenticationRepository {
    signIn(payload:AuthenticationPayload):Observable<AuthenticationSignInResponse> {
        return of({username: payload.username});
    }

    signOut():Observable<AuthenticationSignOutResponse> {
        return EMPTY;
    }
}

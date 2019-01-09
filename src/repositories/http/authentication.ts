import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable, EMPTY} from 'rxjs';

import {
    AuthenticationRepository,
    AuthenticationPayload,
    AuthenticationSignInResponse,
    AuthenticationSignOutResponse,
} from 'src/modules/authentication';

@Injectable()
export class AuthenticationRepositoryHttp implements  AuthenticationRepository {
    constructor(private http:HttpClient) {}

    signIn(payload:AuthenticationPayload):Observable<AuthenticationSignInResponse> {
        return this.http.post<AuthenticationSignInResponse>('http://localhost:5151/authenticate', payload);
    }

    signOut():Observable<AuthenticationSignOutResponse> {
        return EMPTY;
    }
}

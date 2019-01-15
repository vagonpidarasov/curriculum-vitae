import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable, EMPTY, of} from 'rxjs';

import {
    AuthenticationRepository,
    SignInPayload,
    UserData,
} from 'src/modules/authentication';

@Injectable()
export class AuthenticationRepositoryHttp implements  AuthenticationRepository {
    constructor(private http:HttpClient) {}

    signIn(payload:SignInPayload):Observable<UserData> {
        return this.http.post<any>('http://localhost:5151/authenticate', payload);
    }

    signOut():Observable<void> {
        return EMPTY;
    }

    isAuthenticated():Observable<boolean> {
        return of(false);
    }
}

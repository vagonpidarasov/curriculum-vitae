import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

import {
    AuthenticationRepository,
    AuthenticationPayload,
    AuthenticationResponse,
} from 'src/modules/authentication';

@Injectable()
export class AuthenticationHttpRepository implements  AuthenticationRepository {
    constructor(private http:HttpClient) {}
    authenticate(payload:AuthenticationPayload):Observable<AuthenticationResponse> {
        return this.http.post<AuthenticationResponse>('http://localhost:5151/authenticate', payload);
    }
}

import {Injectable} from '@angular/core';
import {Observable, of} from 'rxjs';

import {AuthenticationResponse} from './authentication-response.interface';
import {AuthenticationPayload} from './authentication-payload.interface';
import {AuthenticationRepository} from './authentication.repository';

@Injectable()
export class AuthenticationMockRepository implements  AuthenticationRepository {
    authenticate(payload:AuthenticationPayload):Observable<AuthenticationResponse> {
        return of({username: payload.username, authtoken: '1234567890'});
    }
}
import {Observable} from 'rxjs';
import {AuthenticationResponse} from './interfaces/authentication-response';
import {AuthenticationPayload} from './interfaces/authentication-payload';

export abstract class AuthenticationRepository {
    abstract authenticate(accountId:AuthenticationPayload):Observable<AuthenticationResponse>;
}

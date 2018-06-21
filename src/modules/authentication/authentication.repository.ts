import {Observable} from 'rxjs';
import {AuthenticationResponse} from './authentication-response.interface';
import {AuthenticationPayload} from './authentication-payload.interface';

export abstract class AuthenticationRepository {
    abstract authenticate(accountId:AuthenticationPayload):Observable<AuthenticationResponse>;
}

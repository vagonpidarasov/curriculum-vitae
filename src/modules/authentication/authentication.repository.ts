import {Observable} from 'rxjs';
import {AuthenticationResponse, AuthenticationPayload} from './interfaces';

export abstract class AuthenticationRepository {
    abstract authenticate(accountId:AuthenticationPayload):Observable<AuthenticationResponse>;
}

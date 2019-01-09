import {Observable} from 'rxjs';
import {
    AuthenticationPayload,
    AuthenticationSignInResponse,
    AuthenticationSignOutResponse
} from './types';

export abstract class AuthenticationRepository {
    abstract signIn(accountId:AuthenticationPayload):Observable<AuthenticationSignInResponse>;
    abstract signOut():Observable<AuthenticationSignOutResponse>;
}

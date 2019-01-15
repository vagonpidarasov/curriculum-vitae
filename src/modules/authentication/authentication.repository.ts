import {Observable} from 'rxjs';
import {SignInPayload, UserData} from './types';

export abstract class AuthenticationRepository {
    abstract signIn(accountId:SignInPayload):Observable<UserData>;
    abstract signOut():Observable<void>;
    abstract isAuthenticated():Observable<boolean>;
}

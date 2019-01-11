import {Injectable} from '@angular/core';
import {AngularFireAuth} from '@angular/fire/auth';
import {Observable, Observer, EMPTY} from 'rxjs';

import {
    AuthenticationRepository,
    AuthenticationPayload,
    AuthenticationSignInResponse,
    AuthenticationSignOutResponse,
} from 'src/modules/authentication';

import {FirebaseSignInResponse} from 'src/modules/firebase';

import {toAuthenticationResponse} from './to-authentication-response';

@Injectable()
export class AuthenticationRepositoryFirebase implements  AuthenticationRepository {
    constructor(private angularFireAuth:AngularFireAuth) {}

    signIn(payload:AuthenticationPayload):Observable<AuthenticationSignInResponse> {
        return new Observable((observer:Observer<AuthenticationSignInResponse>) => {
            this.angularFireAuth.auth.signInWithEmailAndPassword(payload.username, payload.password)
                .then((response:FirebaseSignInResponse) => {
                    observer.next(toAuthenticationResponse(response));
                    observer.complete();
                })
                .catch((e:any) => observer.error(e));
        });
    }

    signOut():Observable<AuthenticationSignOutResponse> {
        this.angularFireAuth.auth.signOut();
        return EMPTY;
    }
}

import {Injectable} from '@angular/core';
import {AngularFireAuth} from '@angular/fire/auth';
import {Observable, Observer} from 'rxjs';
import {auth} from 'firebase/app';

import {
    AuthenticationRepository,
    AuthenticationPayload,
    AuthenticationResponse,
} from 'src/modules/authentication';

import {normalizeAuthResponse} from './normalize-auth-response';

@Injectable()
export class AuthenticationFirebaseRepository implements  AuthenticationRepository {
    constructor(private angularFireAuth:AngularFireAuth) {}
    authenticate(payload:AuthenticationPayload):Observable<AuthenticationResponse> {

        return new Observable((observer:Observer<AuthenticationResponse>) => {
            this.angularFireAuth.auth.signInWithEmailAndPassword(payload.username, payload.password)
                .then((userCredential:auth.UserCredential) => {
                    observer.next(normalizeAuthResponse(userCredential));
                    observer.complete();
                })
                .catch((e:any) => observer.error(e));
        });
    }
}

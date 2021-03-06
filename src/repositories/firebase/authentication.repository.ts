import {Injectable} from '@angular/core';
import {AngularFireAuth} from '@angular/fire/auth';
import {User} from 'firebase';
import {Observable, Observer} from 'rxjs';
import {map} from 'rxjs/operators';
import {AuthenticationRepository, SignInPayload, UserData} from 'src/modules/authentication';
import {SignInError, SignInResponse, toAuthErrorCode, toFlatUserData} from 'src/modules/firebase';

@Injectable()
export class AuthenticationRepositoryFirebase implements  AuthenticationRepository {
    constructor(private angularFireAuth:AngularFireAuth) {}

    signIn(payload:SignInPayload):Observable<UserData> {
        return new Observable((observer:Observer<UserData>) => {
            this.angularFireAuth.auth.signInWithEmailAndPassword(payload.username, payload.password)
                .then((response:SignInResponse) => {
                    observer.next(toFlatUserData(response));
                    observer.complete();
                })
                .catch((e:SignInError) => observer.error(toAuthErrorCode(e)));
        });
    }

    signOut():Observable<void> {
        return new Observable((observer:Observer<void>) => {
            this.angularFireAuth.auth.signOut().then(() => {
                observer.next(null);
                observer.complete();
            });
        });
    }

    isAuthenticated():Observable<boolean> {
        return this.angularFireAuth.authState.pipe(
            map((authState:User|null) => !!authState)
        );
    }
}

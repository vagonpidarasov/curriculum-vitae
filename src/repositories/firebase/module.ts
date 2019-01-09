import {NgModule} from '@angular/core';
import {AngularFireAuthModule} from '@angular/fire/auth';

import {AuthenticationRepository} from 'src/modules/authentication';
import {AuthenticationRepositoryFirebase} from './authentication';

@NgModule({
    imports: [AngularFireAuthModule],
    providers: [
        {provide: AuthenticationRepository, useClass: AuthenticationRepositoryFirebase},
    ],
})
export class FirebaseRepositoryModule {}

import {NgModule} from '@angular/core';
import {AngularFireAuthModule} from '@angular/fire/auth';
import {AngularFireModule} from '@angular/fire';

import {AuthenticationRepository} from 'src/modules/authentication';
import {AuthenticationRepositoryFirebase} from './authentication.repository';
import {config} from './config';

@NgModule({
    imports: [
        AngularFireModule.initializeApp(config),
        AngularFireAuthModule,
    ],
    providers: [
        {provide: AuthenticationRepository, useClass: AuthenticationRepositoryFirebase},
    ],
})
export class FirebaseRepositoryModule {}

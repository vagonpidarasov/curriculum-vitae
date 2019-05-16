import {NgModule} from '@angular/core';
import {AngularFireAuthModule} from '@angular/fire/auth';
import {AngularFireModule} from '@angular/fire';

import {AuthenticationRepository} from 'src/modules/authentication';
import {AuthenticationRepositoryFirebase} from './authentication.repository';
import {AuthenticationRepositoryStub} from './authentication.repository.stub';
import {config} from './config';

@NgModule({
    imports: [
        // AngularFireModule.initializeApp(config),
        // AngularFireAuthModule,
    ],
    providers: [
        // {provide: AuthenticationRepository, useClass: AuthenticationRepositoryFirebase},
        {provide: AuthenticationRepository, useClass: AuthenticationRepositoryStub},
    ],
})
export class FirebaseRepositoryModule {}

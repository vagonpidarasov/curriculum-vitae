import {NgModule} from '@angular/core';
import {AngularFireModule} from '@angular/fire';
import {AngularFireAuthModule} from '@angular/fire/auth';
import {FirebaseConfig} from './config';

@NgModule({
    imports: [
        AngularFireModule.initializeApp(FirebaseConfig),
        AngularFireAuthModule,
    ],
})
export class FirebaseModule {}

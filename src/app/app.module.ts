import {NgModule, CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {ServiceWorkerModule} from '@angular/service-worker';
import {StoreModule} from '@ngrx/store';
import {EffectsModule} from '@ngrx/effects';

import {AppRoutingModule} from 'src/routing';
import {RepositoriesModule} from 'src/repositories';
import {HeaderModule} from 'src/modules/header';
import {FirebaseModule} from 'src/modules/firebase';

import {isDevelopmentEnvironment} from '../environment';
import {AppComponent} from './app.component';

@NgModule({
    bootstrap: [AppComponent],
    schemas: [CUSTOM_ELEMENTS_SCHEMA],
    imports: [
        BrowserModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        FirebaseModule,
        StoreModule.forRoot({}),
        EffectsModule.forRoot([]),
        RepositoriesModule,
        HeaderModule,
        ServiceWorkerModule.register('ngsw-worker.js', {
            enabled: !isDevelopmentEnvironment,
        }),
    ],
    declarations: [AppComponent],
})
export class AppModule {}

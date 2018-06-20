import {NgModule, CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {RouterModule} from '@angular/router';
import {MatSnackBarModule} from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {StoreModule} from '@ngrx/store';
import {EffectsModule} from '@ngrx/effects';

import {AppRoutingModule} from 'src/routing';
import {HeaderModule} from 'src/modules/header';
import {AuthenticationModule} from 'src/modules/authentication';

import {AppComponent} from './app.component';

@NgModule({
    bootstrap: [AppComponent],
    schemas: [CUSTOM_ELEMENTS_SCHEMA],
    imports: [
        BrowserModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        StoreModule.forRoot({}),
        EffectsModule.forRoot([]),
        MatSnackBarModule,
        RouterModule,
        HeaderModule,
        AuthenticationModule,
    ],
    declarations: [AppComponent],
})
export class AppModule {}

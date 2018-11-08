import {NgModule, CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {StoreModule} from '@ngrx/store';
import {EffectsModule} from '@ngrx/effects';

import {AppRoutingModule} from 'src/routing';
import {RepositoriesModule} from 'src/repositories';
import {HeaderModule} from 'src/modules/header';

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
        RepositoriesModule,
        HeaderModule,
    ],
    declarations: [AppComponent],
})
export class AppModule {}

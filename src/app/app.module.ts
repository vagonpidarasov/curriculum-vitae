import {NgModule, CUSTOM_ELEMENTS_SCHEMA, LOCALE_ID} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {StoreModule} from '@ngrx/store';
import {EffectsModule} from '@ngrx/effects';

import {AppRoutingModule} from 'src/routing';
import {RepositoriesModule} from 'src/repositories';

import {AppComponent} from './app.component';
import {HeaderContainerModule} from './header-container';

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
        HeaderContainerModule,
    ],
    declarations: [AppComponent],
    providers: [{provide: LOCALE_ID, useValue: 'en'}],
})
export class AppModule {}

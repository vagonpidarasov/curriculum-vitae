import {NgModule, CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MatIconModule} from '@angular/material/icon';

import {AuthenticationModule} from 'src/modules/authentication';
import {GeolocationModule} from 'src/modules/geolocation';

import {HomePageContainerComponent} from './home-page-container.component';

@NgModule({
    schemas: [CUSTOM_ELEMENTS_SCHEMA],
    imports: [CommonModule, AuthenticationModule, GeolocationModule, MatIconModule],
    exports: [HomePageContainerComponent],
    declarations: [HomePageContainerComponent],
})
export class HomePageContainerModule {}

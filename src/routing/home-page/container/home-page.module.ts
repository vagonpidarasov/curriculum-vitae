import {NgModule, CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';

import {AuthenticationModule} from 'src/modules/authentication';
import {GeolocationModule} from 'src/modules/geolocation';
import {EmployeeModule} from 'src/modules/employee';
import {FooterModule} from 'src/modules/footer';


import {HomePageContainer} from './home-page.container';

@NgModule({
    schemas: [CUSTOM_ELEMENTS_SCHEMA],
    imports: [
        AuthenticationModule,
        EmployeeModule,
        GeolocationModule,
        FooterModule,
    ],
    exports: [HomePageContainer],
    declarations: [HomePageContainer],
})
export class HomePageModule {}

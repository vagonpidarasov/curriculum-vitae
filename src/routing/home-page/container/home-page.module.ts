import {NgModule, CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import {CommonModule} from '@angular/common';

import {AuthenticationModule} from 'src/modules/authentication';
import {GeolocationModule} from 'src/modules/geolocation';
import {EmployeeModule} from 'src/modules/employee';
import {EducationModule} from 'src/modules/education';
import {ExperienceModule} from 'src/modules/experience';
import {FooterModule} from 'src/modules/footer';
import {PDFModule} from 'src/modules/pdf';
import {PrintSummaryModule} from 'src/modules/print-summary';

import {HomePageContainer} from './home-page.container';

@NgModule({
    schemas: [CUSTOM_ELEMENTS_SCHEMA],
    imports: [
        CommonModule,
        AuthenticationModule,
        EmployeeModule,
        EducationModule,
        GeolocationModule,
        FooterModule,
        ExperienceModule,
        PDFModule,
        PrintSummaryModule,
    ],
    exports: [HomePageContainer],
    declarations: [HomePageContainer],
})
export class HomePageModule {}

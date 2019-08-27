import {NgModule, CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MarkdownModule} from 'ngx-markdown';

import {CommonAppModule} from 'src/modules/common';
import {EmployeeModule} from 'src/modules/employee';
import {EducationModule} from 'src/modules/education';
import {ExperienceModule} from 'src/modules/experience';

import {PrintSummaryComponent} from './print-summary.component';
import {PrintSummaryContainer} from './print-summary.container';

@NgModule({
    schemas: [CUSTOM_ELEMENTS_SCHEMA],
    imports: [
        CommonModule,
        MarkdownModule.forChild(),
        CommonAppModule,
        EmployeeModule,
        EducationModule,
        ExperienceModule,
    ],
    exports: [
        PrintSummaryContainer,
    ],
    declarations: [
        PrintSummaryComponent,
        PrintSummaryContainer,
    ],
})
export class PrintSummaryModule {}

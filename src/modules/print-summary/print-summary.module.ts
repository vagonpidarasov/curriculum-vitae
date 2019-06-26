import {NgModule, CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import {CommonModule} from '@angular/common';
import {
    MatProgressSpinnerModule,
    MatProgressBarModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    MatChipsModule,
    MatTooltipModule,
} from '@angular/material';
// import {EffectsModule} from '@ngrx/effects';
// import {StoreModule} from '@ngrx/store';
import {MarkdownModule} from 'ngx-markdown';

import {CommonAppModule} from 'src/modules/common';
import {EmployeeModule} from 'src/modules/employee';
import {EducationModule} from 'src/modules/education';
import {ExperienceModule} from 'src/modules/experience';

// import {EmployeeEffects, EmployeeStore, FeatureStateName, reducer} from './redux';
// import {BackgroundImageEffects} from './background-image.effects';


import {PrintSummaryComponent} from './print-summary.component';
import {PrintSummaryContainer} from './print-summary.container';

// export const MatModules = [
//     MatChipsModule,
//     MatCardModule,
//     MatButtonModule,
//     MatIconModule,
//     MatProgressBarModule,
//     MatTooltipModule,
//     MatProgressSpinnerModule,
// ];

@NgModule({
    schemas: [CUSTOM_ELEMENTS_SCHEMA],
    imports: [
        CommonModule,
        // ...MatModules,
        // StoreModule.forFeature(FeatureStateName, reducer),
        // EffectsModule.forFeature([EmployeeEffects, BackgroundImageEffects]),
        MarkdownModule.forChild(),
        CommonAppModule,
        // PDFModule,
        // QueryStringModule,
        EmployeeModule,
        EducationModule,
        ExperienceModule,
    ],
    providers: [
        // EmployeeStore,
        // {provide: 'windowObject', useValue: window},
    ],
    exports: [
        PrintSummaryContainer,
    ],
    declarations: [
        // EmployeeOverviewComponent,
        // EmployeeComponent,
        PrintSummaryComponent,
        PrintSummaryContainer,
        // AvatarComponent,
    ],
})
export class PrintSummaryModule {}

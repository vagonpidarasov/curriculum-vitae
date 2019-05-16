import {NgModule, CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import {CommonModule} from '@angular/common';
import {
    MatProgressSpinnerModule,
    MatProgressBarModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    MatChipsModule,
    MatExpansionModule,
    MatTooltipModule,
} from '@angular/material';
import {EffectsModule} from '@ngrx/effects';
import {StoreModule} from '@ngrx/store';
import {MarkdownModule} from 'ngx-markdown';

import {CommonAppModule} from 'src/modules/common';

import {EmployeeEffects, EmployeeStore, FeatureStateName, reducer} from './redux';
import {BackgroundImageEffects} from './background-image.effects';
import {DownloadPDFEffects} from './download-pdf.effects';
import {
    AvatarComponent,
    EmployeeComponent,
    EducationComponent,
    EducationDescriptionComponent,
    EmployeeOverviewComponent,
    PositionComponent,
    PositionDescriptionComponent,
    PositionTitleComponent,
} from './components';

import {
    EmployeeContainer,
    EducationContainer,
    CurrentPositionContainer,
    ExperienceContainer,
} from './containers';

export const MatModules = [
    MatExpansionModule,
    MatChipsModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    MatProgressBarModule,
    MatTooltipModule,
    MatProgressSpinnerModule,
];

@NgModule({
    schemas: [CUSTOM_ELEMENTS_SCHEMA],
    imports: [
        CommonModule,
        ...MatModules,
        StoreModule.forFeature(FeatureStateName, reducer),
        EffectsModule.forFeature([EmployeeEffects, BackgroundImageEffects, DownloadPDFEffects]),
        MarkdownModule.forChild(),
        CommonAppModule,
    ],
    providers: [EmployeeStore],
    exports: [
        EmployeeContainer,
        EducationContainer,
        CurrentPositionContainer,
        ExperienceContainer,
    ],
    declarations: [
        CurrentPositionContainer,
        EmployeeOverviewComponent,
        EducationDescriptionComponent,
        EducationComponent,
        EmployeeComponent,
        EmployeeContainer,
        AvatarComponent,
        EducationContainer,
        PositionComponent,
        PositionDescriptionComponent,
        ExperienceContainer,
        PositionTitleComponent,
    ],
})
export class EmployeeModule {}

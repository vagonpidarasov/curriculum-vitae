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
import {PDFModule} from 'src/modules/pdf';

import {EmployeeStore, FeatureStateName, reducer} from './redux';
import {EmployeeEffects, EducationEffects, ExperienceEffects} from './redux';
import {BackgroundImageEffects} from './background-image.effects';
import {
    AvatarComponent,
    EmployeeComponent,
    EducationComponent,
    EducationDescriptionComponent,
    EmployeeOverviewComponent,
    PositionComponent,
    PositionDescriptionComponent,
    PositionTitleComponent,
    SummaryComponent,
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

export const effects = [
    EmployeeEffects,
    EducationEffects,
    ExperienceEffects,
    BackgroundImageEffects,
];

@NgModule({
    schemas: [CUSTOM_ELEMENTS_SCHEMA],
    imports: [
        CommonModule,
        ...MatModules,
        StoreModule.forFeature(FeatureStateName, reducer),
        EffectsModule.forFeature(effects),
        MarkdownModule.forChild(),
        CommonAppModule,
        PDFModule,
    ],
    providers: [
        EmployeeStore,
        {provide: 'windowObject', useValue: window},
    ],
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
        SummaryComponent,
    ],
})
export class EmployeeModule {}

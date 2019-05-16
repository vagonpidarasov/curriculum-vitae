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

import {EmployeeEffects, EmployeeStore, FeatureStateName, reducer} from './redux';

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

import {MailToPipe} from './mailto.pipe';
import {TelPipe} from './tel.pipe';

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
        EffectsModule.forFeature([EmployeeEffects]),
        MarkdownModule.forChild(),
    ],
    providers: [EmployeeStore],
    exports: [
        EmployeeContainer,
        EducationContainer,
        CurrentPositionContainer,
        ExperienceContainer,
    ],
    declarations: [
        TelPipe,
        MailToPipe,
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

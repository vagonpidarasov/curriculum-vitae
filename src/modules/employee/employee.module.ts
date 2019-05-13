import {NgModule, CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MatCardModule, MatButtonModule, MatIconModule, MatChipsModule, MatExpansionModule} from '@angular/material';
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
    ],
})
export class EmployeeModule {}

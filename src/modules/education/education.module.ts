import {NgModule, CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import {CommonModule} from '@angular/common';
import {
    MatProgressSpinnerModule,
    MatProgressBarModule,
    MatCardModule,
} from '@angular/material';
import {EffectsModule} from '@ngrx/effects';
import {StoreModule} from '@ngrx/store';
import {MarkdownModule} from 'ngx-markdown';

import {EducationEffects, EducationStore, FeatureStateName, reducer} from './redux';
import {EducationContainer} from './education.container';
import {EducationTitleComponent} from './education-title.component';
import {EducationDescriptionComponent} from './education-description.component';

export const MatModules = [
    MatCardModule,
    MatProgressBarModule,
    MatProgressSpinnerModule,
];

@NgModule({
    schemas: [CUSTOM_ELEMENTS_SCHEMA],
    imports: [
        CommonModule,
        ...MatModules,
        StoreModule.forFeature(FeatureStateName, reducer),
        EffectsModule.forFeature([EducationEffects]),
        MarkdownModule.forChild(),
    ],
    providers: [
        EducationStore,
    ],
    exports: [
        EducationContainer,
    ],
    declarations: [
        EducationTitleComponent,
        EducationDescriptionComponent,
        EducationContainer,
    ],
})
export class EducationModule {}

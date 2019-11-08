import {NgModule, CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MatProgressBarModule, MatCardModule, MatExpansionModule} from '@angular/material';
import {EffectsModule} from '@ngrx/effects';
import {StoreModule} from '@ngrx/store';
import {MarkdownModule} from 'ngx-markdown';
import {CommonAppModule} from 'src/modules/common';
import {ExperienceStore, ExperienceEffects, FeatureStateName, reducer} from './redux';
import {CurrentPositionContainer} from './current-position.container';
import {ExperienceContainer} from './experience.container';
import {PositionDescriptionComponent} from './position-description.component';
import {PositionTitleComponent} from './position-title.component';
import {PositionSubtitleComponent} from './position-subtitle.component';

export const MatModules = [
    MatExpansionModule,
    MatCardModule,
    MatProgressBarModule,
];

@NgModule({
    schemas: [CUSTOM_ELEMENTS_SCHEMA],
    imports: [
        CommonModule,
        ...MatModules,
        StoreModule.forFeature(FeatureStateName, reducer),
        EffectsModule.forFeature([ExperienceEffects]),
        MarkdownModule.forChild(),
        CommonAppModule,
    ],
    providers: [
        ExperienceStore,
    ],
    exports: [
        CurrentPositionContainer,
        ExperienceContainer,
    ],
    declarations: [
        CurrentPositionContainer,
        ExperienceContainer,
        PositionDescriptionComponent,
        PositionTitleComponent,
        PositionSubtitleComponent,
    ],
})
export class ExperienceModule {}

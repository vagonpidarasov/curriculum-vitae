import {NgModule, CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ReactiveFormsModule, FormsModule} from '@angular/forms';

import {
    MatInputModule,
    MatCardModule,
    MatButtonModule,
    MatProgressBarModule,
    MatIconModule,
    MatPaginatorModule,
} from '@angular/material';
import {EffectsModule} from '@ngrx/effects';
import {StoreModule} from '@ngrx/store';
import {MarkdownModule} from 'ngx-markdown';

import {CommonAppModule} from 'src/modules/common';

import {InterviewQuestionsEffects, QuestionsStore, FeatureStateName, reducer} from './redux';
import {InterviewQuestionComponent} from './interview-question.component';
import {QueryStringComponent} from './query-string.component';
import {QuestionsContainer} from './questions.container';

export const MatModules = [
    MatCardModule,
    MatButtonModule,
    MatProgressBarModule,
    MatInputModule,
    MatIconModule,
    MatPaginatorModule,
];

@NgModule({
    schemas: [CUSTOM_ELEMENTS_SCHEMA],
    imports: [
        CommonModule,
        ReactiveFormsModule,
        FormsModule,
        ...MatModules,
        StoreModule.forFeature(FeatureStateName, reducer),
        EffectsModule.forFeature([InterviewQuestionsEffects]),
        MarkdownModule.forChild(),
        CommonAppModule,
    ],
    providers: [QuestionsStore],
    exports: [
        QuestionsContainer
    ],
    declarations: [
        InterviewQuestionComponent,
        QuestionsContainer,
        QueryStringComponent,
    ],
})
export class QuestionModule {}

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
import {EffectsModule} from '@ngrx/effects';
import {StoreModule} from '@ngrx/store';
import {MarkdownModule} from 'ngx-markdown';

import {CommonAppModule} from 'src/modules/common';
import {QueryStringModule} from 'src/modules/query-string';

import {EmployeeEffects, EmployeeStore, FeatureStateName, reducer} from './redux';
import {BackgroundImageEffects} from './background-image.effects';
import {AvatarComponent, EmployeeTitleComponent, EmployeeOverviewComponent} from './components';
import {EmployeeContainer} from './employee.container';

export const MatModules = [
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
        EffectsModule.forFeature([EmployeeEffects, BackgroundImageEffects]),
        MarkdownModule.forChild(),
        CommonAppModule,
        QueryStringModule,
    ],
    providers: [EmployeeStore],
    exports: [EmployeeContainer],
    declarations: [
        EmployeeOverviewComponent,
        EmployeeTitleComponent,
        EmployeeContainer,
        AvatarComponent,
    ],
})
export class EmployeeModule {}

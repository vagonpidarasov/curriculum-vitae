import {NgModule, CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MatCardModule, MatButtonModule, MatIconModule} from '@angular/material';
import {EffectsModule} from '@ngrx/effects';
import {StoreModule} from '@ngrx/store';

import {EmployeeEffects, EmployeeStore, FeatureStateName, reducer} from './redux';

import {
    AvatarComponent,
    EmployeeComponent,
    EducationComponent,
    EducationDescriptionComponent,
} from './components';
import {EmployeeContainer, EducationContainer} from './containers';

export const MatModules = [MatCardModule, MatButtonModule, MatIconModule];

@NgModule({
    schemas: [CUSTOM_ELEMENTS_SCHEMA],
    imports: [
        CommonModule,
        ...MatModules,
        StoreModule.forFeature(FeatureStateName, reducer),
        EffectsModule.forFeature([EmployeeEffects]),
    ],
    providers: [EmployeeStore],
    exports: [EmployeeContainer, EducationContainer],
    declarations: [
        EducationDescriptionComponent,
        EducationComponent,
        EmployeeComponent,
        EmployeeContainer,
        AvatarComponent,
        EducationContainer,
    ],
})
export class EmployeeModule {}

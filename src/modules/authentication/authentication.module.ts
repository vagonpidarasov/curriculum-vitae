import {NgModule, CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ReactiveFormsModule, FormsModule} from '@angular/forms';
import {MatInputModule, MatButtonModule, MatIconModule, MatProgressBarModule} from '@angular/material';
import {EffectsModule} from '@ngrx/effects';
import {StoreModule} from '@ngrx/store';

import {
    AuthenticationStore,
    AuthenticationReducer,
    FeatureStateName,
    AuthenticationEffects,
} from './redux';

import {SignInFormComponent} from './sign-in-form';

export const MatModules = [
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    MatProgressBarModule,
];

@NgModule({
    schemas: [CUSTOM_ELEMENTS_SCHEMA],
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        StoreModule.forFeature(FeatureStateName, AuthenticationReducer),
        EffectsModule.forFeature([AuthenticationEffects]),
        ...MatModules,
    ],
    providers: [AuthenticationStore],
    exports: [SignInFormComponent],
    declarations: [SignInFormComponent],

})
export class AuthenticationModule {}

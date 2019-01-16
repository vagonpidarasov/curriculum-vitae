import {NgModule, CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ReactiveFormsModule, FormsModule} from '@angular/forms';
import {
    MatInputModule,
    MatButtonModule,
    MatProgressBarModule,
    MatDialogModule,
} from '@angular/material';
import {EffectsModule} from '@ngrx/effects';
import {StoreModule} from '@ngrx/store';

import {
    AuthenticationStore,
    reducer,
    FeatureStateName,
    AuthenticationEffects,
    SignOutEffects,
    SignInEffects,
} from './redux';

import {SignInFormComponent} from './sign-in-form';
import {SignInDialogComponent} from './sign-in-dialog';
import {SignInDialogService} from './sign-in-dialog.service';
import {SingInDialogEffects} from './sign-in-dialog.effects';

export const MatModules = [
    MatInputModule,
    MatButtonModule,
    MatProgressBarModule,
    MatDialogModule,
];

export const effects = [
    AuthenticationEffects,
    SignOutEffects,
    SignInEffects,
    SingInDialogEffects,
];

@NgModule({
    schemas: [CUSTOM_ELEMENTS_SCHEMA],
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        StoreModule.forFeature(FeatureStateName, reducer),
        EffectsModule.forFeature(effects),
        ...MatModules,
    ],
    providers: [AuthenticationStore, SignInDialogService],
    exports: [SignInFormComponent, SignInDialogComponent],
    declarations: [SignInFormComponent, SignInDialogComponent],
    entryComponents: [SignInDialogComponent],
})
export class AuthenticationModule {}

import {NgModule, CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ReactiveFormsModule, FormsModule} from '@angular/forms';
import {MatInputModule, MatButtonModule, MatIconModule} from '@angular/material';
import {EffectsModule} from '@ngrx/effects';
import {StoreModule} from '@ngrx/store';

import {AuthenticationStore} from './redux/store';
import {AuthenticationReducer} from './redux/reducer';
import {AuthenticationStateName} from './redux/feature-state-name';
import {AuthenticationEffects} from './redux/effects';
import {SignInFormComponent} from './sign-in-form';

export const MatModules = [
    MatInputModule,
    MatButtonModule,
    MatIconModule,
];

@NgModule({
    schemas: [CUSTOM_ELEMENTS_SCHEMA],
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        StoreModule.forFeature(AuthenticationStateName, AuthenticationReducer),
        EffectsModule.forFeature([AuthenticationEffects]),
        ...MatModules,
    ],
    providers: [AuthenticationStore],
    exports: [SignInFormComponent],
    declarations: [SignInFormComponent],

})
export class AuthenticationModule {}

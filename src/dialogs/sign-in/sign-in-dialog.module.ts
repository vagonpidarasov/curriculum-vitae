import {NgModule, CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MatDialogModule, MatButtonModule} from '@angular/material';

import {AuthenticationModule} from 'src/modules/authentication';

import {SignInDialogComponent} from './sign-in-dialog.component';
import {SignInDialogService} from './sign-in-dialog.service';

export const MatModules = [
    MatDialogModule,
    MatButtonModule,
];

@NgModule({
    schemas: [CUSTOM_ELEMENTS_SCHEMA],
    imports: [
        CommonModule,
        AuthenticationModule,
        ...MatModules,
    ],
    exports: [SignInDialogComponent],
    declarations: [SignInDialogComponent],
    entryComponents: [SignInDialogComponent],
    providers: [SignInDialogService],
})
export class SignInDialogModule {}

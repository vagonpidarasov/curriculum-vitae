import {NgModule, CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import {MatDialogModule} from '@angular/material';

import {AuthenticationModule} from 'src/modules/authentication';

import {SignInDialogComponent} from './sign-in-dialog.component';
import {SignInDialogService} from './sign-in-dialog.service';

@NgModule({
    schemas: [CUSTOM_ELEMENTS_SCHEMA],
    imports: [
        MatDialogModule,
        AuthenticationModule,
    ],
    exports: [SignInDialogComponent],
    declarations: [SignInDialogComponent],
    entryComponents: [SignInDialogComponent],
    providers: [SignInDialogService],
})
export class SignInDialogModule {}

import {NgModule, CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import {CommonModule} from '@angular/common';

import {HeaderModule} from 'src/modules/header';
import {AuthenticationModule} from 'src/modules/authentication';
import {SignInDialogModule} from 'src/dialogs';

import {HeaderContainerComponent} from './header-container.component';

@NgModule({
    schemas: [CUSTOM_ELEMENTS_SCHEMA],
    imports: [
        CommonModule,
        HeaderModule,
        AuthenticationModule,
        SignInDialogModule,
    ],
    declarations: [HeaderContainerComponent],
    exports: [HeaderContainerComponent],
})
export class HeaderContainerModule {}

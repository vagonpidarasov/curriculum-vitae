import {NgModule, CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';
import {MatToolbarModule, MatButtonModule, MatTabsModule} from '@angular/material';

import {AuthenticationModule} from 'src/modules/authentication';
import {HeaderComponent} from './header.component';
import {HeaderContainer} from './header.container';

@NgModule({
    schemas: [CUSTOM_ELEMENTS_SCHEMA],
    imports: [
        CommonModule,
        RouterModule,
        MatToolbarModule,
        MatButtonModule,
        MatTabsModule,
        AuthenticationModule,
    ],
    declarations: [HeaderComponent, HeaderContainer],
    exports: [HeaderComponent, HeaderContainer],
})
export class HeaderModule {}

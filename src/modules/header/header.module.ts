import {NgModule, CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';
import {MatToolbarModule, MatButtonModule, MatTabsModule} from '@angular/material';

import {AuthenticationModule} from 'src/modules/authentication';
import {HeaderComponent} from './header.component';
import {HeaderContainerComponent} from './header-container.component';

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
    declarations: [HeaderComponent, HeaderContainerComponent],
    exports: [HeaderComponent, HeaderContainerComponent],
})
export class HeaderModule {}

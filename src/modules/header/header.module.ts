import {NgModule, CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';
import {MatToolbarModule, MatButtonModule, MatTabsModule} from '@angular/material';

import {AuthenticationModule} from 'src/modules/authentication';
import {CommonAppModule} from 'src/modules/common';

import {HeaderComponent} from './header.component';
import {HeaderContainer} from './header.container';
import {SourceCodeComponent} from './source-code.component';

@NgModule({
    schemas: [CUSTOM_ELEMENTS_SCHEMA],
    imports: [
        CommonModule,
        RouterModule,
        MatToolbarModule,
        MatButtonModule,
        MatTabsModule,
        AuthenticationModule,
        CommonAppModule,
    ],
    declarations: [HeaderComponent, HeaderContainer, SourceCodeComponent],
    exports: [HeaderComponent, HeaderContainer, SourceCodeComponent],
})
export class HeaderModule {}

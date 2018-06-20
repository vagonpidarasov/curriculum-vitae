import {NgModule, CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';
import {MatToolbarModule, MatButtonModule, MatTabsModule} from '@angular/material';

import {HeaderComponent} from './header.component';

@NgModule({
    schemas: [CUSTOM_ELEMENTS_SCHEMA],
    imports: [
        CommonModule,
        RouterModule,
        MatToolbarModule,
        MatButtonModule,
        MatTabsModule,
    ],
    declarations: [HeaderComponent],
    exports: [HeaderComponent],
})
export class HeaderModule {}

import {NgModule, CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MatCardModule} from '@angular/material';

import {CommonAppModule} from 'src/modules/common';
import {PoweredByComponent} from './powered-by.component';

@NgModule({
    schemas: [CUSTOM_ELEMENTS_SCHEMA],
    imports: [CommonModule, MatCardModule, CommonAppModule],
    declarations: [PoweredByComponent],
    exports: [PoweredByComponent],
})
export class FooterModule {}

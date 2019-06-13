import {NgModule, CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MatCardModule} from '@angular/material';

import {CommonAppModule} from 'src/modules/common';
import {LinksModule} from 'src/modules/image-links';

import {PoweredByContainer} from './powered-by.container';

@NgModule({
    schemas: [CUSTOM_ELEMENTS_SCHEMA],
    imports: [CommonModule, MatCardModule, CommonAppModule, LinksModule],
    declarations: [PoweredByContainer],
    exports: [PoweredByContainer],
})
export class FooterModule {}

import {NgModule, CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MatCardModule} from '@angular/material';

import {PoweredByComponent} from './powered-by.component';
import {BackgroundUrlPipe} from './background-url.pipe';

@NgModule({
    schemas: [CUSTOM_ELEMENTS_SCHEMA],
    imports: [CommonModule, MatCardModule],
    declarations: [PoweredByComponent, BackgroundUrlPipe],
    exports: [PoweredByComponent],
})
export class FooterModule {}

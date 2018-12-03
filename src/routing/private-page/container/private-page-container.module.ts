import {NgModule, CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import {MatCardModule, MatButtonModule} from '@angular/material';

import {PrivatePageContainerComponent} from './private-page-container.component';

@NgModule({
    schemas: [CUSTOM_ELEMENTS_SCHEMA],
    imports: [MatCardModule, MatButtonModule],
    declarations: [PrivatePageContainerComponent],
    exports: [PrivatePageContainerComponent],
})
export class PrivatePageContainerModule {}

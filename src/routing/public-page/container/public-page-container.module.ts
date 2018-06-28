import {NgModule, CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import {MatCardModule, MatButtonModule} from '@angular/material';

import {PublicPageContainerComponent} from './public-page-container.component';

@NgModule({
    schemas: [CUSTOM_ELEMENTS_SCHEMA],
    imports: [MatCardModule, MatButtonModule],
    declarations: [PublicPageContainerComponent],
    exports: [PublicPageContainerComponent],
})
export class PublicPageContainerModule {}

import {NgModule, CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import {MatCardModule, MatButtonModule} from '@angular/material';

import {PrivatePageContainer} from './private-page.container';

@NgModule({
    schemas: [CUSTOM_ELEMENTS_SCHEMA],
    imports: [MatCardModule, MatButtonModule],
    declarations: [PrivatePageContainer],
    exports: [PrivatePageContainer],
})
export class PrivatePageModule {}

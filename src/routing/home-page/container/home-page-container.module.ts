import {NgModule, CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import {CommonModule} from '@angular/common';

import {AuthenticationModule} from 'src/modules/authentication';
import {HomePageContainerComponent} from './home-page-container.component';

@NgModule({
    schemas: [CUSTOM_ELEMENTS_SCHEMA],
    imports: [CommonModule, AuthenticationModule],
    exports: [HomePageContainerComponent],
    declarations: [HomePageContainerComponent],
})
export class HomePageContainerModule {}

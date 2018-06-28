import {NgModule, CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import {RouterModule} from '@angular/router';

import {HomePageContainerModule, HomePageContainerComponent as component} from './container';
import {path} from './path';

@NgModule({
    schemas: [CUSTOM_ELEMENTS_SCHEMA],
    imports: [
        RouterModule.forChild([{path, component}]),
        HomePageContainerModule,
    ],
})
export class HomePageModule {}

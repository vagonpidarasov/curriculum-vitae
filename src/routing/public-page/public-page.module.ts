import {NgModule, CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import {RouterModule} from '@angular/router';

import {PublicPageContainerModule, PublicPageContainerComponent as component} from './container';
import {path} from './path';
import {RouterGuardModule, AuthenticationGuardService} from '../router-guard';

@NgModule({
    schemas: [CUSTOM_ELEMENTS_SCHEMA],
    imports: [
        PublicPageContainerModule,
        RouterGuardModule,
        RouterModule.forChild([{path, component, canActivate: [AuthenticationGuardService]}]),
    ],
})
export class PublicPageModule {}

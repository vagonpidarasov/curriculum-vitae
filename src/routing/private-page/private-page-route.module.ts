import {NgModule, CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import {RouterModule} from '@angular/router';

import {NavigationModule, RouterGuardService} from 'src/modules/navigation';

import {PrivatePageModule, PrivatePageContainer as component} from './container';
import {path} from './path';

const canActivate = [RouterGuardService];
@NgModule({
    schemas: [CUSTOM_ELEMENTS_SCHEMA],
    imports: [
        PrivatePageModule,
        NavigationModule,
        RouterModule.forChild([{path, component, canActivate}]),
    ],
})
export class PrivatePageRouteModule {}

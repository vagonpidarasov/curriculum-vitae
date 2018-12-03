import {NgModule, CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import {RouterModule} from '@angular/router';

import {PrivatePageContainerModule, PrivatePageContainerComponent as component} from './container';
import {path} from './path';
import {NavigationModule, RouterGuardService} from 'src/modules/navigation';

const canActivate = [RouterGuardService];
@NgModule({
    schemas: [CUSTOM_ELEMENTS_SCHEMA],
    imports: [
        PrivatePageContainerModule,
        NavigationModule,
        RouterModule.forChild([{path, component, canActivate}]),
    ],
})
export class PrivatePageModule {}

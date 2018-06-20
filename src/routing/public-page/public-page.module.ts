import {NgModule, CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import {RouterModule} from '@angular/router';
import {MatCardModule, MatButtonModule} from '@angular/material';

import {AuthenticationModule} from 'src/modules/authentication';

import {PublicPageComponent as component} from './public-page.component';
import {path} from './path';
import {CanActivatePublic} from './can-activate';

export const MatModules = [
    MatCardModule,
    MatButtonModule,
];

@NgModule({
    schemas: [CUSTOM_ELEMENTS_SCHEMA],
    imports: [
        AuthenticationModule,
        RouterModule.forChild([{path, component, canActivate: [CanActivatePublic]}]),
        ...MatModules,
    ],
    declarations: [component],
    providers: [CanActivatePublic],
})
export class PublicPageModule {}

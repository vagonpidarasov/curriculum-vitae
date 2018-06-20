import {NgModule, CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import {RouterModule} from '@angular/router';
import {MatCardModule, MatButtonModule} from '@angular/material';

import {HomePageComponent as component} from './home-page.component';
import {path} from './path';

export const MatModules = [
    MatCardModule,
    MatButtonModule,
];

@NgModule({
    schemas: [CUSTOM_ELEMENTS_SCHEMA],
    imports: [
        RouterModule.forChild([{path, component}]),
        ...MatModules,
    ],
    declarations: [component],
})
export class HomePageModule {}

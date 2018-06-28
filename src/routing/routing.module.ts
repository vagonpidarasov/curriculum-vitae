import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, RouterOutlet} from '@angular/router';

import {RouterConfig} from './router.config';
import {RouterGuardModule, RouterGuardComponent} from './router-guard';

import {HomePageModule} from './home-page';
import {PublicPageModule} from './public-page';

export const RoutingModules = [
    HomePageModule,
    PublicPageModule,
];

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forRoot([], RouterConfig),
        RouterGuardModule,
        ...RoutingModules,
    ],
    exports: [RouterOutlet, RouterGuardComponent],
})
export class AppRoutingModule {}

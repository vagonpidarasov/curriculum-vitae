import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, RouterOutlet} from '@angular/router';

import {NavigationModule} from 'src/modules/navigation';

import {RouterConfig} from './router.config';

import {HomePageRouteModule} from './home-page';

export const RoutingModules = [
    HomePageRouteModule,
];

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forRoot([], RouterConfig),
        NavigationModule,
        ...RoutingModules,
    ],
    exports: [RouterOutlet],
})
export class AppRoutingModule {}

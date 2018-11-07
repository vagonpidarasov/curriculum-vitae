import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, RouterOutlet} from '@angular/router';

import {NavigationModule} from 'src/modules/navigation';

import {RouterConfig} from './router.config';

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
        NavigationModule,
        ...RoutingModules,
    ],
    exports: [RouterOutlet],
})
export class AppRoutingModule {}

import {NgModule} from '@angular/core';
import {EffectsModule} from '@ngrx/effects';
import {StoreModule} from '@ngrx/store';
import {RouterModule} from '@angular/router';
import {StoreRouterConnectingModule, routerReducer} from '@ngrx/router-store';

import {AuthenticationModule} from 'src/modules/authentication';

import {AuthenticationEffects} from './redux';
import {RouterGuardService} from './router-guard.service';
import {NavigationEffects} from './navigation.effects';

@NgModule({
    imports: [
        RouterModule,
        StoreRouterConnectingModule.forRoot(),
        StoreModule.forFeature('router', routerReducer),
        EffectsModule.forFeature([AuthenticationEffects, NavigationEffects]),
        AuthenticationModule,
    ],
    providers: [RouterGuardService],
})
export class NavigationModule {}

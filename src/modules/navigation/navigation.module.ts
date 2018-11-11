import {NgModule} from '@angular/core';
import {EffectsModule} from '@ngrx/effects';
import {StoreModule} from '@ngrx/store';
import {StoreRouterConnectingModule, routerReducer} from '@ngrx/router-store';

import {AuthenticationModule} from 'src/modules/authentication';

import {NavigationEffects} from './redux';
import {RouterGuardService} from './router-guard.service';

@NgModule({
    imports: [
        StoreRouterConnectingModule.forRoot(),
        StoreModule.forFeature('router', routerReducer),
        EffectsModule.forFeature([NavigationEffects]),
        AuthenticationModule,
    ],
    providers: [
        RouterGuardService,
    ],
})
export class NavigationModule {}

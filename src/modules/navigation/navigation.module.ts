import {NgModule} from '@angular/core';
import {EffectsModule} from '@ngrx/effects';
import {StoreModule} from '@ngrx/store';
import {StoreRouterConnectingModule, routerReducer} from '@ngrx/router-store';

import {AuthenticationModule} from 'src/modules/authentication';

import {NavigationStore, NavigationEffects, FeatureStateName, NavigationReducer} from './redux';
import {RouterGuardService} from './router-guard.service';
import {NavigationService} from './navigation.service';

@NgModule({
    imports: [
        StoreRouterConnectingModule.forRoot(),
        StoreModule.forFeature('router', routerReducer),
        StoreModule.forFeature(FeatureStateName, NavigationReducer),
        EffectsModule.forFeature([NavigationEffects]),
        AuthenticationModule,
    ],
    providers: [
        NavigationStore,
        RouterGuardService,
        NavigationService,
    ],
})
export class NavigationModule {}

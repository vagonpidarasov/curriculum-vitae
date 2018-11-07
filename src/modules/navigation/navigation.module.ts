import {NgModule} from '@angular/core';
import {EffectsModule} from '@ngrx/effects';
import {StoreModule} from '@ngrx/store';
import {StoreRouterConnectingModule, routerReducer} from '@ngrx/router-store';

import {NavigationStore, NavigationEffects, FeatureStateName, NavigationReducer} from './redux';
import {NavigationService} from './navigation.service';

@NgModule({
    imports: [
        StoreRouterConnectingModule.forRoot(),
        StoreModule.forFeature('router', routerReducer),
        StoreModule.forFeature(FeatureStateName, NavigationReducer),
        EffectsModule.forFeature([NavigationEffects]),
    ],
    providers: [
        NavigationStore,
        NavigationService,
    ],
})
export class NavigationModule {}

import {NgModule, CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MatButtonModule} from '@angular/material';
import {EffectsModule} from '@ngrx/effects';
import {StoreModule} from '@ngrx/store';

import {
    GeolocationStore,
    GeolocationReducer,
    FeatureStateName,
    GeolocationEffects,
} from './redux';

import {GeolocationComponent} from './geolocation-component';

export const MatModules = [MatButtonModule];

@NgModule({
    schemas: [CUSTOM_ELEMENTS_SCHEMA],
    imports: [
        CommonModule,
        ...MatModules,
        StoreModule.forFeature(FeatureStateName, GeolocationReducer),
        EffectsModule.forFeature([GeolocationEffects]),
    ],
    providers: [GeolocationStore],
    exports: [GeolocationComponent],
    declarations: [GeolocationComponent],
})
export class GeolocationModule {}

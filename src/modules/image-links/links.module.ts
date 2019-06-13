import {NgModule, CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import {CommonModule} from '@angular/common';
import {EffectsModule} from '@ngrx/effects';
import {StoreModule} from '@ngrx/store';

import {ImageLinksEffects, ImageLinksStore, FeatureStateName, reducer} from './redux';

@NgModule({
    schemas: [CUSTOM_ELEMENTS_SCHEMA],
    imports: [
        CommonModule,
        StoreModule.forFeature(FeatureStateName, reducer),
        EffectsModule.forFeature([ImageLinksEffects]),
    ],
    providers: [ImageLinksStore],
})
export class LinksModule {}

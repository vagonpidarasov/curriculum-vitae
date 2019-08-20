import {NgModule} from '@angular/core';
import {EffectsModule} from '@ngrx/effects';
import {InitEffects} from './init.effects';

@NgModule({
    imports: [
        EffectsModule.forFeature([InitEffects]),
    ],
})
export class ReduxModule {}

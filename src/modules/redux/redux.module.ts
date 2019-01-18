import {NgModule} from '@angular/core';
import {EffectsModule} from '@ngrx/effects';
import {ReduxEffects} from './redux';

@NgModule({
    imports: [
        EffectsModule.forFeature([ReduxEffects]),
    ],
})
export class ReduxModule {}

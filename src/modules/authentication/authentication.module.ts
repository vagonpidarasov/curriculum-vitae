import {NgModule} from '@angular/core';
import {EffectsModule} from '@ngrx/effects';
import {StoreModule} from '@ngrx/store';

import {AuthenticationStore} from './redux/store';
import {AuthenticationReducer} from './redux/reducer';
import {AuthenticationStateName} from './redux/feature-state-name';
import {AuthenticationEffects} from './redux/effects';

@NgModule({
    imports: [
        StoreModule.forFeature(AuthenticationStateName, AuthenticationReducer),
        EffectsModule.forFeature([AuthenticationEffects])
    ],
    providers: [AuthenticationStore],

})
export class AuthenticationModule {}

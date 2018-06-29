import {NgModule, CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import {RouterModule} from '@angular/router';
import {MatSnackBarModule} from '@angular/material';

import {AuthenticationModule} from 'src/modules/authentication';

import {RouterGuardService} from './router-guard.service';
import {RouterGuardComponent} from './router-guard.component';

@NgModule({
    schemas: [CUSTOM_ELEMENTS_SCHEMA],
    imports: [AuthenticationModule, MatSnackBarModule, RouterModule],
    providers: [RouterGuardService],
    exports: [RouterGuardComponent],
    declarations: [RouterGuardComponent],
})
export class RouterGuardModule {}

import {NgModule, CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MatCardModule, MatButtonModule, MatIconModule} from '@angular/material';

import {PrivatePageContainer} from './private-page.container';
import {GeolocationModule} from 'src/modules/geolocation';
import {QuestionModule} from 'src/modules/question';

@NgModule({
    schemas: [CUSTOM_ELEMENTS_SCHEMA],
    imports: [
        CommonModule,
        MatCardModule,
        MatButtonModule,
        MatIconModule,
        GeolocationModule,
        QuestionModule
    ],
    declarations: [PrivatePageContainer],
    exports: [PrivatePageContainer],
})
export class PrivatePageModule {}

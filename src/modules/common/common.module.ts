import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {BackgroundUrlPipe, MailToPipe, TelPipe, MapLocationQuery, MonthDesctructPipe, DateIncrPipe} from './pipes';
import {WINDOW} from './window.injection-token';

@NgModule({
    imports: [CommonModule],
    declarations: [BackgroundUrlPipe, MailToPipe, TelPipe, MapLocationQuery, MonthDesctructPipe, DateIncrPipe],
    exports: [BackgroundUrlPipe, MailToPipe, TelPipe, MapLocationQuery, MonthDesctructPipe, DateIncrPipe],
    providers: [
        {provide: WINDOW, useValue: window},
    ],
})
export class CommonAppModule {}

import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {BackgroundUrlPipe, MailToPipe, TelPipe, MapLocationQuery, MonthDesctructPipe} from './pipes';

@NgModule({
    imports: [CommonModule],
    declarations: [BackgroundUrlPipe, MailToPipe, TelPipe, MapLocationQuery, MonthDesctructPipe],
    exports: [BackgroundUrlPipe, MailToPipe, TelPipe, MapLocationQuery, MonthDesctructPipe],
})
export class CommonAppModule {}

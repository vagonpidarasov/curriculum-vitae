import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {BackgroundUrlPipe, MailToPipe, TelPipe, MapLocationQuery} from './pipes';

@NgModule({
    imports: [CommonModule],
    declarations: [BackgroundUrlPipe, MailToPipe, TelPipe, MapLocationQuery],
    exports: [BackgroundUrlPipe, MailToPipe, TelPipe, MapLocationQuery],
})
export class CommonAppModule {}

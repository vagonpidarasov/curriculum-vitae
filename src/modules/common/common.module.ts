import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {BackgroundUrlPipe, MailToPipe, TelPipe} from './pipes';

@NgModule({
    imports: [CommonModule],
    declarations: [BackgroundUrlPipe, MailToPipe, TelPipe],
    exports: [BackgroundUrlPipe, MailToPipe, TelPipe],
})
export class CommonAppModule {}

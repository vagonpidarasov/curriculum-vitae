import {NgModule, CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MatButtonModule, MatTooltipModule} from '@angular/material';
import {DownloadPdfComponent} from './download-pdf.component';
import {PDFService} from './pdf.service';

@NgModule({
    schemas: [CUSTOM_ELEMENTS_SCHEMA],
    imports: [
        CommonModule,
        MatButtonModule,
        MatTooltipModule,
    ],
    providers: [PDFService],
    declarations: [DownloadPdfComponent],
    exports: [DownloadPdfComponent],
})
export class PDFModule {}

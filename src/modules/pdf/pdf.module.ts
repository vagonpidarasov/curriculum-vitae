import {NgModule, CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import {CommonModule} from '@angular/common';
import {EffectsModule} from '@ngrx/effects';
import {MatButtonModule, MatTooltipModule} from '@angular/material';

import {DownloadPdfComponent} from './download-pdf.component';
import {DownloadPdfEffects, PdfStore} from './redux';

@NgModule({
    schemas: [CUSTOM_ELEMENTS_SCHEMA],
    imports: [
        CommonModule,
        MatButtonModule,
        MatTooltipModule,
        EffectsModule.forFeature([DownloadPdfEffects])
    ],
    providers: [PdfStore],
    declarations: [DownloadPdfComponent],
    exports: [DownloadPdfComponent],
})
export class PDFModule {}

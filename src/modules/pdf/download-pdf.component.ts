import {Component, Input} from '@angular/core';
import {PdfStore} from './redux';

@Component({
    selector: 'download-pdf',
    templateUrl: './download-pdf.component.html',
    styleUrls: ['./download-pdf.component.scss'],

})
export class DownloadPdfComponent {
    @Input() filename:string = null;
    @Input() tooltipPosition:string = 'before';

    constructor(private pdfStore:PdfStore) {}

    download() {
        this.pdfStore.downloadPdf(this.filename);
    }
}

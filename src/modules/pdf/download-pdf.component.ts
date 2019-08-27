import {Component, Input} from '@angular/core';
import {PDFService} from './pdf.service';

@Component({
    selector: 'download-pdf',
    templateUrl: './download-pdf.component.html',
    styleUrls: ['./download-pdf.component.scss'],
})
export class DownloadPdfComponent {
    @Input() filename:string = null;
    @Input() tooltipPosition:string = 'before';

    constructor(private pdfService:PDFService) {}

    download() {
        this.pdfService.download(this.filename);
    }
}

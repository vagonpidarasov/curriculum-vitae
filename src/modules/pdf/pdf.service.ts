import {Inject, Injectable} from '@angular/core';
import {DOCUMENT} from '@angular/common';
import {toPDF} from './to-pdf';

@Injectable()
export class PDFService {
    constructor(@Inject(DOCUMENT) private document:Document) {}
    download(filename:string) {
        const element = this.document.body.querySelector<HTMLElement>(`.pdf-content[data-filename="${filename}"]`);
        toPDF(filename, element);
    }
}

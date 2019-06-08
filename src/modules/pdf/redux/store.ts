import {Injectable} from '@angular/core';
import {Store} from '@ngrx/store';

import {DownloadPdf} from './actions';

@Injectable()
export class PdfStore {
    constructor(private store:Store<any>) {}
    downloadPdf(filename:string):void {
        this.store.dispatch(new DownloadPdf(filename));
    }
}

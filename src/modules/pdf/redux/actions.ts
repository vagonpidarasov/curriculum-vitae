import {Action} from 'src/modules/redux';
import {DOWNLOAD_PDF} from './action-types';

export class DownloadPdf implements Action {
    static type = DOWNLOAD_PDF;
    readonly type = DOWNLOAD_PDF;
    constructor(public payload:string) {}
}

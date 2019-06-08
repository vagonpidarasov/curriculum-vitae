import {Inject, Injectable} from '@angular/core';
import {DOCUMENT} from '@angular/common';
import {Actions, Effect, ofType} from '@ngrx/effects';
import {tap, map} from 'rxjs/operators';

import {NoDispatchMetadada, toPayload} from 'src/modules/redux';
import {toPDF} from '../to-pdf';

import {DownloadPdf} from './actions';

@Injectable()
export class DownloadPdfEffects {
    private getElement(filename:string):HTMLElement {
        return this.document.body.querySelector<HTMLElement>(`.pdf-content[data-filename="${filename}"]`);

    }
    constructor(
        private actions$:Actions,
        @Inject(DOCUMENT) private document:Document,
    ) {}

    @Effect(NoDispatchMetadada) DownloadPdfEffect$ = this.actions$.pipe(
        ofType(DownloadPdf.type),
        map(toPayload),
        tap((filename:string) => toPDF(filename, this.getElement(filename))),
    );
}

import {Injectable, Inject, Renderer2, RendererFactory2} from '@angular/core';
import {DOCUMENT} from '@angular/common';
import {Actions, Effect, ofType} from '@ngrx/effects';
import {map, tap, filter} from 'rxjs/operators';

import {toPayload, NoDispatchMetadada} from 'src/modules/redux';
import {toWepbUrl, toUrl} from 'src/modules/contentful';
import {toBackgroundUrl} from 'src/modules/common';

import {Employee} from './models';
import {SetEmployee} from './redux';

@Injectable()
export class BackgroundImageEffects {
    private renderer:Renderer2;
    constructor(
        private actions$:Actions,
        private rendererFactory:RendererFactory2,
        @Inject(DOCUMENT) private document:Document,
        @Inject('windowObject') private window:Window,
    ) {
        this.renderer = rendererFactory.createRenderer(null, null);
    }

    @Effect(NoDispatchMetadada) SetBodyBackgroundEffect$ = this.actions$.pipe(
        ofType(SetEmployee.type),
        map(toPayload),
        map((payload:Employee) => payload.backgroundImage),
        map((payload:any) => toUrl(payload)),
        filter((payload:string) => !!payload),
        map((payload:string) => this.window.createImageBitmap ? toWepbUrl(payload) : payload),
        map((payload:string) => toBackgroundUrl(payload)),
        tap((payload:string) => this.renderer.setStyle(this.document.body, 'backgroundImage', payload)),
    );
}

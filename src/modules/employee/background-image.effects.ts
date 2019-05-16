import {Injectable, Inject, Renderer2, RendererFactory2} from '@angular/core';
import {DOCUMENT} from '@angular/common';
import {Actions, Effect, ofType} from '@ngrx/effects';
import {map, tap} from 'rxjs/operators';

import {toPayload, NoDispatchMetadada} from 'src/modules/redux';
import {toUrl} from 'src/modules/contentful';
import {toBackgroundUrl} from 'src/modules/common';

import {Employee} from './models';
import {SET_EMPLOYEE} from './redux';

@Injectable()
export class BackgroundImageEffects {
    private renderer:Renderer2;
    constructor(
        private actions$:Actions,
        private rendererFactory:RendererFactory2,
        @Inject(DOCUMENT) private document:Document,
    ) {
        this.renderer = rendererFactory.createRenderer(null, null);
    }

    @Effect(NoDispatchMetadada) SetBodyBackgroundEffect$ = this.actions$.pipe(
        ofType(SET_EMPLOYEE),
        map(toPayload),
        map((payload:Employee) => payload.backgroundImage),
        map((payload:any) => toUrl(payload)),
        map((payload:string) => toBackgroundUrl(payload)),
        tap((payload:string) => this.renderer.setStyle(this.document.body, 'backgroundImage', payload)),
    );
}

import {Injectable, Inject, Renderer2, RendererFactory2} from '@angular/core';
import {DOCUMENT} from '@angular/common';
import {Actions, Effect, ofType} from '@ngrx/effects';
import {Store, INIT} from '@ngrx/store';
import {map, tap, filter, withLatestFrom} from 'rxjs/operators';

import {NoDispatchMetadada, Action} from 'src/modules/redux';
import {toWepbUrl} from 'src/modules/contentful';
import {toBackgroundUrl} from 'src/modules/common';

import {SetBackgroundUrl, FeatureState as EmployeeFeatureState} from './redux';

@Injectable()
export class BackgroundImageEffects {
    private renderer:Renderer2;
    constructor(
        private actions$:Actions,
        private store:Store<EmployeeFeatureState>,
        private rendererFactory:RendererFactory2,
        @Inject(DOCUMENT) private document:Document,
        @Inject('windowObject') private window:Window,
    ) {
        this.renderer = rendererFactory.createRenderer(null, null);
    }

    @Effect(NoDispatchMetadada) SetBodyBackgroundEffect$ = this.actions$.pipe(
        ofType(SetBackgroundUrl.type, INIT),
        withLatestFrom(this.store, (a:Action, s:EmployeeFeatureState) => s.employee.backgroundUrl),
        filter((payload:string) => !!payload),
        map((payload:string) => this.window.createImageBitmap ? toWepbUrl(payload) : payload),
        map((payload:string) => toBackgroundUrl(payload)),
        tap((payload:string) => this.renderer.setStyle(this.document.body, 'backgroundImage', payload)),
    );
}

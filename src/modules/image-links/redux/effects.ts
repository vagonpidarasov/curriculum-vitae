import {Injectable} from '@angular/core';
import {Actions, Effect, ofType} from '@ngrx/effects';
import {INIT} from '@ngrx/store';
import {Observable, of} from 'rxjs';
import {catchError, map, switchMap} from 'rxjs/operators';

import {Action, toPayload} from 'src/modules/redux';
import {toUrl} from 'src/modules/contentful';

import {ImageLink} from '../image-link.type';
import {LinksRepository} from '../links.repository';
import {ResolveLinks, ResolveLinksFail, ResolveLinksSuccess, SetFooterLinks, SetHeaderLinks} from './actions';

@Injectable()
export class ImageLinksEffects {
    private getImageLinkEntries():Observable<Action> {
        return this.linksRepository.getLinks().pipe(
            map((response:ImageLink[]) => new ResolveLinksSuccess(
                response.map((r:ImageLink) => Object.assign(new ImageLink(), r, {imageUrl: toUrl(r.image)})))
            ),
            catchError((e:any) => of(new ResolveLinksFail(e))),
        );
    }

    constructor(
        private actions$:Actions,
        private linksRepository:LinksRepository,
    ) {}

    @Effect() InitEffect$:Observable<Action> = this.actions$.pipe(
        ofType(INIT),
        map(() => new ResolveLinks()),
    );

    @Effect() ResolveEducationEffect$:Observable<Action> = this.actions$.pipe(
        ofType(ResolveLinks.type),
        switchMap(() => this.getImageLinkEntries()),
    );

    @Effect() SetFooterLinksEffect$:Observable<Action> = this.actions$.pipe(
        ofType(ResolveLinksSuccess.type),
        map(toPayload),
        map((payload:ImageLink[]) => payload.filter((image:ImageLink) => image.type === ImageLink.footer)),
        map((payload:ImageLink[]) => new SetFooterLinks(payload)),
    );

    @Effect() SetHeaderLinksEffect$:Observable<Action> = this.actions$.pipe(
        ofType(ResolveLinksSuccess.type),
        map(toPayload),
        map((payload:ImageLink[]) => payload.filter((image:ImageLink) => image.type === ImageLink.header)),
        map((payload:ImageLink[]) => new SetHeaderLinks(payload)),
    );

}

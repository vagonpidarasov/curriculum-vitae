import {Injectable} from '@angular/core';
import {Actions, Effect, ofType} from '@ngrx/effects';
import {INIT} from '@ngrx/store';
import {Observable, of} from 'rxjs';
import {catchError, map, switchMap} from 'rxjs/operators';
import {toPayload} from 'yet-another-redux-helpers';
import {toUrl} from 'src/modules/contentful';
import {ImageLink} from '../image-link.type';
import {LinksRepository} from '../links.repository';
import {ResolveLinks, SetLinks, ResolveLinksFail, ResolveLinksSuccess, SetFooterLinks, SetHeaderLinks} from './actions';

export type GetImageLinkEntriesType = ResolveLinksFail|ResolveLinksSuccess;

@Injectable()
export class ImageLinksEffects {
    private getImageLinkEntries():Observable<GetImageLinkEntriesType> {
        return this.linksRepository.getLinks().pipe(
            map((response:ImageLink[]) => new ResolveLinksSuccess(response)),
            catchError((e:any) => of(new ResolveLinksFail(e))),
        );
    }

    constructor(
        private actions$:Actions,
        private linksRepository:LinksRepository,
    ) {}

    @Effect() InitEffect$:Observable<ResolveLinks> = this.actions$.pipe(
        ofType(INIT),
        map(() => new ResolveLinks()),
    );

    @Effect() ResolveEducationEffect$:Observable<GetImageLinkEntriesType> = this.actions$.pipe(
        ofType(ResolveLinks.type),
        switchMap(() => this.getImageLinkEntries()),
    );

    @Effect() SetLinksEffect$:Observable<SetLinks> = this.actions$.pipe(
        ofType(ResolveLinksSuccess.type),
        map(toPayload),
        map((payload:ImageLink[]) =>
            payload.map((r:ImageLink) => Object.assign(new ImageLink(), r, {imageUrl: toUrl(r.image)}))
        ),
        map((payload:ImageLink[]) => new SetLinks(payload)),
    );

    @Effect() SetFooterLinksEffect$:Observable<SetFooterLinks> = this.actions$.pipe(
        ofType(SetLinks.type),
        map(toPayload),
        map((payload:ImageLink[]) => payload.filter((image:ImageLink) => image.type === ImageLink.footer)),
        map((payload:ImageLink[]) => new SetFooterLinks(payload)),
    );

    @Effect() SetHeaderLinksEffect$:Observable<SetHeaderLinks> = this.actions$.pipe(
        ofType(SetLinks.type),
        map(toPayload),
        map((payload:ImageLink[]) => payload.filter((image:ImageLink) => image.type === ImageLink.header)),
        map((payload:ImageLink[]) => new SetHeaderLinks(payload)),
    );

}

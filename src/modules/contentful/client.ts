import {Injectable, Inject} from '@angular/core';
import {EntryCollection, createClient, CreateClientParams, ContentfulClientApi, Asset} from 'contentful';
import {Observable, Observer} from 'rxjs';

import {CONTENTFUL_CONFIG} from './config.injection-token';
import {toItems} from './to-items';
import {toUrl} from './to-url';
import {ContentfulResponsePayload} from './response-payload.interface';

@Injectable()
export class ContentfulClient {
    private client:ContentfulClientApi;
    constructor(@Inject(CONTENTFUL_CONFIG) config:CreateClientParams) {
        this.client = createClient(config);
    }

    getEntries<T>(
        contentType:string,
        withMetadata:boolean = false,
        query:string = '',
        limit:number = 100,
        skip:number = 0,
        order:string = 'sys.createdAt',
    ):Observable<T[]|ContentfulResponsePayload> {
        return new Observable((observer:Observer<T[]|ContentfulResponsePayload>) => {
            this.client.getEntries<T>({content_type: contentType, query, limit, skip, order})
                .then((response:EntryCollection<T>) => {
                    if (withMetadata) {
                        observer.next({total: response.total});
                    }
                    observer.next(toItems<T>(response));
                    observer.complete();
                })
                .catch((e:any) => observer.error(e));
        });
    }

    getAsset(assetId:string):Observable<string> {
        return new Observable((observer:Observer<string>) => {
            this.client.getAsset(assetId)
                .then((asset:Asset) => {
                    observer.next(toUrl(asset));
                    observer.complete();
                })
                .catch((e:any) => observer.error(e));
        });
    }
}

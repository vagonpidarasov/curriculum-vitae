import {Injectable, Inject} from '@angular/core';
import {EntryCollection, createClient, CreateClientParams, ContentfulClientApi} from 'contentful';
import {Observable, Observer} from 'rxjs';

import {CONTENTFUL_CONFIG} from './config.injection-token';
import {toItems} from './to-items';

@Injectable()
export class ContentfulClient {
    private client:ContentfulClientApi;
    constructor(@Inject(CONTENTFUL_CONFIG) config:CreateClientParams) {
        this.client = createClient(config);
    }

    getEntries<T>(contentType:string):Observable<T[]> {
        return new Observable((observer:Observer<T[]>) => {
            this.client.getEntries<T>({content_type: contentType})
                .then((response:EntryCollection<T>) => {
                    observer.next(toItems<T>(response));
                    observer.complete();
                })
                .catch((e:any) => observer.error(e));
        });
    }
}

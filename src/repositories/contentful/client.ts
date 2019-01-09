import {Injectable} from '@angular/core';
import {createClient, ContentfulClientApi} from 'contentful';
import {config} from './config';

@Injectable()
export class ContentfulClient {
    private readonly defaultSpaceClient:ContentfulClientApi;

    get defaultSpace():ContentfulClientApi {
        return this.defaultSpaceClient;
    }

    constructor() {
        this.defaultSpaceClient = createClient(config);
    }
}

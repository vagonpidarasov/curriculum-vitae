import {InjectionToken} from '@angular/core';
import {CreateClientParams} from 'contentful';

export const CONTENTFUL_CONFIG = new InjectionToken<CreateClientParams>('contentful.config');

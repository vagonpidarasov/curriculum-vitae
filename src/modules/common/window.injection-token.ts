import {InjectionToken} from '@angular/core';
import {CreateClientParams} from 'contentful';

export const WINDOW = new InjectionToken<CreateClientParams>('windowObject');

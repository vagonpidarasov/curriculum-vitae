import 'core-js/proposals/reflect-metadata';
import 'zone.js/dist/zone';
import 'marked/lib/marked';
import 'hammerjs';

import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';
import {enableProdMode} from '@angular/core';

import {AppModule} from 'src/app';
import {isProductionEnvironment} from './environment';

import './index.scss';

if (isProductionEnvironment) {
    enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule);

import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';
import {enableProdMode} from '@angular/core';

import {AppModule} from 'src/app';
import {isProductionEnvironment} from './environment';

if (isProductionEnvironment) {
    enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule).then(() => true);

import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';
import {enableProdMode} from '@angular/core';
import {AppContainerModule} from 'src/app';
import {isProductionEnvironment} from './environment';

if (isProductionEnvironment) {
    enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppContainerModule);

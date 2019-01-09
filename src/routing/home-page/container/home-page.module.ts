import {NgModule, CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';

import {AuthenticationModule} from 'src/modules/authentication';
import {GeolocationModule} from 'src/modules/geolocation';
import {BlogPostModule} from 'src/modules/blog-post';

import {HomePageContainer} from './home-page.container';

@NgModule({
    schemas: [CUSTOM_ELEMENTS_SCHEMA],
    imports: [
        AuthenticationModule,
        BlogPostModule,
        GeolocationModule,
    ],
    exports: [HomePageContainer],
    declarations: [HomePageContainer],
})
export class HomePageModule {}

import {NgModule, CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';
import {MatToolbarModule, MatButtonModule, MatTabsModule, MatIconModule} from '@angular/material';
import {HttpClientModule} from '@angular/common/http';
import {AngularSvgIconModule} from 'angular-svg-icon';

import {AuthenticationModule} from 'src/modules/authentication';
import {CommonAppModule} from 'src/modules/common';
import {LinksModule} from 'src/modules/image-links';

import {HeaderComponent} from './header.component';
import {HeaderContainer} from './header.container';
import {SocialLinksContainer} from './social-links.container';

@NgModule({
    schemas: [CUSTOM_ELEMENTS_SCHEMA],
    imports: [
        HttpClientModule,
        CommonModule,
        RouterModule,
        MatToolbarModule,
        MatButtonModule,
        MatTabsModule,
        AuthenticationModule,
        CommonAppModule,
        AngularSvgIconModule,
        MatIconModule,
        LinksModule,
    ],
    declarations: [HeaderComponent, HeaderContainer, SocialLinksContainer],
    exports: [HeaderComponent, HeaderContainer, SocialLinksContainer],
})
export class HeaderModule {}

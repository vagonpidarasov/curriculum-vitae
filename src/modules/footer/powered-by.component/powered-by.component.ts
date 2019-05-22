// tslint:disable:max-line-length
import {Component, ChangeDetectionStrategy} from '@angular/core';

@Component({
    selector: 'footer',
    templateUrl: './powered-by.component.html',
    styleUrls: ['./powered-by.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PoweredByComponent {
    logos = [
        {
            logoUrl: 'https://images.ctfassets.net/s3hc12klb4kw/7jSwS8hk1Bim6Y7jaXbsh4/16fca7eacabde5a6ecbab0e82eaf5a36/contentful-light.png',
            url: 'https://www.contentful.com/',
        },
        {
            logoUrl: 'https://images.ctfassets.net/s3hc12klb4kw/63KtJdGveS7e2YEcCgffQv/6f3917b5299950ee739601e704d9bbfb/logo-nav_2x.png',
            url: 'https://angular.io/',
        },
    ];
}

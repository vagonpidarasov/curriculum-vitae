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
            // tslint:disable-next-line:max-line-length
            logoUrl: 'https://d33wubrfki0l68.cloudfront.net/92c7b4c3938bf70914c40c26c0b1e221ef558bf9/e8622/assets/images/logos/contentful-light.svg',
            url: 'https://www.contentful.com/',
        },
        {
            logoUrl: 'https://angular.io/assets/images/logos/angular/logo-nav@2x.png',
            url: 'https://angular.io/',
        }
    ];
}

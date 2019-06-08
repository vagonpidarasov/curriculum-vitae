// tslint:disable:max-line-length
import {Component, ChangeDetectionStrategy} from '@angular/core';

export interface SocialIcon {
    logoUrl:string;
    url:string;
}

@Component({
    selector: 'source-code',
    templateUrl: './source-code.component.html',
    styleUrls: ['./source-code.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SourceCodeComponent {
    icons:SocialIcon[] = [
        {logoUrl: 'https://images.ctfassets.net/s3hc12klb4kw/1YUm4DRDsg3ZVBysxW5nvb/07502a5eb8ec5d30c9e2e263cd248cb7/25231.svg', url: 'https://github.com/vagonpidarasov/angular-seed/tree/curriculum-vitae'},
        {logoUrl: 'https://images.ctfassets.net/s3hc12klb4kw/7fm5I3IHasKkA0K7ht4tx7/7f74662bf3c65e2a766a2730dab3a4b3/iconmonstr-linkedin-4.svg', url: 'https://www.linkedin.com/in/stanislav-beresnev-a23747a0/'},
        {logoUrl: 'https://images.ctfassets.net/s3hc12klb4kw/3ZbH90LxFrRjIkXJWJHTY9/1faec0fc0ad4b89a7ff3874b26df1b4c/iconmonstr-facebook-4.svg', url: 'https://www.facebook.com/vagonpidarasov'},
    ];
}

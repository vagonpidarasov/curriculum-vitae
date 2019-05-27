// tslint:disable:max-line-length
import {Component, ChangeDetectionStrategy} from '@angular/core';

@Component({
    selector: 'source-code',
    templateUrl: './source-code.component.html',
    styleUrls: ['./source-code.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SourceCodeComponent {
    githubLogo = 'https://images.ctfassets.net/s3hc12klb4kw/1YUm4DRDsg3ZVBysxW5nvb/07502a5eb8ec5d30c9e2e263cd248cb7/25231.svg';
    sourceCodeUrl = 'https://github.com/vagonpidarasov/angular-seed/tree/curriculum-vitae';
}

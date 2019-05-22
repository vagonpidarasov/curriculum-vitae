// tslint:disable:max-line-length
import {Component, ChangeDetectionStrategy} from '@angular/core';

@Component({
    selector: 'source-code',
    templateUrl: './source-code.component.html',
    styleUrls: ['./source-code.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SourceCodeComponent {
    githubLogo = 'https://images.ctfassets.net/s3hc12klb4kw/1FZzeNgzQvhC1NUxhdIfSj/e227fd0ed67acd7234752b97c176a5e5/GitHub-Mark-64px.png';
    sourceCodeUrl = 'https://github.com/vagonpidarasov/angular-seed/tree/curriculum-vitae';
}

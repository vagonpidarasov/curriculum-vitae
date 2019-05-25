// tslint:disable:max-line-length
import {Component, ChangeDetectionStrategy} from '@angular/core';

@Component({
    selector: 'source-code',
    templateUrl: './source-code.component.html',
    styleUrls: ['./source-code.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SourceCodeComponent {
    githubLogo = 'https://images.ctfassets.net/s3hc12klb4kw/2rBv8QjRg8kPJblMsAAcfg/1987087c19f6dc36fda954bba24b2d65/GitHub-Mark-Light-64px.png';
    sourceCodeUrl = 'https://github.com/vagonpidarasov/angular-seed/tree/curriculum-vitae';
}

import {Component, Input} from '@angular/core';
import {toImageUrl} from 'src/modules/contentful';

@Component({
    selector: 'blog-post',
    templateUrl: './blog-post.component.html',
    styleUrls: ['./blog-post.component.scss'],
})
export class BlogPostComponent {
    @Input() blogPost:any = null;
    toImageUrl(asset:any) {
        return toImageUrl(asset);
    }
}

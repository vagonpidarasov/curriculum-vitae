import {Component, Input} from '@angular/core';

@Component({
    selector: 'blog-post',
    templateUrl: './blog-post.component.html',
    styleUrls: ['./blog-post.component.scss'],
})
export class BlogPostComponent {
    @Input() blogPost:any = null;
    useAvatarFallback:boolean = false;
}

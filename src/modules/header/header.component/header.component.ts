import {Component, Output, EventEmitter, Input, ChangeDetectionStrategy} from '@angular/core';

@Component({
    selector: 'header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderComponent  {
    @Input() isAuthenticated:boolean = false;
    @Output() signInRequest:EventEmitter<null> = new EventEmitter();
    @Output() signOutRequest:EventEmitter<null> = new EventEmitter();

    signIn() {
        this.signInRequest.emit();
    }

    signOut() {
        this.signOutRequest.emit();
    }
}

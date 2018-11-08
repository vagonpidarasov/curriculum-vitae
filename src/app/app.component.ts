import {Component, ViewEncapsulation, OnInit} from '@angular/core';
import {SignInDialogService} from 'src/modules/authentication';
import {NavigationService} from 'src/modules/navigation';

@Component({
    selector: 'app',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
    encapsulation: ViewEncapsulation.None,
})
export class AppComponent implements OnInit {
    constructor(
        private signInDialogService:SignInDialogService,
        private navigationService:NavigationService,
    ) {}
    ngOnInit() {
        this.signInDialogService.init();
        this.navigationService.init();
    }
}

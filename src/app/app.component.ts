import {Component, ViewEncapsulation, OnInit} from '@angular/core';
import {NavigationService} from 'src/modules/navigation';

@Component({
    selector: 'app',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
    encapsulation: ViewEncapsulation.None,
})
export class AppComponent implements OnInit {
    constructor(private navigationService:NavigationService) {}
    ngOnInit() {
        this.navigationService.init();
    }
}

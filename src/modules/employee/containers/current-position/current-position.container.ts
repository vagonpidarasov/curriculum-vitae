import {Component} from '@angular/core';
import {EmployeeStore} from '../../redux';

@Component({
    selector: 'current-position-container',
    templateUrl: './current-position.container.html',
})
export class CurrentPositionContainer {
    constructor(public employeeStore:EmployeeStore) {}
}

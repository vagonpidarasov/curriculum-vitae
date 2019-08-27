import {Component} from '@angular/core';
import {EducationStore} from '../redux';

@Component({
    selector: 'education-container',
    templateUrl: './education.container.html',
})
export class EducationContainer {
    constructor(public educationStore:EducationStore) {}
}

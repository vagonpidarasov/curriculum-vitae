import {Component} from '@angular/core';
import {ExperienceStore} from '../redux';

@Component({
    selector: 'experience-container',
    templateUrl: './experience.container.html',
})
export class ExperienceContainer {
    constructor(public experienceStore:ExperienceStore) {}
}

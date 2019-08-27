import {Component, OnInit} from '@angular/core';
import {PageEvent} from '@angular/material';
import {QuestionsStore} from '../redux';

@Component({
    selector: 'questions-container',
    templateUrl: './questions.container.html',
    styleUrls: ['./questions.container.scss'],
})
export class QuestionsContainer implements OnInit {
    constructor(public questionsStore:QuestionsStore) {}
    ngOnInit() {
        this.questionsStore.setSearchQuery(null);
    }

    setQuery(query:string) {
        this.questionsStore.setSearchQuery(query);
    }

    setPage(page:PageEvent) {
        this.questionsStore.setPageIndex(page.pageIndex);
    }
}

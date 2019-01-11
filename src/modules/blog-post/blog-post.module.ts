import {NgModule, CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MatCardModule, MatButtonModule} from '@angular/material';
import {EffectsModule} from '@ngrx/effects';
import {StoreModule} from '@ngrx/store';

import {BlogPostEffects, BlogPostStore, FeatureStateName, reducer} from './redux';

import {BlogPostComponent} from './blog-post.component';
import {BlogPostContainer} from './blog-post.container';

export const MatModules = [MatCardModule, MatButtonModule];

@NgModule({
    schemas: [CUSTOM_ELEMENTS_SCHEMA],
    imports: [
        CommonModule,
        ...MatModules,
        StoreModule.forFeature(FeatureStateName, reducer),
        EffectsModule.forFeature([BlogPostEffects]),
    ],
    providers: [BlogPostStore],
    exports: [BlogPostContainer],
    declarations: [BlogPostComponent, BlogPostContainer],
})
export class BlogPostModule {}

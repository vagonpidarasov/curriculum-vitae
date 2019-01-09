import {NgModule} from '@angular/core';

import {FirebaseRepositoryModule} from './firebase';
import {NavigatorRepositoryModule} from './navigator';
import {ContentfulRepositoryModule} from './contentful';

@NgModule({
    imports: [
        FirebaseRepositoryModule,
        NavigatorRepositoryModule,
        ContentfulRepositoryModule,
    ],
})
export class RepositoriesModule {}

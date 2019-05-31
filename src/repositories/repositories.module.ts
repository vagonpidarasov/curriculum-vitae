import {NgModule} from '@angular/core';

import {FirebaseRepositoryModule} from './firebase';
import {NavigatorRepositoryModule} from './navigator';
import {ContentfulRepositoryModule} from './contentful';
import {HttpRepositoryModule} from './http';

@NgModule({
    imports: [
        FirebaseRepositoryModule,
        NavigatorRepositoryModule,
        ContentfulRepositoryModule,
        HttpRepositoryModule,
    ],
})
export class RepositoriesModule {}

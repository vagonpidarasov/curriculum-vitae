import {Asset} from 'contentful';

export interface BlogPost {
    avatar:Asset;
    avatarThumbnailURL:string;
    author:string;
    content:string;
}

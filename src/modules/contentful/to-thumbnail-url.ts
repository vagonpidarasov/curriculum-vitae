import {Asset} from 'contentful';

export function toThumbnailUrl(asset:Asset, size:number = 80):string {
    return (asset && asset.fields && asset.fields.file && asset.fields.file.url) ?
        `${asset.fields.file.url}?w=${size}&h=${size}&fm=png&fl=png8&fit=thumb` :
        null;
}

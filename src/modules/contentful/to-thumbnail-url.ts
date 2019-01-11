import {Asset} from 'contentful';

export function toThumbnailUrl(asset:Asset):string {
    return (asset && asset.fields && asset.fields.file && asset.fields.file.url) ?
        `${asset.fields.file.url}?w=80&h=80&fm=png&fl=png8&fit=thumb` :
        null;
}

import {Asset} from 'contentful';

export function toUrl(asset:Asset):string {
    return (asset && asset.fields && asset.fields.file && asset.fields.file.url) ? asset.fields.file.url : null;
}

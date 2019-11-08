import {toThumbnailUrl} from './to-thumbnail-url';
import asset from './mock/asset.response.json';
import {Asset} from 'contentful';

describe('toThumbnailUrl', () => {
    it('should convert an asset to a thumbnail url', () => {
        expect(toThumbnailUrl(asset as Asset)).toEqual(`${asset.fields.file.url}?w=80&h=80&fm=png&fl=png8&fit=thumb`);
    });
});

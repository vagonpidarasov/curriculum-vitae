import {toThumbnailUrl} from './to-thumbnail-url';
const asset = require('./mock/asset.response.json');

describe('toThumbnailUrl', () => {
    it('should convert an asset to a thumbnail url', () => {
        expect(toThumbnailUrl(asset)).toEqual(`${asset.fields.file.url}?w=80&h=80&fm=png&fl=png8&fit=thumb`);
    });
});

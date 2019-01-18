import {toItems} from './to-items';
const entryCollection = require('./mock/get-entries.response.json');

describe('toItems', () => {
    it('should convert an EntryCollection to an entry array', () => {
        const items = toItems<{field1:string, field2:string}>(entryCollection);

        expect(entryCollection.items[0].fields.field1).toEqual(items[0].field1);
        expect(entryCollection.items[0].fields.field2).toEqual(items[0].field2);
        expect(entryCollection.items.length).toEqual(items.length);
    });
});

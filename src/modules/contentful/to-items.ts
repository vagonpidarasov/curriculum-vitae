import {Entry, EntryCollection} from 'contentful';

export function toItems<T>(response:EntryCollection<T>):T[] {
    return response.items.map((item:Entry<T>) => item.fields);
}

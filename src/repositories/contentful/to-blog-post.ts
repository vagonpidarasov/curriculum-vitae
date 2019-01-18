import {EntryCollection, Asset} from 'contentful';
import {BlogPost} from 'src/modules/blog-post';
import {toItems, toThumbnailUrl} from 'src/modules/contentful';
import {BlogPostEntry} from './blog-post-entry';

export function toBlogPosts(response:EntryCollection<BlogPostEntry>):BlogPost[] {
    return toItems<BlogPostEntry>(response)
        .map((item:BlogPostEntry) => ({
            ...item,
            avatarThumbnailURL: toThumbnailUrl(<Asset>item.avatar),
        }));
}

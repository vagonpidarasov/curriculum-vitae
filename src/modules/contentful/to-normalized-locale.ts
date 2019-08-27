import {DEFAULT_LOCALE} from './default-locale.const';
import {LOCALE_MAP} from './locale-map.const';
import {normalizeLocale} from './normalize-locale';

export const toNormalizedLocale = normalizeLocale.bind(null, LOCALE_MAP, DEFAULT_LOCALE);

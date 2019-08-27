export function normalizeLocale(localeMap:Map<string, string>, defaultLocale:string, locale:string) {
    return locale && localeMap.get(locale) ? localeMap.get(locale) : defaultLocale;
}

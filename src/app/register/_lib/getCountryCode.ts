import { type Locale, enUS, fr, de, da, cs, pl } from 'date-fns/locale';

export function getCountryCode(code: string): Locale {
    let locale: Locale
    switch (code) {
        case 'fr':
            locale = fr
            break
        case 'de':
            locale = de
            break
        case 'da':
            locale = da
            break
        case 'cs':
            locale = cs
            break
        case 'pl':
            locale = pl
            break
        default:
            locale = enUS
            break
    }
    return locale
}
export type Locale = 'en' | 'es';

export const i18n = {
    defaultLocale: 'en',
    locales: ['en', 'es'],
} as const;

/* Simple dictionary loader */
const dictionaries = {
    en: () => import('./en.json').then((module) => module.default),
    es: () => import('./es.json').then((module) => module.default),
};

export const getDictionary = async (locale: Locale) => {
    if (dictionaries[locale]) {
        return dictionaries[locale]();
    }
    return dictionaries['en']();
};

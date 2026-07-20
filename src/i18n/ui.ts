// All static UI text lives here. To add a language (e.g. Hebrew):
// 1. add its dictionary to `ui`, its name to `languages`, its direction to `dirs`
// 2. enable Astro's i18n routing in astro.config.mjs (locales + defaultLocale)
export const ui = {
  en: {
    'site.title': 'Art Gallery',
    'home.heading': 'Curated Collection',
    'artwork.back': '← Back to collection',
  },
} as const;

export const defaultLang = 'en' satisfies keyof typeof ui;

export const languages: Record<keyof typeof ui, string> = {
  en: 'English',
};

export const dirs: Record<keyof typeof ui, 'ltr' | 'rtl'> = {
  en: 'ltr',
};

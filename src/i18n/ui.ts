// All static UI text lives here. To add a language (e.g. Hebrew):
// 1. add its dictionary to `ui`, its name to `languages`, its direction to `dirs`
// 2. enable Astro's i18n routing in astro.config.mjs (locales + defaultLocale)
export const ui = {
  en: {
    'site.title': 'Aranyaka',
    'site.artist': 'Shani Taub Sagiv',
    'home.studio': 'Aranyaka Studio',
    'home.studioTagline': 'The path of the brush: navigating mind through form, color, and the empty spaces in between',
    'nav.home': 'Home',
    'nav.gallery': 'Gallery',
    'nav.prints': 'Prints',
    'nav.journal': 'Journal',
    'nav.about': 'About',
    'nav.contact': 'Contact',
    'journal.video': 'video',
    'journal.back': '← Back to Journal',
    'journal.empty': 'Nothing here yet.',
    'journal.watch': 'Watch the video',
    'journal.title': 'Aranyaka Journal',
    'journal.subtitle': 'Notes on practice, mind, and the path of the brush',
    'about.cv': 'Download PDF CV',
    'contact.instagram': 'Instagram',
    'artwork.back': '← Back to collection',
    'artwork.sold': 'Sold',
    'prints.selectSize': 'Select Size',
    'prints.order': 'Order via Email',
    'prints.detailsHeading': 'Details & Shipping',
    'prints.mailSubject': 'Print order — {title}',
    'prints.mailBody': 'I\'d like to order a print of "{title}" — Size: {size}.',
  },
} as const;

export const defaultLang = 'en' satisfies keyof typeof ui;

export const languages: Record<keyof typeof ui, string> = {
  en: 'English',
};

export const dirs: Record<keyof typeof ui, 'ltr' | 'rtl'> = {
  en: 'ltr',
};

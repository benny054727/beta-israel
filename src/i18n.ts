/**
 * 🌐 שפות האתר – עברית (ברירת מחדל), אנגלית (/en/) ואמהרית (/am/)
 * טקסטים משותפים לתפריט, לכותרת התחתונה ולסרגל הניווט.
 */
import { site, url } from './config';

export type Lang = 'he' | 'en' | 'am';

/** השפות לפי הסדר שבו הן מופיעות בתפריט השפות */
export const languages: { code: Lang; label: string; short: string }[] = [
  { code: 'he', label: 'עברית', short: 'עב' },
  { code: 'en', label: 'English', short: 'EN' },
  { code: 'am', label: 'አማርኛ', short: 'አማ' },
];

export const ui = {
  he: {
    dir: 'rtl',
    locale: 'he_IL',
    siteName: site.name,
    tagline: site.tagline,
    description: site.description,
    address: site.address,
    brand: 'ביתא ישראל',
    brandSub: 'נווה יעקב · ירושלים',
    skip: 'דילוג לתוכן העיקרי',
    mainNav: 'ניווט ראשי',
    moreLinks: 'קישורים נוספים',
    footerNav: 'ניווט בתחתית העמוד',
    onSite: 'באתר',
    donate: 'תרומה',
    toDonate: 'לתרומה',
    about: 'אודות',
    contact: 'צור קשר',
    accessibility: 'הצהרת נגישות',
    privacy: 'מדיניות פרטיות',
    association: site.association.name,
    donationsBefore: 'התרומות דרך האתר מתקבלות ע"י ',
    donationsAfter: '.',
    regNo: 'ע"ר',
    langMenu: 'שפה',
    arrow: '←',
    reviewNote: '',
    nav: [
      { href: '/synagogue', label: 'בית הכנסת' },
      { href: '/history', label: 'היסטוריה ותרבות' },
      { href: '/events', label: 'אירועים' },
      { href: '/celebrations', label: 'שמחות' },
      { href: '/tours', label: 'סיורים' },
      { href: '/about', label: 'אגודת אנדנט' },
      { href: '/contact', label: 'צור קשר' },
    ],
    bottom: { home: 'בית', synagogue: 'בית הכנסת', history: 'היסטוריה', events: 'אירועים', tours: 'סיורים', donate: 'תרומה' },
  },
  en: {
    dir: 'ltr',
    locale: 'en_US',
    siteName: 'Beta Israel – Neve Yaakov',
    tagline: "The synagogue of Jerusalem's Ethiopian Jewish community",
    description:
      'The community website of the Beta Israel synagogue in Neve Yaakov, Jerusalem: history and culture, events, free tours and donations.',
    address: site.addressEn,
    brand: 'Beta Israel',
    brandSub: 'Neve Yaakov · Jerusalem',
    skip: 'Skip to main content',
    mainNav: 'Main navigation',
    moreLinks: 'More links',
    footerNav: 'Footer navigation',
    onSite: 'On this site',
    donate: 'Donate',
    toDonate: 'Donate',
    about: 'About',
    contact: 'Contact',
    accessibility: 'Accessibility',
    privacy: 'Privacy policy',
    association: site.association.nameEn,
    donationsBefore: 'Donations made through this site are received by the ',
    donationsAfter: '.',
    regNo: 'reg. no.',
    langMenu: 'Language',
    arrow: '→',
    reviewNote: '',
    nav: [
      { href: '/synagogue', label: 'Synagogue' },
      { href: '/history', label: 'History & Culture' },
      { href: '/events', label: 'Events' },
      { href: '/celebrations', label: 'Celebrations' },
      { href: '/tours', label: 'Tours' },
      { href: '/about', label: 'About' },
      { href: '/contact', label: 'Contact' },
    ],
    bottom: { home: 'Home', synagogue: 'Synagogue', history: 'History', events: 'Events', tours: 'Tours', donate: 'Donate' },
  },
  am: {
    dir: 'ltr',
    locale: 'am_ET',
    siteName: 'ቤተ እስራኤል – ኔቬ ያዕቆብ',
    tagline: 'በኢየሩሳሌም የሚገኘው የኢትዮጵያ ቤተ እስራኤል ማኅበረሰብ ምኩራብ',
    description:
      'በኢየሩሳሌም ኔቬ ያዕቆብ የሚገኘው የቤተ እስራኤል ምኩራብ የማኅበረሰብ ድረ-ገጽ፦ ታሪክና ባህል፣ ዝግጅቶች፣ ነጻ ጉብኝቶችና ልገሳ።',
    address: site.addressAm,
    brand: 'ቤተ እስራኤል',
    brandSub: 'ኔቬ ያዕቆብ · ኢየሩሳሌም',
    skip: 'ወደ ዋናው ይዘት ይለፉ',
    mainNav: 'ዋና ማውጫ',
    moreLinks: 'ተጨማሪ ማገናኛዎች',
    footerNav: 'የግርጌ ማውጫ',
    onSite: 'በዚህ ድረ-ገጽ',
    donate: 'ይለግሱ',
    toDonate: 'ይለግሱ',
    about: 'ስለ እኛ',
    contact: 'ያግኙን',
    accessibility: 'የተደራሽነት መግለጫ',
    privacy: 'የግላዊነት ፖሊሲ',
    association: site.association.nameAm,
    donationsBefore: 'በዚህ ድረ-ገጽ የሚደረጉ ልገሳዎችን የሚቀበለው ',
    donationsAfter: ' ነው።',
    regNo: 'የምዝገባ ቁ.',
    langMenu: 'ቋንቋ',
    arrow: '→',
    reviewNote: 'ይህ የአማርኛ ትርጉም በመገምገም ላይ ነው። ስህተት ካገኙ እባክዎ ያሳውቁን።',
    nav: [
      { href: '/synagogue', label: 'ምኩራቡ' },
      { href: '/history', label: 'ታሪክና ባህል' },
      { href: '/events', label: 'ዝግጅቶች' },
      { href: '/celebrations', label: 'የደስታ በዓላት' },
      { href: '/tours', label: 'ጉብኝት' },
      { href: '/about', label: 'ስለ እኛ' },
      { href: '/contact', label: 'ያግኙን' },
    ],
    bottom: { home: 'መነሻ', synagogue: 'ምኩራብ', history: 'ታሪክ', events: 'ዝግጅቶች', tours: 'ጉብኝት', donate: 'ልገሳ' },
  },
} as const;

/** כתובת פנימית לפי שפה: lurl('en', '/tours') → /beta-israel/en/tours */
export function lurl(lang: Lang, path = '/'): string {
  const clean = path === '/' ? '/' : '/' + path.replace(/^\//, '');
  if (lang === 'he') return url(clean);
  return url(clean === '/' ? `/${lang}/` : `/${lang}${clean}`);
}

/** הנתיב בתוך האתר בלי תיקיית הבסיס ובלי קידומת השפה, למשל '/tours' */
export function pagePath(pathname: string): string {
  const base = import.meta.env.BASE_URL.replace(/\/$/, '');
  let p = pathname.startsWith(base) ? pathname.slice(base.length) : pathname;
  p = p.replace(/^\/(en|am)(?=\/|$)/, '');
  p = p.replace(/\/$/, '');
  return p || '/';
}

export function langFromPath(pathname: string): Lang {
  const base = import.meta.env.BASE_URL.replace(/\/$/, '');
  const p = pathname.startsWith(base) ? pathname.slice(base.length) : pathname;
  const m = p.match(/^\/(en|am)(\/|$)/);
  return m ? (m[1] as Lang) : 'he';
}

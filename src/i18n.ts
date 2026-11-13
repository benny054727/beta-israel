/**
 * 🌐 שפות האתר – עברית (ברירת מחדל) ואנגלית (/en/)
 * טקסטים משותפים לתפריט, לכותרת התחתונה ולסרגל הניווט.
 */
import { site, url } from './config';

export type Lang = 'he' | 'en';

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
    donationsBy: 'התרומות דרך האתר מתקבלות ע"י',
    regNo: 'ע"ר',
    switchLabel: 'English',
    switchTitle: 'Switch to English',
    arrow: '←',
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
    donationsBy: 'Donations made through this site are received by the',
    regNo: 'reg. no.',
    switchLabel: 'עברית',
    switchTitle: 'מעבר לעברית',
    arrow: '→',
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
} as const;

/** כתובת פנימית לפי שפה: lurl('en', '/tours') → /beta-israel/en/tours */
export function lurl(lang: Lang, path = '/'): string {
  const clean = path === '/' ? '/' : '/' + path.replace(/^\//, '');
  return url(lang === 'en' ? (clean === '/' ? '/en/' : '/en' + clean) : clean);
}

/** הנתיב בתוך האתר בלי תיקיית הבסיס ובלי /en, למשל '/tours' */
export function pagePath(pathname: string): string {
  const base = import.meta.env.BASE_URL.replace(/\/$/, '');
  let p = pathname.startsWith(base) ? pathname.slice(base.length) : pathname;
  p = p.replace(/^\/en(?=\/|$)/, '');
  p = p.replace(/\/$/, '');
  return p || '/';
}

export function langFromPath(pathname: string): Lang {
  const base = import.meta.env.BASE_URL.replace(/\/$/, '');
  const p = pathname.startsWith(base) ? pathname.slice(base.length) : pathname;
  return /^\/en(\/|$)/.test(p) ? 'en' : 'he';
}

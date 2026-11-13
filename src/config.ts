/**
 * ⚙️ הגדרות האתר – כל הפרטים שצריך למלא נמצאים כאן.
 *
 * שדה ריק ('') = האתר יציג הודעת "בקרוב" במקום הרכיב.
 * אחרי שממלאים שדה ושומרים, האתר מתעדכן אוטומטית תוך כמה דקות.
 */
export const site = {
  name: 'ביתא ישראל – נווה יעקב',
  tagline: 'בית הכנסת של קהילת יהודי אתיופיה בירושלים',
  description:
    'האתר הקהילתי של בית הכנסת של ביתא ישראל בשכונת נווה יעקב, ירושלים: היסטוריה ותרבות, אירועים, סיורים ותרומות.',

  // 🖼️ איור ראשי לדף הבית (נוצר ב-Canva). הקבצים נמצאים ב-public/images בשם hero-800/1200/2000.
  // אם משנים ל-false – דף הבית מוצג עם מדליון האייקונים במקום האיור.
  heroImage: true,

  // 📍 פרטי בית הכנסת
  address: 'שכונת נווה יעקב, ירושלים', // TODO: כתובת מדויקת (רחוב ומספר)
  addressEn: 'Neve Yaakov, Jerusalem', // הכתובת באנגלית
  addressAm: 'ኔቬ ያዕቆብ፣ ኢየሩሳሌም', // הכתובת באמהרית
  mapQuery: 'נווה יעקב, ירושלים', // מה שיחפשו במפה – לעדכן לכתובת המדויקת

  // 📞 יצירת קשר
  phone: '', // לדוגמה: '02-1234567'
  email: '', // לדוגמה: 'info@example.org'
  whatsapp: '', // מספר בפורמט בינלאומי בלי + ובלי מקפים, לדוגמה: '972501234567'

  // 🤝 אגודת אנדנט – הגוף שמקבל את התרומות
  association: {
    name: 'אגודת אנדנט',
    nameEn: 'Andenet Association',
    nameAm: 'የአንድነት ማኅበር',
    registrationNumber: '', // TODO: מספר עמותה (ע"ר)
    hasSection46: false, // לשנות ל-true רק אחרי שמוודאים שיש אישור סעיף 46 בתוקף
  },

  // 💳 תרומות – קישורים לדפי תשלום חיצוניים ומאובטחים (האתר לא שומר פרטי אשראי)
  donationUrl: '', // קישור לדף התרומה בנדרים פלוס (או שירות אחר)
  paypalUrl: '', // קישור PayPal לתורמים מחו"ל

  // 📅 אירועים – מזהה יומן Google של בית הכנסת (היומן חייב להיות ציבורי)
  // נמצא ב: הגדרות היומן ← "שילוב היומן" ← "מזהה יומן"
  googleCalendarId: '',

  // 📝 טפסי Google – הקישור של הטופס (כפתור "שליחה" ← סמל הקישור)
  tourFormUrl: '', // טופס הזמנת סיור
  contactFormUrl: '', // טופס צור קשר
  celebrationFormUrl: '', // טופס בקשה להזמנת שמחה / אירוע בבית הכנסת

  // 🎉 שמחות ואירועים בתשלום בבית הכנסת
  // ⚠️ המחירים כאן הם לדוגמה בלבד! לעדכן למחירים האמיתיים לפני שמפרסמים את האתר.
  // כשהמחירים אמיתיים – לשנות את pricesAreExamples ל-false, וההודעה "מחירים לדוגמה" תיעלם.
  celebrations: {
    pricesAreExamples: true,
    capacity: '', // כמה אורחים בית הכנסת יכול להכיל, לדוגמה: '120'
    packages: [
      {
        icon: 'synagogue.svg',
        title: 'בר מצווה / בת מצווה',
        titleEn: 'Bar / Bat Mitzvah',
        titleAm: 'ባር ሚጽቫ / ባት ሚጽቫ',
        text: 'עלייה לתורה בבית הכנסת, וקידוש חגיגי במקום למשפחה ולאורחים.',
        textEn: 'Being called up to the Torah at the synagogue, followed by a festive kiddush for family and guests.',
        textAm: 'በምኩራቡ ኦሪትን ለማንበብ መጠራት፣ ከዚያም ለቤተሰብና ለእንግዶች የበዓል ቂዱሽ።',
        price: 1500,
      },
      {
        icon: 'orit.svg',
        title: 'שבת חתן',
        titleEn: 'Shabbat Chatan',
        titleAm: 'የሙሽራ ሰንበት',
        text: 'עלייה לתורה לחתן בשבת שלפני החתונה, עם קידוש לקהל ולמשפחה.',
        textEn: 'An aliyah for the groom on the Shabbat before the wedding, with a kiddush for the congregation and family.',
        textAm: 'ከሠርጉ በፊት ባለው ሰንበት ሙሽራው ኦሪትን ለማንበብ ይጠራል፤ ለጉባኤውና ለቤተሰብ ቂዱሽ ይደረጋል።',
        price: 1800,
      },
      {
        icon: 'celebrations.png',
        title: 'חינה',
        titleEn: 'Henna',
        titleAm: 'ሄና',
        text: 'ערב חינה מסורתי באולם בית הכנסת, עד 4 שעות.',
        textEn: 'A traditional henna evening in the synagogue hall, up to 4 hours.',
        textAm: 'በምኩራቡ አዳራሽ ባህላዊ የሄና ምሽት፣ እስከ 4 ሰዓት።',
        price: 2500,
      },
      {
        icon: 'community.png',
        title: 'אירוע חגיגי אחר',
        titleEn: 'Other celebrations',
        titleAm: 'ሌሎች የደስታ በዓላት',
        text: 'ברית, אירוסין, יום הולדת, מסיבת אירוסין או כל שמחה משפחתית.',
        textEn: 'A brit milah, engagement, birthday or any family simcha.',
        textAm: 'ብሪት ሚላ፣ ቀለበት ማሰር፣ የልደት በዓል ወይም ማንኛውም የቤተሰብ ደስታ።',
        price: 1200,
        from: true, // "החל מ-"
      },
    ],
    // תוספות אפשריות (לדוגמה)
    extras: [
      { title: 'מערכת הגברה', titleEn: 'Sound system', titleAm: 'የድምፅ ማጉያ', price: 400 },
      { title: 'שולחנות, כיסאות ומפות', titleEn: 'Tables, chairs and tablecloths', titleAm: 'ጠረጴዛዎች፣ ወንበሮችና የጠረጴዛ ልብሶች', price: 350 },
      { title: 'ניקיון אחרי האירוע', titleEn: 'Cleaning after the event', titleAm: 'ከዝግጅቱ በኋላ ጽዳት', price: 300 },
    ],
  },

  // 🕯️ זמני תפילות – אפשר להוסיף או למחוק שורות
  prayerTimes: [
    // { label: 'שחרית שבת', labelEn: 'Shabbat morning', time: '08:00' },
    // { label: 'מנחה וערבית', time: 'לפי שעת השקיעה' },
  ] as { label: string; labelEn?: string; labelAm?: string; time: string }[],

  // 🌐 רשתות חברתיות (אם אין – להשאיר ריק)
  social: {
    facebook: '',
    instagram: '',
    youtube: '',
  },
};

/** בונה כתובת פנימית באתר, בהתחשב בתיקיית הבסיס של GitHub Pages */
export function url(path = '/'): string {
  const base = import.meta.env.BASE_URL.replace(/\/$/, '');
  const clean = path.replace(/^\//, '');
  return `${base}/${clean}`;
}

export const nav = [
  { href: '/synagogue', label: 'בית הכנסת' },
  { href: '/history', label: 'היסטוריה ותרבות' },
  { href: '/events', label: 'אירועים' },
  { href: '/tours', label: 'סיורים' },
  { href: '/about', label: 'אגודת אנדנט' },
  { href: '/contact', label: 'צור קשר' },
];

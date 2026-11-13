import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

/**
 * מאמרי "היסטוריה ותרבות".
 * כדי להוסיף מאמר: ליצור קובץ .md חדש בתיקייה src/content/history
 * עם השדות שלמטה בראש הקובץ.
 */
const schema = z.object({
  title: z.string(),
  description: z.string(),
  order: z.number(), // סדר ההופעה ברשימה
  icon: z.string().default('origins.svg'), // שם קובץ אייקון מתוך public/icons
  reviewed: z.boolean().default(false), // true אחרי בדיקה של קייס / זקן קהילה
  sources: z.array(z.string()).default([]),
});

const history = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/history' }),
  schema,
});

/** מאמרים באנגלית – באותם שמות קבצים כמו בעברית, בתיקייה src/content/history-en */
const historyEn = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/history-en' }),
  schema,
});

/** מאמרים באמהרית – בתיקייה src/content/history-am */
const historyAm = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/history-am' }),
  schema,
});

export const collections = { history, historyEn, historyAm };

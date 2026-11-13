import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

/**
 * מאמרי "היסטוריה ותרבות".
 * כדי להוסיף מאמר: ליצור קובץ .md חדש בתיקייה src/content/history
 * עם השדות שלמטה בראש הקובץ.
 */
const history = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/history' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    order: z.number(), // סדר ההופעה ברשימה
    icon: z.string().optional(), // אמוג'י קטן לכרטיס
    reviewed: z.boolean().default(false), // true אחרי בדיקה של קייס / זקן קהילה
    sources: z.array(z.string()).default([]),
  }),
});

export const collections = { history };

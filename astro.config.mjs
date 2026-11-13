// @ts-check
import { defineConfig } from 'astro/config';

// שלב 1: GitHub Pages – https://benny054727.github.io/beta-israel
// בשלב 2 (דומיין משלנו): לשנות את site לכתובת החדשה ולמחוק את base.
export default defineConfig({
  site: 'https://benny054727.github.io',
  base: '/beta-israel',
  trailingSlash: 'ignore',
});

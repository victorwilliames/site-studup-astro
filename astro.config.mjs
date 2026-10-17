import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: 'https://victorwilliames.github.io',
  base: '/site-studup-astro',
  vite: {
    plugins: [tailwindcss()],
  },
});
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';
import partytown from '@astrojs/partytown';

// https://astro.build/config
export default defineConfig({
  site: 'https://start.guillermoml.com',
  integrations: [
    sitemap(),
    partytown({
      config: {
        forward: ["plausible"],
      },
    }),
  ],
  vite: {
    plugins: [tailwindcss()]
  }
});
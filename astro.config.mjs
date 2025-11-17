import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://calebbrunkhart.github.io',
  base: '/fictional-octo-fishstick',   // MUST match repo name exactly
  outDir: './dist',                     // where GitHub Pages deploys from
});

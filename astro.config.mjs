import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';

export default defineConfig({
  integrations: [mdx()],
  site: 'https://calebbrunkhart.github.io',
  base: '/fictional-octo-fishstick',
  output: 'static'
});

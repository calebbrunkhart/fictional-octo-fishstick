import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';

export default defineConfig({
  integrations: [mdx()],
  site: 'https://calebbrunkhart.github.io', // change if you deploy to a different domain
  output: 'static'
});

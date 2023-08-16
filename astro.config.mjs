import { defineConfig } from 'astro/config';
import preact from "@astrojs/preact";
import nodejs from "@astrojs/node";

import vue from "@astrojs/vue";

// https://astro.build/config
export default defineConfig({
  integrations: [preact(), vue()],
  adapter: nodejs({
    mode: 'standalone'
  }),
  output: 'hybrid'
});
// @ts-check
import { defineConfig } from 'astro/config';

// Workaround: @sanity/astro's dev-only module-dedupe plugin aliases `sanity` to a
// directory path, which Astro 7's rolldown optimizer can't resolve named exports
// through (MISSING_EXPORT errors, Studio fails to load at /admin in dev).
// Safe to disable with a flat npm node_modules; production builds are unaffected.
process.env.SANITY_ASTRO_DISABLE_MODULE_DEDUPE = '1';

import react from '@astrojs/react';
import sanity from '@sanity/astro';

// https://astro.build/config
export default defineConfig({
  output: 'static',
  integrations: [
    sanity({
      projectId: '369t4bp9',
      dataset: 'production',
      useCdn: false, // build-time fetch: always fresh data
      apiVersion: '2025-06-01',
      studioBasePath: '/admin', // mounts the embedded Studio route
    }),
    react(),
  ],
});

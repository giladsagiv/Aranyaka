// @ts-check
import { defineConfig } from 'astro/config';

// Workaround: @sanity/astro's dev-only module-dedupe plugin aliases `sanity` to a
// directory path, which Astro 7's rolldown optimizer can't resolve named exports
// through (MISSING_EXPORT errors, Studio fails to load at /admin in dev).
// Safe to disable with a flat npm node_modules; production builds are unaffected.
process.env.SANITY_ASTRO_DISABLE_MODULE_DEDUPE = '1';

import react from '@astrojs/react';
import sanity from '@sanity/astro';

// `astro build` and `astro dev` share Vite's dependency cache by default, so a
// build wipes the pre-bundled chunks the running dev server is still handing
// out — an open Studio tab then 504s ("Outdated Optimize Dep") on anything it
// loads lazily. Give the build its own cache directory instead.
/** @type {import('astro').AstroIntegration} */
const separateBuildDepCache = {
  name: 'separate-build-dep-cache',
  hooks: {
    'astro:config:setup': ({ command, updateConfig }) => {
      updateConfig({
        vite: {
          cacheDir:
            command === 'build' ? 'node_modules/.vite-build' : 'node_modules/.vite',
        },
      });
    },
  },
};

// https://astro.build/config
export default defineConfig({
  output: 'static',
  vite: {
    optimizeDeps: {
      // Pre-bundle the full Studio tree at startup. Without this, dev-mode
      // lazy discovery re-optimizes mid-session and open Studio tabs hit
      // "504 Outdated Optimize Dep" on every newly visited screen.
      include: [
        'sanity',
        'sanity/structure',
        'sanity/router',
        '@sanity/orderable-document-list',
        // React must be pre-bundled in the same pass as the Studio, or a later
        // re-optimize can pair the Studio with React's production build and the
        // dev JSX runtime disappears ("_jsxDEV is not a function" at /admin).
        'react',
        'react-dom',
        'react-dom/client',
        'react/jsx-runtime',
        'react/jsx-dev-runtime',
        'react-is',
        'styled-components',
        // Lazily imported by the Studio's code editor. Left to on-demand
        // discovery they trigger a late re-optimize, which renames every
        // chunk and breaks whatever Studio tabs are already open.
        'react-refractor',
        'refractor/bash',
        'refractor/javascript',
        'refractor/json',
        'refractor/jsx',
        'refractor/typescript',
      ],
    },
    // Replaces the react/styled-components deduping the disabled plugin did:
    // one copy of each, shared by the Studio and Astro's React islands.
    resolve: {
      dedupe: [
        'react',
        'react-dom',
        'react-dom/client',
        'react-is',
        'styled-components',
        '@sanity/ui',
      ],
    },
  },
  integrations: [
    separateBuildDepCache,
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

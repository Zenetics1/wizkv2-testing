// @ts-check
import { defineConfig } from 'astro/config';

import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
<<<<<<< HEAD

  integrations: [tailwind(), react()],
  prefetch: true,
  site: 'https://Zenetics.github.io',
=======
  integrations: [tailwind()],
  prefetch: true
>>>>>>> parent of addd7d8 (Added Sidebar)
});
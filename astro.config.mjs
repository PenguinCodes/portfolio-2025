import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";

import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  base: '/portfolio-2025/',
  build: {
    hooks: {
      done() {
        fs.writeFileSync(new URL('./dist/.nojekyll', import.meta.url), '');
      }
    }
  },
  integrations: [tailwind(), react()],
});

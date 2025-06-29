import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";

import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  base: '/portfolio-2025/', 
  integrations: [tailwind(), react()],
});

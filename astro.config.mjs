import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import react from "@astrojs/react";
import fs from "fs";
export default defineConfig({
  site: 'https://penguincodes.github.io',
  base: 'portfolio-2025',
  integrations: [tailwind(), react()]
});
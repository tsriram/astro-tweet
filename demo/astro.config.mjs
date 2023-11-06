import { defineConfig } from "astro/config";
import nodejs from "@astrojs/node";
import mdx from "@astrojs/mdx";

import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  integrations: [mdx(), tailwind()],
  adapter: nodejs({
    mode: "standalone"
  }),
  output: "hybrid"
});

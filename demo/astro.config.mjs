import { defineConfig } from "astro/config";
import nodejs from "@astrojs/node";
import mdx from "@astrojs/mdx";
import tailwind from "@astrojs/tailwind";

import vercel from "@astrojs/vercel/serverless";

// https://astro.build/config
export default defineConfig({
  integrations: [mdx(), tailwind()],
  adapter: vercel(),
  output: "hybrid"
});
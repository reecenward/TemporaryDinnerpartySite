import { defineConfig } from 'astro/config';
import react from "@astrojs/react";
import vercel from "@astrojs/vercel/serverless";

import compress from "astro-compress";

// https://astro.build/config
export default defineConfig({
  integrations: [react(), compress()],
  devToolbar: {
    enabled: false
  },
  output: "server",
  adapter: vercel({
    imageService: true,
  }),
});
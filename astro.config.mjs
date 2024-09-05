import { defineConfig } from 'astro/config';
import react from "@astrojs/react";
import vercel from "@astrojs/vercel/serverless";
import partytown from '@astrojs/partytown'
import compress from "astro-compress";

// https://astro.build/config
export default defineConfig({
  integrations: [
    react(),
     compress(),
     partytown({
      config: {
        forward: ["dataLayer.push"],
      },
  }),
    ],
  devToolbar: {
    enabled: false
  },
  output: "server",
  adapter: vercel({
    imageService: true,
  }),
});





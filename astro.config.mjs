import { defineConfig } from 'astro/config';
import react from "@astrojs/react";
import vercel from "@astrojs/vercel/serverless";
import partytown from '@astrojs/partytown';
import compress from "astro-compress";
import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  site: 'https://dinnerparty.studio',
  integrations: [react(), compress(), partytown({
    config: {
      forward: ["dataLayer.push"]
    }
  }), sitemap()],
  devToolbar: {
    enabled: false
  },
  output: "server",
  adapter: vercel({
    imageService: true
  })
});
import { defineConfig } from "astro/config";

export default defineConfig({
  site: "https://readydevstart.indiegameacademy.com",
  base: "/",
  output: "static",
  // Renamed pages: GitHub Pages has no server redirects, so Astro emits a meta-refresh page at the old URL.
  redirects: {
    "/career-guide/roles/production/publisher/": "/career-guide/roles/production/publishing-manager/",
  },
  server: {
    host: "0.0.0.0",
    port: 3000,
  },
});

import { defineConfig } from "astro/config";

export default defineConfig({
  site: "https://readydevstart.indiegameacademy.com",
  base: "/",
  output: "static",
  server: {
    host: "0.0.0.0",
    port: 3000,
  },
});

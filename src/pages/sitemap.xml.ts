import type { APIRoute } from "astro";
import { execFileSync } from "node:child_process";

/*
 * Generated sitemap: every .astro page is listed automatically, so new pages
 * never need a manual entry. <lastmod> is the date of the page's last git
 * commit (the deploy workflow checks out full history for this). Pages that
 * declare a canonicalPath point at another URL, so they are left out.
 */
const sources = import.meta.glob("./**/*.astro", { query: "?raw", import: "default", eager: true }) as Record<string, string>;

function lastModified(file: string): string | undefined {
  try {
    return execFileSync("git", ["log", "-1", "--format=%cs", "--", `src/pages/${file}`], { encoding: "utf8" }).trim() || undefined;
  } catch {
    return undefined;
  }
}

export const GET: APIRoute = ({ site }) => {
  const urls = Object.entries(sources)
    .filter(([, source]) => !source.includes("canonicalPath="))
    .map(([path]) => {
      const file = path.slice(2);
      const route = file.replace(/(^|\/)index\.astro$/, "$1").replace(/\.astro$/, "/");
      return { loc: new URL(route, site).href, lastmod: lastModified(file) };
    })
    .sort((a, b) => a.loc.localeCompare(b.loc));

  const body = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls.map((u) => `  <url>\n    <loc>${u.loc}</loc>${u.lastmod ? `\n    <lastmod>${u.lastmod}</lastmod>` : ""}\n  </url>`).join("\n")}
</urlset>
`;
  return new Response(body, { headers: { "Content-Type": "application/xml; charset=utf-8" } });
};

import type { GetServerSideProps } from "next";

const Sitemap = () => null;

const SITE_URL = "https://wiki.aavegotchi.com";

function escapeXml(unsafe: string): string {
  return unsafe
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&apos;");
}

function buildUrlEntry(loc: string, lastmod: string, changefreq: string, priority: string): string {
  return [
    "<url>",
    `  <loc>${escapeXml(loc)}</loc>`,
    `  <lastmod>${escapeXml(lastmod)}</lastmod>`,
    `  <changefreq>${escapeXml(changefreq)}</changefreq>`,
    `  <priority>${escapeXml(priority)}</priority>`,
    "</url>",
  ].join("");
}

export const getServerSideProps: GetServerSideProps = async ({ res }) => {
  const nowIso = new Date().toISOString();

  const urls: Array<{ loc: string; lastmod: string; changefreq: string; priority: string }> = [];

  // Homepage
  urls.push({
    loc: `${SITE_URL}/`,
    lastmod: nowIso,
    changefreq: "daily",
    priority: "1.0",
  });

  // Wiki pages are markdown files in posts/en/*.md, served at /en/<slug>.
  // Exclude special pages that should not be indexed.
  try {
    // Defer Node built-ins to server-only execution; bundling `fs` for the client breaks Next builds.
    // eslint-disable-next-line @typescript-eslint/no-var-requires
    const fs = require("fs") as typeof import("fs");
    // eslint-disable-next-line @typescript-eslint/no-var-requires
    const path = require("path") as typeof import("path");

    const postsDir = path.join(process.cwd(), "posts", "en");
    const exclude = new Set(["error", "index"]);

    const files = fs.readdirSync(postsDir);

    for (const file of files) {
      if (!file.endsWith(".md")) continue;
      const slug = file.slice(0, -3);
      if (!slug || exclude.has(slug)) continue;

      const filePath = path.join(postsDir, file);
      let lastmod = nowIso;
      try {
        lastmod = fs.statSync(filePath).mtime.toISOString();
      } catch {
        // Fall back to server time if stat fails.
      }

      urls.push({
        loc: `${SITE_URL}/en/${encodeURIComponent(slug)}`,
        lastmod,
        changefreq: "weekly",
        priority: "0.6",
      });
    }
  } catch (e) {
    // If the directory is missing (unexpected), still emit a valid sitemap with the homepage.
    // eslint-disable-next-line no-console
    console.warn("sitemap.xml: failed to read posts dir:", e);
  }

  // Deterministic ordering
  urls.sort((a, b) => a.loc.localeCompare(b.loc));

  const content = urls.map((u) => buildUrlEntry(u.loc, u.lastmod, u.changefreq, u.priority)).join("");
  const xml =
    `<?xml version="1.0" encoding="UTF-8"?>` +
    `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${content}</urlset>`;

  res.setHeader("content-type", "application/xml");
  res.setHeader("cache-control", "public, max-age=0, s-maxage=3600");
  res.end(xml);

  return { props: {} };
};

export default Sitemap;

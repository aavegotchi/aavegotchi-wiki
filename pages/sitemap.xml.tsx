const Sitemap = () => null;

function toSlug(key: string) {
  // Webpack context keys look like "./foo.md"
  return key.replace(/^\.\//, "").replace(/\.md$/, "");
}

Sitemap.getInitialProps = async ({ res }) => {
  if (!res) return {};

  res.setHeader("content-type", "application/xml");
  res.setHeader("cache-control", "public, max-age=0, s-maxage=3600");

  const serverTime = new Date().toISOString();
  const baseUrl = "https://wiki.aavegotchi.com";

  // Enumerate wiki pages from markdown in posts/en via webpack context so it
  // works reliably in Vercel output-file-tracing builds.
  //
  // Note: exclude /en/index in favor of the root homepage (/), and exclude the
  // error fallback page.
  const ctx = (require as any).context("../posts/en", false, /\.md$/);
  const slugs = ctx
    .keys()
    .map(toSlug)
    .filter((s: string) => s && s !== "index" && s !== "error")
    .sort();

  const urls = [
    {
      loc: `${baseUrl}/`,
      priority: "1.0",
      changefreq: "daily",
    },
    ...slugs.map((slug: string) => ({
      loc: `${baseUrl}/en/${slug}`,
      priority: "0.7",
      changefreq: "weekly",
    })),
  ];

  const content = urls
    .map(
      (u) => `<url>
  <loc>${u.loc}</loc>
  <lastmod>${serverTime}</lastmod>
  <changefreq>${u.changefreq}</changefreq>
  <priority>${u.priority}</priority>
</url>`
    )
    .join("");

  res.end(
    `<?xml version="1.0" encoding="UTF-8"?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${content}</urlset>`
  );

  return {};
};

export default Sitemap;

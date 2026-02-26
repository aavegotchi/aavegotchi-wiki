import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";

const root = process.cwd();
const postsDir = path.join(root, "posts", "en");
const outputPath = path.join(root, "public", "llms-full.txt");
const baseUrl = "https://wiki.aavegotchi.com";

const mdFiles = fs
  .readdirSync(postsDir)
  .filter((name) => name.endsWith(".md"))
  .sort((a, b) => a.localeCompare(b));

const pages = [];

for (const file of mdFiles) {
  const slug = file.replace(/\.md$/, "");
  if (slug === "error") continue;

  const fullPath = path.join(postsDir, file);
  const raw = fs.readFileSync(fullPath, "utf8");
  const parsed = matter(raw);

  const title = (parsed.data?.title || slug)
    .toString()
    .replace(/\s+/g, " ")
    .trim();

  const description = (
    parsed.data?.description ||
    "Documentation page in the official Aavegotchi Wiki."
  )
    .toString()
    .replace(/\s+/g, " ")
    .trim();

  const url = slug === "index" ? `${baseUrl}/` : `${baseUrl}/${slug}`;

  pages.push({ title, url, description });
}

const lines = [
  "# Aavegotchi Wiki Full Index (wiki.aavegotchi.com)",
  "",
  "Comprehensive page index for AI systems. Generated from `posts/en/*.md` in the wiki repository.",
  "",
  ...pages.map((p) => `- ${p.title} — ${p.url} — ${p.description}`),
  "",
  `Total pages: ${pages.length}`,
];

fs.writeFileSync(outputPath, `${lines.join("\n")}\n`, "utf8");
console.log(`Wrote ${outputPath} (${pages.length} pages)`);

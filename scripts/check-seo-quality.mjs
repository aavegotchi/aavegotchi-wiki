import fs from "node:fs";
import path from "node:path";
import { createRequire } from "node:module";

const require = createRequire(import.meta.url);
const {
  createSeoMetadata,
  MIN_DESCRIPTION_LENGTH,
  MAX_DESCRIPTION_LENGTH,
  MAX_DOCUMENT_TITLE_LENGTH,
} = require("../lib/seo.js");

const STRICT_MODE = process.argv.includes("--strict");
const POSTS_DIR = path.join(process.cwd(), "posts", "en");

function listMarkdownPages() {
  return fs
    .readdirSync(POSTS_DIR)
    .filter((name) => name.endsWith(".md"))
    .sort();
}

function parseFrontmatterValue(rawValue) {
  const value = String(rawValue || "").trim();
  if (
    (value.startsWith("'") && value.endsWith("'")) ||
    (value.startsWith('"') && value.endsWith('"'))
  ) {
    return value.slice(1, -1);
  }
  return value;
}

function parseMarkdownFile(markdown) {
  const frontmatterMatch = String(markdown || "").match(/^---\n([\s\S]*?)\n---\n?/);
  if (!frontmatterMatch) {
    return {
      data: {},
      content: markdown || "",
    };
  }

  const rawFrontmatter = frontmatterMatch[1];
  const data = {};

  for (const line of rawFrontmatter.split("\n")) {
    const separatorIndex = line.indexOf(":");
    if (separatorIndex < 0) continue;

    const key = line.slice(0, separatorIndex).trim();
    if (!key || key.startsWith("#")) continue;

    const value = line.slice(separatorIndex + 1);
    data[key] = parseFrontmatterValue(value);
  }

  return {
    data,
    content: String(markdown).slice(frontmatterMatch[0].length),
  };
}

function hasMarkdownH1(markdown) {
  return /^#\s+/m.test(markdown || "");
}

function printIssue({ level, slug, message }) {
  const prefix = level === "error" ? "ERROR" : "WARN ";
  console.log(`${prefix} ${slug}: ${message}`);
}

function isDuplicate(map, value, slug) {
  const key = String(value || "").toLowerCase();
  if (!key) return false;
  if (!map.has(key)) {
    map.set(key, [slug]);
    return false;
  }
  map.get(key).push(slug);
  return true;
}

function run() {
  const files = listMarkdownPages();
  const seenTitles = new Map();
  const seenDescriptions = new Map();

  const issues = {
    errors: [],
    warnings: [],
  };

  for (const file of files) {
    const slug = file.replace(/\.md$/, "");
    const markdown = fs.readFileSync(path.join(POSTS_DIR, file), "utf8");
    const { data, content } = parseMarkdownFile(markdown);

    const seo = createSeoMetadata({
      pageID: slug,
      title: data.title || "",
      description: data.description || "",
      markdownBody: content,
    });

    const seoTitleLength = seo.title.length;
    if (seoTitleLength > MAX_DOCUMENT_TITLE_LENGTH) {
      issues.errors.push({
        level: "error",
        slug,
        message: `SEO title too long (${seoTitleLength} > ${MAX_DOCUMENT_TITLE_LENGTH})`,
      });
    }

    const seoDescriptionLength = seo.description.length;
    if (
      seoDescriptionLength < MIN_DESCRIPTION_LENGTH ||
      seoDescriptionLength > MAX_DESCRIPTION_LENGTH
    ) {
      issues.errors.push({
        level: "error",
        slug,
        message: `SEO description length out of bounds (${seoDescriptionLength}, expected ${MIN_DESCRIPTION_LENGTH}-${MAX_DESCRIPTION_LENGTH})`,
      });
    }

    if (isDuplicate(seenTitles, seo.title, slug)) {
      issues.errors.push({
        level: "error",
        slug,
        message: `Duplicate SEO title "${seo.title}"`,
      });
    }

    if (isDuplicate(seenDescriptions, seo.description, slug)) {
      issues.warnings.push({
        level: "warn",
        slug,
        message: "Generated SEO description duplicates another page description",
      });
    }

    if (hasMarkdownH1(content)) {
      issues.warnings.push({
        level: "warn",
        slug,
        message:
          "Markdown body contains # H1. The template already renders a page H1 from frontmatter title.",
      });
    }

    if (String(data.description || "").trim().length < 40) {
      issues.warnings.push({
        level: "warn",
        slug,
        message:
          "Frontmatter description is short. Consider writing a specific 70-160 character description for stronger SERP snippets.",
      });
    }
  }

  console.log(`Scanned ${files.length} markdown pages in posts/en`);

  issues.errors.forEach(printIssue);
  issues.warnings.forEach(printIssue);

  const summary = `Summary: ${issues.errors.length} errors, ${issues.warnings.length} warnings`;
  console.log(summary);

  if (STRICT_MODE && issues.errors.length > 0) {
    process.exitCode = 1;
  }
}

run();

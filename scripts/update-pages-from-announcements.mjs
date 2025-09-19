#!/usr/bin/env node
import fs from "fs";
import path from "path";

const repoRoot = process.cwd();
const POSTS_EN_DIR = path.join(repoRoot, "posts", "en");
const INPUT_PATH = path.join(repoRoot, "data", "discord-announcements.json");

// Idempotent markers for insertion
const START_MARK = "<!-- ANNOUNCEMENTS:START -->";
const END_MARK = "<!-- ANNOUNCEMENTS:END -->";

function readJson(file) {
  return JSON.parse(fs.readFileSync(file, "utf8"));
}

function listMarkdownFiles(dir) {
  return fs
    .readdirSync(dir)
    .filter((f) => f.endsWith(".md"))
    .map((f) => path.join(dir, f));
}

function loadFile(file) {
  return fs.readFileSync(file, "utf8");
}

function writeFile(file, content) {
  fs.writeFileSync(file, content, "utf8");
}

function sanitizeMarkdown(text) {
  if (!text) return "";
  // Basic cleanup for markdown embedding
  return text
    .replace(/\r\n/g, "\n")
    .replace(/\t/g, "  ")
    .trim();
}

function formatMessage(msg) {
  const date = new Date(msg.timestamp).toISOString().slice(0, 10);
  const content = sanitizeMarkdown(msg.content);
  let title =
    msg.embeds?.find((e) => e.title)?.title ||
    content.split("\n")[0] ||
    "Update";
  title = title.length > 120 ? title.slice(0, 117) + "..." : title;

  return {
    title,
    date,
    url: msg.jumpUrl,
    content,
  };
}

function renderBlock(messages, pageTitle) {
  const lines = [];
  lines.push(START_MARK);
  lines.push("");
  lines.push(`<div class="contentsBox">`);
  lines.push("");
  lines.push(`**Latest announcements related to ${pageTitle}**`);
  lines.push("");
  const limit = Math.min(5, messages.length);
  for (let i = 0; i < limit; i++) {
    const m = messages[i];
    lines.push(`- ${m.date}: [${m.title}](${m.url})`);
  }
  lines.push("");
  lines.push(`</div>`);
  lines.push("");

  // Optional expandable details with excerpts
  lines.push(`<details><summary>Show details</summary>`);
  lines.push("");
  for (let i = 0; i < Math.min(10, messages.length); i++) {
    const m = messages[i];
    const excerpt =
      m.content.length > 320 ? m.content.slice(0, 317) + "..." : m.content;
    lines.push(`- ${m.date}: [${m.title}](${m.url})`);
    lines.push("");
    if (excerpt) {
      lines.push(`  \n> ${excerpt.replace(/\n/g, "\n> ")}`);
      lines.push("");
    }
  }
  lines.push(`</details>`);
  lines.push("");
  lines.push(END_MARK);
  lines.push("");
  return lines.join("\n");
}

function extractFrontMatterTitle(markdown) {
  const fmMatch = markdown.match(/^---\n([\s\S]*?)\n---/);
  if (!fmMatch) return null;
  const fm = fmMatch[1];
  const titleMatch = fm.match(/\ntitle:\s*"?([^\n"]+)"?/);
  return titleMatch ? titleMatch[1].trim() : null;
}

function scoreMessageAgainstPage(msg, pageText) {
  // Simple keyword scoring based on page title and headings
  const hay = pageText.toLowerCase();
  let score = 0;
  const keywords = [];
  const title = extractFrontMatterTitle(pageText) || "";
  if (title) keywords.push(...title.toLowerCase().split(/[^a-z0-9]+/g));
  const headings = Array.from(pageText.matchAll(/^##\s+(.+)$/gm)).map(
    (m) => m[1]
  );
  for (const h of headings)
    keywords.push(...h.toLowerCase().split(/[^a-z0-9]+/g));
  const unique = Array.from(new Set(keywords.filter(Boolean)));
  const content = `${msg.content}\n${msg.embeds
    ?.map((e) => e.title)
    .join(" ") || ""}`.toLowerCase();
  for (const k of unique) {
    if (!k || k.length < 3) continue;
    if (content.includes(k)) score += 1;
  }
  return score;
}

function upsertBlock(markdown, block) {
  const hasStart = markdown.includes(START_MARK);
  const hasEnd = markdown.includes(END_MARK);
  if (hasStart && hasEnd) {
    return markdown.replace(
      new RegExp(`${START_MARK}[\s\S]*?${END_MARK}`),
      block
    );
  }
  // Prefer insert after first H2 if present, else after front matter
  const h2 = markdown.search(/^##\s+/m);
  if (h2 !== -1) {
    const idx = markdown.indexOf("\n", h2);
    return markdown.slice(0, idx + 1) + "\n" + block + markdown.slice(idx + 1);
  }
  const fmEnd = markdown.indexOf("\n---\n");
  if (fmEnd !== -1) {
    const pos = fmEnd + "\n---\n".length;
    return markdown.slice(0, pos) + "\n" + block + markdown.slice(pos);
  }
  return block + "\n" + markdown;
}

function main() {
  if (!fs.existsSync(INPUT_PATH)) {
    console.error(
      "Input data/discord-announcements.json not found. Run fetch script first."
    );
    process.exit(1);
  }
  const data = readJson(INPUT_PATH);
  const all = Array.isArray(data.messages) ? data.messages : [];
  if (!all.length) {
    console.log("No messages found in input JSON. Nothing to update.\n");
    process.exit(0);
  }

  const files = listMarkdownFiles(POSTS_EN_DIR);
  let updated = 0;
  for (const file of files) {
    const text = loadFile(file);
    const scored = all
      .map((m) => ({ m, s: scoreMessageAgainstPage(m, text) }))
      .filter((x) => x.s > 0)
      .sort((a, b) => {
        if (b.s !== a.s) return b.s - a.s;
        return (
          new Date(b.m.timestamp).getTime() - new Date(a.m.timestamp).getTime()
        );
      })
      .map((x) => formatMessage(x.m));

    if (!scored.length) {
      // If no relevant messages, remove existing block if present
      if (text.includes(START_MARK) && text.includes(END_MARK)) {
        const stripped = text.replace(
          new RegExp(`${START_MARK}[\s\S]*?${END_MARK}\n?`),
          ""
        );
        if (stripped !== text) {
          writeFile(file, stripped);
          console.log(
            "Removed announcements block:",
            path.relative(repoRoot, file)
          );
          updated += 1;
        }
      }
      continue;
    }

    const block = renderBlock(
      scored,
      extractFrontMatterTitle(text) || path.basename(file, ".md")
    );
    const next = upsertBlock(text, block);
    if (next !== text) {
      writeFile(file, next);
      console.log("Updated:", path.relative(repoRoot, file));
      updated += 1;
    }
  }

  console.log(`Done. Updated ${updated} file(s).`);
}

main();

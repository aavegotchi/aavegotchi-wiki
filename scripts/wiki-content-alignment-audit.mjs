#!/usr/bin/env node
/**
 * Aavegotchi Wiki (2026) Content Alignment Audit
 *
 * Goal: Scan every wiki markdown page in this repo, cross-check against
 * Base-era assumptions (post 2025-07-25 migration), and flag misalignment
 * patterns with actionable pointers (page + line numbers).
 *
 * This is intentionally heuristic-based. It produces:
 * - report.json: machine-readable per-page signals
 * - report.md: human-readable summary + per-page issue index
 */

import fs from "fs";
import path from "path";
import matter from "gray-matter";

const DEFAULT_BASE_URL = "https://wiki.aavegotchi.com";
const DEFAULT_LANG = "en";

function usage() {
  // Keep this small; this script is meant to be called by a skill/workflow.
  console.log(
    [
      "Usage: node scripts/wiki-content-alignment-audit.mjs --out <dir> [--base-url <url>] [--lang en] [--no-fetch]",
      "",
      "Examples:",
      "  node scripts/wiki-content-alignment-audit.mjs --out /tmp/aavegotchi-wiki-audit",
      "  node scripts/wiki-content-alignment-audit.mjs --out /tmp/audit --no-fetch",
    ].join("\n")
  );
}

function parseArgs(argv) {
  const args = {
    outDir: "",
    baseUrl: DEFAULT_BASE_URL,
    lang: DEFAULT_LANG,
    fetch: true,
  };

  for (let i = 2; i < argv.length; i++) {
    const a = argv[i];
    if (a === "--out") {
      args.outDir = argv[++i] || "";
      continue;
    }
    if (a === "--base-url") {
      args.baseUrl = argv[++i] || "";
      continue;
    }
    if (a === "--lang") {
      args.lang = argv[++i] || "";
      continue;
    }
    if (a === "--no-fetch") {
      args.fetch = false;
      continue;
    }
    if (a === "-h" || a === "--help") {
      usage();
      process.exit(0);
    }
    console.error("Unknown arg:", a);
    usage();
    process.exit(2);
  }

  if (!args.outDir) {
    console.error("Missing required --out <dir>");
    usage();
    process.exit(2);
  }
  if (!args.baseUrl) {
    console.error("Missing --base-url value");
    process.exit(2);
  }
  if (!args.lang) args.lang = DEFAULT_LANG;

  // Normalize baseUrl (no trailing slash)
  args.baseUrl = args.baseUrl.replace(/\/+$/, "");
  return args;
}

function ensureDir(p) {
  fs.mkdirSync(p, { recursive: true });
}

function walk(dir) {
  const out = [];
  for (const ent of fs.readdirSync(dir)) {
    const full = path.join(dir, ent);
    const st = fs.statSync(full);
    if (st.isDirectory()) out.push(...walk(full));
    else out.push(full);
  }
  return out;
}

function readUtf8(file) {
  return fs.readFileSync(file, "utf8");
}

function stripFrontmatter(md) {
  // gray-matter already parses it; this is used for line-numbering.
  if (!md.startsWith("---")) return { frontmatter: "", body: md };
  const idx = md.indexOf("\n---", 3);
  if (idx === -1) return { frontmatter: "", body: md };
  const end = md.indexOf("\n", idx + 4);
  if (end === -1) return { frontmatter: md, body: "" };
  return { frontmatter: md.slice(0, end + 1), body: md.slice(end + 1) };
}

function lines(text) {
  return text.split(/\r?\n/);
}

function findLineMatches(text, re) {
  const ls = lines(text);
  const hits = [];
  for (let i = 0; i < ls.length; i++) {
    if (re.test(ls[i])) hits.push(i + 1);
  }
  return hits;
}

function uniq(arr) {
  return Array.from(new Set(arr));
}

function extractExternalLinks(md) {
  // Cheap link extractor; good enough for auditing.
  const out = [];
  const re = /https?:\/\/[^\s)>"']+/g;
  const matches = md.match(re) || [];
  for (const m of matches) {
    // Strip trailing punctuation commonly adjacent to URLs in markdown.
    out.push(m.replace(/[),.;]+$/, ""));
  }
  return uniq(out);
}

function isMarkdownPageFile(f) {
  return f.endsWith(".md") && f.includes(`${path.sep}posts${path.sep}en${path.sep}`);
}

function rel(repoRoot, file) {
  return path.relative(repoRoot, file).replace(/\\/g, "/");
}

async function fetchStatus(url) {
  // HEAD is often blocked; use GET with no body parsing.
  // Keep timeout conservative; this is best-effort.
  const controller = new AbortController();
  const t = setTimeout(() => controller.abort(), 15_000);
  try {
    const res = await fetch(url, {
      method: "GET",
      redirect: "follow",
      signal: controller.signal,
      headers: {
        // Some providers behave better with a UA.
        "user-agent": "aavegotchi-wiki-alignment-audit/1.0",
        accept: "text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8",
      },
    });
    return { status: res.status, finalUrl: res.url || url };
  } catch (e) {
    return { status: null, finalUrl: null, error: String(e) };
  } finally {
    clearTimeout(t);
  }
}

function hasProminentBaseEraNote(mdBody) {
  const top = lines(mdBody).slice(0, 30).join("\n");
  const hasLink = /\/base-migration\b/.test(top);
  const hasPhrase =
    /\bBase era\b/i.test(top) ||
    /\bcanonical home\b/i.test(top) ||
    /\b2025-07-25\b/.test(top) ||
    /\bmigrat(?:ed|ion)\b/i.test(top);
  return hasLink && hasPhrase;
}

function hasAnyBaseEraContext(mdBody) {
  return (
    /\/base-migration\b/.test(mdBody) ||
    /\bBase era\b/i.test(mdBody) ||
    /\bcanonical home\b/i.test(mdBody) ||
    /\b2025-07-25\b/.test(mdBody)
  );
}

function hasLegacyFramingNearTop(mdBody) {
  const top = lines(mdBody).slice(0, 40).join("\n");
  return /\bLegacy\b/i.test(top) || /\bhistorical\b/i.test(top);
}

function analyzeMarkdownPage({ repoRoot, file, baseUrl, lang }) {
  const raw = readUtf8(file);
  const parsed = matter(raw);
  const { body } = stripFrontmatter(raw);
  const slug = path.basename(file, ".md");
  const url = `${baseUrl}/${lang}/${slug}`;

  const title = (parsed.data && parsed.data.title) || slug;
  const description = (parsed.data && parsed.data.description) || "";

  const signals = {
    mentionsBase: /\bBase\b/.test(body),
    mentionsPolygon: /\bPolygon\b/i.test(body),
    mentionsMatic: /\bMatic\b/i.test(body) || /\bMATIC\b/.test(body),
    mentionsEthereum: /\bEthereum\b/i.test(body),
    mentionsMumbai: /\bMumbai\b/i.test(body),
    mentionsAmoy: /\bAmoy\b/i.test(body),
    mentionsGotchichain: /\bGotchichain\b/i.test(body) || /\bGeist\b/i.test(body),
    mentionsDappSubdomain: /\bdapp\.aavegotchi\.com\b/i.test(body),
    mentionsPolygonSubdomain: /\bpolygon\.aavegotchi\.com\b/i.test(body),
    mentionsMainSite: /\bwww\.aavegotchi\.com\b/i.test(body) || /\baavegotchi\.com\b/i.test(body),
    mentionsCoderdanBlog: /\bblog\.coderdan\.dev\b/i.test(body),
    hasBaseMigrationLink: /\/base-migration\b/.test(body),
    hasProminentBaseEraNote: hasProminentBaseEraNote(body),
    hasAnyBaseEraContext: hasAnyBaseEraContext(body),
    hasLegacyFramingNearTop: hasLegacyFramingNearTop(body),
    hasLastVerified: /\bLast verified\b/i.test(body),
  };

  // Basic "time-bound language" sniffing. Not all hits are bad, but in 2026
  // any unqualified "coming soon" should at least be reviewed.
  const timeboundRes = [
    { key: "comingSoon", re: /\bcoming soon\b/i },
    { key: "willBeLaunching", re: /\bwill be launching\b/i },
    { key: "willLaunch", re: /\bwill launch\b/i },
    { key: "launchingIn", re: /\blaunching in\b/i },
    { key: "planned", re: /\bplanned\b/i },
  ].map((p) => ({ ...p, lines: findLineMatches(body, p.re) }));

  const hardcodedAddresses = uniq((body.match(/0x[a-fA-F0-9]{40}/g) || []).map((a) => a));

  const externalLinks = extractExternalLinks(body);

  const issues = [];

  const isContractsPage = slug === "contracts";
  const isProposalArchive = slug.startsWith("aavegotchi-improvement-proposals");
  const isMilestonesArchive = slug === "milestones" || slug.startsWith("milestones-");

  if (signals.mentionsCoderdanBlog) {
    issues.push({
      id: "coderdan-blog-reference",
      severity: "P0",
      message: "References blog.coderdan.dev (likely template leakage; not an Aavegotchi canonical domain).",
      lines: findLineMatches(body, /\bblog\.coderdan\.dev\b/i),
    });
  }

  if (signals.mentionsDappSubdomain) {
    issues.push({
      id: "deprecated-dapp-domain",
      severity: "P1",
      message: "References dapp.aavegotchi.com (deprecated; canonical entrypoint is www.aavegotchi.com).",
      lines: findLineMatches(body, /\bdapp\.aavegotchi\.com\b/i),
    });
  }

  if (
    (signals.mentionsPolygon || signals.mentionsMatic || signals.mentionsMumbai || signals.mentionsAmoy) &&
    !signals.hasProminentBaseEraNote &&
    !signals.hasLegacyFramingNearTop
  ) {
    issues.push({
      id: "missing-prominent-base-era-context",
      severity: "P1",
      message:
        "Mentions Polygon/Matic/testnets but lacks prominent Base-era migration context near the top (users may misread legacy info as current).",
      lines: uniq([
        ...findLineMatches(body, /\bPolygon\b/i),
        ...findLineMatches(body, /\bMatic\b/i),
        ...findLineMatches(body, /\bMumbai\b/i),
        ...findLineMatches(body, /\bAmoy\b/i),
      ]).slice(0, 20),
    });
  }

  if (signals.mentionsGotchichain && !/\bdid not launch\b/i.test(body) && !/\bultimately did not launch\b/i.test(body)) {
    // Some pages (e.g., old roadmap) may still treat Gotchichain as upcoming.
    issues.push({
      id: "gotchichain-status-unclear",
      severity: "P1",
      message:
        "Mentions Gotchichain/Geist but does not clearly state that it did not launch (2026 context: Base is canonical).",
      lines: uniq([...findLineMatches(body, /\bGotchichain\b/i), ...findLineMatches(body, /\bGeist\b/i)]).slice(0, 20),
    });
  }

  const timeboundLines = timeboundRes.flatMap((r) => r.lines.map((ln) => ({ key: r.key, ln })));
  // Time-bound language is expected in proposal archives (historical texts),
  // so skip flagging there. For other pages, keep the heuristic.
  if (timeboundLines.length && !isProposalArchive) {
    issues.push({
      id: "timebound-language",
      severity: isMilestonesArchive ? "P2" : "P1",
      message:
        "Contains time-bound/future-tense language (coming soon/planned/will launch). In 2026 this content is easy to stale; review for tense, status, and Base-era relevance.",
      lines: uniq(timeboundLines.map((x) => x.ln)).slice(0, 30),
    });
  }

  // Literal addresses are expected on (1) contract reference pages and (2)
  // archival proposal dumps. Skip flagging there.
  if (hardcodedAddresses.length && !isContractsPage && !isProposalArchive) {
    issues.push({
      id: "address-literals",
      severity: "P1",
      message:
        "Contains literal onchain addresses. Ensure they are current for Base era, and consider using placeholders/tokens where possible to avoid drift.",
      examples: hardcodedAddresses.slice(0, 8),
    });
  }

  // Specific known issue: roadmap is almost certainly stale unless explicitly framed.
  if (slug === "roadmap" && !signals.hasLegacyFramingNearTop && !signals.hasAnyBaseEraContext) {
    issues.push({
      id: "roadmap-missing-historical-framing",
      severity: "P1",
      message:
        "Roadmap page is written as current but is a 2021-2024-era roadmap; should be framed as historical and/or point to current roadmap source.",
      lines: [1],
    });
  }

  // Internal-link sanity: check /foo links refer to an existing markdown page.
  const internalLinks = uniq((body.match(/\]\(\/[a-z0-9][a-z0-9-/#]*\)/gi) || []).map((m) => m.slice(2, -1)));
  const internalTargets = internalLinks
    .map((href) => href.replace(/^\//, "").split(/[?#]/)[0])
    .filter((x) => x && x !== "en");

  return {
    type: "markdown",
    file: rel(repoRoot, file),
    slug,
    url,
    title,
    description,
    signals,
    issues,
    externalLinks,
    internalTargets,
  };
}

function analyzeRepoFiles({ repoRoot }) {
  const robotsFile = path.join(repoRoot, "public", "robots.txt");
  const sitemapFile = path.join(repoRoot, "pages", "sitemap.xml.tsx");
  const results = [];

  if (fs.existsSync(robotsFile)) {
    const text = readUtf8(robotsFile);
    const issues = [];
    if (/Sitemap:\s*https?:\/\/blog\.coderdan\.dev\/sitemap\.xml/i.test(text)) {
      issues.push({
        id: "robots-sitemap-host-wrong",
        severity: "P0",
        message:
          "robots.txt Sitemap points to blog.coderdan.dev; should point to wiki.aavegotchi.com sitemap (and sitemap should enumerate all wiki pages).",
        lines: findLineMatches(text, /Sitemap:/i),
      });
    }
    results.push({
      type: "repo-file",
      route: "/robots.txt",
      file: rel(repoRoot, robotsFile),
      issues,
    });
  }

  if (fs.existsSync(sitemapFile)) {
    const text = readUtf8(sitemapFile);
    const issues = [];
    if (/blog\.coderdan\.dev/i.test(text)) {
      issues.push({
        id: "sitemap-endpoint-wrong",
        severity: "P0",
        message:
          "sitemap.xml generation hardcodes blog.coderdan.dev and does not include wiki routes. This prevents search engines from discovering subpages.",
        lines: findLineMatches(text, /blog\.coderdan\.dev/i),
      });
    }
    // If it doesn't reference posts/en at all, it probably isn't enumerating content.
    if (!/posts\/en/.test(text)) {
      issues.push({
        id: "sitemap-not-enumerating-pages",
        severity: "P0",
        message:
          "sitemap.xml generator does not appear to enumerate wiki pages (posts/en/*.md). Should emit <url> entries for each wiki page.",
        lines: [1],
      });
    }
    results.push({
      type: "repo-file",
      route: "/sitemap.xml",
      file: rel(repoRoot, sitemapFile),
      issues,
    });
  }

  // Also check /post route template leakage and missing content.
  const postTemplate = path.join(repoRoot, "pages", "post", "[slug].tsx");
  if (fs.existsSync(postTemplate)) {
    const text = readUtf8(postTemplate);
    const issues = [];
    if (/blog\.coderdan\.dev/i.test(text) || /coderdan/i.test(text)) {
      issues.push({
        id: "post-route-template-leakage",
        severity: "P2",
        message:
          "Legacy /post route still references coderdan blog metadata. If /post is not used on wiki, consider removing it or redirecting to /.",
        lines: uniq([
          ...findLineMatches(text, /blog\.coderdan\.dev/i),
          ...findLineMatches(text, /coderdan/i),
        ]).slice(0, 10),
      });
    }
    results.push({
      type: "repo-file",
      route: "/post/[slug]",
      file: rel(repoRoot, postTemplate),
      issues,
    });
  }

  return results;
}

function markdownReport({ generatedAt, baseUrl, lang, pages, repoFiles }) {
  const all = [...repoFiles, ...pages];
  const issueRows = [];
  for (const item of all) {
    if (!item.issues || item.issues.length === 0) continue;
    for (const iss of item.issues) {
      issueRows.push({
        severity: iss.severity || "P2",
        id: iss.id,
        page: item.url || item.route || item.slug || item.file,
        file: item.file,
        message: iss.message,
      });
    }
  }

  const severityRank = { P0: 0, P1: 1, P2: 2 };
  issueRows.sort((a, b) => {
    const ra = severityRank[a.severity] ?? 9;
    const rb = severityRank[b.severity] ?? 9;
    if (ra !== rb) return ra - rb;
    return a.page.localeCompare(b.page);
  });

  const totalPages = pages.length;
  const pagesWithIssues = new Set(pages.filter((p) => (p.issues || []).length > 0).map((p) => p.slug)).size;

  const p0 = issueRows.filter((r) => r.severity === "P0").length;
  const p1 = issueRows.filter((r) => r.severity === "P1").length;
  const p2 = issueRows.filter((r) => r.severity === "P2").length;

  const lines = [];
  lines.push(`# Aavegotchi Wiki Content Alignment Audit (generated ${generatedAt})`);
  lines.push("");
  lines.push(`Base URL: ${baseUrl}`);
  lines.push(`Language: ${lang}`);
  lines.push("");
  lines.push("## Scope");
  lines.push("");
  lines.push(`- Markdown pages scanned: **${totalPages}**`);
  lines.push(`- Pages with issues flagged (heuristic): **${pagesWithIssues}**`);
  lines.push(`- Repo routes checked: **${repoFiles.length}**`);
  lines.push("");
  lines.push("## Issue Summary");
  lines.push("");
  lines.push(`- P0: **${p0}**`);
  lines.push(`- P1: **${p1}**`);
  lines.push(`- P2: **${p2}**`);
  lines.push("");

  lines.push("## Issues (Index)");
  lines.push("");
  if (issueRows.length === 0) {
    lines.push("_No issues flagged by heuristics._");
  } else {
    lines.push("| Severity | Id | Page | File | Message |");
    lines.push("|---|---|---|---|---|");
    for (const r of issueRows) {
      lines.push(
        `| ${r.severity} | ${r.id} | ${r.page.replace(/\|/g, "\\|")} | \`${r.file}\` | ${r.message.replace(/\|/g, "\\|")} |`
      );
    }
  }
  lines.push("");

  lines.push("## Per-Page Detail");
  lines.push("");
  for (const p of pages.slice().sort((a, b) => a.slug.localeCompare(b.slug))) {
    lines.push(`### ${p.slug}`);
    lines.push("");
    lines.push(`- URL: ${p.url}`);
    lines.push(`- File: \`${p.file}\``);
    lines.push(`- Title: ${p.title}`);
    if (p.fetch && p.fetch.status !== undefined) {
      const s = p.fetch.status === null ? `error (${p.fetch.error || "unknown"})` : String(p.fetch.status);
      lines.push(`- Live status: ${s}${p.fetch.finalUrl ? ` (final: ${p.fetch.finalUrl})` : ""}`);
    }
    if (p.issues.length === 0) {
      lines.push(`- Issues: none`);
      lines.push("");
      continue;
    }
    lines.push(`- Issues:`);
    for (const iss of p.issues) {
      const ln = iss.lines && iss.lines.length ? ` lines ${iss.lines.join(",")}` : "";
      lines.push(`  - [${iss.severity}] ${iss.id}: ${iss.message}${ln}`);
      if (iss.examples && iss.examples.length) {
        lines.push(`  - Examples: ${iss.examples.join(", ")}`);
      }
    }
    lines.push("");
  }

  lines.push("## Repo Routes Detail");
  lines.push("");
  for (const r of repoFiles) {
    lines.push(`### ${r.route}`);
    lines.push("");
    lines.push(`- File: \`${r.file}\``);
    if (!r.issues || r.issues.length === 0) {
      lines.push(`- Issues: none`);
      lines.push("");
      continue;
    }
    lines.push(`- Issues:`);
    for (const iss of r.issues) {
      const ln = iss.lines && iss.lines.length ? ` lines ${iss.lines.join(",")}` : "";
      lines.push(`  - [${iss.severity}] ${iss.id}: ${iss.message}${ln}`);
    }
    lines.push("");
  }

  return lines.join("\n");
}

async function main() {
  const args = parseArgs(process.argv);
  const repoRoot = process.cwd();

  const pagesDir = path.join(repoRoot, "posts", "en");
  if (!fs.existsSync(pagesDir)) {
    console.error("Expected posts/en directory not found:", pagesDir);
    process.exit(2);
  }

  ensureDir(args.outDir);

  const mdFiles = walk(pagesDir).filter((f) => f.endsWith(".md"));
  const pages = mdFiles.map((f) =>
    analyzeMarkdownPage({ repoRoot, file: f, baseUrl: args.baseUrl, lang: args.lang })
  );

  // Build a set of known slugs for internal link checks.
  const knownSlugs = new Set(pages.map((p) => p.slug));
  for (const p of pages) {
    const missing = uniq(p.internalTargets.filter((t) => !knownSlugs.has(t)));
    if (missing.length) {
      p.issues.push({
        id: "broken-internal-link-target",
        severity: "P1",
        message: `Contains internal links to missing wiki pages: ${missing.join(", ")}`,
      });
    }
  }

  // Live fetches (best effort).
  if (args.fetch) {
    // Simple sequential fetch to be polite; 98 pages is fine.
    for (const p of pages) {
      // Skip the error page; it intentionally returns a 200 route but content is error.
      const res = await fetchStatus(p.url);
      p.fetch = res;
    }
  }

  const repoFiles = analyzeRepoFiles({ repoRoot });
  if (args.fetch) {
    for (const r of repoFiles) {
      const url = `${args.baseUrl}${r.route}`;
      r.fetch = await fetchStatus(url);
    }
  }

  const generatedAt = new Date().toISOString();
  const reportJson = {
    generatedAt,
    baseUrl: args.baseUrl,
    lang: args.lang,
    counts: {
      pages: pages.length,
      repoFiles: repoFiles.length,
    },
    pages,
    repoFiles,
  };

  const outJson = path.join(args.outDir, "report.json");
  const outMd = path.join(args.outDir, "report.md");

  fs.writeFileSync(outJson, JSON.stringify(reportJson, null, 2) + "\n", "utf8");
  fs.writeFileSync(
    outMd,
    markdownReport({ generatedAt, baseUrl: args.baseUrl, lang: args.lang, pages, repoFiles }) + "\n",
    "utf8"
  );

  console.log("Wrote:", outMd);
  console.log("Wrote:", outJson);
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});

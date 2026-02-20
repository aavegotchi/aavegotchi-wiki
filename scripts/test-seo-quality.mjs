import assert from "node:assert/strict";
import { execSync } from "node:child_process";
import { createRequire } from "node:module";

const require = createRequire(import.meta.url);
const {
  createSeoMetadata,
  MAX_DOCUMENT_TITLE_LENGTH,
  MIN_DESCRIPTION_LENGTH,
  MAX_DESCRIPTION_LENGTH,
} = require("../lib/seo.js");

const agipYear = createSeoMetadata({
  pageID: "aavegotchi-improvement-proposals-2022",
  title: "Aavegotchi Improvement Proposals (AGIPs)",
  description: "AGIPs 2022",
  markdownBody: "Historical proposals and voting outcomes for 2022.",
});

assert.match(
  agipYear.title,
  /2022/,
  "Expected AGIP yearly pages to include year in generated SEO title"
);
assert.ok(
  agipYear.description.length >= MIN_DESCRIPTION_LENGTH &&
    agipYear.description.length <= MAX_DESCRIPTION_LENGTH,
  "Expected AGIP yearly pages to get an in-range SEO description"
);

const longTitleCase = createSeoMetadata({
  pageID: "spirit-force-history",
  title: 'A History of the term "Spirit Force" in the Aavegotchi Project',
  description: "History about Aavegotchi Spirit Force",
  markdownBody: "Spirit Force, collateral, aTokens, maTokens, and amTokens explained.",
});

assert.ok(
  longTitleCase.title.length <= MAX_DOCUMENT_TITLE_LENGTH,
  `Expected SEO title to be capped at ${MAX_DOCUMENT_TITLE_LENGTH} characters`
);

const fallbackDescriptionCase = createSeoMetadata({
  pageID: "gotchi-guardians",
  title: "Gotchi Guardians",
  description: "Rewards info",
  markdownBody:
    "Gotchi Guardians is an official Aavegotchi game with Steam and browser versions. Campaigns can include GHST rewards and event-specific prize pools.",
});

assert.ok(
  fallbackDescriptionCase.description.length >= MIN_DESCRIPTION_LENGTH,
  "Expected fallback summary builder to produce a sufficiently descriptive meta description"
);

execSync("node scripts/check-seo-quality.mjs --strict", {
  stdio: "inherit",
});

console.log("PASS: SEO metadata generation and guardrails");

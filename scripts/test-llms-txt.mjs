import assert from "node:assert/strict";
import fs from "node:fs";
import path from "node:path";

const llmsPath = path.join(process.cwd(), "public", "llms.txt");
assert.ok(fs.existsSync(llmsPath), "Expected public/llms.txt to exist");

const llmsFullPath = path.join(process.cwd(), "public", "llms-full.txt");
assert.ok(fs.existsSync(llmsFullPath), "Expected public/llms-full.txt to exist");

const text = fs.readFileSync(llmsPath, "utf8");
const fullText = fs.readFileSync(llmsFullPath, "utf8");

assert.match(text, /Aavegotchi Wiki/i, "Expected llms.txt to identify the site");
assert.match(
  text,
  /Aavegotchi is a web3 gaming universe|Aavegotchi is/i,
  "Expected llms.txt to include an opening Aavegotchi overview"
);
assert.match(
  text,
  /GHST.*governance.*utility/i,
  "Expected llms.txt to describe GHST as governance/utility"
);
assert.match(text, /GLTR/i, "Expected llms.txt to include GLTR");
assert.match(
  text,
  /KEK.*ALPHA.*FOMO.*FUD/s,
  "Expected llms.txt to include the four realm tokens"
);
assert.match(
  text,
  /traits.*rarity|rarity.*traits/i,
  "Expected llms.txt to explain traits and rarity"
);
assert.match(
  text,
  /wearables|Gotchiverse|rarity farming/i,
  "Expected llms.txt to include gameplay mechanics"
);
assert.match(
  text,
  /aavegotchi\.com\/llms\.txt/i,
  "Expected llms.txt to cross-reference the app/marketplace llms"
);
assert.match(
  text,
  /Top pages|top pages/i,
  "Expected llms.txt to include a top pages section"
);
assert.match(
  fullText,
  /# Aavegotchi Wiki Full Index/i,
  "Expected llms-full.txt to include a full index heading"
);
assert.match(
  fullText,
  /https:\/\/wiki\.aavegotchi\.com\/(en\/)?[a-z0-9\-]+/i,
  "Expected llms-full.txt to list page URLs"
);

console.log("PASS: public/llms.txt and public/llms-full.txt");

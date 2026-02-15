import assert from "node:assert/strict";
import fs from "node:fs";
import path from "node:path";

const llmsPath = path.join(process.cwd(), "public", "llms.txt");
assert.ok(fs.existsSync(llmsPath), "Expected public/llms.txt to exist");

const text = fs.readFileSync(llmsPath, "utf8");

assert.match(text, /Aavegotchi Wiki/i, "Expected llms.txt to identify the site");
assert.match(
  text,
  /Migration to Base\s*\(2025-07-25\)|2025-07-25/i,
  "Expected llms.txt to call out the Base migration date"
);
assert.match(
  text,
  /https:\/\/wiki\.aavegotchi\.com\/base-migration/i,
  "Expected llms.txt to link the Base migration page"
);
assert.match(
  text,
  /https:\/\/wiki\.aavegotchi\.com\/contracts/i,
  "Expected llms.txt to link the contracts page"
);
assert.match(
  text,
  /Sitemap:\s*https:\/\/wiki\.aavegotchi\.com\/sitemap\.xml/i,
  "Expected llms.txt to include the sitemap URL"
);

console.log("PASS: public/llms.txt");


import assert from "node:assert/strict";
import { createRequire } from "node:module";

const require = createRequire(import.meta.url);
const {
  resolveAnalyticsModeFromCountry,
  normalizeCountryCode,
} = require("../lib/analyticsMode.js");

assert.equal(
  normalizeCountryCode(" gb "),
  "GB",
  "Expected country code normalization to uppercase and trim"
);

assert.equal(
  resolveAnalyticsModeFromCountry("US"),
  "ga",
  "Expected US traffic to allow GA"
);
assert.equal(
  resolveAnalyticsModeFromCountry("GB"),
  "restricted",
  "Expected UK traffic to block GA"
);
assert.equal(
  resolveAnalyticsModeFromCountry("FR"),
  "restricted",
  "Expected EU traffic to block GA"
);
assert.equal(
  resolveAnalyticsModeFromCountry("CH"),
  "restricted",
  "Expected CH traffic to block GA"
);
assert.equal(
  resolveAnalyticsModeFromCountry(""),
  "restricted",
  "Expected blank country to fail closed"
);
assert.equal(
  resolveAnalyticsModeFromCountry(undefined),
  "restricted",
  "Expected unknown country to fail closed"
);

console.log("PASS: analytics geo mode resolver");

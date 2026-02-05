#!/usr/bin/env node
import fs from "fs";
import path from "path";

const repoRoot = process.cwd();
const rgx = /0x[a-fA-F0-9]{40}/g;
const whitelist = new Set([]);

function walk(dir, files = []) {
  for (const entry of fs.readdirSync(dir)) {
    const full = path.join(dir, entry);
    const stat = fs.statSync(full);
    if (stat.isDirectory()) walk(full, files);
    else files.push(full);
  }
  return files;
}

const files = walk(repoRoot, [])
  .filter(
    (f) =>
      !f.includes("node_modules") && !f.includes(".next") && !f.includes(".git")
  )
  .filter(
    (f) =>
      f.endsWith(".md") ||
      f.endsWith(".ts") ||
      f.endsWith(".tsx") ||
      f.endsWith(".js")
  );

let found = [];
for (const file of files) {
  const text = fs.readFileSync(file, "utf8");
  const matches = text.match(rgx);
  if (matches) {
    const literals = matches.filter((m) => !whitelist.has(m));
    if (literals.length) {
      found.push({ file, literals: Array.from(new Set(literals)) });
    }
  }
}

if (found.length) {
  console.error("Hardcoded addresses detected:");
  for (const f of found) {
    console.error(
      "-",
      path.relative(repoRoot, f.file),
      "->",
      f.literals.join(", ")
    );
  }
  process.exit(1);
} else {
  console.log("No hardcoded addresses detected.");
}

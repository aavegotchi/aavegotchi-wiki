#!/usr/bin/env node
import fs from "fs";
import path from "path";

const repoRoot = process.cwd();
const POSTS_DIR = path.join(repoRoot, "posts");
const START_MARK = "<!-- ANNOUNCEMENTS:START -->";
const END_MARK = "<!-- ANNOUNCEMENTS:END -->";

function walk(dir, files = []) {
  for (const entry of fs.readdirSync(dir)) {
    const full = path.join(dir, entry);
    const stat = fs.statSync(full);
    if (stat.isDirectory()) walk(full, files);
    else files.push(full);
  }
  return files;
}

function shouldProcess(file) {
  return file.endsWith(".md");
}

function revertInFile(file) {
  let text = fs.readFileSync(file, "utf8");
  if (!text.includes(START_MARK) || !text.includes(END_MARK)) return false;
  let changed = false;
  while (true) {
    const startIdx = text.indexOf(START_MARK);
    if (startIdx === -1) break;
    const endIdx = text.indexOf(END_MARK, startIdx);
    if (endIdx === -1) break;
    const afterEnd = endIdx + END_MARK.length;
    const sliceEnd = text[afterEnd] === "\n" ? afterEnd + 1 : afterEnd;
    text = text.slice(0, startIdx) + text.slice(sliceEnd);
    changed = true;
  }
  if (changed) fs.writeFileSync(file, text, "utf8");
  return changed;
}

function main() {
  const files = walk(POSTS_DIR, []).filter(shouldProcess);
  let reverted = 0;
  for (const f of files) {
    if (revertInFile(f)) {
      console.log("Reverted:", path.relative(repoRoot, f));
      reverted += 1;
    }
  }
  console.log(`Done. Reverted ${reverted} file(s).`);
}

main();

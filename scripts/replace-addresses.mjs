#!/usr/bin/env node
import fs from "fs";
import path from "path";

const repoRoot = process.cwd();
const postsDir = path.join(repoRoot, "posts");
const tablesDir = path.join(repoRoot, "data", "tables");

// Map of literal addresses -> token placeholders
const replacements = new Map([
  ["0x3F382DbD960E3a9bbCeaE22651E88158d2791550", "{{GHST_ETHEREUM_ADDRESS}}"],
  ["0x385Eeac5cB85A38A9a07A70c73e0a3271CfB54A7", "{{GHST_POLYGON_ADDRESS}}"],
  ["0xcD2F22236DD9Dfe2356D7C543161D4d260FD9BcB", "{{GHST_BASE_ADDRESS}}"],
  ["0xFFfFfFffFFfffFFfFFfFFFFFffFFFffffFfFFFfF", "{{BURN_ADDRESS}}"],
  ["0x1fE64677Ab1397e20A1211AFae2758570fEa1B8c", "{{GLTR_STAKING_ADDRESS}}"],
  ["0x73958d46b7aa2bc94926d8a215fa560a5cdca3ea", "{{WAP_GHST_ADDRESS}}"],
  ["0xA02d547512Bb90002807499F05495Fe9C4C3943f", "{{stkGHST_QUICK}}"],
  ["0x04439eC4ba8b09acfae0E9b5D75A82cC63b19f09", "{{stkGHST_USDC}}"],
  ["0x8b1fd78ad67c7da09b682c5392b65ca7caa101b9", "{{ghstQuickLP}}"],
  ["0x096c5ccb33cfc5732bcd1f3195c13dbefc4c82f4", "{{ghstUsdcLP}}"],
  ["0x1D0360BaC7299C86Ec8E99d0c1C9A95FEfaF2a11", "{{REALM_DIAMOND_ADDRESS}}"],
  [
    "0x19f870bD94A34b3adAa9CaA439d333DA18d6812A",
    "{{INSTALLATIONS_DIAMOND_ADDRESS}}",
  ],
  ["0x9216c31d8146bCB3eA5a9162Dc1702e8AEDCa355", "{{TILES_DIAMOND_ADDRESS}}"],
  [
    "0x86935F11C86623deC8a25696E1C19a8659CbF95d",
    "{{AAVEGOTCHI_WEARABLES_ADDRESS}}",
  ],
  // Base contracts
  ["0xa99c4b08201f2913db8d28e71d020c4298f29dbf", "{{BASE_AAVEGOTCHI_DIAMOND}}"],
  ["0x052e6c114a166B0e91C2340370d72D4C33752B4b", "{{BASE_WEARABLES_DIAMOND}}"],
  ["0x50aF2d63b839aA32b4166FD1Cb247129b715186C", "{{BASE_FORGE_DIAMOND}}"],
  ["0x80320A0000C7A6a34086E2ACAD6915Ff57FfDA31", "{{BASE_GBM_BAAZAAR}}"],
  ["0xe46B8902dAD841476d9Fee081F1d62aE317206A9", "{{BASE_FAKE_GOTCHIS_CARDS}}"],
  ["0xAb59CA4A16925b0a4BaC5026C94bEB20A29Df479", "{{BASE_FAKE_GOTCHIS_ART}}"],
  ["0x898d0F54d8CF60698972a75be7Ea1B45aAb66e59", "{{BASE_GG_SKINS}}"],
  ["0xdc27a8BF85508387cB8c3B97BA77f3941eDFF45f", "{{BASE_GG_PROFILE}}"],
  ["0x4B0040c3646D3c44B8a28Ad7055cfCF536c05372", "{{BASE_REALM_PARCELS}}"],
  ["0xebba5b725A2889f7f089a6cAE0246A32cad4E26b", "{{BASE_INSTALLATIONS}}"],
  ["0x617fdB8093b309e4699107F48812b407A7c37938", "{{BASE_TILES}}"],
  ["0x2028b4043e6722Ea164946c82fe806c4a43a0fF4", "{{BASE_FUD}}"],
  ["0xA32137bfb57d2b6A9Fd2956Ba4B54741a6D54b58", "{{BASE_FOMO}}"],
  ["0x15e7CaC885e3730ce6389447BC0f7AC032f31947", "{{BASE_ALPHA}}"],
  ["0xE52b9170fF4ece4C35E796Ffd74B57Dec68Ca0e5", "{{BASE_KEK}}"],
  ["0x4D140CE792bEdc430498c2d219AfBC33e2992c9D", "{{BASE_GLTR}}"],
  ["0xaB449DcA14413a6ae0bcea9Ea210B57aCe280d2c", "{{BASE_GLTR_STAKING}}"],
]);

function shouldProcess(file) {
  return file.endsWith(".md") || file.endsWith(".tsx") || file.endsWith(".ts");
}

function walk(dir, files = []) {
  for (const entry of fs.readdirSync(dir)) {
    const full = path.join(dir, entry);
    const stat = fs.statSync(full);
    if (stat.isDirectory()) walk(full, files);
    else files.push(full);
  }
  return files;
}

function replaceInFile(file) {
  let content = fs.readFileSync(file, "utf8");
  let changed = false;
  for (const [literal, token] of replacements) {
    if (content.includes(literal)) {
      const re = new RegExp(literal, "g");
      content = content.replace(re, token);
      changed = true;
    }
  }
  if (changed) {
    fs.writeFileSync(file, content, "utf8");
    console.log("Rewrote", path.relative(repoRoot, file));
  }
}

const targetFiles = [...walk(postsDir), ...walk(tablesDir)].filter(
  shouldProcess
);

for (const f of targetFiles) replaceInFile(f);

console.log("Done replacing known addresses with tokens.");

#!/usr/bin/env node
import fs from "fs";
import path from "path";
import https from "https";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const repoRoot = process.cwd();

const OUTPUT_PATH = path.join(repoRoot, "data", "discord-announcements.json");
const CONFIG_PATH = path.join(
  repoRoot,
  "data",
  "discord-announcement-config.json"
);

function readJsonIfExists(filePath) {
  try {
    return JSON.parse(fs.readFileSync(filePath, "utf8"));
  } catch {
    return null;
  }
}

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

function buildQuery(params) {
  const esc = encodeURIComponent;
  const entries = Object.entries(params || {}).filter(
    ([, v]) => v !== undefined && v !== null && v !== ""
  );
  if (!entries.length) return "";
  return "?" + entries.map(([k, v]) => `${esc(k)}=${esc(String(v))}`).join("&");
}

async function apiRequest({ token, method = "GET", endpoint, params, body }) {
  const query = buildQuery(params);
  const fullPath = `/api/v10${endpoint}${query}`;
  const options = {
    hostname: "discord.com",
    method,
    path: fullPath,
    headers: {
      Authorization: `Bot ${token}`,
      "Content-Type": "application/json",
      "User-Agent": "aavegotchi-wiki (fetch-discord-announcements)",
    },
  };

  return new Promise((resolve, reject) => {
    const req = https.request(options, async (res) => {
      let data = "";
      res.on("data", (chunk) => (data += chunk));
      res.on("end", async () => {
        const status = res.statusCode || 0;
        const remaining = res.headers["x-ratelimit-remaining"];
        const resetAfter = res.headers["x-ratelimit-reset-after"];
        if (status === 429) {
          try {
            const parsed = JSON.parse(data || "{}");
            const retryAfterMs = Math.ceil((parsed.retry_after || 1) * 1000);
            await sleep(retryAfterMs);
            resolve(
              await apiRequest({ token, method, endpoint, params, body })
            );
            return;
          } catch (err) {
            reject(new Error(`429 without body parseable at ${endpoint}`));
            return;
          }
        }
        if (status < 200 || status >= 300) {
          reject(
            new Error(`HTTP ${status} ${endpoint}: ${data.slice(0, 300)}`)
          );
          return;
        }
        let json = null;
        if (data && data.length) {
          try {
            json = JSON.parse(data);
          } catch (e) {
            reject(new Error(`Failed to parse JSON from ${endpoint}`));
            return;
          }
        }
        // Small courtesy delay to be nice to the API if we're about to hit limits
        if (remaining === "0" && resetAfter) {
          const ms = Math.ceil(parseFloat(String(resetAfter)) * 1000);
          await sleep(ms);
        } else {
          await sleep(250);
        }
        resolve({ json, headers: res.headers, status });
      });
    });
    req.on("error", reject);
    if (body) req.write(JSON.stringify(body));
    req.end();
  });
}

function getEnvArray(name) {
  const val = process.env[name];
  if (!val) return [];
  return val
    .split(/[,\s]+/)
    .map((s) => s.trim())
    .filter(Boolean);
}

function getConfig() {
  const fileCfg = readJsonIfExists(CONFIG_PATH) || {};
  const token = process.env.DISCORD_BOT_TOKEN || "";
  const guildId = process.env.DISCORD_GUILD_ID || fileCfg.guildId || "";
  const channelIds = getEnvArray("DISCORD_CHANNEL_IDS");
  const nameRegex =
    process.env.DISCORD_CHANNEL_NAME_REGEX ||
    fileCfg.channelNameRegex ||
    "announce|news|update|release|patch|dev|weekly";
  const maxPerChannel = parseInt(
    process.env.DISCORD_MAX_PER_CHANNEL ||
      String(fileCfg.maxMessagesPerChannel || 500),
    10
  );
  const daysBack = parseInt(
    process.env.DISCORD_DAYS_BACK || String(fileCfg.daysBack || 365),
    10
  );
  return {
    token,
    guildId,
    channelIds: channelIds.length ? channelIds : fileCfg.channelIds || [],
    channelNameRegex: nameRegex,
    maxPerChannel,
    daysBack,
  };
}

async function fetchGuildChannels({ token, guildId }) {
  const { json } = await apiRequest({
    token,
    endpoint: `/guilds/${guildId}/channels`,
  });
  return (json || []).map((c) => ({ id: c.id, name: c.name, type: c.type }));
}

async function fetchChannelMessages({ token, channelId, max, before }) {
  const all = [];
  let last = before;
  while (all.length < max) {
    const remaining = max - all.length;
    const limit = Math.min(100, remaining);
    const params = { limit };
    if (last) params.before = last;
    const { json } = await apiRequest({
      token,
      endpoint: `/channels/${channelId}/messages`,
      params,
    });
    const batch = json || [];
    if (!batch.length) break;
    all.push(...batch);
    last = batch[batch.length - 1].id;
  }
  return all;
}

function simplifyMessage(guildId, channel, raw) {
  const content = raw.content || "";
  const timestamp = raw.timestamp || raw.edited_timestamp || null;
  const author = raw.author || {};
  const embeds = Array.isArray(raw.embeds) ? raw.embeds : [];
  const attachments = Array.isArray(raw.attachments) ? raw.attachments : [];
  return {
    id: raw.id,
    guildId,
    channelId: channel.id,
    channelName: channel.name,
    timestamp,
    content,
    author: {
      id: author.id,
      username: author.username,
      discriminator: author.discriminator,
      global_name: author.global_name || null,
    },
    embeds: embeds.map((e) => ({
      title: e.title || null,
      url: e.url || null,
      description: e.description || null,
    })),
    attachments: attachments.map((a) => ({
      id: a.id,
      filename: a.filename,
      size: a.size,
      url: a.url,
      content_type: a.content_type || null,
    })),
    jumpUrl: `https://discord.com/channels/${guildId}/${channel.id}/${raw.id}`,
  };
}

function withinDays(timestampIso, days) {
  if (!timestampIso) return false;
  const t = new Date(timestampIso).getTime();
  const cutoff = Date.now() - days * 24 * 60 * 60 * 1000;
  return t >= cutoff;
}

async function main() {
  const cfg = getConfig();
  if (!cfg.token) {
    console.error(
      "Missing DISCORD_BOT_TOKEN. Set it in your environment and re-run."
    );
    process.exit(1);
  }

  let channels = [];
  if (cfg.channelIds && cfg.channelIds.length) {
    channels = cfg.channelIds.map((id) => ({ id, name: id, type: 0 }));
  } else {
    if (!cfg.guildId) {
      console.error(
        "Provide DISCORD_GUILD_ID or DISCORD_CHANNEL_IDS (comma-separated)."
      );
      process.exit(1);
    }
    const guildChannels = await fetchGuildChannels({
      token: cfg.token,
      guildId: cfg.guildId,
    });
    const nameRe = new RegExp(cfg.channelNameRegex, "i");
    channels = guildChannels.filter((c) => c.type === 5 || nameRe.test(c.name));
    if (!channels.length) {
      console.error(
        "No matching channels found. Adjust channelNameRegex or provide channel IDs."
      );
      process.exit(1);
    }
  }

  const simplifiedChannels = {};
  for (const c of channels)
    simplifiedChannels[c.id] = { id: c.id, name: c.name, type: c.type };

  const allMessages = [];
  for (const channel of channels) {
    try {
      const raws = await fetchChannelMessages({
        token: cfg.token,
        channelId: channel.id,
        max: cfg.maxPerChannel,
      });
      const filtered = raws.filter((m) =>
        withinDays(m.timestamp || m.edited_timestamp, cfg.daysBack)
      );
      const mapped = filtered.map((m) =>
        simplifyMessage(cfg.guildId || m.guild_id || "", channel, m)
      );
      allMessages.push(...mapped);
      console.log(
        `Fetched ${mapped.length} messages from #${channel.name} (${channel.id})`
      );
    } catch (err) {
      console.error(`Error fetching channel ${channel.id}:`, err.message);
    }
  }

  // Deduplicate by id and sort desc
  const uniqueById = new Map();
  for (const m of allMessages) uniqueById.set(m.id, m);
  const messages = Array.from(uniqueById.values()).sort(
    (a, b) => new Date(b.timestamp).getTime() - new Date(a.timestamp).getTime()
  );

  const output = {
    fetchedAt: new Date().toISOString(),
    guildId:
      (channels[0] && (cfg.guildId || messages[0]?.guildId)) ||
      cfg.guildId ||
      null,
    channels: simplifiedChannels,
    messages,
  };

  fs.mkdirSync(path.dirname(OUTPUT_PATH), { recursive: true });
  fs.writeFileSync(OUTPUT_PATH, JSON.stringify(output, null, 2), "utf8");

  console.log(
    `Saved ${messages.length} messages from ${
      Object.keys(simplifiedChannels).length
    } channel(s) -> ${path.relative(repoRoot, OUTPUT_PATH)}`
  );
}

main().catch((err) => {
  console.error("Fatal:", err);
  process.exit(1);
});

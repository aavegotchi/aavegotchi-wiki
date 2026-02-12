# Aavegotchi Wiki Freshness Audit (2026-02-12)

Date: 2026-02-12

Goal: Identify and fix wiki content that is factually incorrect, time-relative, or reads as outdated (especially post Base migration), while keeping historical/archival pages intact.

## Scope

- Scanned **every page** under `posts/en` (**98** markdown pages).
- Spot-checked evergreen copy embedded via `data/tables/*.tsx` (no table edits were needed for this pass).

## What I Changed (High-Confidence Fixes)

- `/posts/en/geist.md`
  - Rewrote as **historical** to remove internal contradictions ("did not launch" vs present-tense specs).
  - Reframed claims as "as described in the announcement", and linked to Base-era sources.
- `/posts/en/ghst.md`
  - Removed time-bound CEX delisting note (high risk of going stale).
  - Updated "Buying GHST" to route users to the canonical in-app `Get Tokens` flows (swap/bridge/purchase).
- `/posts/en/gotchiverse.md`
  - Removed the dead `verse.aavegotchi.com` label and standardized on `gotchiverse.io`.
  - Added a prominent note that this page includes early design docs / Polygon-era mechanics.
  - Softened VRF/provider wording to be historically accurate and less brittle.
- `/posts/en/faq.md`
  - Standardized Gotchiverse links to `gotchiverse.io` and updated text accordingly.
  - Removed "upcoming" language where the feature is already live or the wording is time-relative.
  - Rewrote the "How much does it cost to play?" portal pricing answer to be durable (and fixed a broken sentence).
  - Updated a legacy bridging question title/anchor to remove "upcoming".
  - Removed obviously stale "integrating soon" and "migration tool soon" phrasing.
- `/posts/en/guild.md`
  - Removed "REALM gameplay is coming soon" and reframed as durable description.
- `/posts/en/gotchi-lending.md`
  - Removed "soon-to-launch" phrasing and updated whitelist links to canonical `www.aavegotchi.com`.
- `/posts/en/wearables.md`
  - Removed "coming soon" / "picture will be out soon" wording and switched to historical tense where appropriate.
  - Adjusted Chainlink VRF phrasing to be explicitly historical.
- `/posts/en/minigames.md`
  - Replaced "Soon!" placeholder with a stable pointer to the official Games page and clarified that the app is source of truth.
  - Updated the DApp link to `https://www.aavegotchi.com/games`.
- `/posts/en/milestones.md`
  - Removed obviously time-relative phrasing ("as of today", "next week", "gonna", "will begin") and reframed as "the post announced..." where appropriate.
  - Added/extended "did not launch" updates for Gotchichain-era milestones.
- `/posts/en/contests.md`
  - Converted future/ongoing language into past tense to match that the page is a historical winners archive.
- `/posts/en/roadmap.md`
  - Added a top-level historical disclaimer (and a Gotchichain/Geist note).
  - Clarified that "Status" labels are a snapshot and may be outdated.
- `/posts/en/partners.md`
  - Added a disclaimer that partnerships/integrations evolve and the page is mixed historical/current.
- `/posts/en/marketplace.md`
  - Fixed an indented line that rendered poorly.
  - Removed brittle third-party marketplace specifics and replaced with a durable "verify support" note.
- `/posts/en/team.md`
  - Added a best-effort disclaimer that roles/staffing change over time.
- `/posts/en/trait-mappings.md`
  - Added a top-level disclaimer that the page contains early design notes and may not reflect live implementation.

## Things I Did Not Rewrite (On Purpose)

- `aavegotchi-improvement-proposals*.md` and `milestones-2020/2021/2022.md` contain historical forward-looking language ("soon", "tomorrow") that reflects the original text/time. These are archival by nature and generally should not be rewritten unless you want an "editorialized" history.

## Manual Verification Candidates (If You Want Another Pass)

- Pages that describe game mechanics in strong future tense (many 2020-era pages) may still be "outdated-sounding" even if historically correct. The light-touch approach here was to add disclaimers rather than rewriting large swaths into present-tense claims without authoritative confirmation.
- Some third-party links (Twitter/X, CoinGecko, etc.) may block automated checks; best verified by a human browser session if you want a full external-link audit.

## Pages Scanned (98)

- posts/en/aambassador.md
- posts/en/aarcade-taask-force.md
- posts/en/aarchitect.md
- posts/en/aarena.md
- posts/en/aartist.md
- posts/en/aauction.md
- posts/en/aavegotchi-improvement-proposals-2020.md
- posts/en/aavegotchi-improvement-proposals-2021.md
- posts/en/aavegotchi-improvement-proposals-2022.md
- posts/en/aavegotchi-improvement-proposals-2023.md
- posts/en/aavegotchi-improvement-proposals.md
- posts/en/aavegotchi-profile.md
- posts/en/aesthetica.md
- posts/en/aging-mechanic.md
- posts/en/alchemical-channeling.md
- posts/en/atokens.md
- posts/en/baadge.md
- posts/en/baard.md
- posts/en/baazaar.md
- posts/en/base-migration.md
- posts/en/bridge.md
- posts/en/contests.md
- posts/en/contracts.md
- posts/en/curve.md
- posts/en/dao-treasury-taask-force.md
- posts/en/dao.md
- posts/en/developers.md
- posts/en/directory.md
- posts/en/dropt.md
- posts/en/error.md
- posts/en/estaates.md
- posts/en/eye-shape.md
- posts/en/faq.md
- posts/en/forge.md
- posts/en/gaame-jaam.md
- posts/en/games.md
- posts/en/geist.md
- posts/en/ghst.md
- posts/en/glossary.md
- posts/en/gotchi-battler.md
- posts/en/gotchi-guardians.md
- posts/en/gotchi-heroes.md
- posts/en/gotchi-lending.md
- posts/en/gotchichain.md
- posts/en/gotchiverse-game-bible.md
- posts/en/gotchiverse.md
- posts/en/gotchus-alchemica-exchange.md
- posts/en/gotchus-alchemica.md
- posts/en/guild.md
- posts/en/haunt.md
- posts/en/index.md
- posts/en/introduction.md
- posts/en/kinship.md
- posts/en/lickys-escape.md
- posts/en/lore.md
- posts/en/maall.md
- posts/en/marketplace.md
- posts/en/matokens.md
- posts/en/media.md
- posts/en/memes.md
- posts/en/metaverse.md
- posts/en/milestones-2020.md
- posts/en/milestones-2021.md
- posts/en/milestones-2022.md
- posts/en/milestones.md
- posts/en/minigame-xp-events.md
- posts/en/minigames.md
- posts/en/missions.md
- posts/en/mumbai-testnet.md
- posts/en/official-blog-archive-ledger.md
- posts/en/partners.md
- posts/en/poap.md
- posts/en/polygon.md
- posts/en/portals.md
- posts/en/raffles-stats.md
- posts/en/rarity-farming-seasons.md
- posts/en/rarity-farming.md
- posts/en/recipes.md
- posts/en/roadmap.md
- posts/en/sets.md
- posts/en/socialmedia.md
- posts/en/spirit-force-arena.md
- posts/en/spirit-force-history.md
- posts/en/spirit-force.md
- posts/en/staking.md
- posts/en/strategotchi.md
- posts/en/team.md
- posts/en/the-nine-aadepts.md
- posts/en/tickets.md
- posts/en/tokenomics.md
- posts/en/trait-mappings.md
- posts/en/traits.md
- posts/en/tutorials.md
- posts/en/ugotchi.md
- posts/en/weapons.md
- posts/en/wearables-taask-force.md
- posts/en/wearables.md
- posts/en/xp.md


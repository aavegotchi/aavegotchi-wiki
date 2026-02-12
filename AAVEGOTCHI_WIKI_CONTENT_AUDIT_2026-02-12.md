# Aavegotchi Wiki Content Alignment Audit (2026-02-12)

This audit scans wiki-facing content in this repo and flags obvious mismatches against Base-era Aavegotchi (as documented by this repo’s `base-migration` page), plus structural issues like broken internal links.

## Scope

- Pages scanned: **98** markdown pages (`posts/en/*.md`)
- Root markdown scanned (non-wiki): **3** (`AAVEGOTCHI_WIKI_CONTENT_AUDIT_2026-02-12.md, ARCHIVED_LANGUAGES.md, README.md`)
- Table content scanned: **40** TSX files (`data/tables/*.tsx`)

## Automated Checks

- Broken internal wiki links: **0**
- `dapp.aavegotchi.com` references (wiki pages): **0**
- Polygon-as-home assertions (wiki pages): **0**
- Ethereum-as-home assertions (wiki pages): **0**
- Mumbai/Amoy mentions (wiki pages): **3**

## Findings

- Polygon Home Assertions (should be Base): **none found**
- Ethereum Home Assertions (should be Base, or explicitly historical): **none found**
### Polygon Mentions Without a Base-Era Banner (Heuristic)

- `posts/en/aarcade-taask-force.md`
- `posts/en/aauction.md`
- `posts/en/directory.md`
- `posts/en/gaame-jaam.md`
- `posts/en/gotchus-alchemica-exchange.md`
- `posts/en/marketplace.md`
- `posts/en/media.md`
- `posts/en/partners.md`
- `posts/en/portals.md`
- `posts/en/recipes.md`
- `posts/en/roadmap.md`
- `posts/en/staking.md`
- `posts/en/tickets.md`
- `posts/en/ugotchi.md`
- `posts/en/wearables.md`

## Table/TSX Hotspots

- References to “Polygon blockchain”: none found
- `dapp.aavegotchi.com` references: none found

## Manual Verification TODOs

These items are either time-bound, environment-specific, or not safely verifiable via static repo scan:

- Confirm current **Goldsky subgraph endpoints** for Base (wiki currently notes Goldsky but does not list URLs).
- Confirm whether the **Louper Base REALM** link in `posts/en/faq.md` exposes `setParcelsAccessRights` under the same facet naming (Diamond layouts can differ across deployments).
- Confirm whether the **Spirit Force supported collateral list** should be updated post-migration (wiki now labels `aWMATIC` as legacy/historical, but the canonical Base-era collateral model may differ).

## Appendix: Page Index

- `posts/en/aambassador.md`
- `posts/en/aarcade-taask-force.md`
- `posts/en/aarchitect.md`
- `posts/en/aarena.md`
- `posts/en/aartist.md`
- `posts/en/aauction.md`
- `posts/en/aavegotchi-improvement-proposals-2020.md`
- `posts/en/aavegotchi-improvement-proposals-2021.md`
- `posts/en/aavegotchi-improvement-proposals-2022.md`
- `posts/en/aavegotchi-improvement-proposals-2023.md`
- `posts/en/aavegotchi-improvement-proposals.md`
- `posts/en/aavegotchi-profile.md`
- `posts/en/aesthetica.md`
- `posts/en/aging-mechanic.md`
- `posts/en/alchemical-channeling.md`
- `posts/en/atokens.md`
- `posts/en/baadge.md`
- `posts/en/baard.md`
- `posts/en/baazaar.md`
- `posts/en/base-migration.md`
- `posts/en/bridge.md`
- `posts/en/contests.md`
- `posts/en/contracts.md`
- `posts/en/curve.md`
- `posts/en/dao-treasury-taask-force.md`
- `posts/en/dao.md`
- `posts/en/developers.md`
- `posts/en/directory.md`
- `posts/en/dropt.md`
- `posts/en/error.md`
- `posts/en/estaates.md`
- `posts/en/eye-shape.md`
- `posts/en/faq.md`
- `posts/en/forge.md`
- `posts/en/gaame-jaam.md`
- `posts/en/games.md`
- `posts/en/geist.md`
- `posts/en/ghst.md`
- `posts/en/glossary.md`
- `posts/en/gotchi-battler.md`
- `posts/en/gotchi-guardians.md`
- `posts/en/gotchi-heroes.md`
- `posts/en/gotchi-lending.md`
- `posts/en/gotchichain.md`
- `posts/en/gotchiverse-game-bible.md`
- `posts/en/gotchiverse.md`
- `posts/en/gotchus-alchemica-exchange.md`
- `posts/en/gotchus-alchemica.md`
- `posts/en/guild.md`
- `posts/en/haunt.md`
- `posts/en/index.md`
- `posts/en/introduction.md`
- `posts/en/kinship.md`
- `posts/en/lickys-escape.md`
- `posts/en/lore.md`
- `posts/en/maall.md`
- `posts/en/marketplace.md`
- `posts/en/matokens.md`
- `posts/en/media.md`
- `posts/en/memes.md`
- `posts/en/metaverse.md`
- `posts/en/milestones-2020.md`
- `posts/en/milestones-2021.md`
- `posts/en/milestones-2022.md`
- `posts/en/milestones.md`
- `posts/en/minigame-xp-events.md`
- `posts/en/minigames.md`
- `posts/en/missions.md`
- `posts/en/mumbai-testnet.md`
- `posts/en/official-blog-archive-ledger.md`
- `posts/en/partners.md`
- `posts/en/poap.md`
- `posts/en/polygon.md`
- `posts/en/portals.md`
- `posts/en/raffles-stats.md`
- `posts/en/rarity-farming-seasons.md`
- `posts/en/rarity-farming.md`
- `posts/en/recipes.md`
- `posts/en/roadmap.md`
- `posts/en/sets.md`
- `posts/en/socialmedia.md`
- `posts/en/spirit-force-arena.md`
- `posts/en/spirit-force-history.md`
- `posts/en/spirit-force.md`
- `posts/en/staking.md`
- `posts/en/strategotchi.md`
- `posts/en/team.md`
- `posts/en/the-nine-aadepts.md`
- `posts/en/tickets.md`
- `posts/en/tokenomics.md`
- `posts/en/trait-mappings.md`
- `posts/en/traits.md`
- `posts/en/tutorials.md`
- `posts/en/ugotchi.md`
- `posts/en/weapons.md`
- `posts/en/wearables-taask-force.md`
- `posts/en/wearables.md`
- `posts/en/xp.md`

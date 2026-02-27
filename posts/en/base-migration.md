---
author: Moss
date: "2026-02-05T00:00:00.000Z"
title: "Migration to Base (2025)"
description: "Historical notes and durable facts from the 2025 Polygon -> Base migration"
contributors: ["moss", "cinnabarhorse"]
---

## TL;DR

On **2025-07-25**, the Aavegotchi team announced that Aavegotchi's **canonical home** (assets, gameplay, governance direction) had moved to **Base**, marking the end of the multi-year primary deployment on **Polygon**.

This page is intentionally written as **historical framing** (what happened, when), not as a "do this now" tutorial.

## Key facts (historical)

- **Polygon contracts were frozen** (paused) and became **view-only / non-transferable** for most actions.
- **Assets were mirrored to Base** using a **snapshot + minting** process.
- Migration coverage included core game and Gotchiverse assets: **Aavegotchis, wearables, REALM parcels, installations, tiles, Alchemica, and GLTR**.
- **GHST canonical address on Base**: [{{GHST_BASE_ADDRESS}}]({{BASESCAN_GHST_URL}}).
- **Most users did not need to take action**: if you held assets in a wallet on Polygon, the Base versions were expected to appear in the same wallet address on Base.
- **Legacy assets remained visible on Polygon** as **non-transferable ERC-721s** for historical continuity.

## What this means for where to use Aavegotchi

- The official entry point for the modern app experience is **https://www.aavegotchi.com**.
- The original app at **https://app.aavegotchi.com** is functional on Base, but is missing key features; new features are on the main dapp.
- The Polygon legacy site **https://polygon.aavegotchi.com** remains relevant for limited legacy interactions while Polygon contracts are frozen.

## Timeline

table_timeline

## References

- Official blog: [Aavegotchi Has Migrated to Base (2025-07-25)](https://blog.aavegotchi.com/aavegotchi-has-migrated-to-base/)
- coderdan (X): [Original app works on Base; new features on main dapp (2026-02-26)](https://x.com/coderdannn/status/2026913291029860595)

## Last verified

- 2026-02-26 — Reconciled against the migration blog post and current app entry-point messaging (`app.aavegotchi.com` warning banner + coderdan status update).

## Related Pages

- [Contracts](/contracts)
- [Bridge](/bridge)
- [Gotchiverse](/gotchiverse)
- [Staking](/staking)
- [Tokenomics](/tokenomics)
- [Polygon (Historical)](/polygon)

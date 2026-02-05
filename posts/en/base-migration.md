---
author: Moss
date: "2026-02-05T00:00:00.000Z"
title: "Migration to Base (2025)"
description: "Historical notes and durable facts from the 2025 Polygon → Base migration"
contributors: ["moss"]
---

## TL;DR

On **2025-07-25**, the Aavegotchi team announced that Aavegotchi’s **canonical home** (assets, gameplay, governance direction) had moved to **Base**, marking the end of the multi-year primary deployment on **Polygon**.

This page is intentionally written as **historical framing** (what happened, when), not as a “do this now” tutorial.

## Key facts (historical)

- **Polygon contracts were frozen** (paused) and became **view-only / non-transferable** for most actions.
- **Assets were mirrored to Base** using a **snapshot + minting** process.
- **Most users did not need to take action**: if you held assets in a wallet on Polygon, the Base versions were expected to appear in the same wallet address on Base.
- **Legacy assets remained visible on Polygon** as **non-transferable ERC-721s** for historical continuity.
- **Some items were not included in the initial migration wave** (notably: Gotchiverse REALM parcels, installations, tiles, and Alchemica/GLTR), with a note that they would be migrated after additional testing.

## What this means for “where to use Aavegotchi” (historical)

- The official entry point for the modern app experience is **https://aavegotchi.com**.
- The Polygon legacy site **https://polygon.aavegotchi.com** was referenced for limited legacy interactions (e.g., withdrawing collateral / GHST, cancelling offers) while Polygon contracts remained frozen.

## References

- Official blog: [Aavegotchi Has Migrated to Base (2025-07-25)](https://blog.aavegotchi.com/aavegotchi-has-migrated-to-base/)

## Last verified

- 2026-02-05 — Reconciled against the official blog archive post above.

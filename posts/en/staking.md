---
author: Nick Mudge
date: "2025-09-18T00:00:00.000Z"
title: "Staking"
description: "Guide to Aavegotchi staking on Base, including supported LP positions, GLTR emissions context, and participation workflow."
contributors: ["mudgen", "unintelligent-nerd"]
---

<div class="headerImageContainer">
<img class="headerImage" src="/staking/staking.png">
<p class="headerImageText">Stake LP Tokens on Base, Earn GLTR</p>
</div>

Note: FRENS was sunset in 2022. The current staking system is on Base and rewards GLTR for staking eligible LP tokens.

<div class="contentsBox">

**Contents**

<ol>
<li><a href=#tldr>TL;DR</a></li>
<li><a href=#current-base-lp-staking-for-gltr>Current: Base LP staking for GLTR</a></li>
<li><a href=#gltr>GLTR</a></li>
<li><a href=#historical-frens-staking-2022>Historical: FRENS staking (2022)</a></li>
</ol>

</div>

## TL;DR

- **Current (post-FRENS):** Stake eligible liquidity positions to earn **GLTR**.
- **Historical (FRENS era, 2022):** Staking **GHST on Polygon** earned **FRENS** (non-transferable) which could be used for raffle tickets.

Staking refers to locking assets in a protocol in return for rewards. In Aavegotchi's current system, users provide GHST-based liquidity and stake the resulting LP tokens on Base to earn [GAX Liquidity Token Reward (GLTR)](/gotchus-alchemica-exchange#gltr-token).

## Current: Base LP staking for GLTR

1. Go to the [Aavegotchi staking page](https://www.aavegotchi.com/staking?p=gltr) and connect your wallet on Base.
2. Pick a supported pool and open its LP flow (the UI links out to the liquidity venue).
3. Deposit tokens to mint LP tokens for the selected pool.
4. Stake those LP tokens in Aavegotchi staking and harvest GLTR rewards.

## GLTR

The primary utility of [GAX Liquidity Token Reward (GLTR)](/gotchus-alchemica-exchange#gltr-token) is allowing players in the Gotchiverse to speed up the crafting and upgrading of their [Installations](/gotchiverse#building-on-realm-parcels) by burning GLTR, allowing them to reach higher levels of the game faster. Every burned GLTR is equivalent to one block worth of crafting acceleration.

GLTR also has a secondary utility, being the main token required for [Wearable Crest](/guild#accessing-a-guild) auctions. Guilds will also have the choice to burn GLTR to speed up the time for their next Guild Channeling.

## Historical: FRENS staking (2022)

On **2022-05-28**, the official blog described GHST staking on **Polygon** as earning **FRENS** - a **non-transferable** balance inside the staking contract - and noted that FRENS could be used to buy raffle tickets for raffles (Portals, Wearables, and Gotchiverse REALM rewards at the time).

The post also described (at the time) these staking options to earn FRENS:

- Single-sided **GHST** staking
- LP staking: **GHST-QUICK**, **GHST-USDC**, **GHST-WETH**, **GHST-MATIC**

And it described the baseline earn rate as **"1 FREN per day per GHST staked"**, with higher incentives for LP pools due to impermanent-loss risk (and that reward rates could be adjusted over time).

**References (historical):**
- Blog (2022-05-28): https://blog.aavegotchi.com/aavegotchi-staking-a-step-by-step-guide-to-staking-ghst-and-earning-frens/

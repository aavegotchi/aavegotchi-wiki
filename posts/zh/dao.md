---
author: Coder Dan
date: '2020-04-23T07:00:00.000Z'
title: 'AavegotchiDAO'
description: 'All about AavegotchiDAO'
image: "icons/dao.svg"
contributors:
  - "vanilladelphia"
  - "cinnabarhorse"
---

<div class="headerImageContainer">
<img class="headerImage" src="/dao/dao.png">
<p class="headerImageText">The AavegotchiDAO Crest</p>
</div>

A [DAO](glossary#dao) is a decentralized form of governance, which allows token holders to vote in order to shape the way the organization makes decisions.

Aavegotchi follows in the footsteps of successful DeFi protocols such as Compound and Synthetix by following a process of “gradual decentralization”, beginning with the founding team, Pixelcraft Studios organizing a DAO-governed token distribution event (DAICO) and culminating in placing governance of Aavegotchi, including all game mechanics, smart contracts, and funding, under the auspices of the AavegotchiDAO, but subject always to the prevailing regulatory environment. This will be accomplished in three phases.

<div class="contentsBox">

**内容**

<ol>
<li><a href=#genesis>Genesis</a></li>
<li><a href=#metamorphosis>Metamorphosis</a></li>
<li><a href=#oasis>Oasis</a></li>
<li><a href=#participating-in-governance>Participating in Governance</a></li>
</ol>

</div>

## Genesis

*See* [DAICO](https://wiki.aavegotchi.com/curve/#aavegotchi-daico).

The first iteration of AavegotchiDAO was launched in tandem with the GHST token distribution event. GHST token holders had the power to vote on increasing / maintaining the funds distributed by the tap mechanism of the [token bonding curve (TBC)](/curve) reserve to Pixelcraft Studios (the team behind Aavegotchi) to support development. This initial proposal of raising the tap from 50,000 DAI to 100,000 DAI per month passed with 99% approval on 18 October 2020. When the time comes to migrate to AavegotchiDAO Metamorphosis, token holders will also vote to perform the migration.

Token holders will not receive rewards in GHST for active participation in this iteration of AavegotchiDAO.

## Metamorphosis

Metamorphosis is the second iteration of AavegotchiDAO, and is charged with managing simple game mechanics of AavegotchiDAO, such as the total supply of Aavegotchis, adding new collaterals and deciding on their functions, and adding new wearables created by the community. When the time comes to migrate to AavegotchiDAO Oasis, the AavegotchiDAO will again vote to perform the migration.

A full list of actions available to perform by the AavegotchiDAO in this phase is available in the [Governance](https://docs.aavegotchi.com/overview/governance) section of the Aavegotchi smart contract documentation.

Token holders will receive rewards in the form of GHST for active participation in this iteration of AavegotchiDAO.

## Oasis

Although AavegotchiDAO Oasis is the final iteration of AavegotchiDAO’s evolution, it is only the beginning of the realization of a DAO-governed game. All decisions related to Aavegotchi game mechanics, REALM mechanics, ecosystem spending, and even smart contract upgrades will be voted on by the AavegotchiDAO.

Token holders will receive rewards in GHST for active participation in this iteration of AavegotchiDAO.

## Participating in Governance
I'm psyched up! So how do I participate in the AavegotchiDAO? Fren, we got you covered! The [Aavegotchi Docs](https://docs.aavegotchi.com/overview/governance) details the list of DAO functions that members can call/use in order to implement changes that have been voted in. For example, let's say that asUSD has been voted in as a [collateral type](/posts/atokens). AavegotchiDAO could implement the change by using the `addCollateralTypes()` function and specifying asUSD within the function.

More details will be fleshed out once the game releases!
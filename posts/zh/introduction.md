---
author: Coder Dan
date: '2020-04-23T07:00:00.000Z'
title: 'Aavegotchi'
description: 'Introduction to the Aavegotchi Wiki'
image: "aavegotchi.png"
contributors:
  - "cinnabarhorse"
  - "chinyh"
---

<div class="headerImageContainer">
<img class="headerImage" src="/aavegotchi.png" alt="aavegotchi" />
<p class="headerImageText">Aavegotchi</p>
</div>

**Aavegotchi** is a DeFi-enabled crypto collectibles game developed by Singapore-based Pixelcraft Studios that allows players to stake [Non-fungible tokens (NFTs)](/glossary#non-fungible-token) avatars with [interest-generating tokens](/spirit-force) and interact with the Aavegotchi [metaverse](/gotchiverse). It is a unique combination of [Decentralized Finance (DeFi)](/glossary#defi-101) and NFTs.

Aavegotchis are pixelated ghosts living on the Ethereum blockchain, backed by the [**ERC-721**](/glossary#erc-721) standard. Their value is determined by rarity level, which is calculated via multiple factors, such as base [traits](/traits), amount of staked collateral/aTokens, and equipped [wearables](/wearables).

To level up their Aavegotchis, players can participate in a variety of activities including [mini-games](/minigames), governance, and meetups. Aavegotchis can also increase their rarity level by equipping in-game wearables and leveling up.

Rare Aavegotchis not only have higher secondary [baazaar](/baazaar) value, they also enable the Aavegotchi to perform better in [rarity farming](/rarity-farming)—a minigame that rewards the rarest Aavegotchis with GHST tokens.

Aavegotchi is governed by [AavegotchiDAO](/dao) that manages all funds generated through the [GHST token](/ghst) distribution.

<div class="contentsBox">

**内容**

<ol>
<li><a href=#about-aavegotchis>About Aavegotchis</a></li>
<li><a href=#aavegotchi-value>Aavegotchi Value</a></li>
<li><a href=#the-aavegotchi-universe>The Aavegotchi Universe</a></li>
</ol>

</div>

## About Aavegotchis
Aavegotchis are rare crypto-collectibles living on the Ethereum blockchain, backed by the ERC-721 standard used in popular blockchain games such as CryptoKitties, Axie Infinity, and Cryptovoxels. Aavegotchis possess three attributes that determine their overall value and rarity within the Aavegotchi universe: **collateral stake, traits, and wearables.**

*  **Collateral stake:** Each Aavegotchi ERC721 NFT manages an escrow contract address that holds an Aave-backed ERC20 collateral, or “aToken”. [aTokens](/spirit-force) generate yield via Aave’s LendingPool, which increases the quantity of aTokens held in the wallet. Thus, the amount of aTokens held in the Aavegotchi’s escrow address grows over time.


*  **Traits:** Aavegotchis possess multiple traits that influence their rarity, their performance in mini-games, and the wearables they can equip. Some are generated randomly upon birth, and others depend on user interactions with the Aavegotchi. **See [Traits](/traits).**

    * **Random Traits**: Upon birth, every Aavegotchi is assigned several random trait values using the ChainLink VRF random number generator. Trait values are distributed on a bell-curve, and each trait is assigned a value of Common, Uncommon, Rare, or Mythical depending on its rarity.

    *  **Kinship**: “Kinship” is not randomly assigned, but rather starts at a fixed value (50) upon birth and increases or decreases based on various factors, such as how long the Aavegotchi has been with the same owner, and how often the owner interacts with it.

    *  **Experience:** Aavegotchis level up as they gain more experience by voting in AavegotchiDAO and participating in mini-games. Every three levels, Aavegotchis receive one [Spirit Point](/glossary#spirit-point) that can be allocated towards increasing or decreasing a certain trait.

* **Wearables** In addition to managing the aToken escrow, Aavegotchis also extend the [ERC998 Composables standard](/glossary#erc-998), which allows them to manage child NFTs, known as wearables in the Aavegotchi ecosystem. Not every wearable can be equipped by every Aavegotchi. Some wearables may be exclusively equipped by Aavegotchis staked with certain collaterals, those of a certain level, and those with certain traits. Some wearables can increase or decrease certain traits of an Aavegotchi. For example, equipping a sword may slightly boost an Aavegotchi’s aggressiveness, whereas equipping a Bob Marley shirt may decrease its energy level.

The relationship between Collateral stake, Traits, Wearables, and Kinship is best represented by an Onion Diagram (see below). Each layer builds upon the previous layers, with the sum being the Aavegotchi itself!

<img class = "bodyImage" src = "/introduction/aavegotchi-onion-diagram.png" alt = "Aavegotchi Onion Diagram" />

## Aavegotchi Value
The valuation of an Aavegotchi comes from both from its intrinsic value and from its rarity value.

* **Intrinsic value** Intrinsic value is the denominated value of the Aavegotchi’s staked collateral. If the Aavegotchi is staked with 10 aDAI, then the intrinsic value would be 10 aDAI, plus whatever extra aDAI has accrued from the Lending Pool. Initially, only [ERC20](/glossary#erc-20) tokens listed on the Aave platform (aTokens) will be available as collaterals. However, once AavegotchiDAO launches, the community will be able to vote on which new collaterals to allow.

* **Rarity value** Rarity value is determined by calculating the rareness of each Aavegotchi’s traits and equipped wearables within the Aavegotchi universe. Unlike other NFT games, rarity is not a fixed value in Aavegotchi. It can change over time as Aavegotchis level up and equip different wearables. Thus, a rare Aavegotchi one week could become common, and vice versa, depending on the overall distribution of traits and wearables within the Aavegotchi universe. This enables a novel concept known as “rarity farming”, which is explained in [this page](/rarity-farming).

## The Aavegotchi Universe
The Aavegotchi Universe encompasses all the elements that allow Aavegotchis to operate:
* [Portals](/portals)
* [GHST Utility Token](/ghst)
* [AavegotchiDAO](/dao)
* [Aavegotchi Realm](/gotchiverse)
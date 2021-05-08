---
author: Coder Dan
date: '2020-04-23T07:00:00.000Z'
title: 'Aavegotchi'
description: 'Ang Introduction sa Aavegotchi Wiki'
image: "aavegotchi.png"
contributors:
  - "cinnabarhorse"
  - "unintelligent-nerd"
---

<div class="headerImageContainer">
<img class="headerImage" src="/aavegotchi.png" alt="aavegotchi" />
<p class="headerImageText">Aavegotchi</p>
</div>

Ang **Aavegotchi** ay isang DeFi-enabled crypto collectibles game na ginawa ng Pixelcraft Studios na nakabase sa Singapore. Sa Aavegotchi, puwedeng mag-deposit ang players ng [aTokens](/atokens), na kumikita ng interes, sa [non-fungible token (NFT)](/glossary#non-fungible-token) avatars nila. Puwede ring makilahok ang players sa Aavegotchi [metaverse](/metaverse). Ang Aavegotchi ay isang unique na combination ng [Decentralized Finance (DeFi)](/glossary#defi-101) at NFTs.

Ang Aavegotchis ay mga pixelated na multo na nasa Ethereum blockchain, at ginawa sila ayon sa [**ERC-721**](/glossary#erc-721) standard. Nakabase ang kanilang value sa rarity level, na nakabase sa iba't ibang factors tulad ng base [traits](/traits), halaga ng naka-deposit na collateral/aTokens, at suot na [wearables](/wearables).

Para ma-level up ang kanilang Aavegotchis, puwedeng makilahok ang players sa iba't ibang activities tulad ng [mini-games](/minigames), governance, at meetups. Puwede ring tumaas ang rarity level ng Aavegotchis kapag nagsuot sila ng in-game wearables at kapag nag-level up sila.

Rare Aavegotchis not only have higher secondary [baazaar](/baazaar) value, they also enable the Aavegotchi to perform better in [rarity farming](/rarity-farming)—a minigame that rewards the rarest Aavegotchis with GHST tokens.

Aavegotchi is governed by [AavegotchiDAO](/dao) that manages all funds generated through the [GHST token](/ghst) distribution.

<div class="contentsBox">

**Contents**

<ol>
<li><a href=#about-aavegotchis>About Aavegotchis</a></li>
<li><a href=#aavegotchi-value>Aavegotchi Value</a></li>
<li><a href=#the-aavegotchi-universe>The Aavegotchi Universe</a></li>
</ol>

</div>

## About Aavegotchis
Aavegotchis are rare crypto-collectibles living on the Ethereum blockchain, backed by the ERC-721 standard used in popular blockchain games such as CryptoKitties, Axie Infinity, and Cryptovoxels. Aavegotchis possess three attributes that determine their overall value and rarity within the Aavegotchi universe: **collateral stake, traits, and wearables.**

*  **Collateral stake:** Each Aavegotchi ERC721 NFT manages an escrow contract address that holds an Aave-backed ERC20 collateral, or “aToken”. [aTokens](/atokens) generate yield via Aave’s LendingPool, which increases the quantity of aTokens held in the wallet. Thus, the amount of aTokens held in the Aavegotchi’s escrow address grows over time.


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
* [Aavegotchi Realm](/metaverse)
---
author: Coder Dan
date: '2020-04-23T07:00:00.000Z'
title: 'Aavegotchi'
description: 'Aavegotchiウィキの紹介'
image: "aavegotchi.png"
contributors:
  - "cinnabarhorse"
  - "unintelligent-nerd"
---

<div class="headerImageContainer">
<img class="headerImage" src="/aavegotchi.png" alt="aavegotchi" />
<p class="headerImageText">Aavegotchi</p>
</div>

**Aavegotchi**は、シンガポールのPixelcraft Studiosが開発したDeFi対応のクリプト収集ゲームで、プレイヤーは[Non-fungible tokens（NFTs）](/glossary#non-fungible-token)アバターに[利子を生むトークン](/spirit-force)をステークし、Aavegotchi[メタバース](/gotchiverse)と対話することができます。 [Decentralized Finance（DeFi）](/glossary#defi-101)とNFTsを組み合わせたユニークなものです。

Aavegotchiは、[**ERC-721**](/glossary#erc-721)標準に支えられたイーサリアム・ブロックチェーン上に生息するピクセル化されたゴーストです。 その価値は、ベース[特性](/traits)、ステークした担保/トークンの量、装備した[ウェアラブル](/wearables)などの複数の要素を介して計算されるレアリティレベルによって決まります。

Aavegotchiをレベルアップさせるために、プレイヤーは[ミニゲーム](/minigames)、ガバナンス、ミートアップなどの様々な活動に参加することができます。 また、Aavegotchiは、ゲーム内のウェアラブルを装備することで、レアリティレベル（レア度）を上げることができます。

レアなAavegotchiは2次[バザー](/baazaar)の価値が高いだけでなく、[レアリティ・ファーミング](/rarity-farming)というミニゲームでより良いパフォーマンスを発揮し、レアなAavegotchiにGHSTトークンの報酬が与えられます。

Aavegotchiは[AavegotchiDAO](/dao)によって管理され、[GHSTトークン](/ghst)の配布によって得られたすべての資金を管理しています。

<div class="contentsBox">

**目次**

<ol>
<li><a href=#about-aavegotchis>Aavegotchiについて</a></li>
<li><a href=#aavegotchi-value>Aavegotchiの価値</a></li>
<li><a href=#the-aavegotchi-universe>Aavegotchiの世界</a></li>
</ol>

</div>

## Aavegotchiについて
Aavegotchiは、CryptoKitties、Axie Infinity、Cryptovoxelsなどの人気ブロックチェーンゲームで使用されているERC-721標準に支えられたイーサリアムブロックチェーン上で生きる希少な暗号収集物です。 Aavegotchiは、Aavegotchiの世界における全体的な価値と希少性を決定する3つの属性：**担保権（collateral stake）、特性（traits）、ウェアラブル（wearables）**を持っています。

*  **担保権**：各 Aavegotchi ERC721 NFT は、Aave に裏付けられた ERC20 担保、つまり「aToken」を保持するエスクロー契約アドレスを管理します。 [aToken](/spirit-force) は Aave の LendingPool を通じて収益を生み出し、ウォレットに保持される aToken の量を増加させます。 したがって、Aavegotchiのエスクローアドレスに保持されるaTokenの量は、時間の経過とともに増加します。


*  **特性：**Aavegotchiは複数の特徴を持ち、レアリティ、ミニゲームでのパフォーマンス、装備できるウェアラブルに影響します。 誕生時にランダムに生成されるものもあれば、ユーザーとAavegotchiの相互作用によって左右されるものもあります。 **[特徴](/traits)を参照してください。**

    * **ランダム特性：**出生時に ChainLink VRF 乱数生成関数を用いて、すべての Aavegotchi にいくつかのランダムな特性値が割り当てられます。 特性値はベル曲線上に分布し、各特性にはその希少性によってコモン（Common）、アンコモン（Uncommon）、レア（Rare）、またはミスィカル（Mythical）の値が割り当てられます。

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
* [ポータル](/portals)
* [GHST Utility Token](/ghst)
* [AavegotchiDAO](/dao)
* [Aavegotchi Realm](/gotchiverse)
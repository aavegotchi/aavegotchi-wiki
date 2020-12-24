---
author: Coder Dan
date: '2020-04-23T07:00:00.000Z'
title: 'Aavegotchi'
description: 'Introduction to the Aavegotchi Wiki'
image: "aavegotchi.png"
contributors:
  - "cinnabarhorse"
  - "unintelligent-nerd"
---

<div class="headerImageContainer">
<img class="headerImage" src="/aavegotchi.png" alt="aavegotchi" />
<p class="headerImageText">Aavegotchi</p>
</div>

**Aavegotchi** is a DeFi-enabled crypto collectibles game developed by Singapore-based Pixelcraft Studios that allows players to stake NFT avatars with interest-generating [aTokens](/posts/atokens) and interact with the Aavegotchi [metaverse](/posts/metaverse). 它是 DeFi 和 NFT 的独特组合。

Aavegotchis是生活在以太坊区块链上的像素幽灵，使用 **ERC-721** 标准。 Their value is determined by rarity level, which is calculated via multiple factors, such as base traits, amount of staked collateral, and equipped [wearables](/posts/wearables).

为了提升Aavegotchis的等级，参与者可以参加各种活动，包括小型游戏、政府决策和集会。 Aavegotchis还可以通过装备游戏内可穿戴设备来提升稀有度。

罕见的Aavegotchis不仅具有更高的二级级市场价值。 他们还使得Aavegotchi能够在 [稀有农业](https://wiki.aavegotchi.com/rarity-farming)中表现得更好，这是一个用GHST代币奖励最稀有的Aavegotchis的小游戏。

Aavegotchi is governed by [AavegotchiDAO](/posts/dao) that manages all funds generated through the [GHST token](/posts/ghst) distribution.

<div class="contentsBox">

**内容**

<ol>
<li><a href=#about-aavegotchis>关于 Aavegotchis</a></li>
<li><a href=#aavegotchi-value>Aavegotchi 的价值</a></li>
<li><a href=#the-aavegotchi-universe>Aavegotchi元宇宙</a></li>
</ol>

</div>

## 关于 Aavegotchis
Aavegotchis是生活在以太坊区块链上的稀有的加密收藏品，它由流行的区块链游戏中使用的ERC-721标准支持，如CryptoKitties, Axie Infinity和Cryptovoxels。 Aavegotchi拥有三种属性，这三种属性决定了它们在Aavegotchi世界中的整体价值和稀缺性: 抵押品、特质和可穿戴装备。

*  **抵押品:**每个Aavegotchi ERC721 NFT都管理着一个托管合同地址，该地址持有 Aave支持的ERC20抵押品，或 "aToken"。 [aTokens](https://wiki.aavegotchi.com/atokens) 通过 Aave's LendingPool生成收益，它会自动增加在钱包中持有的 aTokens 数量。 因此，随着时间的推移，Aavegotchi的托管地址中持有的aToken数量也会增加。


*  **特质:** Aavegotchis拥有多种特质，这些特质会影响他们的稀有度、他们在小游戏中的表现以及他们可以装备的穿戴物。 有些是在出生时随机生成的，有些则取决于用户与Aavegotchi的互动。 **See [Traits](/posts/traits).**

    * **随机特质**: 每一个Aavegotchi在出生时，都会使用ChainLink VRF随机数生成器随机分配若干个特征值。 Trait values are distributed on a bell-curve, and each trait is assigned a value of Common, Uncommon, Rare, or Mythical depending on its rarity.

    *  **亲属关系**: "亲缘关系 "并不是随机分配的，而是在出生时就开始有一个固定的数值，并根据各种因素而增加或减少，比如Aavegotchi与同一个主人相处的时间，以及主人与它互动的频率。

    *  **经验:** Aavegotchis通过在AavegotchiDAO中投票和参加小游戏获得更多的经验，从而提升等级。 Every three levels, Aavegotchis receive one [Spirit Point](/posts/glossary#spirit-point) that can be allocated towards increasing or decreasing a certain trait.

* **可穿戴装备**除了管理aToken托管，Aavegotchis还扩展了ERC998 Composables标准，使他们能够管理附属NFT，即Aavegotchi生态系统中的可穿戴设备。 并非每一个可穿戴装备都能被每个Aavegotchi装备。 一些可穿戴装备可能需要专门Aavegotchis装备，这些Aavegotchis有一定的抵押品，有一定级别的，有一定特征的。 有些可穿戴装备可以增加或减少Aavegotchi的某些特质。 例如，装备一把剑可以略微提升Aavegotchi的攻击性，而装备一件Bob Marley衬衫可以降低其能量水平。

The relationship between Collateral stake, Traits, Wearables, and Kinship is best represented by an Onion Diagram (see below). Each layer builds upon the previous layers, with the sum being the Aavegotchi itself!

<img class = "bodyImage" src = "/introduction/aavegotchi-onion-diagram.png" alt = "Aavegotchi Onion Diagram" />

## Aavegotchi 的价值
The valuation of an Aavegotchi comes from both from its intrinsic value and from its rarity value.

* **内在价值** 内在价值 是指Aavegotchi使用的抵押品的计价。 如果Aavegotchi以10个aDAI作为抵押品，那么内在价值将是10个aDAI，再加上从贷款池中累积的任何额外aDAI。 最初，只有在Aave平台上上市的ERC20代币（aTokens）才能作为抵押品。 然而，一旦AavegotchiDAO推出，社区将能够投票决定允许哪些新的抵押品。

* **稀有度** 稀有度值是通过计算Aavegotchi宇宙中每个Aavegotchi的特质和装备穿戴物的稀有度来决定的。 与其他NFT游戏不同，稀有度在Aavegotchi中并不是一个固定的数值。 它可以随着时间的推移而改变，因为Aavegotchi可以装备不同等级的可穿戴装备。 因此，一周内稀有的Aavegotchi可能会变得很常见，反之亦然，这取决于Aavegotchi宇宙中特性和可穿戴设备的整体分布。 This enables a novel concept known as “rarity farming”, which is explained in [this page](/rarity-farming).

## Aavegotchi元宇宙
The Aavegotchi Universe encompasses all the elements that allow Aavegotchis to operate:
* [传送门](/posts/portals)
* [GHST Utility Token](/posts/ghst)
* [AavegotchiDAO](/posts/dao)
* [Aavegotchi Realm](/posts/metaverse)
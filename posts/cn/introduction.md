---
author: Coder Dan
date: '2020-04-23T07:00:00.000Z'
title: 'Aavegotchi'
description: 'Aavegotchi 百科简介'
image: "aavegotchi.png"
contributors:
  - "cinnabarhorse"
  - "unintelligent-nerd"
---

<div class="headerImageContainer">
<img class="headerImage" src="/aavegotchi.png" alt="aavegotchi" />
<p class="headerImageText">Aavegotchi</p>
</div>

**Aavegotchi** 是一个 DeFi 赋能的加密收藏品游戏，由设立在新加坡的 Pixelcraft Studios 团队开发，玩家可以质押 [aTokens](https://wiki. aavegotchi. com/atokens) 产生[ Non-fungible tokens (NFTs)](/glossary#non-fungible-token) avatars 与 Aavegotchi [元宇宙](https://wiki. aavegotchi. com/metaverse) 进行交互。 它是 [去中心化金融（DeFi）](/glossary#defi-101) 和 NFT 的绝妙组合。

Aavegotchis 是生活在以太坊区块链上的像素幽灵，使用
ERC-721** 标准。 它的价值由其稀有度决定。很多种因素会影响稀有度，例如特性，质押品/aTokens 的数量，以及其 [可穿戴设备](/traits)的配置等等。</p> 

玩家可以参与如小型游戏，治理和集会等活动来提升 Aavegotchis 的等级。 Aavegotchis 也可以通过升级游戏穿戴设备来提升稀有度。 

罕见的 Aavegotchis 不仅在二级市场价值更高，他们还能让 Aavegotchi 在 [稀有度挖矿](/marketplace)中表现得更好----一个用 GHST 代币奖励最稀有的 Aavegotchis 的小游戏。 

Aavegotchi 由 [AavegotchiDAO](/dao) 治理，通过 [GHST 代币](/ghst) 分发对应的投票权管理资金。

<div class="contentsBox">

**内容**

<ol>
<li><a href=#about-aavegotchis>什么是 Aavegotchis</a></li>
<li><a href=#aavegotchi-value>Aavegotchi 的价值</a></li>
<li><a href=#the-aavegotchi-universe>Aavegotchi 的世界</a></li>
</ol>

</div>

## 什么是 Aavegotchis

Aavegotchis是生活在以太坊区块链上的稀有的加密收藏品，它由流行的区块链游戏中使用的ERC-721标准支持，如CryptoKitties, Axie Infinity和Cryptovoxels。 Aavegotchi拥有三种属性，这三种属性决定了它们在Aavegotchi世界中的整体价值和稀缺性: 抵押品、特质和可穿戴装备。

*  **抵押品:**每个Aavegotchi ERC721 NFT都管理着一个托管合同地址，该地址持有 Aave支持的ERC20抵押品，或 "aToken"。 [aTokens](/atokens) 通过 Aave's LendingPool生成收益，它会自动增加在钱包中持有的 aTokens 数量。 因此，随着时间的推移，Aavegotchi的托管地址中持有的aToken数量也会增加。 

*  **特质:** Aavegotchis拥有多种特质，这些特质会影响他们的稀有度、他们在小游戏中的表现以及他们可以装备的穿戴物。 有些是在出生时随机生成的，有些则取决于用户与Aavegotchi的互动。 **查看[特质](/traits).**
  
      * **随机特质**: 每一个Aavegotchi在出生时，都会使用ChainLink VRF随机数生成器随机分配若干个特征值。 特质值分布在一条钟形曲线上，每个特质根据其稀有程度被分配一个普通、罕见、稀有、传奇或神话的值。

    *  **亲属关系**: "亲缘关系 "并不是随机分配的，而是在出生时就开始有一个固定的数值，并根据各种因素而增加或减少，比如Aavegotchi与同一个主人相处的时间，以及主人与它互动的频率。

    *  **经验:** Aavegotchis通过在AavegotchiDAO中投票和参加小游戏获得更多的经验，从而提升等级。 每隔几级，Aavegotchis就会获得一个灵点，可以用于增加或减少某个特性。

* **可穿戴装备**除了管理aToken托管，Aavegotchis还扩展了ERC998 Composables标准，使他们能够管理附属NFT，即Aavegotchi生态系统中的可穿戴设备。 并非每一个可穿戴装备都能被每个Aavegotchi装备。 一些可穿戴装备可能需要专门Aavegotchis装备，这些Aavegotchis有一定的抵押品，有一定级别的，有一定特征的。 有些可穿戴装备可以增加或减少Aavegotchi的某些特质。 例如，装备一把剑可以略微提升Aavegotchi的攻击性，而装备一件Bob Marley衬衫可以降低其能量水平。

抵押品、特征、可穿戴设备和亲属关系之间的关系最好用洋葱图来表示(见下图)。 每一层都建立在前一层之上，加起来就是Aavegotchi本身!

<img class = "bodyImage" src = "/introduction/aavegotchi-onion-diagram.png" alt = "Aavegotchi Onion Diagram" />



## Aavegotchi 的价值

Aavegotchi的价值将来自于它的内在价值和稀有价值。

* **内在价值** 内在价值 是指Aavegotchi使用的抵押品的计价。 如果Aavegotchi以10个aDAI作为抵押品，那么内在价值将是10个aDAI，再加上从贷款池中累积的任何额外aDAI。 最初，只有在Aave平台上上市的ERC20代币（aTokens）才能作为抵押品。 然而，一旦AavegotchiDAO推出，社区将能够投票决定允许哪些新的抵押品。 

* **稀有度** 稀有度值是通过计算Aavegotchi宇宙中每个Aavegotchi的特质和装备穿戴物的稀有度来决定的。 与其他NFT游戏不同，稀有度在Aavegotchi中并不是一个固定的数值。 它可以随着时间的推移而改变，因为Aavegotchi可以装备不同等级的可穿戴装备。 因此，一周内稀有的Aavegotchi可能会变得很常见，反之亦然，这取决于Aavegotchi宇宙中特性和可穿戴设备的整体分布。 这使人们能够形成一个称为“稀有农场”的新概念，这个概念在 [此页面](/rarity-farming) 中得到解释。



## Aavegotchi元宇宙

Aavegotchi 宇宙为 Aavegotchis 提供了一切条件：

* [传送门](/portals)
* [GHST 实用代币](/ghst)
* [AavegotchiDAO](/dao)
* [Aavegotchi 领地](/metaverse)
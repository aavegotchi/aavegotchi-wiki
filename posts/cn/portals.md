---
author: appellants
date: '2020-04-23T07:00:00.000Z'
title: '传送门'
description: '关于Aavegotchi 传送门的一切！'
contributors:
  - "appellants"
image: "portals/portal.gif"
---

<div class="headerImageContainer">
<img class="headerImage" src="/portals/portal.gif">
<p class="headerImageText">Aavegotchi传送门</p>
</div>

你如何召唤Aavegotchi，并把它从冥界带到你的屏幕上呢？ 当然通过一个传送门！

向传送门紫色的深处窥视，看看下面潜伏着什么--你会发现一个朋友。 或者更确切地说，是10个朋友。

所以戴上你的巫师帽吧--是时候了解更多关于传送门和Aavegotchi召唤过程的信息了。 

<div class="contentsBox">

**内容**

<ol>
<li><a href=#buying-a-portal>购买一个传送门</a></li>
<li><a href=#opening-your-portal>打开您的传送门</a></li>
<li><a href=#claiming-an-aavegotchi>获取Aavegotchi</a></li>
<li><a href=#transferring-your-aavegotchi>转移你的Aavegotchi</a></li>
</ol>

</div>

## 购买一个传送门

在你可以拥有你像素化的幽灵精灵之前，你需要通过传送门进行召唤。 您可以从 [官方的 Aavegotchi Dapp](https://aavegotchi.com/buy-portal)获取，也可以从 [OpenSea](https://opensea.io/) 等外部市场。

如果您从 Aavegotchi Dapp购买，每个门户网站将花费大约100 GHST。 这些设备也将放在“Haunts”(版本)中发布。 第一个版本将提供10000个传送门供大家召唤精灵。 在此之后，AavegotchiDAO将投票决定之后的召唤情况。 例如，由于DAO的决定和表决结果，门的价格和数量今后可能会发生变化。


## 打开您的传送门

好极了！ 您即将打开您的传送门。 这个地方正是~ 传送门召唤仪式的场所。 这是你能够召集你的Aavegotchi的机制。

在购买传送门后，下一步是打开传送门。 Opening the portal occurs on [Polygon](/glossary#polygon) where gamers have to sign a transaction. After the transaction is signed, the [Chainlink Verifiable Randomness Function (VRF)](/glossary#chainlink-vrf) is called behind-the-scenes. 当函数执行时，门户网站将被指定一个随机号码，确保Aavegotchi的特性将被证明是随机的。

下面是一个简易流程图，它概括了流程：

<img class = "bodyImage" src = "/portals/opening-an-aavegotchi-portal.png" alt = "Process of opening an Aavegotchi Portal" />

打开门户网站后，您将会看到10种不同的 Aavegotchis 供您选择从下界召唤。 你必须从其中的10个中选择一个召唤。 不幸的是，其余的将会消失。

这些Aavegotchis都有不同的随机生成的特性。 在您切换选项时，您可以查看这些特性以及您的 Aavegotchi 的 [基础稀有分](/rarity-farming#base-rarity-score)。 这个得分最初根据您的Aavegotchi传唤时的最初特征给它是罕见的。 这种稀缺的分数以后可以通过一系列活动进行修改，如为你的Aavegotchi配备穿戴衣服。

您可以在此查看此表中的特性范围和稀有概率：

表格_


更多关于稀有耕作的信息可以在这里找到 [](/rarity-farming)。


## 获取Aavegotchi

若要从传送门上认出Aavegotchi，您需要把所需的 精神力([aTokens](/atokens)) 与Portal 联系起来。 这些令牌可以直接通过 [Aave](https://aave.com/) 或 DEXes 获取 Uniswap。

除了由稀缺性和市场力量决定的货币价值外，每个Aavegotchi还具有内在价值。 你所质押的atokens代表了它的内在价值。

**关于 aTokens 的更多信息，请参阅 [aTokens](/atokens)。**

一般来说，精神力(抵押物)的最低数量取决于你要召唤的aavegotchi的基础稀有度分数。 得分越高，所需的抵押物就越多。

所需担保品的最低金额是10 DAI 值，而最高金额是1 000 DAI 值的担保品。

用于确定所需精神力（担保品）数量的公式如下：

```
如果(rarityScore < 300) 返回 10;
        否则(rarityScore >= 300 && rarityScore < 450) 返回 10;
        否则(rarityScore >= 450 && rarityScore <= 525) 返回 25；
        否则(rarityScore >= 526 && rarityScore <= 580) 返回 100；
        其他 (rarityScore >= 581) 返回 1000；
```

例如，如果基础稀有分数小于300。 你需要至少10个DAI值的担保品来召唤Gotchi。

稍后您可以通过 Aavegotchi Dapp UI 增加或减少Aavegotchi 的 Spirit Force (staked aToken 金额)。

要认领你的 Gotchi, 你需要执行2个交易。 首先，您需要批准智能合同以便在您的钱包中使用 aToken 。 随后的交易允许您认领Aavegotchi。


## 转移你的Aavegotchi

将Aavegotchi转让给一个新的所有者(当你进行贸易时)也转让了它背后的有利害关系的抵押品。 以及Aavegotchi库存中的任何物品和穿戴品。 这种情况发生在您在 OpenSea 等在线市场上交易您的 Aavegotchi 时。

如果您想要检索您的 Aavegotchi 背后的被收藏的抵押品，您有两个选项：

1. **在你的 Aavegotchi 中减少担保品数量** (但不低于最低限度的临界值)。

2. **烧毁你的 Aavegotchi**, 释放它回到地狱领域并归还你所有的抵押品。

**在将您的Aavegotchi出售到诸如OpenSea等二级市场之前，请通过Dapp UI“锁定”您的Aavegotchi 帮助买方确保Aavegotchi的所有财物将与买方一起转让。**





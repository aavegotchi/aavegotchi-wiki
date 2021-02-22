---
author: appellants
date: '2020-04-23T07:00:00.000Z'
title: 'Tokenomics'
description: 'Aavegotchi GHST 代币的经济模型'
image: "IMAGE HERE"
contributors:
  - "appellants"
---

<div class="headerImageContainer">
<img src="/tokenomics/leogotchi.png" class="headerImage">
<p class="headerImageText">GHST 什么时候5美元???</p>
</div>

代币经济？ 谁关心？ 什么时候起飞？？？

我们在乎，你也该是如此。 如果您计划投资像GHST这样的项目（或任何其他项目），了解更广泛的生态系统如何运作是很重要的。 归根结底，我们希望大家都能共赢。

Aavegotchi在收入分配和代币经济方面，旨在平衡四项目标：

<ul><p style="margin-left: 2.4em"><b><li>创建一个健康的游戏赚钱生态系统，奖励活跃的玩家和 DAO 参与者</li></b></p></ul>
<ul><p style="margin-left: 2.4em"><b><li>确保GHST 代币具有长期价值捕获的坚实基础</li></b></p></ul>
<ul><p style="margin-left: 2.4em"><b><li>为AavegotchiDAO建造一个金库，用于自由支配支出</li></b></p></ul>
<ul><p style="margin-left: 2.4em"><b><li>向那些正在开发Aavegotchi的人提供持续的财政奖励</li></b></p></ul>

Wiki这一部分将首先带你了解GHST的代币发行，然后详细说明如何实现这些目标。

<div class="contentsBox">

**内容**

<ol>
<li><a href=#token-distribution>代币分配</a></li>
<li><a href=#revenue-sharing-overview>收入分配概览</a></li></p>
<p><a href=#rarity-farming>稀有度挖矿</a></p>
<p><a href=#dao-governance>DAO 治理</a></p>
<p><a href=#burn-baby-burn>燃烧机制</a></p>
<p><a href=#development-team>开发团队</a></p>
</ol>

</div>

## 代币分配

GHST分三个阶段分发。 这三个阶段分别是私募、预售和联合曲线销售。


**私募**

额度：5,000,000GHST 价格：0.05DAI / GHST


私人出售于2020年8月进行。 任何人只要达到20k的 DAI 最小值并进行KYC就可以加入。 本轮募集的资金将分配给Aavegotchi背后的公司Pixelcraft Studios，以确保Aavegotchi游戏的成功开发。


**预售：**

额度：500,000 GHST 价格：0.1DAI / GHST

GHST 预销售于2020年9月14日举行，时限为14天或售完，时间以先到者为准。 在上述日期之前执行KYC的所有6级特工都可以在此阶段购买GHST。

为了进行销售，当时进行了所有6级特工都进行了快照。 然后与那些执行KYC的人核对了这一点。 然后，向Discord的所有合格参与者发放了特别的“6级”徽章。 然后，这些参与者被添加到一个特殊的discord频道，在那里发布预售链接。

这里筹集的资金用于代币联合曲线的启动流动性储备，储备比例为100%。

私募和预售的参与者将从预售轮结束后开始，一年释放获得GHST代币。 180天后，初次释放的金额大约相当于总金额的50%。 随后在今后185天内陆续释放剩余的代币。

关于这个问题的更多详细信息，请参阅 [Aavegotchi Whitepaper](https://drive.google.com/file/d/186zOapKeHNNJ9y8LIByQQ64rs0eJUlEF/view?usp=sharing) and [Community Update #4](https://stackoverflow.com/questions/3912694/using-markdown-how-do-i-center-an-image-and-its-caption/43691451)。


**公开联合曲线销售**

正如我们的朋友们所说的那样，曲线永远不会结束！ 欲了解更多关于曲线机制的信息，请查看我们在 [曲线](/curve) 上的页面。

在这一轮中，GHST的供应没有限制，时间也没有限制。 价格以0.2DAI/GHST开盘，并沿曲线波动。 本轮没有锁定，可直接通过曲线领取代币。

凡是参加了KYC，并且地址被Aavegotchi团队列入白名单的人，都可以直接从曲线上购买。

联合曲线筹集的资金将通过GHST代币持有者控制的水龙头机制提供给Pixelcraft工作室。 关于该机制的更多信息可以在这里找到 [](https://fundrasing.aragon.black)。


**生态系统基金**

生态系统基金由100万GHST组成，按照与私募轮和预售轮相同的时间表进行锁定。 解锁的资金可以通过向 [AavegotchiDAO](/dao)及以上版本提出的提案进行部署，用于资助非Aavegotchi核心团队成员的开发、Aavegotchi Dao的推广和营销，以及AavegotchiDAO认为有用的任何其他用例。


**团队基金**

团队基金由100万GHST组成，按照与私募轮相同的时间表进行解锁。 然而，一旦资金全部解锁，将按照三年的授予计划进行分配。 剩下的资金将被锁入一个新的解锁合约，为期两年，逐步释放给Aavegotchi核心团队。

团队资金主要用于激励Aavegotchi团队核心成员为项目作出充分努力，以及激励外部顾问。

## 收入分配概览

在传送门和可穿戴设备获得的GHST会如何处理？

我们制作了一个方便的图表，为您简要地分解了一下：<div class="centerImageContainer">
<img class="centerImage" src="/tokenomics/ghstcircle.png" alt = "Aavegotchi tokenomics">
</div>

继续阅读以更详细地了解各种分配。


## 稀有度挖矿

Aavegotchi游戏体验的核心部分是要花时间陪伴Gotchi，并为他们配置一些可穿戴装备。 为了激励玩家持续积极地参与到游戏的生态系统中，传送门和可穿戴设备所获得的部分收入将用于奖励顶级稀有度挖矿农民。

为此，所有赚取的GHST的 **40%** 通过玩家奖励回馈给玩家。

最初，玩家奖励将分为三类：

* 前100名最稀有的Aavegotchis(由 [BRS](/rarity-farming#base-rarity-score))
* [亲属](/traits#kinship) 分数前 100 名
* [经验值 (XP)](/traits#experience)前 100 名

这三个类别总共将达到所有GHST收入的 **40%**。 每个类别的确切百分比尚未确认，将在AavegotchiDAO中讨论。

随着游戏继续发展，将添加更多类别。

这些奖励将通过链上快照每 **两周分发一次。**


## 治理

社区治理也是Aavegotchi经验的核心原则。 该组织的部分职责包括管理财政，用于它认为有价值的任何倡议。 (Waifu pics, maybe?)

收入的**10%** 最初将分配给DAO库房。 随着DAO的不断成熟，该百分比最终可能会增加。 当然，最终目标是使DAO发展成为一个完全有能力管理甚至升级协议的实体。 虽然这可能仍然需要几年时间（Avegotchi只是在2020年中期开始），但仍然需要向前看。


## 燃烧

作为一个前奏，了解GHST的 [关联曲线](/curve) 以及如何工作，将是很好的。 然后乐趣就开始了。

**33%** 通过传送门和物品销售赚取的所有GHST将被烧毁。 永远 是的，你读了那个权利。

这个数字之所以如此之高，是因为GHST是一种动态供应的象征。 其供应量随着需求的增加而增加，这意味着这种高烧速率不会导致代币迅速通货紧缩。 这是一种固定供应的令牌问题。

燃烧GHST是对GHST价格下调压力的一种通货紧缩制衡。 这可能是GHST授予GHST游戏奖励的结果。

将GHST直接发送到烧伤地址，还将DAI锁在连接曲线内，为GHST制造一个涨价底部。 这对所有各方来说都是净正值，因为它使买方和卖方能够更好地获得流动资金（减少了滑幅）。 降低循环供应量，并为 [DAICO 点击机制](/curve#aavegotchi-daico) 提供稳定性。


## 开发团队

最后但绝非最不重要的一点是， **17%** 的收入流向开发团队。 毕竟， 重要的是为我们的开发者提供食物，以确保他们能够集中精力帮助为这里的每个人建立最好的 DeFi x NFT 体验。

说了这番话，我们都是人类。 对协议开发者的激励措施不统一，是导致协议失败的巨大因素，是Aavegotchi希望防止的一个问题。

当协议开发者完全用本地令牌付费时，他们被迫出售令牌以支付费用。 导致出售压力和潜在的“死亡循环”场景，令牌永远无法从中恢复。

然而，如果开发者没有付给任何本地代币，那么激励措施就不会强有力地结合起来，导致决策不善。

Aavegotchi 连接曲线通过分开关注解决了这个问题——我们社区管理的点击机制每月从保留地向Pixelcraft Studios（Aavegotchi的主要开发者）分发DAI，以确保积极发展的工作预算。

此外，Pixelcraft还将获得全部GHST收入的17％，主要用于流动性激励，赠品和其他需要GHST的促销活动。



**写在最后**

这是一个关于加密节点的最佳部分，以及你为什么不断看到添加新玩家的原因——它不是零和游戏。 我们所有人都有机会共同取得成果，特别是在DAO中。 问题是，我们如何才能最好地实现这一点。 理解一个项目的令牌，为我们提供了一个良好的起点。

保持阅读并继续游戏。 即将在月球上看到您，Aagent。 


---
author: Coder Dan
date: '2020-04-23T07:00:00.000Z'
title: 'AavegotchiDAO'
description: '关于AavegotchiDAO你需要知道的一切'
image: "icons/dao.svg"
contributors:
  - "vanilladelphia"
  - "cinnabarhorse"
  - "hackingmoneyph"
---

<div class="headerImageContainer">
<img class="headerImage" src="/dao/dao.png">
<p class="headerImageText">AavegotchiDAO徽章</p>
</div>

[DAO](glossary#dao) 是一种去中心化的治理形式，它允许代币持有者投票，以促进组织决策的方式。

Aavegotchi效仿Compound和Synthetix等成功的DeFi协议，遵循 "逐步去中心化 "的过程，从创始团队Pixelcraft Studios组织DAO治理的代币发行活动（DAICO）开始，最终将Aavegotchi的治理，包括所有的游戏机制、智能合约和资金，置于AavegotchiDAO的管辖下，但必须遵循现行法规环境。 这将分三个阶段完成。

<div class="contentsBox">

**内容**

<ol>
<li><a href=#genesis>创世纪</a></li>
<li><a href=#metamorphosis>蜕变</a></li>
<li><a href=#oasis>绿洲</a></li>
<li><a href=#participating-in-governance>参与治理</a></li>
<li><a href=#voting>投票</a></li>
<li><a href=#aavegotchi-improvement-proposals--agips->Aavegotchi改进建议(AGIPs)</a></li>
<li><a href=#treasury>Treasury</a></li>
</ol>

</div>

## 创世纪

*查看* [DAICO](https://wiki.aavegotchi.com/curve/#aavegotchi-daico).

AavegotchiDAO的第一次迭代与GHST代币分配活动同步推出。 GHST代币持有者有权投票决定增加/维持， [联合曲线 bonding curve (TBC)](/curve) 中给Pixelcraft工作室（Aavegotchi背后的团队）预留支持开发的资金。 将资金水龙头从每月5万DAI提高到10万DAI的首个提议，在2020年10月18日以99%的支持率通过。 当我们打算过渡到AavegotchiDAO Metamorphosis（蜕变）的时候，代币持有者也会投票决定是否进行迁移。

代币持有者不会因为积极参与此次AavegotchiDAO的迭代而获得GHST的奖励。

## 蜕变

Metamorphosis蜕变是AavegotchiDAO的第二次迭代，负责管理Aavegotchi简单游戏机制，比如Aavegotchi的总供应量，增加新的抵押物，决定它们的功能，增加社区创造的新穿戴物设备。 当迁移到AavegotchiDAO Oasis（绿洲）之时，代币持有者也会投票决定是否执行迁移。

AavegotchiDAO 在这个阶段可以执行的全部操作列表，可在 Aavegotchi 智能合同文档的 [Governance](https://docs.aavegotchi.com/overview/governance) 部分查阅。

代币持有者不会因为积极参与此次AavegotchiDAO的迭代而获得GHST的奖励。

## 绿洲

虽然AavegotchiDAO 绿洲是AavegotchiDAO 进化的最后迭代，但它只是实现DAO统治的游戏的开始。 与Aavegotchi游戏机制，REALM机制，生态系统支出乃至智能合约升级有关的所有决定都将由AavegotchiDAO投票表决。

代币持有者不会因为积极参与此次AavegotchiDAO的迭代而获得GHST的奖励。

## 参与治理
我激动了！ 那么我如何参加AavegotchiDAO？ 朋友，我们为你准备好了!！  [Aavegotchi Docs](https://docs.aavegotchi.com/overview/governance) 详细列出了DAO函数列表，成员们可以调用/使用这些函数来实现已经投票通过的改变。 例如，假设asUSD已经被投票通过成为一个[抵押类型](/posts/atokens)。 AavegotchiDAO 可以通过使用 `addCollaterTypes()` 函数并在函数中指定 asUSD 来实现更改。

更多的细节将在游戏发布后及时更新。

## 投票

有两种投票方式。(1)快照投票，和/或(2)Aragon投票。


### 快照投票

快照投票是Ethereum上的一个投票DApp。 在Snapshot上进行的投票不需要任何gas费用，也不在链上。 Aavegotchi的快照投票页面可以在[这里](https://snapshot.page/#/aavegotchi.eth)找到

要在Snapshot上投票，请按照以下步骤进行。

1). 进入一个公开的提案。

2). 连接你的钱包。

<img class = "bodyImage" src = "/dao/snapshot1.jpg" alt = "Snapshot Voting Ethereum" />
<img class = "bodyImage" src = "/dao/snapshot2.jpg" alt = "Snapshot Voting Ethereum" />

3). 选择一个投票选项，然后点击 "投票"。 会出现一个弹窗，确认你的选择。

<img class = "bodyImage" src = "/dao/snapshot3.jpg" alt = "Snapshot Voting Ethereum" />
<img class = "bodyImage" src = "/dao/snapshot4.jpg" alt = "Snapshot Voting Ethereum" />

4). 你的Metamask会弹出。 签署交易，就完成了!

<img class = "bodyImage" src = "/dao/snapshot5.jpg" alt = "sign transaction on Snapshot Voting" />

### Aragon投票

Aragon是一个在Ethereum上创建和参与去中心化组织的工具。 在Aragon上进行的投票需要gas费用，并且存在链上。

Aavegotchi的Aragon页面可以在 [这里](https://client.aragon.org/#/aavegotchi/0xf63e1edbcb3be8d5fb124f4a228f5412f48e5ae7/)找到。

要在Aragon上投票，请按照以下步骤进行。

1). 进入一个公开的提案。

2). 连接你的钱包。

<img class = "bodyImage" src = "/dao/aragon1.jpg" alt = "Aragon Voting Ethereum" />

3). 选择投票“是”与“否”。

<img class = "bodyImage" src = "/dao/aragon2.jpg" alt = "Aragon Voting Ethereum" />

4). Metamask交易将会弹出。 注意，你的交易要经过区块确认之后才会成功，所以可以及时查看[gasnow](https://gasnow.org/) 等网站，了解最新的gas费。

5). 一旦交易成功，你的投票就会有相应的体现。


<img class = "bodyImage" src = "/dao/aragon3.jpg" alt = "Aragon Voting Ethereum" />

## Aavegotchi改进提案（AGIPs）

看到Aragon上的那些投票了吗？ 它们是Aavegotchi改进提案（AGIPs）！

请访问[Aavegotchi改进提案](/aavegotchi-improvement-proposals) 页面，查看历史投票列表。 如果你想及时了解到未来的一些提案，请在[社交媒体](/socialmedia)上关注Aavegotchi。

## Treasury

AavegotchiDAO earns 0.3% of all trades on the Aavegotchi [Bonding Curve](/curve) on Ethereum Mainnet. This is the current source of all DAO funds.

As responsible stewards, members of AavegotchiDAO will play a role in determining how these funds are to be allocated.

The AavegotchiDAO treasury is located [here](https://aavegotchi.com/treasury).
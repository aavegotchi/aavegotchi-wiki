---
author: Nick Mudge
date: '2020-04-23T07:00:00.000Z'
title: 'Staking'
description: 'Stake GHST, Make FRENS'
contributors:
  - "mudgen"
  - "unintelligent-nerd"
---


<div class="headerImageContainer">
<img class="headerImage" src="/staking/staking.png">
<p class="headerImageText">质押GHST, 成为朋友!</p>
</div>

抵押是指锁定您的加密货币以换取奖励的过程。 在Aavegotchi项目中，这一点没有什么不同。 原生令牌， [GHST](/posts/ghst), 可以被质押在预订合同中赚取 [积分](/posts/glossary#frens)。

FRENS是Aavegotchi Staking Contract内不可转让的余额。 无法购买 FRENS FRENS不可转让，旨在奖励利益相关者对Aavegotchi项目的贡献。

然后自由可转换成Raffle Tickets，这些Tickets可以定期输入Raffles以赢得奖品。

继续阅读以学习如何使用GHST并获得您的免费奖励。

<div class="contentsBox">

**内容**

<ol>
<li><a href=#purchasing-ghst>购买 GHST</a></li>
<li><a href=#how-to-stake>如何质押 </a></li>
<li><a href=#purchasing-raffle-tickets>购买抽奖券</a></li>
<li><a href=#entering-raffles>进入抽奖</a></li>
<li><a href=#past-raffles-statistics>过去Raffles 统计</a></li>
<li><a href=#more-resources>更多资源</a></li>
</ol>

</div>

## 购买 GHST
首先，你需要拿到一些GHST令牌。 我们的 [GHST 令牌页面](/posts/ghst) 涵盖了您可以获得一些东西的各种方式。

## 如何质押
一旦你有了一些GHST 令牌，现在是时候了!

有三种方法要抓住：(1) 质押GHST 令牌 [Mainnet]， (2) 将 GHST-ETH LP 令牌 [Mainnet], 和/或(3) GHST-QUICK 池在 QuickSwap [Matic] 上。

*注意：预销售GHST 令牌在解锁之前不能被质押。*

### 质押GHST 令牌  主网[Mainnet]
这是对GHST 令牌最直接的方式。 跳转到 [staking user interface](https://aavegotchi.com/stake)。 它将看起来像下面的图像。

<img class = "bodyImage" src = "/staking/staking-interface.png" alt = "aavegotchi staking" />

选择"Mainnet上的利益相关者"，您将会收到另外一个带两个框的页面。 左边的盒子的标题将为“Stake GHST Token”(见下面的图像)。 如果您第一次触发，您必须点击“审批”按钮， 它允许您的 GHST 代币的预订合同。 “审批”交易完成后， 然后您可以使用您想要在“输入数量”字段中输入的GHST的所需数量键。 当您完成后，点击"Stake"按钮来启动这个过程.

<img class = "bodyImage" src = "/staking/stake-ghst.png" alt = "stake ghst token aavegotchi" />

*每有1个GHST 以这种方式保存，您就会收到1个免费的 / 日。*

### 质押 Uniswap GHST-ETH LP token [Mainnet]
第二种更复杂的方法是将Uniswap GHST-ETH 流动性提供商(LP) 令牌连成一体。 为了做到这一点，您必须在您的钱包中既有GHST 令牌又有ETH。 直接到 [GHST-ETH Uniswap 池](https://app.uniswap.org/#/add/0x3f382dbd960e3a9bbceae22651e88158d2791550/ETH) 来增加两个代币的流动性(见下面的图像)。 用户必须以50%GHST和50%ETH的比率向集合提供流动资金。 购买1个GHST-ETH LP令牌所需的GHST和ETH数量因池代币当时的价格而异。  作为GHST 和 ETH的回报，用户将从Uniswap接收GHST-ETH LP 令牌。

<img class = "bodyImage" src = "/staking/ghst-eth-uniswap-interface.png" alt = "GHST-ETH LP Tokens Aavegotchi staking" />

一旦你获得了你的 GHST-ETH LP 令牌，就会跟着 [触摸用户界面](https://aavegotchi.com/stake)。 它将看起来像下面的图像。

<img class = "bodyImage" src = "/staking/staking-interface.png" alt = "aavegotchi staking" />

选择"Mainnet上的利益相关者"，您将会收到另外一个带两个框的页面。 右边的方框将标题为“Stake Uniswap GHST Token”(见下面的图像)。 如果您第一次触发，您必须点击“审批”按钮， 它授予您的 GHST-ETH LP 令牌的仓储合同。 “审批”交易完成后， 然后您可以使用您想要在“输入数量”字段中使用的 GHST-ETH LP 代币的数量键。 当您完成后，点击"Stake"按钮来启动这个过程.

<img class = "bodyImage" src = "/staking/stake-uniswap-ghst-eth.png" alt = "stake uniswap ghst-eth LP token aavegotchi" />

*每有1个GHST-ETH以这种方式连接，您就会收到100个积分/日。*

为什么通过这种方法赚取的积分数的巨大差异？ 质押 GHST-ETH LP token 有可能造成 [永久性损失](/posts/glossary#impermanent-loss)。 您因承担的风险增加而得到补偿。

### 在 QuickSwap 上在 GHST-QUICK 池中存储 [Matic]

第三种方法涉及将GHST 代币从以太坊主网转移到Matic Network，这是层2解决方案。

请参考此 [Matic 指南](/matic) 详细说明如何配置他们的 Metamask 钱包以包含Matic 网络。 一旦完成了这项工作，将按照 [Matic Liquidity Migration Incentions](https://aavegotchi.medium.com/ghst-token-live-on-matic-100k-usd-liquidity-migration-incentives-announced-faq-2590daa25d73) 所发现的随后步骤进行。

1. 从 [QuickSwap](https://quickswap.exchange) 获取一些QUICK 令牌。 当前流动性最高的对是QUICK-UNI，QUICK-WETH和QUICK-USDC。 不久的GHST-QUICK也将是一种选择。

2. 在Quickswap上的 GHST-QUICK 池中成为流动资金提供者。

3. 拿走从步骤2收到的LP令牌并把它们关进GHST-QUICK Staking Pool 以获取stkGHST。

4. 最后，拿出GHST Staking 合同所释放的stkGHST 收据代币，然后将其置于快速交换奖励池中 [https://quickswap.exchange/#/lick](https://quickswap.exchange/#/quick)。

现在您正在赚取QUICK和积分！

与Staking Uniswap GHST-ETH LP Tokens相似，也有使用这种方法造成永久性损失的风险。

## 购买抽奖券

一旦您有足够的积分，就可以在 [商店批量购买用户界面](https://aavegotchi.com/tickets) 购买抽奖券。

与免费的积分，Raffle Tickets可以从一个钱包转移到另一个钱包。 他们也可以在 [marketplace](/marketplace) 上购买或出售。

有六种不同类型的积分，从普通（价值最低）到创世之类（价值最高）：

表格_RaffleTickets

博客: [ 质押GHST，获取主网上的积分！](https://aavegotchi.medium.com/stake-ghst-make-frens-live-on-etherum-mainnet-658bd507d67b)

用户可以在一次交易中购买属于不同类别的奖券。 您不需要 **** 为每个类别的票券创建单独的购买交易。

## 进入抽奖

一次抽奖将运行一段时间。 在这段时间里，您可以提交您的奖券来赢得奖励。 向抽奖中提交抽奖券涉及以太坊交易； 它不会自动完成。 如果您有许多不同类别的抽奖券，并且希望将它们捆绑在一起输入，那么这也是可能的。 您不需要 **** 创建单独的交易来将每个类别的奖券输入进去。

抽奖结束后，您可以找出自己赢得了哪些奖品并可以领取。

如果您选择不参加给定的抽奖活动，则无需对抽奖券进行任何操作。 如果愿意，您也可以为以后的抽奖活动累积抽奖券。

例如，第一个抽奖活动有一个Chainlink主题。 下面是分级奖品：

<img class = "bodyImage" src = "/staking/link-raffle-prizes.png" alt = "Aavegotchi Chainlink-theme Raffle Prizes" />

共有6010个奖品。

[OpenSea 价格](https://opensea.io/activity/aavegotchi-wearable-vouchers)

每张奖品将分配给随机抽奖的彩票，每张彩票都有相等的中奖机会。

您可以提高您的获胜概率：
* 提交多个奖券
* 输入具有更多奖品的抽奖券类别（例如“普通”）

Raffle奖获得者的随机编号是通过Chainlink的 [链上可验证的随机生成器](https://blog.chain.link/verifiable-random-functions-vrf-random-number-generation-rng-feature/) 生成的。

奖品是可爱的礼品券，一旦游戏启动，可将1:1兑换成实际的Aavegotchi。 这将在 [Aavegotchi Shop](https://aavegotchi.com/shop) 商店进行。

## 过去Raffles 统计
您会说，知道如何抵押FRENS并参与抽奖很不错。 但数字如何呢？ 根据过往的抽奖活动赢得可穿戴设备的可能性是什么？ 访问 [Raffles Statistics page](/raffles-stats) 查看历史数据。

## 更多资源

- [Aavegotchi Raffles — A FRENLY Guide](https://aavegotchi.medium.com/aavegotchi-raffles-a-frenly-guide-66f624c9bc60)
- [Aavegotchi ❤ Chainlink Raffle — You Just WON](https://aavegotchi.medium.com/aavegotchi-chainlink-raffle-you-just-won-af87712f1018)
- [Anon and the Green Ticket](https://aavegotchi.medium.com/anon-and-the-green-ticket-5776969b3a69)
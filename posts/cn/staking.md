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

There are four ways to stake: (1) staking GHST tokens on Mainnet (**will be discontinued eventually**), (2) staking Uniswap GHST-ETH LP tokens on Mainnet (**will be discontinued eventually**), (3) staking GHST tokens on Matic Network, and/or (4) the GHST-QUICK pool on QuickSwap on Matic Network.

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

### Staking GHST tokens [Matic]

第三种方法涉及将GHST 代币从以太坊主网转移到Matic Network，这是层2解决方案。

This is done by using the [Bridge to Matic Interface](https://aavegotchi.com/bridge). Approve the contract to use your GHST tokens. Once that transaction goes through, input the amount of GHST you would like to transfer to Matic Network. Once your transaction has confirmed on Ethereum, it takes roughly 7-8 minutes for your balance to reflect on Matic. Your balance will update automatically. Please be patient!

Next, you have to configure your Metamask to display your wallet balance. Do refer to this [Matic Guide](/matic) for detailed instructions on how one can configure their Metamask wallet to include the Matic Network.

Connect your Metamask to Matic Network and head over to the [Matic Staking Page](https://aavegotchi.com/stake-matic) on the Aavegotchi DApp. Approve the contract to use your GHST tokens on Matic. Once the transaction goes through, input the amount of GHST you would like to deposit. Presto! You are done!

### Staking in the GHST-QUICK pool on QuickSwap [Matic]

The fourth method involves transferring GHST tokens from Ethereum Mainnet to the Matic Network, a layer 2 solution.

Do refer to this [Matic Guide](/matic) for detailed instructions on how one can configure their Metamask wallet to include the Matic Network. Once that is done, follow the subsequent steps found in the [Matic Liquidity Migration Incentives post](https://aavegotchi.medium.com/ghst-token-live-on-matic-100k-usd-liquidity-migration-incentives-announced-faq-2590daa25d73).

1. 从 [QuickSwap](https://quickswap.exchange) 获取一些QUICK 令牌。 当前流动性最高的对是QUICK-UNI，QUICK-WETH和QUICK-USDC。 不久的GHST-QUICK也将是一种选择。

2. 在Quickswap上的 GHST-QUICK 池中成为流动资金提供者。

3. 拿走从步骤2收到的LP令牌并把它们关进GHST-QUICK Staking Pool 以获取stkGHST。

4. 最后，拿出GHST Staking 合同所释放的stkGHST 收据代币，然后将其置于快速交换奖励池中 [https://quickswap.exchange/#/lick](https://quickswap.exchange/#/quick)。

Now you are earning QUICK and FRENS!

Similar to Staking Uniswap GHST-ETH LP tokens, there is a risk of impermanent loss using this method as well.

### Staking GHST on Matic Cheetsheet!

The following diagram shows the two different routes to staking on Matic that we have discussed above (<a href=#staking-ghst-tokens--matic->Staking GHST tokens</a> ; <a href=#staking-in-the-ghst-quick-pool-on-quickswap--matic->Staking in the GHST-QUICK pool</a>).

<img class = "bodyImage" src = "/staking/GHST-to-Matic-Cheatsheet.png" alt = "GHST to Matic Cheatsheet" />

## 购买抽奖券

Once you have enough FRENS, head to the [Shop Bulk Buy user interface](https://aavegotchi.com/tickets) to purchase raffle tickets with FRENS.

Unlike FRENS, Raffle Tickets can be transferred from one wallet to another. They can also be bought/sold on [marketplaces](/marketplace).

There are six different categories of raffle tickets, ranging from Common (least valuable) to Godlike (most valuable):

table_RaffleTickets

Blog post: \[Stake GHST, Make FRENS Live on Ethereum Mainnet!\]( https://aavegotchi.medium.com/stake-ghst-make-frens-live-on-ethereum-mainnet-658bd507d67b)

Users are allowed to buy tickets belonging to different categories in a single transaction. You do **not** need to create separate buy transactions for each category of raffle ticket.

## 进入抽奖

A raffle runs for a period of time. During this period, you can submit your raffle tickets for a chance to win prizes. Submitting raffle tickets into the draw involves an Ethereum transaction; it is not done automatically. If you have many different categories of raffle tickets and wish to enter them together as a bundle, this is also possible. You do **not** need to create separate transactions for entering each category of raffle tickets into the raffle.

When the raffle is over, you can find out what prizes you have won and can claim them.

If you choose not to participate in a given Raffle, you do not need to do anything with your raffle tickets. You can also accumulate raffle tickets for subsequent raffles if you like to do so.

As an example, the first raffle had a Chainlink Theme. Here were the prizes for the raffle:

<img class = "bodyImage" src = "/staking/link-raffle-prizes.png" alt = "Aavegotchi Chainlink-theme Raffle Prizes" />

A total of 6010 prizes.

[Prizes on OpenSea](https://opensea.io/activity/aavegotchi-wearable-vouchers)

Each prize will be allocated to a randomly drawn raffle ticket, where each ticket has an equal chance of winning.

You can improve your probability of winning by:
* 提交多个奖券
* 输入具有更多奖品的抽奖券类别（例如“普通”）

Random numbers for the Raffle prize winners are generated through Chainlink's [on-chain verifiable randomness generator](https://blog.chain.link/verifiable-random-functions-vrf-random-number-generation-rng-feature/).

The prizes, which are Wearable Vouchers, could be exchanged 1:1 for the actual Aavegotchi wearable once the game launches. This will take place at the [Aavegotchi Shop](https://aavegotchi.com/shop).

## 过去Raffles 统计
Knowing how to stake FRENS and participate in Raffles is good, you say. But what about the numbers? What are the probabilities of winning a wearable based on past raffles? Visit the [Raffles Statistics page](/raffles-stats) for the historical data.

## 更多资源

- [Aavegotchi Raffles — A FRENLY Guide](https://aavegotchi.medium.com/aavegotchi-raffles-a-frenly-guide-66f624c9bc60)
- [Aavegotchi ❤ Chainlink Raffle — You Just WON](https://aavegotchi.medium.com/aavegotchi-chainlink-raffle-you-just-won-af87712f1018)
- [Anon and the Green Ticket](https://aavegotchi.medium.com/anon-and-the-green-ticket-5776969b3a69)
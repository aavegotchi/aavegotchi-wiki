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
首先，你需要一些GHST代币来质押。 在Polygon（前Matic网络）上进行押注。

有两种方式进行质押。(1) 直接质押GHST代币，和/或 (2) 质押QuickSwap LP代币。

**重要事项：Mainnet上的质押已经停止了!**

*注意：预售的GHST代币在解锁前不能进行质押。*

### 直接质押GHST代币

首先，你必须将你的GHST代币从Ethereum Mainnet转移到Polygon，这是一个二层解决方案。

通过使用 [嫁接到Polygon界面](https://aavegotchi.com/bridge) 来完成的。 首先允许合约调用你的GHST 代币。 一旦该交易通过了，请输入您想要转账到Polygon的GHST金额。 一旦您的交易在Ethereum上确认，您的余额大约需要7-8分钟到账Polygon地址。 您的余额将自动更新。 请耐心等待

接下来，您必须配置您的Metamask来显示您的钱包余额。 请参考这篇[Polygon指南](/polygon) ，了解如何将Metamask钱包配置到Polygon上的详细说明。

将你的Metamask连接到Polygon，然后前往Aavegotchi DApp上的[Polygon 质押](https://aavegotchi.com/stake-polygon) 页面。 允许合约在Polygon上调用你的GHST代币。 一旦交易通过，输入你想存入的GHST金额。 恭喜你!  你现在完成了!

*以这种方式每存入1个GHST，您就会收到1个FRENS/天。*

### 质押QuickSwap LP代币

目前，只有2个QuickSwap LP代币可以获得FRENS。

* QuickSwap GHST-QUICK LP代币。
* QuickSwap GHST-USDC LP代币

第一步涉及将资金从Ethereum Mainnet转移到Polygon，这是一个2层解决方案。

请参考这篇[Polygon指南](/polygon) ，了解如何将Metamask钱包配置到Polygon上的详细说明。 Next, use the [Aavegotchi Bridge](https://aavegotchi.com/bridge) to transfer GHST and/or other assets to Polygon. The [maTokens Guide](/matokens) will show you how this is done.

Next, become a liquidity provider on either or both the [GHST-QUICK](https://info.quickswap.exchange/pair/0x8b1fd78ad67c7da09b682c5392b65ca7caa101b9) and [GHST-USDC](https://info.quickswap.exchange/pair/0x096c5ccb33cfc5732bcd1f3195c13dbefc4c82f4) pools on [QuickSwap](https://quickswap.exchange). You will receive LP tokens in return for your liquidity provision. For people who are interested in staking in the GHST-QUICK pool, you can get some QUICK token from [QuickSwap](https://quickswap.exchange). The most liquid pairs are currently QUICK-UNI, QUICK-WETH, QUICK-USDC, and GHST-QUICK.

Take these LP tokens and stake them in the [Aavegotchi Staking Interface](https://aavegotchi.com/stake-polygon) to get stkGHST receipt tokens. For the GHST-QUICK and GHST-USDC pools, these stk receipt tokens are named stkGHST-QUICK and stkGHST-USDC, respectively.

For the stkGHST-QUICK receipt token **only**, you can stake them into the Quickswap Rewards pool at [https://quickswap.exchange/#/quick](https://quickswap.exchange/#/quick) to earn additional QUICK rewards. The Aavegotchi team is requesting for a similar incentive to be offered for the stkGHST-USDC receipt token.

*For every 1 GHST-QUICK LP token staked in this way, you receive 23 FRENS / Day.*

*For every 1 GHST-USDC LP token staked in this way, you receive 74 million FRENS / Day.*

Why is there a huge difference in the number of FRENS earned through LP staking compared to staking GHST tokens directly? Staking LP tokens have the risk of [impermanent loss](/glossary#impermanent-loss). You are compensated for the increased risk you take.

Why is the GHST-USDC pool yielding 74 million FRENS a day? An early depositor in the GHST-USDC pool on QuickSwap messed up the ratio between the assets. Hence, when depositors add to the pool, they receive tiny amounts of LP tokens, like 0.00006. See this [tweet](https://twitter.com/coderdannn/status/1362423402871447554) for the lulz.

### Staking GHST on Polygon Cheetsheet!

The following diagram shows the two different routes to staking on Polygon that we have discussed above (<a href=#staking-ghst-tokens-directly>Staking GHST tokens</a> ; <a href=#staking-in-the-ghst-quick-pool-on-quickswap>Staking in the GHST-QUICK pool</a>).

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
* Submitting multiple tickets
* Enter raffle ticket categories with more prizes (e.g. Common)

Random numbers for the Raffle prize winners are generated through Chainlink's [on-chain verifiable randomness generator](https://blog.chain.link/verifiable-random-functions-vrf-random-number-generation-rng-feature/).

The prizes, which are Wearable Vouchers, could be exchanged 1:1 for the actual Aavegotchi wearable once the game launches. This will take place at the [Aavegotchi Shop](https://aavegotchi.com/shop).

## 过去Raffles 统计
Knowing how to stake FRENS and participate in Raffles is good, you say. But what about the numbers? What are the probabilities of winning a wearable based on past raffles? Visit the [Raffles Statistics page](/raffles-stats) for the historical data.

## 更多资源

- [Aavegotchi Raffles — A FRENLY Guide](https://aavegotchi.medium.com/aavegotchi-raffles-a-frenly-guide-66f624c9bc60)
- [Aavegotchi ❤ Chainlink Raffle — You Just WON](https://aavegotchi.medium.com/aavegotchi-chainlink-raffle-you-just-won-af87712f1018)
- [Anon and the Green Ticket](https://aavegotchi.medium.com/anon-and-the-green-ticket-5776969b3a69)

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

FRENS can be converted into Raffle Tickets or Drop Tickets:

* Raffle Tickets can be entered into periodic [Wearable Raffles](/tickets) to win [Wearables](/wearables).

* Drop Tickets can be entered into [NFT Raffles](/tickets) to win [Portals](/portals) and [REALM Parcels](/metaverse).

Continue reading to learn how to stake GHST.

<div class="contentsBox">

**内容**

<ol>
<li><a href=#purchasing-ghst>购买 GHST</a></li>
<li><a href=#how-to-stake>如何质押 </a></li>
<li><a href=#staking-contract-addresses>Staking Contract Addresses</a></li>
<li><a href=#what-s-next->What's next?</a></li>
</ol>

</div>

## 购买 GHST
首先，你需要拿到一些GHST令牌。 我们的 [GHST 令牌页面](/posts/ghst) 涵盖了您可以获得一些东西的各种方式。

## 如何质押
首先，你需要一些GHST代币来质押。 在Polygon（前Matic网络）上进行押注。

There are four ways to stake:

1. GHST

2. GHST-QUICK

3. GHST-USDC

4. GHST-ETH

**Important: Staking on Mainnet has been discontinued! Please unstake and restake on Polygon.**

*注意：预售的GHST代币在解锁前不能进行质押。*

### 直接质押GHST代币

首先，你必须将你的GHST代币从Ethereum Mainnet转移到Polygon，这是一个二层解决方案。

通过使用 [嫁接到Polygon界面](https://aavegotchi.com/bridge) 来完成的。 首先允许合约调用你的GHST 代币。 一旦该交易通过了，请输入您想要转账到Polygon的GHST金额。 一旦您的交易在Ethereum上确认，您的余额大约需要7-8分钟到账Polygon地址。 您的余额将自动更新。 请耐心等待

接下来，您必须配置您的Metamask来显示您的钱包余额。 请参考这篇[Polygon指南](/polygon) ，了解如何将Metamask钱包配置到Polygon上的详细说明。

将你的Metamask连接到Polygon，然后前往Aavegotchi DApp上的[Polygon 质押](https://aavegotchi.com/stake-polygon) 页面。 允许合约在Polygon上调用你的GHST代币。 一旦交易通过，输入你想存入的GHST金额。 恭喜你!  你现在完成了!

*以这种方式每存入1个GHST，您就会收到1个FRENS/天。*

### Staking GHST-QUICK and GHST-USDC

Staking GHST-QUICK and GHST-USDC follows the same steps.

第一步涉及将资金从Ethereum Mainnet转移到Polygon，这是一个2层解决方案。

请参考这篇[Polygon指南](/polygon) ，了解如何将Metamask钱包配置到Polygon上的详细说明。 接下来，使用[Aavegotchi Bridge](https://aavegotchi.com/bridge) 将GHST和/或其他资产转移到Polygon。 maTokens指南将教你如何做到这一点。

接下来，在 [GHST-QUICK](https://info.quickswap.exchange/pair/0x8b1fd78ad67c7da09b682c5392b65ca7caa101b9) 和 [GHST-USDC](https://info.quickswap.exchange/pair/0x096c5ccb33cfc5732bcd1f3195c13dbefc4c82f4) 池在 [QuickSwap](https://quickswap.exchange) 上成为流动资金提供者。 您将收到LP代币作为您提供流动资金的回报。 对于有兴趣在 GHST-QUICK 池做流动性的人来说，您可以先从 [QuickSwap](https://quickswap.exchange) 获取一些QUICK 代币。 当前流动性最高的交易对是QUICK-UNI，QUICK-WETH和QUICK-USDC。

将这些LP代币质押进入 [Aavegotchi 质押界面](https://aavegotchi.com/stake-polygon) 以获取stkGHST 收据。 For the GHST-QUICK and GHST-USDC pools, these stkGHST receipt tokens are named stkGHST-QUICK and stkGHST-USDC, respectively.

针对stkGHST-QUICK质押对来说，你可以将其质押到Quickswap奖励池中，https://quickswap.exchange/#/quick，以获得额外的QUICK奖励。 Aavegotchi团队要求为stkGHST-USDC提供类似奖励。

*For every 1 GHST-QUICK LP token staked in this way, you receive 83 FRENS / Day (the team tries to keep the rate around 30-40% higher than just staking GHST alone. This rate is periodically adjusted up/down without warning to maintain the correct proportion).*

*For every 1 GHST-USDC LP token staked in this way, you receive 74 million FRENS / Day (10% more than just staking GHST).*

为什么通过LP代币质押赚取的FRENS数量与直接质押GHST代币有很大的区别？ 质押 GHST-ETH LP token 有可能造成 [无常损失](/glossary#impermanent-loss)。 您所承担的风险增加了，所以你得到的激励会更多。

为什么GHST-USDC池每天有7400万FRENS的收益？ 早期在QuickSwap上的GHST-USDC池中的一个储户搞错了资产之间的比例。 因此，当储户向池子里添加时，他们会收到极少量的LP代币，比如0.00006。 请看这篇[推文](https://twitter.com/coderdannn/status/1362423402871447554)，让人啼笑皆非。

### Staking GHST-ETH

* Step 1: Go to [quickswap.exchange](https://quickswap.exchange/) and choose > Pools > Add Liquidity.

* Step 2: Deposit GHST and ETH equally into the GHST-ETH liquidity pool.

* Step 3: In return, you receive GHST-WETH LP tokens.

* Step 4: Take those LP tokens and stake them at [aavegotchi.com/stake-polygon](https://aavegotchi.com/stake-polygon)

* Step 5: In return, you earn FRENS points and you get stkGHST-WETH tokens

* Step 6: Deposit those at [dinoswap.exchange](https://dinoswap.exchange/) > Fossil Farms to farm DINO

* BONUS: Send your DINO to the GHST Extinction Pool to earn even more GHST!

For every 1 GHST-ETH LP token staked in this way, you receive 12.08 million FRENS / Day (20% more than just staking GHST).

### Staking Cheatsheets!

If you prefer something more visual, check out our Staking Cheatsheets!

* GHST Staking and GHST-QUICK/GHST-USDC Staking

<img class = "bodyImage" src = "/staking/GHST-to-Matic-Cheatsheet.png" alt = "GHST to Matic Cheatsheet" />

* GHST-ETH Staking

<img class = "bodyImage" src = "/staking/aavegotchi-dinoswap-lp-cheatsheet.png" alt = "Aavegotchi x DinoSwap LP Cheatsheet" />

### Staking Returns Table

The table below summarizes the staking returns (in terms of FRENS) in percentage against the baseline of staking GHST directly.

Do note that the Pixelcraft team may update the FRENS amount from time to time to balance the system.

table_stakingReturns

## Staking Contract Addresses

The following table shows the various staking contract addresses on Polygon. The ghstStaking and stkGHSTQUICK contracts share the same contract address. Do check the contract address first before finalizing any transactions.

table_stakingContractAddresses

## What's next?

So you've got some FRENS now eh? Head over to the [Tickets page](/tickets) to learn how to purchase tickets with FRENS and to participate in Raffles!
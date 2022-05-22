---
author: Nick Mudge
date: '2020-04-23T07:00:00.000Z'
title: 'ステーキング'
description: 'GHSTを預けてFRENSを稼ごう'
contributors:
  - "mudgen"
  - "unintelligent-nerd"
---

<div class="headerImageContainer">
<img class="headerImage" src="/staking/staking.png">
<p class="headerImageText">GHSTを預けてFRENSを稼ごう!</p>
</div>

ステーキングとは、報酬と引き換えに暗号通貨をロックするプロセスを指します。 これはAavegotchiプロジェクトでも変わりません。 The native token, [GHST](/posts/ghst), can be staked in various staking contracts to earn [FRENS](/posts/glossary#frens) or [GAX Liquidity Token Reward (GLTR)](/gotchus-alchemica-exchange#gltr-token) rewards.

<div class="contentsBox">

＊＊目次＊＊

<ol>
<li><a href=#frens>フレンズ（FRENS）</a></li>
<li><a href=#gltr>GLTR</a></li>
<li><a href=#where-to-stake>Where to Stake</a></li>
<li><a href=#staking-for-frens>Staking for FRENS</a></li>
<li><a href=#staking-for-gltr>Staking for GLTR</a></li>
<li><a href=#staking-contract-addresses>Staking Contract Addresses</a></li>
<li><a href=#frens-taask-force>FRENS Taask Force</a></li>
<li><a href=#what-s-next->What's next?</a></li>
</ol>

</div>

## フレンズ（FRENS）

FRENSはAavegotchi Staking Contract内の譲渡不可能な残高です。 FRENSを購入することはできません。 FRENSはAvegotchiプロジェクトに貢献したステークホルダーに対して報酬を与えるためのものです。

FRENSはラッフルチケットまたはドロップチケットに変換することができます。

* ラッフルチケット（抽選券）は定期的に開催される[ウェアラブルラッフル（抽選会）](/tickets)に参加し、[ウェアラブル](/wearables)を獲得することができます。

* ドロップチケットは、[NFTラッフル](/tickets)に参加して、[ポータル](/portals)や[ランドパーセル](/metaverse)を獲得することができます。

## GLTR

The primary utility of [GAX Liquidity Token Reward (GLTR)](/gotchus-alchemica-exchange#gltr-token) is allowing players in the Gotchiverse to speed up the crafting and upgrading of their [Installations](/gotchiverse#building-on-realm-parcels) by burning GLTR, allowing them to reach higher levels of the game faster. Every burned GLTR is equivalent to one block on the Polygon PoS network.

GLTRはまた、[ウェアラブル・クレスト（Wearable Crest）](/guild#accessing-a-guild)のオークションに必要なメイントークンとして、二次的な機能もあります。 また、ギルドはGLTRを焼却することで、次のギルド・チャネリングまでの時間を短縮することができます。

## Where to Stake

Staking is accessible at [app.aavegotchi.com/stake](https://app.aavegotchi.com/stake).

You need either [GHST token](/ghst) or a GHST LP pair (GHST-QUICK, GHST-USDC, GHST-ETH, GHST-MATIC) to stake.

You can either stake for **FRENS** rewards or **GLTR** rewards.

<img class="bodyImage" src="/staking/stake.png" alt="Aavegotchi Staking" />

## Staking for FRENS

<img class="bodyImage" src="/staking/stake-polygon.png" alt="Aavegotchi Staking for FRENS" />

There are six ways to stake for FRENS:

1. GHST

2. wapGHST

3. GHST-QUICK

4. GHST-USDC

5. GHST-ETH

6. GHST-MATIC

**Important: Staking on Mainnet has been discontinued! Please unstake and restake on Polygon.**

*Note: Pre-sale GHST tokens cannot be staked until they are unlocked.*

### GHSTトークンを直接ステーキングする

* Step 1: Connect your Metamask to Polygon and go to the [Polygon Staking Page](https://app.aavegotchi.com/stake-polygon) on the Aavegotchi DApp.

* Step 2: Approve the contract to use your GHST tokens on Polygon.

* Step 3: Input the amount of GHST you would like to deposit. やりましたね！ これで完了です！

*For every 1 GHST staked in this way, you receive 1 FRENS / Day.*

### wapGHSTのステーキング

wapGHSTは、Wrapped Aave Polygon GHSTの略です。 It provides the same FRENS rate as staking GHST directly, with the addition of lending the GHST token out for additional yield on the Aave platform.

ステーカーはAaveを訪問する必要はありません。 You just need to approve your tokens and click on wrap GHST to wrap/unwrap your GHST into wapGHST.

*Note: The APY accrued will not appear in your balance of wapGHST. Rather, it will accrue to your GHST balance during the unwrapping process (when you return to vanilla GHST.)*

* ステップ1： [app.aavegotchi.com/stake-polygon](https://app.aavegotchi.com/stake-polygon)にアクセスします。

* ステップ2：あなたのGHSTトークンを使用する契約を承認します。

* ステップ3：あなたのGHSTをwapGHSTにラップします。

### GHST-QUICKとGHST-USDCのステーキング

Staking GHST-QUICK and GHST-USDC follows the same steps.

* Step 1: Become a liquidity provider on either or both the [GHST-QUICK](https://info.quickswap.exchange/pair/0x8b1fd78ad67c7da09b682c5392b65ca7caa101b9) and [GHST-USDC](https://info.quickswap.exchange/pair/0x096c5ccb33cfc5732bcd1f3195c13dbefc4c82f4) pools on [QuickSwap](https://quickswap.exchange). You will receive LP tokens in return for your liquidity provision. For people who are interested in staking in the GHST-QUICK pool, you can get some QUICK token from [QuickSwap](https://quickswap.exchange). The most liquid pairs are currently QUICK-UNI, QUICK-WETH, QUICK-USDC, and GHST-QUICK.

* Step 2: Take these LP tokens and stake them in the [Aavegotchi Staking Interface](https://app.aavegotchi.com/stake-polygon) to get stkGHST receipt tokens. For the GHST-QUICK and GHST-USDC pools, these stkGHST receipt tokens are named stkGHST-QUICK and stkGHST-USDC, respectively.

*For every 1 GHST-QUICK LP token staked in this way, you receive 83 FRENS / Day (the team tries to keep the rate around 30-40% higher than just staking GHST alone. This rate is periodically adjusted up/down without warning to maintain the correct proportion).*

*For every 1 GHST-USDC LP token staked in this way, you receive 74 million FRENS / Day (10% more than just staking GHST).*

Why is there a huge difference in the number of FRENS earned through LP staking compared to staking GHST tokens directly? Staking LP tokens have the risk of [impermanent loss](/glossary#impermanent-loss). You are compensated for the increased risk you take.

Why is the GHST-USDC pool yielding 74 million FRENS a day? QuickSwapのGHST-USDCプールに、初期に預けた人が、資産間の比率をめちゃくちゃにしました。 したがって、トークンがプールに追加されると、0.00006のような微量のLPトークンを受け取ることになるのです。 See this [tweet](https://twitter.com/coderdannn/status/1362423402871447554) for the lulz.

### GHST-WETHのステーキング

* ステップ1：[quickswap.exchange](https://quickswap.exchange/)にアクセスし、> プール > リキディティーを追加を選択します。

* ステップ2：GHSTとETHをGHST-ETHリキディティープールに等しく入金します。

* ステップ3：その見返りとして、GHST-WETH LPトークンを受け取ります。

* Step 4: Take those LP tokens and stake them at [app.aavegotchi.com/stake-polygon](https://app.aavegotchi.com/stake-polygon)

* ステップ5：お返しにFRENSポイントを獲得し、stkGHST-WETHトークンを入手します。

For every 1 GHST-ETH LP token staked in this way, you receive 12.08 million FRENS / Day (20% more than just staking GHST).

### GHST-MATICのステーキング

* ステップ1：[sushi.com](https://sushi.com/)にアクセスし、アプリに入る

* ステップ2：GHST-MATICのプールにリキディティーを追加します。 すると、GHST-MATIC LP トークンを受け取ることができます

* Step 3: Take the GHST-MATIC LP Tokens and deposit them at [app.aavegotchi.com/stake-polygon](https://app.aavegotchi.com/stake-polygon). LPトークンをステーキングした後、stkGHST-MATICレシートトークンを受け取ります。

### ステーキング・チートシート

If you prefer something more visual, check out our Staking Cheatsheets!

* GHSTステーキングとGHST-QUICK/GHST-USDCステーキング

<img class = "bodyImage" src = "/staking/GHST-to-Matic-Cheatsheet.png" alt = "GHST to Matic Cheatsheet" />

### ステーキング利益表

The table below summarizes the staking returns (in terms of FRENS) in percentage against the baseline of staking GHST directly.

Do note that the Pixelcraft team may update the FRENS amount from time to time to balance the system.

table_stakingReturns

## Staking for GLTR

<img class="bodyImage" src="/staking/stake-gltr.png" alt="Aavegotchi Staking for GLTR" />

* Step 1: Visit [app.aavegotchi.com/stake-gltr](https://app.aavegotchi.com/stake-gltr)

* Step 2: Select the pools you are interested in

* Step 3: Deposit your wapGHST/GHST LP tokens in those pools. Earn GLTR rewards every block!

## Staking Contract Addresses

The following table shows the various staking contract addresses on Polygon. The ghstStaking and stkGHSTQUICK contracts share the same contract address. Do check the contract address first before finalizing any transactions.

table_stakingContractAddresses

## FRENS Taask Force

From time to time, the FRENS emission rate does not automatically get updated when the price of the underlying tokens changes.

The [FRENS Taask Force](/frens-taask-force) has been setup to monitor and adjust the FRENS rates to keep it in check with the pre-determined rate.

## What's next?

So you've got some FRENS now eh? Head over to the [Tickets page](/tickets) to learn how to purchase tickets with FRENS and to participate in Raffles!
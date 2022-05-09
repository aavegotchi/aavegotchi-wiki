---
author: Nick Mudge
date: '2020-04-23T07:00:00.000Z'
title: 'ステーキング'
description: 'GHSTを預けてFRENSを稼ごう'
contributors:
  - "マッドジェン"
  - "アンインテリジェント・ナード"
---


<div class="headerImageContainer">
<img class="headerImage" src="/staking/staking.png">
<p class="headerImageText">GHSTを預けてFRENSを稼ごう!</p>
</div>

ステーキングとは、報酬と引き換えに暗号通貨をロックするプロセスを指します。 これはAavegotchiプロジェクトでも変わりません。 ネイティブトークンである[GHST](/posts/ghst)は、ステーキングコントラクトにステーキングすることで、[FRENS](/posts/glossary#frens)を獲得することができます。

FRENSはAavegotchi Staking Contract内の譲渡不可能な残高です。 FRENSを購入することはできません。 FRENSはAvegotchiプロジェクトに貢献したステークホルダーに対して報酬を与えるためのものです。

FRENSはラッフルチケットまたはドロップチケットに変換することができます。

* ラッフルチケット（抽選券）は定期的に開催される[ウェアラブルラッフル（抽選会）](/tickets)に参加し、[ウェアラブル](/wearables)を獲得することができます。

* ドロップチケットは、[NFTラッフル](/tickets)に参加して、[ポータル](/portals)や[ランドパーセル](/metaverse)を獲得することができます。

GHSTのステーキングのやり方については、こちらをご覧ください。

<div class="contentsBox">

＊＊目次＊＊

<ol>
<li><a href=#purchasing-ghst>GHSTの購入</a></li>
<li><a href=#how-to-stake>ステーキングのやり方</a></li>
<li><a href=#staking-contract-addresses>ステーキング・コントラクト・アドレス</a></li>
<li><a href=#what-s-next->次は何をする？</a></li>
</ol>

</div>

## GHSTの購入
まず、ステークするためのGHSTトークンを手に入れる必要があります。 [GHSTトークンのページ](/posts/ghst)では、トークンを入手するための様々な方法を紹介しています。

## ステーキングのやり方
GHSTトークンを手に入れたら、[ステーキングページ](https://aavegotchi.com/stake-polygon)でステークすることができます。 ステーキングはPolygon（旧Matic Network）上で行われます。

<img class = "bodyImage" src = "/staking/ghst-staking-ui.png" alt = "GHST ステーキング UI" />

There are six ways to stake:

1. GHST

2. wapGHST

3. GHST-QUICK

4. GHST-USDC

5. GHST-ETH

6. GHST-MATIC

**重要: メインネットでのステーキングは終了しました。 ステーキングを解除し、Polygonで再ステーキングを行ってください。**

*注意：先行販売されたGHSTトークンは、ロックが解除されるまでステークすることができません。*

### GHSTトークンを直接ステーキングする

* ステップ1：[Bridge to Polygon Interface](https://aavegotchi.com/bridge)を使用して、GHSTトークンをEthereum Mainnetからレイヤー2のソリューションであるPolygonへ転送します。

* ステップ2：あなたのGHSTトークンを使用する契約を承認します。

* ステップ3：Polygonに転送するGHSTの量を入力します。 Ethereum上で取引が確認されると、Polygon上に残高が反映されるまでおよそ7～8分かかります。 残高は自動的に更新されます。 しばらくお待ちください。

* ステップ4：[Polygonガイド](/polygon)に従って、Polygonを含むようにMetamaskウォレットを設定します。

* ステップ5：MetamaskをPolygonに接続し、Aavegotchi DAppの[Polygon Stakingページ](https://aavegotchi.com/stake-polygon)にアクセスします。

* ステップ6：GHSTトークンをPolygonで使用するための契約を承認します。

* ステップ7：入金したいGHSTの金額を入力します。 なんと！ これで完了です！

*この方法で1GHSTをステークするごとに、1FRENS / Dayを受け取ることができます。*

### Staking wapGHST

wapGHST stands for Wrapped Aave Polygon GHST. It provides the same FRENS rate as staking GHST directly, with the addition of lending the GHST token out for additional yield on the Aave platform.

Stakers do not need to visit Aave. You just need to approve your tokens and click on wrap GHST to wrap/unwrap your GHST into wapGHST.

*Note: The APY accrued will not appear in your balance of wapGHST. Rather, it will accrue to your GHST balance during the unwrapping process (when you return to vanilla GHST.)*

* Step 1: Visit [app.aavegotchi.com/stake-polygon](https://app.aavegotchi.com/stake-polygon)

* ステップ2：あなたのGHSTトークンを使用する契約を承認します。

* Step 3: Wrap your GHST into wapGHST.

### Staking GHST-QUICK and GHST-USDC

Staking GHST-QUICK and GHST-USDC follows the same steps.

* Step 1: Configure your Metamask wallet to include Polygon by following this [Polygon Guide](/polygon).

* Step 2: Use the [Aavegotchi Bridge](https://aavegotchi.com/bridge) to transfer GHST and/or other assets to Polygon. The [maTokens Guide](/matokens) will show you how this is done.

* Step 3: Become a liquidity provider on either or both the [GHST-QUICK](https://info.quickswap.exchange/pair/0x8b1fd78ad67c7da09b682c5392b65ca7caa101b9) and [GHST-USDC](https://info.quickswap.exchange/pair/0x096c5ccb33cfc5732bcd1f3195c13dbefc4c82f4) pools on [QuickSwap](https://quickswap.exchange). You will receive LP tokens in return for your liquidity provision. For people who are interested in staking in the GHST-QUICK pool, you can get some QUICK token from [QuickSwap](https://quickswap.exchange). The most liquid pairs are currently QUICK-UNI, QUICK-WETH, QUICK-USDC, and GHST-QUICK.

* Step 4: Take these LP tokens and stake them in the [Aavegotchi Staking Interface](https://aavegotchi.com/stake-polygon) to get stkGHST receipt tokens. For the GHST-QUICK and GHST-USDC pools, these stkGHST receipt tokens are named stkGHST-QUICK and stkGHST-USDC, respectively.

*For every 1 GHST-QUICK LP token staked in this way, you receive 83 FRENS / Day (the team tries to keep the rate around 30-40% higher than just staking GHST alone. This rate is periodically adjusted up/down without warning to maintain the correct proportion).*

*For every 1 GHST-USDC LP token staked in this way, you receive 74 million FRENS / Day (10% more than just staking GHST).*

Why is there a huge difference in the number of FRENS earned through LP staking compared to staking GHST tokens directly? Staking LP tokens have the risk of [impermanent loss](/glossary#impermanent-loss). You are compensated for the increased risk you take.

Why is the GHST-USDC pool yielding 74 million FRENS a day? QuickSwapのGHST-USDCプールに、初期に預けた人が、資産間の比率をめちゃくちゃにしました。 したがって、トークンがプールに追加されると、0.00006のような微量のLPトークンを受け取ることになるのです。 See this [tweet](https://twitter.com/coderdannn/status/1362423402871447554) for the lulz.

### Staking GHST-WETH

* Step 1: Go to [quickswap.exchange](https://quickswap.exchange/) and choose > Pools > Add Liquidity.

* Step 2: Deposit GHST and ETH equally into the GHST-ETH liquidity pool.

* Step 3: In return, you receive GHST-WETH LP tokens.

* Step 4: Take those LP tokens and stake them at [aavegotchi.com/stake-polygon](https://aavegotchi.com/stake-polygon)

* Step 5: In return, you earn FRENS points and you get stkGHST-WETH tokens

For every 1 GHST-ETH LP token staked in this way, you receive 12.08 million FRENS / Day (20% more than just staking GHST).

### Staking GHST-MATIC

* Step 1: Go to [sushi.com](https://sushi.com/) and enter the app

* Step 2: Add liquidity to the GHST-MATIC pool. In turn, you will receive GHST-MATIC LP Tokens

* Step 3: Take the GHST-MATIC LP Tokens and deposit them at the [Aavegotchi Staking Interface](https://aavegotchi.com/stake-polygon). You will receive stkGHST-MATIC receipt tokens after staking your LP tokens.

### Staking Cheatsheets!

If you prefer something more visual, check out our Staking Cheatsheets!

* GHST Staking and GHST-QUICK/GHST-USDC Staking

<img class = "bodyImage" src = "/staking/GHST-to-Matic-Cheatsheet.png" alt = "GHSTからMaticへのチートシート" />

### ステーキング利益表

下の表は、GHSTを直接ステーキングした場合の基準に対して、ステーキングリターン（FRENS換算）をパーセンテージでまとめたものです。

なお、Pixelcraftチームは、システムのバランスを取るために、FRENSの金額を随時更新することがあります。

表_stakingReturn

## ステーキング・コントラクト・アドレス

次の表は、Polygon上の様々なステーキングコントラクトのアドレスを示しています。 ghstStakingとstkGHSTQUICKの契約は同じ契約アドレスを共有しています。 取引を確定する前に、まず契約書のアドレスを確認してください。

表_stakingContractAddresses

## 次は何をするの？

さて、FRENSを手に入れましたか？ [チケットのページ](/tickets)に行き、FRENSでチケットを購入する方法とラッフルに参加する方法を学んでください。
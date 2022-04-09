---
author: Nick Mudge
date: '2020-04-23T07:00:00.000Z'
title: 'Staking'
description: 'Stake GHST, Make FRENS'
contributors:
  - "mudgen"
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
<li><a href=#what-s-next->次は？</a></li>
</ol>

</div>

## GHSTの購入
まず、ステークするためのGHSTトークンを手に入れる必要があります。 [GHSTトークンのページ](/posts/ghst)では、トークンを入手するための様々な方法を紹介しています。

## ステーキングのやり方
GHSTトークンを手に入れたら、[ステーキングページ](https://aavegotchi.com/stake-polygon)でステークすることができます。 ステーキングはPolygon（旧Matic Network）上で行われます。

<img class = "bodyImage" src = "/staking/ghst-staking-ui.png" alt = "GHST Staking UI" />

ステーキングの方法は5つあります：

1. GHST

2. GHST-QUICK

3. GHST-USDC

4. GHST-ETH

5. GHST-MATIC

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

### GHST-QUICKとGHST-USDCのステーキング

GHST-QUICKとGHST-USDCのステーキングは同じ手順で行います。

* ステップ1：[Polygonガイド](/polygon)に従って、Polygonを含むようにMetamaskウォレットを設定します。

* ステップ2：[Aavegotchi Bridge](https://aavegotchi.com/bridge)を使って、GHSTやその他のアセットをPolygonに転送してください。 [maTokensガイド](/matokens)では、この方法が紹介されています。

* ステップ3: [QuickSwap](https://quickswap.exchange)の[GHST-QUICK](https://info.quickswap.exchange/pair/0x8b1fd78ad67c7da09b682c5392b65ca7caa101b9)と[GHST-USDC](https://info.quickswap.exchange/pair/0x096c5ccb33cfc5732bcd1f3195c13dbefc4c82f4)プールのいずれか、または両方でリキディティープロバイダになる。 リキディティー提供の見返りとして、LPトークンを受け取ります。 GHST-QUICKプールへのステーキングに興味のある方は、[QuickSwap](https://quickswap.exchange)からQUICKトークンを入手することができます。 現在、最も流動性の高いペアは、QUICK-UNI、QUICK-WETH、QUICK-USDC、そしてGHST-QUICKです。

* ステップ4：これらのLPトークンを[Aavegotchi Staking Interface](https://aavegotchi.com/stake-polygon)からステークして、stkGHSTレシートトークンを取得します。 GHST-QUICKとGHST-USDCプールでは、これらのstkGHSTレシート・トークンはそれぞれstkGHST-QUICKとstkGHST-USDCと名付けられます。

*この方法でステークされた1 GHST-QUICK LPトークンごとに、83 FRENS / Dayを受け取ることができます（我々チームとしては、単にGHSTだけをステークするよりも30～40%程度高いレートを維持しようとしています。 このレートは正しい比率を維持するために事前通知なしに定期的に調整されます）。*

*この方法で1つのGHST-USDC LPトークンをステークすると、7400万FRENS / Day（GHSTをステークするよりも10％多く）を受け取ることができます。*

なぜGHSTトークンを直接ステークするのとLPステークで得られるFRENSの数に大きな差があるのですか？ LPトークンのステーキングには、[インパーマネント・ロス](/glossary#impermanent-loss)のリスクがあります。 そのリスクの増加に対して補償されるのです。

なぜGHST-USDCプールは1日に7400万FRENSの利回りがあるのですか？ QuickSwapのGHST-USDCプールに、初期に預けた人が、資産間の比率をめちゃくちゃにしました。 Hence, when depositors add to the pool, they receive tiny amounts of LP tokens, like 0.00006. See this [tweet](https://twitter.com/coderdannn/status/1362423402871447554) for the lulz.

### Staking GHST-WETH

* Step 1: Go to [quickswap.exchange](https://quickswap.exchange/) and choose > Pools > Add Liquidity.

* Step 2: Deposit GHST and ETH equally into the GHST-ETH liquidity pool.

* Step 3: In return, you receive GHST-WETH LP tokens.

* Step 4: Take those LP tokens and stake them at [aavegotchi.com/stake-polygon](https://aavegotchi.com/stake-polygon)

* Step 5: In return, you earn FRENS points and you get stkGHST-WETH tokens

* Step 6: Deposit those at [dinoswap.exchange](https://dinoswap.exchange/) > Fossil Farms to farm DINO

* BONUS: Send your DINO to the GHST Extinction Pool to earn even more GHST!

For every 1 GHST-ETH LP token staked in this way, you receive 12.08 million FRENS / Day (20% more than just staking GHST).

### Staking GHST-MATIC

* Step 1: Go to [sushi.com](https://sushi.com/) and enter the app

* Step 2: Add liquidity to the GHST-MATIC pool. In turn, you will receive GHST-MATIC LP Tokens

* Step 3: Take the GHST-MATIC LP Tokens and deposit them at the [Aavegotchi Staking Interface](https://aavegotchi.com/stake-polygon). You will receive stkGHST-MATIC receipt tokens after staking your LP tokens.

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

## ステーキング・コントラクト・アドレス

The following table shows the various staking contract addresses on Polygon. The ghstStaking and stkGHSTQUICK contracts share the same contract address. Do check the contract address first before finalizing any transactions.

table_stakingContractAddresses

## 次は？

So you've got some FRENS now eh? Head over to the [Tickets page](/tickets) to learn how to purchase tickets with FRENS and to participate in Raffles!
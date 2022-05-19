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
<li><a href=#frens-taask-force>FRENS Taask Force</a></li>
<li><a href=#what-s-next->What's next?</a></li>
</ol>

</div>

## GHSTの購入
まず、ステークするためのGHSTトークンを手に入れる必要があります。 [GHSTトークンのページ](/posts/ghst)では、トークンを入手するための様々な方法を紹介しています。

## ステーキングのやり方
GHSTトークンを手に入れたら、[ステーキングページ](https://aavegotchi.com/stake-polygon)でステークすることができます。 ステーキングはPolygon（旧Matic Network）上で行われます。

<img class = "bodyImage" src = "/staking/ghst-staking-ui.png" alt = "GHST ステーキング UI" />

ステーキングの方法は6つあります：

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

### wapGHSTのステーキング

wapGHSTは、Wrapped Aave Polygon GHSTの略です。 GHSTを直接ステークするのと同じFRENSレートを提供し、さらにGHSTトークンを貸し出してAaveプラットフォーム上で追加の利回りを得ることができます。

ステーカーはAaveを訪問する必要はありません。 トークンを承認し、wrap GHSTをクリックして、GHSTをwapGHSTにラップ/アンラップするだけでよいのです。

*注：発生したAPYは、wapGHSTの残高には表示されません。 むしろ、アンラッププロセス中（バニラGHSTに戻ったとき）にGHSTの残高に発生します。*

* ステップ1： [app.aavegotchi.com/stake-polygon](https://app.aavegotchi.com/stake-polygon)にアクセスします。

* ステップ2：あなたのGHSTトークンを使用する契約を承認します。

* ステップ3：あなたのGHSTをwapGHSTにラップします。

### GHST-QUICKとGHST-USDCのステーキング

GHST-QUICKとGHST-USDCのステーキングは同じ手順で行います。

* ステップ1：[Polygonガイド](/polygon)に従って、Polygonを含むようにMetamaskウォレットを設定します。

* ステップ2：[Aavegotchi Bridge](https://aavegotchi.com/bridge)を使って、GHSTやその他のアセットをPolygonに転送してください。 [maTokensガイド](/matokens)では、この方法が紹介されています。

* ステップ3: [QuickSwap](https://quickswap.exchange)の[GHST-QUICK](https://info.quickswap.exchange/pair/0x8b1fd78ad67c7da09b682c5392b65ca7caa101b9)と[GHST-USDC](https://info.quickswap.exchange/pair/0x096c5ccb33cfc5732bcd1f3195c13dbefc4c82f4)プールのいずれか、または両方でリキディティープロバイダになる。 リキディティー提供の見返りとして、LPトークンを受け取ります。 GHST-QUICKプールへのステーキングに興味のある方は、[QuickSwap](https://quickswap.exchange)からQUICKトークンを入手することができます。 現在、最も流動性の高いペアは、QUICK-UNI、QUICK-WETH、QUICK-USDC、そしてGHST-QUICKです。

* ステップ4：これらのLPトークンを[Aavegotchi Staking Interface](https://aavegotchi.com/stake-polygon)からステークして、stkGHSTレシートトークンを取得します。 GHST-QUICKとGHST-USDCプールでは、これらのstkGHSTレシート・トークンはそれぞれstkGHST-QUICKとstkGHST-USDCと名付けられます。

*この方法でステークされた1 GHST-QUICK LPトークンごとに、83 FRENS / Dayを受け取ることができます（我々チームとしては、単にGHSTだけをステークするよりも30～40%程度高いレートを維持しようとしています。 このレートは正しい比率を維持するために事前通知なしに定期的に調整されます）。*

*この方法で1つのGHST-USDC LPトークンをステークすると、7400万FRENS / Day（GHSTをステークするよりも10％多く）を受け取ることができます。*

なぜGHSTトークンを直接ステークするのとLPステークで得られるFRENSの数に大きな差があるのですか？ LPトークンのステーキングには、[インパーマネント・ロス](/glossary#impermanent-loss)のリスクがあります。 そのリスクの増加に対して補償されるのです。

なぜGHST-USDCプールは1日に7400万FRENSの利回りがあるのですか？ QuickSwapのGHST-USDCプールに、初期に預けた人が、資産間の比率をめちゃくちゃにしました。 したがって、トークンがプールに追加されると、0.00006のような微量のLPトークンを受け取ることになるのです。 この[ツイート](https://twitter.com/coderdannn/status/1362423402871447554)を見て、是非笑ってください。

### GHST-WETHのステーキング

* ステップ1：[quickswap.exchange](https://quickswap.exchange/)にアクセスし、> プール > リキディティーを追加を選択します。

* ステップ2：GHSTとETHをGHST-ETHリキディティープールに等しく入金します。

* ステップ3：その見返りとして、GHST-WETH LPトークンを受け取ります。

* ステップ4：そのLPトークンを受け取り、[aavegotchi.com/stake-polygon](https://aavegotchi.com/stake-polygon)でステークする。

* ステップ5：お返しにFRENSポイントを獲得し、stkGHST-WETHトークンを入手します。

この方法で1GHST-ETH LPトークンをステークするごとに、1,208万FRENS /日（GHSTをステークするよりも20％多く）を受け取ることができます。

### GHST-MATICのステーキング

* ステップ1：[sushi.com](https://sushi.com/)にアクセスし、アプリに入る

* ステップ2：GHST-MATICのプールにリキディティーを追加します。 すると、GHST-MATIC LP トークンを受け取ることができます

* ステップ3：GHST-MATIC LP トークンを取り、[Aavegotchi Staking Interface](https://aavegotchi.com/stake-polygon) に預ける。 LPトークンをステーキングした後、stkGHST-MATICレシートトークンを受け取ります。

### ステーキング・チートシート

より視覚的なものがお好みでしたら、ステーキング・チートシートをご覧ください！

* GHSTステーキングとGHST-QUICK/GHST-USDCステーキング

<img class = "bodyImage" src = "/staking/GHST-to-Matic-Cheatsheet.png" alt = "GHSTからMaticへのチートシート" />

### ステーキング利益表

下の表は、GHSTを直接ステーキングした場合の基準に対して、ステーキングリターン（FRENS換算）をパーセンテージでまとめたものです。

なお、Pixelcraftチームは、システムのバランスを取るために、FRENSの金額を随時更新することがあります。

表_stakingReturn

## ステーキング・コントラクト・アドレス

次の表は、Polygon上の様々なステーキングコントラクトのアドレスを示しています。 ghstStakingとstkGHSTQUICKの契約は同じ契約アドレスを共有しています。 取引を確定する前に、まず契約書のアドレスを確認してください。

表_stakingContractAddresses

## FRENS Taask Force

From time to time, the FRENS emission rate does not automatically get updated when the price of the underlying tokens changes.

The [FRENS Taask Force](/frens-taask-force) has been setup to monitor and adjust the FRENS rates to keep it in check with the pre-determined rate.

## What's next?

So you've got some FRENS now eh? Head over to the [Tickets page](/tickets) to learn how to purchase tickets with FRENS and to participate in Raffles!
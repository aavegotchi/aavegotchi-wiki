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

ステーキングとは、報酬と引き換えに暗号通貨をロックするプロセスを指します。 これはAavegotchiプロジェクトでも変わりません。 ネイティブトークンである[GHST](/posts/ghst)は、様々なステーキングコントラクトにステークすることで、[FRENS](/posts/glossary#frens)や[GAX Liquidity Token Reward (GLTR)](/gotchus-alchemica-exchange#gltr-token) のリワードを獲得することが可能です。

<div class="contentsBox">

＊＊目次＊＊

<ol>
<li><a href=#frens>フレンズ（FRENS）</a></li>
<li><a href=#gltr>GLTR</a></li>
<li><a href=#where-to-stake>どこでステークするの？</a></li>
<li><a href=#staking-for-frens>FRENSを獲得するためにステークする</a></li>
<li><a href=#staking-for-gltr>GLTRを獲得するためにステークする</a></li>
<li><a href=#staking-contract-addresses>ステーキング・コントラクト・アドレス</a></li>
<li><a href=#frens-taask-force>フレンズ・タスク・フォース（FRENS Taask Force）</a></li>
<li><a href=#what-s-next->次は何をするの？</a></li>
</ol>

</div>

## フレンズ（FRENS）

FRENSはAavegotchi Staking Contract内の譲渡不可能な残高です。 FRENSを購入することはできません。 FRENSはAvegotchiプロジェクトに貢献したステークホルダーに対して報酬を与えるためのものです。

FRENSはラッフルチケットまたはドロップチケットに変換することができます。

* ラッフルチケット（抽選券）は定期的に開催される[ウェアラブルラッフル（抽選会）](/tickets)に参加し、[ウェアラブル](/wearables)を獲得することができます。

* ドロップチケットは、[NFTラッフル](/tickets)に参加して、[ポータル](/portals)や[ランドパーセル](/metaverse)を獲得することができます。

## GLTR

[GAX Liquidity Token Reward（GLTR）](/gotchus-alchemica-exchange#gltr-token)（＝GAX リキディティ・トークン・リワード）の主な用途は、GLTRを消費することによって、ゴッチバースのプレーヤーが自分の[インスタレーション](/gotchiverse#building-on-realm-parcels)のクラフトとアップグレードを加速し、ゲームのより高いレベルに早く到達することを可能にすることです。 各GLTRの焼却（バーン）は、PolygonのPOSネットワーク上で1ブロックに相当します。

GLTRはまた、[ウェアラブル・クレスト（Wearable Crest）](/guild#accessing-a-guild)のオークションに必要なメイントークンとして、二次的な機能もあります。 また、ギルドはGLTRを焼却することで、次のギルド・チャネリングまでの時間を短縮することができます。

## どこでステークするの？

ステーキングは[app.aavegotchi.com/stake](https://app.aavegotchi.com/stake)からアクセスできます。

ステークには、[GHSTトークン](/ghst)またはGHST LPペア（GHST-QUICK、GHST-USDC、GHST-ETH、GHST-MATIC）のいずれかが必要です。

**FRENS**報酬にするか**GLTR**報酬にするか、どちらにステークするか選べます。

<img class="bodyImage" src="/staking/stake.png" alt="Aavegotchiステーキング" />

## FRENSを獲得するためにステークする

<img class="bodyImage" src="/staking/stake-polygon.png" alt="Aavegotchi FRENS報酬を獲得するためのステーキング" />

FRENSを獲得するためのステーク方法は6つあります：

1. GHST

2. wapGHST

3. GHST-QUICK

4. GHST-USDC

5. GHST-ETH

6. GHST-MATIC

**重要: メインネットでのステーキングは終了しました。 ステーキングを解除し、Polygonで再ステーキングを行ってください。**

*注意：先行販売されたGHSTトークンは、ロックが解除されるまでステークすることができません。*

### GHSTトークンを直接ステーキングする

* ステップ1：MetamaskをPolygonに接続し、Aavegotchi DAppの[Polygon Stakingページ](https://app.aavegotchi.com/stake-polygon)にアクセスします。

* ステップ2：GHSTトークンをPolygonで使用するための契約を承認します。

* ステップ3：入金したいGHSTの金額を入力します。 やりましたね！ これで完了です！

*この方法で1GHSTをステークするごとに、毎日1FRENS受け取ることができます。*

### wapGHSTのステーキング

wapGHSTは、Wrapped Aave Polygon GHSTの略です。 GHSTを直接ステークするのと同じFRENSレートを提供し、さらにGHSTトークンを貸し出してAaveプラットフォーム上で追加の利回りを得ることができます。

ステーカーはAaveを訪問する必要はありません。 トークンを承認し、wrap GHSTをクリックして、GHSTをwapGHSTにラップ/アンラップするだけでよいのです。

*注：発生したAPYは、wapGHSTの残高には表示されません。 むしろ、アンラッププロセス中（バニラGHSTに戻ったとき）にGHSTの残高に発生します。*

* ステップ1： [app.aavegotchi.com/stake-polygon](https://app.aavegotchi.com/stake-polygon)にアクセスします。

* ステップ2：あなたのGHSTトークンを使用する契約を承認します。

* ステップ3：あなたのGHSTをwapGHSTにラップします。

### GHST-QUICKとGHST-USDCのステーキング

GHST-QUICKとGHST-USDCのステーキングは同じ手順で行います。

* ステップ1: [QuickSwap](https://quickswap.exchange)の[GHST-QUICK](https://info.quickswap.exchange/pair/0x8b1fd78ad67c7da09b682c5392b65ca7caa101b9)と[GHST-USDC](https://info.quickswap.exchange/pair/0x096c5ccb33cfc5732bcd1f3195c13dbefc4c82f4)プールのいずれか、または両方でリキディティープロバイダになる。 リキディティー提供の見返りとして、LPトークンを受け取ります。 GHST-QUICKプールへのステーキングに興味のある方は、[QuickSwap](https://quickswap.exchange)からQUICKトークンを入手することができます。 現在、最も流動性の高いペアは、QUICK-UNI、QUICK-WETH、QUICK-USDC、そしてGHST-QUICKです。

* ステップ2：これらのLPトークンを[Aavegotchi Staking Interface](https://app.aavegotchi.com/stake-polygon)からステークして、stkGHSTレシートトークンを取得します。 GHST-QUICKとGHST-USDCプールでは、これらのstkGHSTレシート・トークンはそれぞれstkGHST-QUICKとstkGHST-USDCと名付けられます。

*この方法でステークされた1 GHST-QUICK LPトークンごとに、83 FRENS / Dayを受け取ることができます（我々チームとしては、単にGHSTだけをステークするよりも30～40%程度高いレートを維持しようとしています。 このレートは正しい比率を維持するために事前通知なしに定期的に調整されます）。*

*この方法で1つのGHST-USDC LPトークンをステークすると、7400万FRENS / Day（GHSTをステークするよりも10％多く）を受け取ることができます。*

なぜGHSTトークンを直接ステークするのとLPステークで得られるFRENSの数に大きな差があるのですか？ LPトークンのステーキングには、[インパーマネント・ロス](/glossary#impermanent-loss)のリスクがあります。 そのリスクの増加に対して補償されるのです。

なぜGHST-USDCプールは1日に7400万FRENSの利回りがあるのですか？ QuickSwapのGHST-USDCプールに、初期に預けた人が、資産間の比率をめちゃくちゃにしました。 したがって、トークンがプールに追加されると、0.00006のような微量のLPトークンを受け取ることになるのです。 この[ツイート](https://twitter.com/coderdannn/status/1362423402871447554)を見て、是非笑ってください。

### GHST-WETHのステーキング

* ステップ1：[quickswap.exchange](https://quickswap.exchange/)にアクセスし、> プール > リキディティーを追加を選択します。

* ステップ2：GHSTとETHをGHST-ETHリキディティープールに等しく入金します。

* ステップ3：その見返りとして、GHST-WETH LPトークンを受け取ります。

* ステップ4：そのLPトークンを受け取り、[app.aavegotchi.com/stake-polygon](https://app.aavegotchi.com/stake-polygon)でステークする。

* ステップ5：お返しにFRENSポイントを獲得し、stkGHST-WETHトークンを入手します。

この方法で1GHST-ETH LPトークンをステークするごとに、1,208万FRENS /日（GHSTをステークするよりも20％多く）を受け取ることができます。

### GHST-MATICのステーキング

* ステップ1：[sushi.com](https://sushi.com/)にアクセスし、アプリに入る

* ステップ2：GHST-MATICのプールにリキディティーを追加します。 すると、GHST-MATIC LP トークンを受け取ることができます

* ステップ3：GHST-MATIC LPトークンを受け取り、[app.aavegotchi.com/stake-polygon](https://app.aavegotchi.com/stake-polygon)に入金します。 LPトークンをステーキングした後、stkGHST-MATICレシートトークンを受け取ります。

### ステーキング・チートシート

より視覚的なものがお好みでしたら、ステーキング・チートシートをご覧ください！

* GHSTステーキングとGHST-QUICK/GHST-USDCステーキング

<img class = "bodyImage" src = "/staking/GHST-to-Matic-Cheatsheet.png" alt = "GHSTからMaticへのチートシート" />

### ステーキング利益表

下の表は、GHSTを直接ステーキングした場合の基準に対して、ステーキングリターン（FRENS換算）をパーセンテージでまとめたものです。

なお、Pixelcraftチームは、システムのバランスを取るために、FRENSの金額を随時更新することがあります。

table_stakingReturns

## GLTRを獲得するためにステークする

<img class="bodyImage" src="/staking/stake-gltr.png" alt="Aavegotchi GLTR報酬を獲得するためのステーキング" />

* ステップ1： [app.aavegotchi.com/stake-gltr](https://app.aavegotchi.com/stake-gltr)にアクセスします。

* ステップ2：興味のあるプールを選択します

* ステップ3：wapGHST/GHST LPトークンをこれらのプールに入金します。 ブロックごとにGLTR報酬を獲得しよう！

## ステーキング・コントラクト・アドレス

次の表は、Polygon上の様々なステーキングコントラクトのアドレスを示しています。 ghstStakingとstkGHSTQUICKの契約は同じ契約アドレスを共有しています。 取引を確定する前に、まず契約書のアドレスを確認してください。

table_stakingContractAddresses

## フレンズ・タスク・フォース（FRENS Taask Force）

時折、基礎となるトークンの価格が変化しても、FRENSの放出レートは自動的に更新されません。

そこで[フレンズ・タスク・フォース（FRENS Taask Force）](/frens-taask-force)がFRENSのレートを監視・調整し、あらかじめ決められたレートに収まるように設定しています。

## 次は何をするの？

さて、FRENSを手に入れましたか？ [チケットのページ](/tickets)に行き、FRENSでチケットを購入する方法とラッフルに参加する方法を学んでください。
---
author: アンインテリジェント・ナード
date: '2020-04-23T07:00:00.000Z'
title: 'ボンディング・カーブ'
description: 'Aavegotchi ボンディング・カーブ'
image: "curve/bonding-curve.png"
contributors:
  - "アンインテリジェント・ナード"
---


<div class="headerImageContainer">
<img class="headerImage" src="/curve/bonding-curve.png">
<p class="headerImageText">ボンディング・カーブ</p>
</div>

トークン・ボンディング・カーブ（TBC）とは、価格とトークンの供給量の関係を定義した数学的な曲線である。

典型的なTBCでは、トークンの供給量が増加すると価格が上昇し、供給量が減少すると価格が低下します。 Aavegotchi ボンディングカーブは[Aragon（アラゴン）](/glossary#aragon)[Decentralized（分散型）Autonomous（自律型）イニシャル・コイン・オファリング（DAICO）](/glossary#daico)によって開始されたため、この記事ではDAICOについても説明します。

<div class="contentsBox">

**目次**

<ol>
<li><a href=#mechanics>仕組み</a></li>
<li><a href=#aavegotchi-bonding-curve>Aavegotchi ボンディング・カーブ</a></li>
<li><a href=#aavegotchi-daico>Aavegotchi DAICO</a></li>
<li><a href=#aavegotchi-token-supply-dynamics>Aavegotchi トークン供給ダイナミクス</a></li>
<li><a href=#arbitrage>アービトラージ</a></li>
<li><a href=#learn-more>もっと詳しく</a></li>
</ol>

</div>

## 仕組み

### オンデマンド・ミンティング／バーニング

ボンディングカーブは、プライシングアルゴリズムを使用して、自動マーケットメーカーの役割を果たし、常に利用可能な流動性（リキディティー）の源を提供します。 ユーザーは、トークンをボンディングカーブのリザーブプールにステークすることで、ボンディングカーブが影響を受けます。 そうすると、ボンディングカーブはプライシングアルゴリズムに基づき、ユーザーにトークンをミントします。 新しくミントされたトークンは特定のユーティリティを持ち、ユーザー間で取引されることもありますが、常にボンディングカーブを通じてボンディングカーブのリザーブプールにあるトークンと交換することができます。

トークンがTBC経由で購入されると、後続の購入者は各トークンに対して少し高い価格を支払う必要があり、初期の投資家に潜在的な利益を生み出します。 より多くの人がプロジェクトについて知り、購入が続くと、各トークンの価値はボンディングカーブに沿って徐々に上昇します。 有望なプロジェクトを早期に発見し、カーブ結合されたトークンを購入し、その後トークンを売り戻した初期投資家は、将来的に利益を得ることができます。

### 計算式

ボンディングカーブには、さまざまな形や大きさがあります。 Aavegotchiプロジェクトでは、Bancor Formulaを採用しました：

<img style = "border: 1px solid; margin-bottom: 15px" src = "/curve/reserve-ratio.png" alt = "token bonding curve" width = "750" />

### 計算式の説明

**リザーブ・トークン**とは、ユーザーがボンディング・カーブに投入するトークンのことです。

**コンティニュアス・トークン**とは、リザーブ・トークンをステークした際にボンディング・カーブから受け取るトークンのことです。

Aavegotchiの場合、リザーブ・トークンとコンティニュアス・トークンはそれぞれDAIとGHSTである。

**コネクティング・ウェイト**（リザーブ比率ともいう）は、コンティニュアス・トークンの総価値（供給総量×単価）とリザーブ・トークン残高の価値との間の一定の比率（0～100%）を表します。  このCWは、リザーブ・トークンの残高とコンティニュアス・トークンの合計価値（別名 「時価総額」）が売買によって変動するため、Bancor Formulaによって一定に保たれる。

コンティニュアス・トークン（GHST）を売買するたびにリザーブ・トークン（DAI）が増減するトリガーとなります。 そして、そのリザーブ・トークンに対するコンティニュアス・トークンの価格は、両者の間に設定されたコネクティング・ウェイトを維持するために継続的に再計算されなければなりません。


コネクティング・ウェイトは、取引のたびに維持するためにコンティニュアス・トークンの価格をどれだけ急激に調整する必要があるか、言い換えれば、その価格感度を決定するものです。

リザーブ・トークン残高とコンティニュアス・トークンの間の積立比率が高いほど、価格感応度は低くなり、各売買がコンティニュアス・トークンの値動きに与える影響は比例しないことを意味します。 逆に、リザーブ・トークンの残高とコンティニュアス・トークンの比率が低いと、価格感応度が高くなり、それぞれの売買がコンティニュアス・トークンの値動きに比例して大きく影響することになります。

**Aavegotchiのリザーブ比率は33%だよ、フレン！**つまり、クジラを恐れる必要はないのです。 彼らの巨額の取引に対してボンディングカーブが硬化しているので、彼らはGHSTをパンプ & ダンプすることができません！

実際に見てみたい方は、Coderdanが作成したボンディング・カーブの[インタラクティブ・モデル](https://observablehq.com/@cinnabarhorse/aavegotchi-bonding-curve)をご覧ください。

カーブは永遠に！

## Aavegotchi ボンディング・カーブ
Aavegotchi ボンディングカーブは、2020年9月14日に[Aragon Fundraising](https://fundraising.aragon.black/)が提供するボンディングカーブのスマートコントラクトによって作成されました。 50万GHSTでのプリセール終了後、すぐにボンディングカーブがオープンされました。 ボンディングカーブにはサイズ制限も時間制限もなく、1GHSTあたり0.2ダイの開始価格を提供します。 コネクティング・ウエイトは33％です。

このカーブから直接購入/販売するためには、KYCを完了する必要があります。 コンプライアンスは重要だぞオマエラ - 私たちは社会に住んで、我々はまた、プロジェクトが政府によって険悪になることを望んでいない。 カーブからの購入はDAIで行われます。 逆もまた然りで、GHSTをカーブに売ってDAIに戻すこともできますが、なぜそんなことをしたいのでしょうか？ :( :( :(

もし、国籍の問題でKYCができない場合でも、ご安心ください。 **Aavegotchiメタバースの他のすべての部分と相互作用することができます。**UniswapやBalancerなどのDEX、またはOKexなどのCEXからGHSTを購入すればいいだけです。 GHSTトークンの入手方法については[こちら](/ghst#get-ghst)をご覧ください。

## Aavegotchi DAICO
A Decentralized Autonomous Initial Coin Offering (DAICO) is a new fundraising method that seeks to incorporate the best features of a Decentralized Autonomous Organization (DAO) with those of an Initial Coin Offering (ICO) in order to create a structure that provides a higher level of effectiveness to the token sale fundraising model. A DAICO is a model whereby investors have control over the funds collected once the fundraising is over. The investors could influence how developers have access to the funds and at what frequency through a "tap" mechanism. In addition, investors can also vote to do away with the project and have their funds returned.

The Aavegotchi project launched the token bonding curve through a DAICO on Aragon.

**This is SAFU. Do. Not. Remove. The. Bonding. Curve.** It prevents investors from getting rugged as they ultimately have control over the funds within the DAICO/bonding curve!

The first iteration of [AavegotchiDAO](/dao) launched in tandem with the GHST distribution on the bonding curve. GHST holders had the power to vote on increasing / maintaining the funds distributed by the tap mechanism of the token bonding curve (TBC) reserve to Pixelcraft Studios (the team behind Aavegotchi) to support development. The first AavegotchiDAO proposal of increasing the Aavegotchi DAICO tap from 50,000 DAI to 100,000 DAI per month passed with 99% approval on 18 October 2020.

## Aavegotchi トークン供給ダイナミクス
In our discussion of the token bonding curve/DAICO above, we learned that the total supply of the GHST token is dynamic. When investors purchase GHST using DAI from the bonding curve, new GHST tokens are minted and the total supply of circulating GHST would increase. When GHST tokens are sold back into the bonding curve, the GHST tokens would be burnt, the seller would receive an equivalent amount in DAI based on the prevailing GHST price on the bonding curve, and the circulating supply of GHST tokens would decrease.

The inflation of GHST tokens through net purchases on the bonding curve is positively correlated to the GHST price. **The bonding curve has been mathematically programmed to increase the price of GHST as the circulating supply of GHST increases.**

## アービトラージ
For users who have completed KYC, they will be able to arbitrage the GHST price differences between the token bonding curve and other DEXes such as Uniswap and Balancer. According to [Investopedia](https://www.investopedia.com/terms/a/arbitrage.asp), "Arbitrage is the purchase and sale of an asset in order to profit from a difference in the asset's price between markets. It is a trade that profits by exploiting the price differences of identical or similar financial instruments in different markets or in different forms. Arbitrage exists as a result of market inefficiencies and would therefore not exist if all markets were perfectly efficient." This is possible as DEXes come equipped with their own Automated Market Maker (AMM) formula and the net purchase/sale actions of GHST tokens on these DEXes would result in prices that are different from the token bonding curve. A savvy investor might consider exploiting such inefficiencies in the market (*alpha leak here*).

## もっと詳しく

* For more on [Aragon Fundraising and bonding curves!](https://fundraising.aragon.black/components/bonding-curve)

* Read more at [Bonding Curves Explained](https://yos.io/2018/11/10/bonding-curves/)

* Article on [Bonding Curves](https://defiprime.com/bonding-curve-explained) by DeFi Prime.

* Article on [DAICO](https://cointelegraph.com/explained/what-is-a-daico-explained) by the Coin Telegraph.
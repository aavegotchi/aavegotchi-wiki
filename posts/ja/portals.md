---
author: appellants
date: '2020-04-23T07:00:00.000Z'
title: 'Portals'
description: 'All about Aavegotchi Portals'
contributors:
  - "appellants"
  - "unintelligent-nerd"
image: "portals/portal.gif"
---

<div class="headerImageContainer">
<img class="headerImage" src="/portals/portal.gif">
<p class="headerImageText">Aavegotchiポータル</p>
</div>

Aavegotchiを召喚して、ネザーから画面に連れてくるにはどうしたらいいのでしょうか？ それはもちろん、ポータルで！

紫色の深淵を覗き込むと、そこには友達がいます。 仲間は10人。

さあ！魔法使いの帽子をかぶって、いざ、ポータルとAavegotchiの召喚方法についてもっと知ろう！ 

<div class="contentsBox">

**目次**

<ol>
<li><a href=#buying-a-portal>ポータルを購入する</a></li>
<li><a href=#opening-your-portal>購入したポータルを開ける</a></li>
<li><a href=#claiming-an-aavegotchi>Aavegotchiを受け取る</a></li>
<li><a href=#interacting-with-your-aavegotchi>Aavegotchiと交流する</a></li>
<li><a href=#transferring-your-aavegotchi>Aavegotchiを転送する</a></li>
</ol>

</div>

## ポータルを購入する

あなただけのドット絵のオバケを育てる前に、まずはポータルから召喚する必要があります。

ポータルは、次のいずれかの方法で入手できます：

* [オークション](/aauction)で落札する
* [ドロップチケット抽選会](/tickets)で当選する
* [バザー](/baazaar)で購入する

オークションと抽選会は期間限定のイベントです。 これを逃すと、ポータルが購入できるのは二次市場であるバザールのみとなります。

ポータルは[「ハウント」（エディション）](/haunt)単位でリリースされます。 最初のハウントでは、10,000枚のポータルが手に入ります。 その後、[AavegotchiDAO](/dao)の投票により、各ハウントに関する決定が行われます。 例えば、ポータルの価格や数量は、DAOの決定と投票の結果、将来的に変更される可能性があります。


## 購入したポータルを開ける

いいね！ ポータルを購入するところですね。 ここで、～ポータル召喚の儀～の出番です。 この儀式によって、Aavegotchiを召喚することができます。

ポータルを購入したら、次はポータルの開封です。 ポータルを開くには、[Polygon](/glossary#polygon)上で取引にサインする必要があります。 取引に署名した後、裏側で[Chainlink Verifiable Randomness Function (VRF)](/glossary#chainlink-vrf)が呼び出されます。 この関数が実行されると、ポータルに乱数が割り当てられ、Aavegotchiの特性（トレート）が証明可能なランダム性を持つことが保証されます。

この処理をまとめた便利なフローチャートがこちらです。

<img class = "bodyImage" src = "/portals/opening-an-aavegotchi-portal.png" alt = "Process of opening an Aavegotchi Portal" />

ポータルを開くと、10種類のAavegotchiが表示され、その中から選んでネザーから呼び出すことができます。 10体の中から1体を選んで召喚してください。 残りは、残念ながら消えてしまいます。

これらのAavegotchisは、すべてランダムに生成された異なる特性（トレート）を持ちます。 オプションを切り替えると、これらの特性とAavegotchiの[基本レアリティスコア](/rarity-farming#base-rarity-score)が表示されます。 これは、召喚時に持っている初期特性に基づいて、Aavegotchiに最初に与えられるレアリティスコアです。 このレアリティスコアは、Aavegotchiにウェアラブルを装備するなど、さまざまな活動を通じて変更することができます。

この表で特性の範囲とレアリティの確率を確認することができます：

表_PortalTraitTable


レアリティファーミングの詳細については、[こちら](/rarity-farming)をご覧ください。


## Aavegotchiを受け取る

ポータルからAavegotchiを受け取るには、必要な量の[スピリットフォース](/spirit-force)をポータルにステークする（担保として預ける）必要があります。 スピリットフォースは、[Aave](https://aave.com/)やUniswapなどのDEXで直接入手することができます。

Aavegotchiには、希少価値や市場原理による金銭的な価値だけでなく、本質的な価値も存在します。 あなたがステークするaTokenは、この本質的な価値を提供します。

**スピリットフォースの詳細については、[こちら](/spirit-force)をご覧ください。**

一般的に、最低限必要なスピリットフォース（担保）は、召喚したいAavegotchiのベースレアリティスコアによって決まります。 スコアが高いほど、より多くの担保を必要とします。

最低でも10DAI分、最高で1000DAI分の担保が必要です。

必要な霊力（担保）の量を決定するための計算式は、以下のとおりです：

```
if (rarityScore < 300) return 10;
        else if (rarityScore >= 300 && rarityScore < 450) return 10;
        else if (rarityScore >= 450 && rarityScore <= 525) return 25;
        else if (rarityScore >= 526 && rarityScore <= 580) return 100;
        else if (rarityScore >= 581) return 1000;
```

For example, if the Base Rarity Score is less than 300, you need to stake at least 10 DAI worth of the collateral to summon the Gotchi.

You can increase or decrease the Spirit Force (staked aToken amount) of your Aavegotchi later via the Aavegotchi Dapp UI.

To claim your Gotchi, you need to perform 2 transactions. First, you need to approve the smart contract to spend the aToken in your wallet. The subsequent transaction allows you to claim the Aavegotchi.

## Aavegotchiと交流する

Once you have claimed your Gotchi, the next thing to do is to...........*drum rolls*..........play with your Aavegotchi!

Check out the [Aavegotchi Profile Page](/aavegotchi-profile) for how to do so!

## Aavegotchiを転送する

Transferring an Aavegotchi to a new owner (when you trade it) also transfers the staked collateral behind it, as well as any items and wearables in the Aavegotchi's inventory. This happens when you trade your Aavegotchi on an online marketplace such as OpenSea.

If you wish to retrieve the staked collateral backing your Aavegotchi, you have two options:

1. **Reduce the amount of collateral** in your Aavegotchi (but not below it's minimum stake).

2. **Burn your Aavegotchi**, releasing it back to the Nether Realm and returning all of your collateral.

**Before placing your Aavegotchi for sale on secondary markets such as OpenSea, please "lock" your Aavegotchi via the Dapp UI, to help the buyer ensure all of the Aavegotchi's belongings will transfer with it.**
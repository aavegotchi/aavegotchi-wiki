---
author: Unintelligent Nerd
date: '2020-04-23T07:00:00.000Z'
title: 'スピリットフォース'
description: 'スピリットフォースについて'
image: "spirit-force/aETH.svg"
contributors:
  - "unintelligent-nerd"
---

<div class="headerImageContainer">
<img class="headerImage" src="/spirit-force/aETH.png">
<p class="headerImageText">aETH aTokenとは</p>
</div>

すべてのAavegotchiはスピリットフォースによって動きます。 [ポータル](/portals)を開くと、召喚者（あなた！）がゴッチにスピリットフォースを吹き込み、新しい友人を呼び出すことができます。

では、スピリットフォースとは一体何なのでしょうか？

Spirit Force are [Aave's](https://aave.com/) interest-bearing tokens embedded within your Aavegotchi! 時間が経つにつれて、Aavegotchi の価値がどんどん上がっていきます。

*In Aavegotchi, the terms "Spirit Force", "Collateral", "aTokens", "maTokens", and "amTokens" mean the same thing. Confused? Check out this [history page](/spirit-force-history) for more information.*

<div class="contentsBox">

**目次**

<ol>
<li><a href=#supported-spirit-force>Supported Spirit Force</a></li>
<li><a href=#getting-atokens>Getting aTokens</a></li>
<li><a href=#converting-atokens-into-matokens>Converting aTokens into maTokens</a></li>
<li><a href=#differences-between-matokens-and-amtokens>Differences between maTokens and amTokens</a></li>
<li><a href=#aura-in-the-gotchiverse>Aura in the Gotchiverse</a></li>
</ol>

</div>

## Supported Spirit Force

table_supportedCollaterals

## Getting aTokens

*The following steps are taken from the [Zero to Hero Guide 2.0](https://medium.com/aave/aave-protocol-zero-to-hero-guide-e3f206e57e45) from Aave Medium. It has been replicated here for the reader's convenience.*

1). Head over to the <a href = "https://app.aave.com/">Aave Protocol</a> to get started!

2). Here you have a few options to link your crypto wallet, depending on which type of wallet you have:

<img src = "/spirit-force/connect-your-wallet.png" alt = "aave" class="bodyImage" />

3). Before you can use Aave Protocol, you’re going to want to have some crypto assets. The list of available crypto assets are shown in the <a href=#stablecoins>Stablecoins</a> and the <a href=#cryptocurrencies>Cryptocurrencies</a> sections above.

If you don’t own any crypto but you want to join the fun, you’ll need to convert your fiat currency (normal money, like dollars, euros, etc.) into a cryptographic asset (like one of the above).

Lucky for you, Aave recently introduced a fiat to crypto onramp where you can buy crypto assets directly from the Aave Protocol application! Now you can use Transak or Ramp Instant to buy the asset of your choice directly with a credit or debit card or wire transfer in just a few minutes (see below).

<img src = "/spirit-force/buy-with-fiat.png" alt = "aave" class="bodyImage" />

4). Once you have connected your wallet to the platform, you can deposit an asset into Aave Protocol. When you click “deposit”, the interface will show you what you have available in your wallet to deposit. You then select the asset you would like to deposit, choose how much to deposit, and then voilá, you’ve done it! *Note: there will be an "approve" transaction before the actual deposit transaction takes place. This is to grant permission to the deposit contract to use that particular asset you are depositing.*

<img src = "/spirit-force/deposit.gif" alt = "aave" class="bodyImage" />

As soon as your deposit transaction goes through, you benefit from the deposit interest rate. The aToken version of the asset can now be seen in your wallet.

## Converting aTokens into maTokens

Got your aTokens? Good!

Let's head over to the [maTokens](/matokens) page for Step 2!

## Differences between maTokens and amTokens

maTokenとamTokenはどちらも利息が発生します。 ただし、利息の*つき方*が異なります。

* maToken は時間経過とともに**価値**が上がります。 これは、maTokenを使用するハウント1 Aavegotchiに適用されます。 maTokenの価値は増加していますが、数量は変わらないため、自分のゴッチを犠牲（生贄）にして裏付けとなる担保を手に入れない限り、ゴッチからmaTokenを引き出すことはできません。

* amToken は時間とともに**数量**が増加します。 これはHaunt 2以降のAavegotchiに適用されます。 発生した利息は、数量として反映されます。 したがって、十分な利息が発生すれば、amTokenを引き出すことが可能です。

## Aura in the Gotchiverse

The larger your Gotchi's Spirit Force, the larger his/her aura in the [Gotchiverse](/gotchiverse).

The calculation for the aura size is as follows:

```
const radius = Phaser.Math.Clamp(248 + (level * 512) / 100, 124, 1024);
const intensity = Phaser.Math.Clamp(0.5 + level / 40, 0.5, 3.5);

let attenuation = 0.075;
if (level <= 10) attenuation = 0.055;
else if (level <= 20) attenuation = 0.045;
else if (level <= 50) attenuation = 0.03;
else attenuation = 0.025;
```
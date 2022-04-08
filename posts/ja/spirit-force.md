---
author: Unintelligent Nerd
date: '2020-04-23T07:00:00.000Z'
title: 'Spirit Force'
description: 'All about Aavegotchi Spirit Force'
image: "spirit-force/aETH.svg"
contributors:
  - "unintelligent-nerd"
---

<div class="headerImageContainer">
<img class="headerImage" src="/spirit-force/aETH.png">
<p class="headerImageText">aETH aトークンとは</p>
</div>

すべてのAavegotchiはスピリットフォースによって動きます。 [ポータル](/portals)を開くと、召喚者（あなた！）がゴッチにスピリットフォースを吹き込み、新しい友人を呼び出すことができます。

では、スピリットフォースとは一体何なのでしょうか？

スピリットフォースとは、Aavegotchiの中に埋め込まれている利権トークンのことです。 時間が経つにつれて、Aavegotchi の価値がどんどん上がっていきます。

In Aavegotchi, the terms "Spirit Force", "Collateral", "aTokens", "maTokens", and "amTokens" mean the same thing. Confused? Check out this [history page](/spirit-force-history) for more information.

This page will provide you with some helpful information on what are the available aTokens and how do you get them.

Do note that you eventually **need maTokens/amTokens** to summon your Gotchis on Polygon. There are various ways to get maTokens without needing to go through aTokens. However, for the sake of representativeness, we explain how to get aTokens here.

<div class="contentsBox">

**Contents**

<ol>
<li><a href=#about>About</a></li>
<li><a href=#stablecoins>Stablecoins</a></li>
<li><a href=#cryptocurrencies>Cryptocurrencies</a></li>
<li><a href=#getting-atokens>Getting aTokens</a></li>
<li><a href=#converting-atokens-into-matokens>Converting aTokens into maTokens</a></li>
<li><a href=#differences-between-matokens-and-amtokens>Differences between maTokens and amTokens</a></li>
</ol>

</div>

## About

While the underlying asset is loaned out to borrowers, aTokens accrue interest in real time, directly in your wallet! Seriously, you can watch your balance grow every minute.

aTokens can be classified into one of two categories: (1) cryptocurrencies, or (2) stablecoins. Cryptocurrencies are digital or virtual currencies that are secured by cryptography. Many cryptocurrencies are decentralized networks based on blockchain technology—a distributed ledger enforced by a disparate network of computers. Stablecoins are a class of cryptocurrencies that attempts to offer price stability by being pegged to an external reference such as the US Dollar (USD). The underlying mechanism of pegging differs across stablecoins, with each having its own risk profile.

The following [aTokens](https://docs.aave.com/developers/deployed-contracts/deployed-contract-instances) (cryptocurrencies and stablecoins) are available on the Aave Protocol. The *Supported by Aavegotchi* column indicates whether a given aToken will be available for Aavegotchi gameplay. The list of supported aTokens are not finalized; there will be twitter votes/DAO votes to add in more aTokens for Aavegotchi gameplay based on player demand.

## Stablecoins

table_stablecoins

## Cryptocurrencies

table_cryptocurrencies

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

Both maTokens and amTokens accrue interest. However, *the way* they accrue interest differs:

* maTokens increase in **value** over time. This applies to Haunt 1 Aavegotchis that use maTokens. The value of the maTokens are increasing, but as the quantity does not change, it is not possible to withdraw maTokens from the Gotchis unless you sacrifice your Gotchi to get at the underlying collateral.

* amTokens increase in **quantity** over time. This applies to Aavegotchis from Haunt 2 and onwards. The interest accrued is reflected as quantity. Hence, it is possible to withdraw amTokens once sufficient interest has been generated.
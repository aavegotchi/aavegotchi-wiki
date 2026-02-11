---
author: Unintelligent Nerd
date: '2020-04-23T07:00:00.000Z'
title: 'aTokens'
description: '一切关于Aavegotchi的aTokens'
image: "atokens/aETH.svg"
contributors:
  - "unintelligent-nerd"
---

<div class="headerImageContainer">
<img class="headerImage" src="/atokens/aETH.png">
<p class="headerImageText">关于aTokens</p>
</div>

Every Aavegotchi is powered by Spirit Force. Upon opening a [portal](/portals), the summoner (you!) has to imbue your Gotchi with Spirit Force to summon your new-found friend to life!

So what exactly is Spirit Force?

Initially, the Aavegotchi game was designed to be on Ethereum Mainnet. During that time, Spirit Force refers to aTokens. They are interest-bearing tokens from the [Aave Protocol](https://aave.com). They are minted upon deposit and burned when redeemed. The aTokens are pegged 1:1 to the value of the underlying asset that is deposited in the Aave protocol. aTokens can be freely stored, transferred, and traded. See the [Aave FAQ](https://docs.aave.com/faq/) for more information on the Aave Protocol.

Due to high gas fees on Ethereum Mainnet, the launch of the Aavegotchi game was shifted to [Polygon](/glossary#polygon), a layer 2 solution. The benefits of shifting to Polygon include near-zero transaction fees and near-instant transactions. As a result of this move, we needed aTokens on Polygon as well. Our in-house coding genius and diamondboi, [Nick Mudge](/team#nick-mudge) managed to bridge **Aave V2 aTokens** from Ethereum Mainnet over to Polygon. These are known as **maTokens**. Aavegotchis belonging to Haunt 1 use **maTokens** as their Spirit Force.

Subsequently, Aave themselves shifted over to Polygon. Tokens from their Aave (Polygon) markets are known as **amTokens.** From Haunt 2 onwards, the Spirit Force for Aavegotchis will use **amTokens** instead.

This page will provide you with some helpful information on what are the available aTokens and how do you get them.

Do note that you eventually **need maTokens** to summon your Gotchis on Polygon. There are various ways to get maTokens without needing to go through aTokens. However, for the sake of representativeness, we explain how to get aTokens here.

In Aavegotchi, the terms "Spirit Force", "Collateral", "aTokens", and "maTokens" mean the same thing.

<div class="contentsBox">

**内容**

<ol>
<li><a href=#about>关于</a></li>
<li><a href=#stablecoins>稳定币</a></li>
<li><a href=#cryptocurrencies>加密货币</a></li>
<li><a href=#getting-atokens>获取 aTokens</a></li>
<li><a href=#converting-atokens-into-matokens>将aTokens转化成maTokens</a></li>
</ol>

</div>

## 关于

While the underlying asset is loaned out to borrowers, aTokens accrue interest in real time, directly in your wallet! Seriously, you can watch your balance grow every minute.

aTokens can be classified into one of two categories: (1) cryptocurrencies, or (2) stablecoins. Cryptocurrencies are digital or virtual currencies that are secured by cryptography. Many cryptocurrencies are decentralized networks based on blockchain technology—a distributed ledger enforced by a disparate network of computers. Stablecoins are a class of cryptocurrencies that attempts to offer price stability by being pegged to an external reference such as the US Dollar (USD). The underlying mechanism of pegging differs across stablecoins, with each having its own risk profile.

The following [aTokens](https://docs.aave.com/developers/deployed-contracts/deployed-contract-instances) (cryptocurrencies and stablecoins) are available on the Aave Protocol. The *Supported by Aavegotchi* column indicates whether a given aToken will be available for Aavegotchi gameplay. The list of supported aTokens are not finalized; there will be twitter votes/DAO votes to add in more aTokens for Aavegotchi gameplay based on player demand.

## 稳定币

table_stablecoins

## 加密货币

table_cryptocurrencies

## 获取 aTokens

*The following steps are taken from the [Zero to Hero Guide 2.0](https://web.archive.org/web/*/https://medium.com/aave/zero-to-hero-guide-2-0-dadce0f3e834) from Aave Medium. It has been replicated here for the reader's convenience.*

1). Head over to the <a href = "https://app.aave.com/">Aave Protocol</a> to get started!

2). Here you have a few options to link your crypto wallet, depending on which type of wallet you have:

<img src = "/atokens/connect-your-wallet.png" alt = "aave" class="bodyImage" />

3). Before you can use Aave Protocol, you’re going to want to have some crypto assets. The list of available crypto assets are shown in the <a href=#stablecoins>Stablecoins</a> and the <a href=#cryptocurrencies>Cryptocurrencies</a> sections above.

If you don’t own any crypto but you want to join the fun, you’ll need to convert your fiat currency (normal money, like dollars, euros, etc.) into a cryptographic asset (like one of the above).

Lucky for you, Aave recently introduced a fiat to crypto onramp where you can buy crypto assets directly from the Aave Protocol application! Now you can use Transak or Ramp Instant to buy the asset of your choice directly with a credit or debit card or wire transfer in just a few minutes (see below).

<img src = "/atokens/buy-with-fiat.png" alt = "aave" class="bodyImage" />

4). Once you have connected your wallet to the platform, you can deposit an asset into Aave Protocol. When you click “deposit”, the interface will show you what you have available in your wallet to deposit. You then select the asset you would like to deposit, choose how much to deposit, and then voilá, you’ve done it! *Note: there will be an "approve" transaction before the actual deposit transaction takes place. This is to grant permission to the deposit contract to use that particular asset you are depositing.*

<img src = "/atokens/deposit.gif" alt = "aave" class="bodyImage" />

As soon as your deposit transaction goes through, you benefit from the deposit interest rate. The aToken version of the asset can now be seen in your wallet.

## 将aTokens转化成maTokens

Got your aTokens? Good!

Let's head over to the [maTokens](/matokens) page for Step 2!
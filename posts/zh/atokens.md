---
author: Unintelligent-nerd
date: '2020-04-23T07:00:00.000Z'
title: 'aTokens'
description: '關於 Aavegotchi 中的 aToken'
image: "atokens/aETH.svg"
contributors:
  - "chinyh"
---

<div class="headerImageContainer">
<img class="headerImage" src="/atokens/aETH.png">
<p class="headerImageText">關於aTokens</p>
</div>

aTokens 是來自 [Aave 協議](https://aave.com) 的計息令牌。 它們在存入時被鑄造，贖回時被銷毀。 Atokens與存入Aave協議的基礎資產價值1:1掛鈎。 aTokens 可以自由存儲、轉移和交易。 aTokens 可以自由儲存、轉移和交易。 請參閱 [Aave FAQ](https://docs. aave. com/faq/) 以了解更多關於Aave協議的訊息。

那麼 aTokens 與 Aavegotchi 有什麼關係呢？ 每一個 Aavegotchi 都必須由[傳送門](/pages/portals)來召喚, 召喚之前還必須用 atoken 來作為擔保。 沒有例外! 這就是為什麼你需要 aTokens 和這個頁面，接下來將為你介紹一些有用的訊息，說明什麼是可用的 aTokens 以及你如何取得。

When Aavegotchi shifted from Ethereum Mainnet to the [Matic Network](/glossary#matic-network), these aTokens need to be available on the Matic Network as well. Our in-house coding genius and diamondboi, [Nick Mudge](/team#nick-mudge) managed to bridge them over to the Matic Network. aTokens on the Matic Network are known as maTokens.

From a gamer's standpoint, playing Aavegotchi involves:

1. Getting some aTokens
2. Converting aTokens to maTokens
3. After opening a Portal, using maTokens as collateral to summon an Aavegotchi

In this page, we will instruct you in the ways of the aTokens.

In Aavegotchi, the terms "Spirit Force", "Collateral", "aTokens", and "maTokens" mean the same thing.

<div class="contentsBox">

**内容**

<ol>
<li><a href=#about>關於</a></li>
<li><a href=#stablecoins>穩定幣</a></li>
<li><a href=#cryptocurrencies>密碼貨幣</a></li>
<li><a href=#getting-atokens>取得 aToken</a></li>
<li><a href=#converting-atokens-into-matokens>將 aTokens 轉換成 maTokens</a></li>
</ol>

</div>

## 關於

While the underlying asset is loaned out to borrowers, aTokens accrue interest in real time, directly in your wallet! Seriously, you can watch your balance grow every minute.

aTokens can be classified into one of two categories: (1) cryptocurrencies, or (2) stablecoins. Cryptocurrencies are digital or virtual currencies that are secured by cryptography. Many cryptocurrencies are decentralized networks based on blockchain technology—a distributed ledger enforced by a disparate network of computers. Stablecoins are a class of cryptocurrencies that attempts to offer price stability by being pegged to an external reference such as the US Dollar (USD). The underlying mechanism of pegging differs across stablecoins, with each having its own risk profile.


The following [aTokens](https://docs.aave.com/developers/deployed-contracts/deployed-contract-instances) (cryptocurrencies and stablecoins) are available on the Aave Protocol. The *Supported by Aavegotchi* column indicates whether a given aToken will be available for Aavegotchi gameplay. The list of supported aTokens are not finalized; there will be twitter votes/DAO votes to add in more aTokens for Aavegotchi gameplay based on player demand.

## 穩定幣

table_stablecoins

## 密碼貨幣

table_cryptocurrencies

## 獲取 aTokens

*The following steps are taken from the [Zero to Hero Guide 2.0](https://medium.com/aave/zero-to-hero-guide-2-0-dadce0f3e834) from Aave Medium. It has been replicated here for the reader's convenience.*

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

## 將 aTokens 轉換成 maTokens

Got your aTokens? Good!

Let's head over to the [maTokens](/matokens) page for Step 2!
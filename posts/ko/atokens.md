---
author: Unintelligent Nerd
date: '2020-04-23T07:00:00.000Z'
title: 'aTokens'
description: '아베고치 aToken에 관한 모든 것'
image: "atokens/aETH.svg"
contributors:
  - "unintelligent-nerd"
---

<div class="headerImageContainer">
<img class="headerImage" src="/atokens/aETH.png">
<p class="headerImageText">aETH aToken</p>
</div>

aToken은 [Aave](https://aave.com) Protocol에서 만든 '이자가 붙는' 토큰입니다. aToken들은 예치금이 있을 때 채굴되며 예치금을 다시 돌려받을 때 소각됩니다. aToken은 Aave Protocol에 예치된 자산의 가치와 1:1로 연동이 됩니다. aToken은 자유롭게 저장되고 교환되며 거래됩니다. Aave Protocol에 대해 좀 더 자세히 알고 싶은 분들은 [Aave FAQ](https://docs.aave.com/faq/)를 확인하세요! :)

그럼 aToken은 아베고치와 어떤 관련이 있을까요? 모든 아베고치는 생명이 부여되기 전에 aToken을 통해 가치를 확인받아야 하며 [포탈](/pages/portals)을 통해 소환되어져야 합니다. 예외는 없습니다! 따라서 여러분은 aToken이 필요하며 지금 여기서 여러분은 이용 가능한 aToken의 종류와 얻을 수 있는 방법에 대한 몇가지 도움되는 정보를 얻을 수 있습니다.

아베고치가 이더리움 메인넷에서 [메틱(Matic) 네트워크](/glossary#matic-network)로  변경되었을 때 aToken들은 메틱 네트워크에서도 이용가능해야만 했습니다. 하지만 다행히도 우리 팀의 유능한 개발자인 [Nick Mudge](/team#nick-mudge)가 메틱 네트워크로의 브릿징을 해냈습니다. 참고로 메틱 네트워크에서 aToken들은 maToken으로 알려져 있습니다.

게이머의 관점에서 아베고치 플레이에 몇가지 과정이 필요합니다.

1. 1. aToken 획득하기
2. aToken을 maToken으로 전환하기
3. 포탈을 개방시킨 후, maToken을 담보로 삼아서 아베고치를 소환시키기.

이번 페이지에서는 aToken의 방식을 알려드릴 것입니다.

In Aavegotchi, the terms "Spirit Force", "Collateral", "aTokens", and "maTokens" mean the same thing.

<div class="contentsBox">

**Contents**

<ol>
<li><a href=#about>아베고치에 대해서</a></li>
<li><a href=#stablecoins>Stablecoins</a></li>
<li><a href=#cryptocurrencies>Cryptocurrencies</a></li>
<li><a href=#getting-atokens>Getting aTokens</a></li>
<li><a href=#converting-atokens-into-matokens>Converting aTokens into maTokens</a></li>
</ol>

</div>

## 아베고치에 대해서

While the underlying asset is loaned out to borrowers, aTokens accrue interest in real time, directly in your wallet! Seriously, you can watch your balance grow every minute.

aTokens can be classified into one of two categories: (1) cryptocurrencies, or (2) stablecoins. Cryptocurrencies are digital or virtual currencies that are secured by cryptography. Many cryptocurrencies are decentralized networks based on blockchain technology—a distributed ledger enforced by a disparate network of computers. Stablecoins are a class of cryptocurrencies that attempts to offer price stability by being pegged to an external reference such as the US Dollar (USD). The underlying mechanism of pegging differs across stablecoins, with each having its own risk profile.


The following [aTokens](https://docs.aave.com/developers/deployed-contracts/deployed-contract-instances) (cryptocurrencies and stablecoins) are available on the Aave Protocol. The *Supported by Aavegotchi* column indicates whether a given aToken will be available for Aavegotchi gameplay. The list of supported aTokens are not finalized; there will be twitter votes/DAO votes to add in more aTokens for Aavegotchi gameplay based on player demand.

## Stablecoins

table_stablecoins

## Cryptocurrencies

table_cryptocurrencies

## Getting aTokens

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

## Converting aTokens into maTokens

Got your aTokens? Good!

Let's head over to the [maTokens](/matokens) page for Step 2!
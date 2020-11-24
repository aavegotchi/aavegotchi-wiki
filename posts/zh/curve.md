---
author: Unintelligent Nerd
date: '2020-04-23T07:00:00.000Z'
title: 'Bonding Curve'
description: 'The Aavegotchi Bonding Curve'
---

## 目錄
1. <a href=#introduction>介紹</a>
2. <a href=#daico>DAICO</a>
3. <a href=#aavegotchi-bonding-curve>Aavegotchi Bonding Curve</a>

## 介紹

聯合曲線是一個數學曲線，它定義了價格與令牌供應之間的關係。 這是一個聯合曲線的示例，其中當前價格 = tokenSupply²：

<p><img class="curve" src="/curve/bonding-curve.jpeg" width = "500" />

這種聯合曲線表明，價格隨著代幣供應的增加而上漲。 In the case of an exponential curve such as the one above, the growth rate accelerate as the number of tokens minted increases.

When a person has purchased the token, each subsequent buyer will have to pay a slightly higher price for each token, generating a potential profit for the earliest investors. As more people find out about the project and the buying continues, the value of each token gradually increases along the bonding curve. Early investors who find promising projects early, buy the curve-bonded token, and then sell their token back can earn a profit in the future.

Bonding curves come with in different shapes and sizes. For the Aavegotchi project, the team adopted the Bancor Formula:

<img src = "/curve/reserve-ratio.png" alt = "bonding curve" width = "750" />

The Reserve Ratio represents a fixed ratio between the Continuous Token’s total value (total supply × unit price) and the value of its Reserve Token balance. This ratio will be held constant by the Bancor Formula as both the Reserve Token balance and the Continuous Token’s total value (a.k.a. ‘market cap’) fluctuate with buys and sells.

Since each purchase or sale of a Continuous Token triggers an increase or decrease of Reserve Tokens and Continuous Tokens, the price of the Continuous Token with respect to its Reserve Tokens will continuously recalculate to maintain the configured reserve ratio between them.

## DAICO
A DAICO is a new fundraising method that seeks to incorporate the best features of a Decentralized Autonomous Organization (DAO) with those of an Initial Coin Offering (ICO) in order to create a structure that provides a higher level of effectiveness to the token sale fundraising model. A DAICO is a model whereby investors have control over the funds collected once the fundraising is over. The investors could influence how developers have access to the funds and at what frequency. In addition, investors can also vote to do away with the project and have the investor funds returned.

The Aavegotchi project launched the Bonding Curve through a DAICO on Aragon.

## Aavegotchi Bonding Curve
The Aavegotchi Bonding Curve was distributed on 14 September 2020 via a bonding curve smart contract. After the conclusion of a presale for 500,000 $GHST, the bonding curve was immediately opened. The bonding curve is unlimited in size, has no time limit, and offers an opening price of 0.2 Dai per $GHST. It has a reserve ratio of 33%.

### Resources on Bonding Curves

Read more at [Bonding Curves Explained](https://yos.io/2018/11/10/bonding-curves/)

Article on [Bonding Curves](https://defiprime.com/bonding-curve-explained) by DeFi Prime.

Article on [DAICO](https://cointelegraph.com/explained/what-is-a-daico-explained) by the Coin Telegraph.
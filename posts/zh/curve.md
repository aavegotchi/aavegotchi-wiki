---
author: Unintelligent Nerd
date: '2020-04-23T07:00:00.000Z'
title: 'Bonding Curve'
description: 'The Aavegotchi Bonding Curve'
---

## 目錄
1. <a href=#introduction>介紹</a>
2. <a href=#aavegotchi-bonding-curve>Aavegotchi Bonding Curve</a>

## 介紹

聯合曲線是一個數學曲線，它定義了價格與令牌供應之間的關係。 Here’s a screenshot of [Aavegotchi's bonding curve](https://aavegotchi.com/curve)  :

<p><img class="curve" src="/curve/bonding-curve.png" width = "500" />

這種聯合曲線表明，價格隨著代幣供應的增加而上漲。 就像上文這樣的指數曲線而言，隨著標記數量的增加，增長率會加快。

當一個人購買了代幣時，每個随後的買方必須為每個代幣支付略高的價格， 為最早的投資者創造潛在利潤。 隨著更多的人了解該項目並繼續購買，每個代幣的價值沿著聯合曲線逐漸增加。 早期發現有前途的項目的投資者，購買聯合曲線代幣，然後再出售代幣，就能夠在未來賺取利潤。

Bonding curves come with in different shapes and sizes. For the Aavegotchi project, the team adopted the Bancor Formula:

<img src = "/curve/reserve-ratio.png" alt = "bonding curve" width = "750" />

The Reserve Ratio represents a fixed ratio between the Continuous Token’s total value (total supply × unit price) and the value of its Reserve Token balance. This ratio will be held constant by the Bancor Formula as both the Reserve Token balance and the Continuous Token’s total value (a.k.a. ‘market cap’) fluctuate with buys and sells.

Since each purchase or sale of a Continuous Token triggers an increase or decrease of Reserve Tokens and Continuous Tokens, the price of the Continuous Token with respect to its Reserve Tokens will continuously recalculate to maintain the configured reserve ratio between them.

TEH CURVE IS FOREVER!

## Aavegotchi Bonding Curve
The Aavegotchi Bonding Curve was distributed on 14 September 2020 via a bonding curve smart contract. After the conclusion of a presale for 500,000 $GHST, the bonding curve was immediately opened. The bonding curve is unlimited in size, has no time limit, and offers an opening price of 0.2 Dai per $GHST. It has a reserve ratio of 33%.

### DAICO
A DAICO is a new fundraising method that seeks to incorporate the best features of a Decentralized Autonomous Organization (DAO) with those of an Initial Coin Offering (ICO) in order to create a structure that provides a higher level of effectiveness to the token sale fundraising model. A DAICO is a model whereby investors have control over the funds collected once the fundraising is over. The investors could influence how developers have access to the funds and at what frequency. In addition, investors can also vote to do away with the project and have the investor funds returned.

The Aavegotchi project launched the Bonding Curve through a DAICO on Aragon.

First iteration of [AavegotchiDAO](https://aavegotchi.com/curve) launched in tandem with $GHST distribution. $GHST holders had the power to vote on increasing/ maintaining a “tap” mechanism that transfers funds from the token bonding curve (TBC) reserve to Pixelcraft to support development. The proposal of increasing the Aavegotchi DAICO tap from 50,000 DAI to 100,000 DAI per month passed with 99% approval.


### Resources on Bonding Curves

Read more at [Bonding Curves Explained](https://yos.io/2018/11/10/bonding-curves/)

Article on [Bonding Curves](https://defiprime.com/bonding-curve-explained) by DeFi Prime.

Article on [DAICO](https://cointelegraph.com/explained/what-is-a-daico-explained) by the Coin Telegraph.
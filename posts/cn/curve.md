---
author: Unintelligent Nerd
date: '2020-04-23T07:00:00.000Z'
title: '联合曲线'
description: 'The Aavegotchi Bonding Curve'
image: "curve/bonding-curve.png"
contributors:
  - "unintelligent-nerd"
---


<div class="headerImageContainer">
<img class="headerImage" src="/curve/bonding-curve.png">
<p class="headerImageText">The Bonding Curve</p>
</div>

A token bonding curve (TBC) is a mathematical curve that defines a relationship between price and token supply.

In a typical TBC, the price increases as the supply of the token increases, and decreases as the supply decreases. 

<div class="contentsBox">

**Contents**

<ol>
<li><a href=#mechanics>Mechanics</a></li>
<li><a href=#aavegotchi-bonding-curve>Aavegotchi Bonding Curve</a></li>
<li><a href=#aavegotchi-daico>Aavegotchi DAICO</a></li>
<li><a href=#learn-more>Learn More</a></li>
</ol>

</div>

## Mechanics

When a token is purchased via a TBC, each subsequent buyer will have to pay a slightly higher price for each token, generating a potential profit for the earliest investors. As more people find out about the project and the buying continues, the value of each token gradually increases along the bonding curve. Early investors who find promising projects early, buy the curve-bonded token, and then sell their token back can earn a profit in the future.

Bonding curves come with in different shapes and sizes. For the Aavegotchi project, the team adopted the Bancor Formula:

<img src = "/curve/reserve-ratio.png" alt = "bonding curve" width = "750" />

The Reserve Ratio represents a fixed ratio between the Continuous Token’s total value (total supply × unit price) and the value of its Reserve Token balance. This ratio will be held constant by the Bancor Formula as both the Reserve Token balance and the Continuous Token’s total value (a.k.a. ‘market cap’) fluctuate with buys and sells.

Since each purchase or sale of a Continuous Token triggers an increase or decrease of Reserve Tokens and Continuous Tokens, the price of the Continuous Token with respect to its Reserve Tokens will continuously recalculate to maintain the configured reserve ratio between them.

TEH CURVE IS FOREVER!

## Aavegotchi Bonding Curve
The Aavegotchi Bonding Curve was created on 14 September 2020 via a bonding curve smart contract powered by [Aragon Fundraising](https://fundraising.aragon.black/). After the conclusion of a presale for 500,000 $GHST, the bonding curve was immediately opened. The bonding curve is unlimited in size, has no time limit, and offers an opening price of 0.2 Dai per $GHST. It has a connecting weight of 33%.

## Aavegotchi DAICO
A DAICO is a new fundraising method that seeks to incorporate the best features of a Decentralized Autonomous Organization (DAO) with those of an Initial Coin Offering (ICO) in order to create a structure that provides a higher level of effectiveness to the token sale fundraising model. A DAICO is a model whereby investors have control over the funds collected once the fundraising is over. The investors could influence how developers have access to the funds and at what frequency. In addition, investors can also vote to do away with the project and have the investor funds returned.

The Aavegotchi project launched the Bonding Curve through a DAICO on Aragon.

First iteration of [AavegotchiDAO](https://aavegotchi.com/curve) launched in tandem with $GHST distribution. $GHST holders had the power to vote on increasing/ maintaining a “tap” mechanism that transfers funds from the token bonding curve (TBC) reserve to Pixelcraft to support development. The proposal of increasing the Aavegotchi DAICO tap from 50,000 DAI to 100,000 DAI per month passed with 99% approval.


## Learn More



* Read more at [Bonding Curves Explained](https://yos.io/2018/11/10/bonding-curves/)

* Article on [Bonding Curves](https://defiprime.com/bonding-curve-explained) by DeFi Prime.

* Article on [DAICO](https://cointelegraph.com/explained/what-is-a-daico-explained) by the Coin Telegraph.
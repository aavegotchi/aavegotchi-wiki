---
author: Unintelligent Nerd
date: '2020-04-23T07:00:00.000Z'
title: 'Bonding Curve'
description: 'The Aavegotchi Bonding Curve'
image: "curve/bonding-curve.png"
contributors:
  - "unintelligent-nerd"
---

<div class="headerImageContainer">
<img class="headerImage" src="/curve/bonding-curve.png">
<p class="headerImageText">Bonding Curve</p>
</div>

Token Bonding curve (TBC) là một vòng cung toán học cho thấy mối quan hệ giữa giá và lượng cung của token.

Trong một TBC điển hình, giá sẽ tăng khi lượng cung của token tăng lên, và giảm khi lượng cung giảm. Do Aavegotchi, Bonding Curve được triển khai thông qua [Decentralized Autonomous Initial Coin Offering (DAICO)](/glossary#daico) của
Aragon</0> nên bài viết này cũng sẽ bàn luận về các DAICO.</p>

<div class="contentsBox">

**Nội dung**

<ol>
<li><a href=#mechanics>Cơ chế</a></li>
<li><a href=#aavegotchi-bonding-curve>Aavegotchi Bonding Curve</a></li>
<li><a href=#aavegotchi-daico>Aavegotchi DAICO</a></li>
<li><a href=#closure-of-the-bonding-curve>Closure of the Bonding Curve</a></li>
<li><a href=#learn-more>Learn More</a></li>
</ol>

</div>

## Cơ chế



### Đúc/Đốt theo nhu cầu

Bonding Curves use a pricing algorithm to serve as an automated market maker and provide an always available source of liquidity. Users can interact with a bonding curve by staking tokens into the bonding curve’s reserve pool. When they do so, the bonding curve mints the corresponding tokens for the user based on the pricing algorithm. The newly minted tokens can have specific utility and even be traded among users, but can always be exchanged back through the bonding curve for tokens in the bonding curve’s reserve pool.

When a token is purchased via a TBC, each subsequent buyer will have to pay a slightly higher price for each token, generating a potential profit for the earliest investors. As more people find out about the project and the buying continues, the value of each token gradually increases along the bonding curve. Early investors who find promising projects early, buy the curve-bonded token, and then sell their token back can earn a profit in the future.



### Công thức

Bonding curves come in different shapes and sizes. For the Aavegotchi project, the team adopted the Bancor Formula:

<img style = "border: 1px solid; margin-bottom: 15px" src = "/curve/reserve-ratio.png" alt = "token bonding curve" width = "750" />



### Giải thích công thức

The **Reserve Token** refers to the token that users stake into the bonding curve.

The **Continuous Token** refers to the token that is received from the bonding curve upon staking the Reserve Token.

In the case of Aavegotchi, the Reserve and Continuous Tokens are DAI and GHST, respectively. 

The **Connecting Weight** (also known as Reserve Ratio) represents a fixed ratio (between 0 and 100%) between the Continuous Token's total value (total supply × unit price) and the value of its Reserve Token balance.  This CW is constant by the Bancor Formula as both the Reserve Token balance and the Continuous Token’s total value (a.k.a. 'market cap') fluctuate with buys and sells.

Each purchase or sale of the Continuous Token (GHST) triggers an increase or decrease of Reserve Tokens (DAI). The price of the Continuous Token with respect to its Reserve Tokens must then continuously recalculate to maintain the configured Connecting Weight between them.

The Connecting Weight determines how sharply a Continuous Token's price needs to adjust in order to be maintained with every transaction, or in other words, its price sensitivity. 

A higher reserve ratio between the Reserve Token balance and the Continuous Token will result in lower price sensitivity, meaning that each buy and sell will have a less than proportionate effect on the Continuous Token’s price movement. Conversely, a lower ratio between the Reserve Token balance and the Continuous Token will result in higher price sensitivity, meaning that each buy and sell will have a more than proportionate effect on the Continuous Token’s price movement.

**Aavegotchi's Reserve Ratio is 33% frens!** This means that whales can't pump & dump GHST as the bonding curve is hardened against their huuugge transactions!

If you wanna see it in action, check out this interactive model of the bonding curve Coderdan made [here](https://observablehq.com/@cinnabarhorse/aavegotchi-bonding-curve).



## Aavegotchi Bonding Curve

The Aavegotchi Bonding Curve was created on 14 September 2020 via a bonding curve smart contract powered by [Aragon Fundraising](https://web.archive.org/web/*/https://fundraising.aragon.black/). After the conclusion of a presale for 500,000 GHST, the bonding curve was immediately opened. The bonding curve is unlimited in size, has no time limit, and offers an opening price of 0.2 Dai per GHST. It has a connecting weight of 33%.

You will have to complete KYC in order to purchase straight from/sell to the curve. Compliance is important my dudes - we live in a society, and we also don't want the project to get rugged by the government. Purchases from the curve are made in DAI. The reverse also applies; you can sell your GHST back to the curve for DAI, but why would you wanna do that? :( :( :(

If you are unable to perform KYC because of your citizenship, don't worry! **You will still be able to interact with every other part of the Aavegotchi metaverse.** You simply have to purchase your GHST via other alternatives [here](/ghst#buying-ghst).



## Aavegotchi DAICO

A Decentralized Autonomous Initial Coin Offering (DAICO) is a new fundraising method that seeks to incorporate the best features of a Decentralized Autonomous Organization (DAO) with those of an Initial Coin Offering (ICO) in order to create a structure that provides a higher level of effectiveness to the token sale fundraising model. A DAICO is a model whereby investors have control over the funds collected once the fundraising is over. The investors could influence how developers have access to the funds and at what frequency through a "tap" mechanism. In addition, investors can also vote to do away with the project and have their funds returned.

The Aavegotchi project launched the token bonding curve through a DAICO on Aragon.

The Bonding Curve prevents investors from getting rugged as they ultimately have control over the funds within the DAICO/bonding curve!

The first iteration of [AavegotchiDAO](/dao) launched in tandem with the GHST distribution on the bonding curve. GHST holders had the power to vote on increasing / maintaining the funds distributed by the tap mechanism of the token bonding curve (TBC) reserve to Pixelcraft Studios (the team behind Aavegotchi) to support development. The first AavegotchiDAO proposal of increasing the Aavegotchi DAICO tap from 50,000 DAI to 100,000 DAI per month passed with 99% approval on 18 October 2020.



## Closure of the Bonding Curve

In 2023, the DAO brought the closure of the bonding curve to a vote.

Following the passing of [AGIP-64](/aavegotchi-improvement-proposals-2023#close-the-ghst-bonding-curve), the bonding curve was immediately closed, capping the supply of GHST. The DAI in the bonding curve was allocated in equal proportions (25%) to liquidity provisioning, the DAO, Pixelcraft, and protocol rewards (see [AGIP-65](/aavegotchi-improvement-proposals-2023#25-25-25-25-split-for-curve-dai)).

A Curve transition team (see [AGIP-66](/aavegotchi-improvement-proposals-2023#form-and-fund-the-curve-transition-team)) was formed and a Curve transition plan was devised to secure funds for liquidity (see [AGIP-67](/aavegotchi-improvement-proposals-2023#curve-transition-plan---securing-funds-for-liquidity)).



## Learn More

* Đọc nhèo hơn tại [Aragon Fundraising and bonding curves!](https://web.archive.org/web/*/https://fundraising.aragon.black/components/bonding-curve)

* Đọc thêm tại [Bonding Curves Explained](https://yos.io/2018/11/10/bonding-curves/)

* Bài viết [Bonding Curves](https://defiprime.com/bonding-curve-explained) trên DeFi Prime.

* Bài viết về [DAICO](https://web.archive.org/web/*/https://cointelegraph.com/explained/what-is-a-daico-explained) trên the Coin Telegraph.
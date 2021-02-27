---
author: Coder Dan
date: '2020-04-23T07:00:00.000Z'
title: 'Aavegotchi Improvement Proposals (AGIPs)'
description: 'A list of Aavegotchi Improvement Proposals (AGIPs)'
contributors: ["unintelligent-nerd"]
---

Heya frens. Participating in Aavegotchi Improvement Proposals (AGIPs) are what responsible gotchis do! You need to vote and get your voices heard. 

How far have we progressed as a community? Look at our archives of past votes here!

<div class="contentsBox">

**Contents**

<ol>
<li><a href=#tap-increase-for-scaling-sprint>Tap increase for Scaling Sprint</a></li>
<li><a href=#add-fees-to-bonding-curve>Add fees to Bonding Curve</a></li>
<li><a href=#increase-daico-tap-for-ghst-purchases>Increase DAICO tap for GHST purchases</a></li>
<li><a href=#name-of-aavegotchi-marketplace>Name of Aavegotchi Marketplace</a></li>
<li><a href=#eligibility-of-ghst-usdc-lp-tokens-to-earn-frens>Eligibility of GHST-USDC LP tokens to earn FRENS</a></li>
<li><a href=#portals-purchased-in-one-transaction>Portals purchased in one transaction</a></li>
</ol>

</div>

### Tap increase for Scaling Sprint
**Aavegotchi Improvement Proposal #1**

**Proposal Summary:** The GHST Bonding Curve has been live for nearly one month and with that comes the first opportunity for GHST holders to adjust the DAICO’s tap mechanism. AavegotchiDAO 1.0 is built on the Aragon platform and functions as a straightforward DAICO where GHST holders are able to vote once per month to increase or decrease the flow of funds to the core team via the tap. The tap provides DAI directly from the GHST Bonding Curve where over 7.5 million DAI are currently secured.

We request the Aavegotchi community vote to increase the tap from 50K DAI / 30 days to 100K DAI / 30 days. 50k DAI was not enough to cover all of the milestones achieved (community growth, GHST token, game development) and the next sprint is even more ambitious. The hard coded constraints of AavegotchiDAO 1.0 limit this proposal to only a 50K DAI increase for this month’s voting period and thus we have budgeted our strategy with a total 100k DAI tap in mind. 

The budget going forward deploys the additional 50k DAI into 4 distinct categories:
* A game maker’s fund so we can solidify terms with key game developers.
* Additional contracts for key positions in marketing, design, and development.
* A marketing boost to make sure Aavegotchi’s presence is expanded.
* Community rewards so we can continue to develop programs (like the Aartists and Aapprentices teams) that incentivize the most inspired in our community.

**Voting Period:** 15 - 19 October 2020

**Results:**

Yes: 2540143.23957 GHST

No: 601.83249 GHST

[Link to vote on Aragon UI](https://client.aragon.org/#/aavegotchi/0xf63e1edbcb3be8d5fb124f4a228f5412f48e5ae7/vote/0/)

<hr>

### Add fees to Bonding Curve
**Aavegotchi Improvement Proposal #2**

**Proposal Summary:** The bonding curve is the main source of liquidity of GHST. Large buyers and sellers can currently buy in and out without any fees.

Our market maker offers the ability to add fees to buy and sell orders.

Multiple community members have proposed adding fees up to 0.3% to buying and selling on the curve. 

This is possible to do by calling the `updateFees` function on our bonding curve, but should we? It’s up to you, AavegotchiDAO.

Any fees earned would automatically be transferred to the DAO Treasury address at 0xffe6280ae4e864d9af836b562359fd828ece8020 and would be considered as assets of AavegotchiDAO.

**Voting Period:** 18 - 21 January 2021

**Results:**

Yes: 3726567.25851 GHST

No: 108143.33932 GHST

[Link to vote on Aragon UI](https://client.aragon.org/#/aavegotchi/0xf63e1edbcb3be8d5fb124f4a228f5412f48e5ae7/vote/1/)

<hr>

### Increase DAICO tap for GHST purchases
**Aavegotchi Improvement Proposal #3**

**Proposal Summary:** Player rewards and liquidity incentives are crucial to bootstrapping the Aavegotchi ecosystem to a level where it becomes self-sustained on trading volume and economic activity.

Whenever GHST is spent in the Aavegotchi ecosystem, 33% of it is automatically sent to a burn address. Unlike most cryptocurrencies, burning GHST (except via the bonding curve) does not actually lower the total value of GHST, since that value is stored as DAI within the bonding curve.

What burning does do is trap DAI within the bonding curve, essentially increasing the reserve ratio over time, which stabilizes the price of GHST.

In order to offset the burning (which could ultimately turn GHST into a stablecoin), we advise the community to increase the tap to 150,000 DAI per month. This will help balance the reserve of the bonding curve, while also providing an extra 50,000 DAI per month that will be put towards player rewards and liquidity incentives.

**Voting Period:** 18 - 21 January 2021

**Results:**

Yes: 3836093.44669 GHST

No: 33683.04753 GHST

[Link to vote on Aragon UI](https://client.aragon.org/#/aavegotchi/0xf63e1edbcb3be8d5fb124f4a228f5412f48e5ae7/vote/2/)

<hr>

### Name of Aavegotchi Marketplace
**Snapshot Voting**

**Proposal Summary:** What should the Aavegotchi NFT Marketplace be called?

Aavegotchi is launching its own NFT marketplace on Polygon in tandem with the game!

What should we call the official Aavegotchi Marketplace?

Choice A: Aavegotchi Baazaar

Choice B: Aavegotchi Maarket

Choice C: Neither

The quorum for this vote is set to 500,000 GHST. If quorum is not reached, Pixelcraft will draw straws.

If "Neither" wins...you guys better start coming up with some good alternatives!

**Voting Period:** 8 - 11 February 2021

**Results:**

Aavegotchi Baazaar: 973380 GHST

Aavegotchi Maarket: 683420 GHST

Neither: 150380 GHST

[Link to vote on Snapshot](https://snapshot.page/#/aavegotchi.eth/proposal/QmRiRaQuwLuNr88yxvX61vtKM56NrY3KaMk4bk6w7g47fy)

<hr>

### Eligibility of GHST-USDC LP tokens to earn FRENS

**Snapshot Voting**

**Proposal Summary:** Should GHST-USDC LP token be eligible to earn FRENS?

Our liquidity migration program has been a huge success, with over 8M GHST migrated to Polygon already. However, as many community members have noted, liquidity for the GHST-USDC pair is still not deep enough to support trading large amounts of USDC for GHST on Quickswap.

We believe one way to remedy this is by adding GHST-USDC as a pair eligible for FRENS on [https://aavegotchi.com/stake-polygon](https://aavegotchi.com/stake-polygon). Just like GHST-QUICK has a receipt token stkGHST-QUICK, staked GHST-USDC can also emit a stkGHST-USDC token, which may be eligible for rewards on Quickswap, if their team deems it necessary.

Since this decision directly affects gameplay, we believe it is a ripe candidate for our first Snapshot vote on Polygon.

We are setting a 500,000 GHST quorum for this vote to be enacted.

The GHST-USDC LP token will earn FRENS at the same rate as just staking GHST, since impermanent loss is minimal and fees are significant.

**Voting Period:** 8 - 11 February 2021

**Results:**

Yes: 2560000

No: 354030

[Link to vote on Snapshot](https://snapshot.page/#/aavegotchi.eth/proposal/QmUpXPA5JF4ed9GUy5hNUTA7rT7VQjL7QXUTSxbtLQ1RqA)

<hr>

### Portals purchased in one transaction

**Snapshot Voting**

**Proposal Summary:** How many Portals can be purchased in one transaction?

Discussion period has ended for this topic, and now it's time to vote! The most popular options were: 1, 5, and 10 Portals per transaction.

Our fren [@coderdannn](/team#coder-dan) also threw a spicy idea into the mix: an "Ape Tax" whereby higher numbers of Portals could be bought in a single transaction, but at a higher price. The Portals would be tiered as so:

* 0-5: 100 GHST each

* 6-15: 200 GHST each

* 16-25: 300 GHST each

So this leaves us with four options: 1, 5, 10, and 25 (w/ ape tax).

Let your $GHST token speak for you, and vote!

Voting period: 72 hrs
Minimum quorum: 10% of GHST on Matic (~1.1M GHST)

AavegotchiDAO discussion topic 👇

[https://dao.aavegotchi.com/t/how-many-portals-should-be-bought-in-one-txn/17](https://dao.aavegotchi.com/t/how-many-portals-should-be-bought-in-one-txn/17)

**Voting Period:** 23 - 26 February 2021

**Results:**

25 per txn (w/ Ape Tax): 1500000

5 per txn: 921830

10 per txn: 201760

1 per txn: 169000

[Link to vote on Snapshot](https://snapshot.page/#/aavegotchi.eth/proposal/QmUhKcn5YjKAPeGA1SfKQkNfw3P3hGRPgSGnTJGsfzw4Xi)
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
<li><a href=#proposal-for-haunt-2>Proposal for Haunt 2</a></li>
<li><a href=#give-unique-non-transferable-background-to-haunt-1-aavegotchis>Give unique non-transferable Background to Haunt 1 Aavegotchis</a></li>
<li><a href=#add-fee-on-baazaar-to-support-rarity-farming>Add Fee on Baazaar to Support Rarity Farming</a></li>
<li><a href=#earn-xp-for-successful-signal-proposals>Earn XP for Successful Signal Proposals</a></li>
<li><a href=#voting-power-based-on-brs>Voting power based on BRS</a></li>
<li><a href=#voting-power-based-on-wearables--maall-price>Voting power based on Wearables' Maall Price</a></li>
<li><a href=#partnership-between-aavegotchidao--pixelcraft--and-dinoswap>Partnership between AavegotchiDAO, Pixelcraft, and DinoSwap</a></li>
<li><a href=#liquidity-manager---frens-committee>Liquidity Manager / FRENS Committee</a></li>
<li><a href=#launch-haunt-2>Launch Haunt 2</a></li>
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

table_agip1

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

table_agip2

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

table_agip3

[Link to vote on Aragon UI](https://client.aragon.org/#/aavegotchi/0xf63e1edbcb3be8d5fb124f4a228f5412f48e5ae7/vote/2/)

<hr>

### Proposal for Haunt 2
**Aavegotchi Improvement Proposal #4**

**Proposal Summary:** 10,000 Portals is arguably not enough to satisfy the current level of demand for Aavegotchis. Therefore it may be necessary to deploy a new Haunt to ensure that all who want to participate can own an Aavegotchi. This Core Proposal provides four different options that have been suggested by community members, including one option not to create a new Haunt. 

Details on the AGIP can be found [here](https://aavegotchi.medium.com/vote-when-haunt-2-making-haunts-more-unique-d975cbda4772).

Option 1: No new haunt, Revisit in a month

Option 2: 10K Portals, 100 GHST each, 1 per txn

Option 3: 25K portals, 100 GHST each, 5 per txn (w/ stricter ape tax)

Option 4: Pre-sale, in which each wallet can subscribe for 1 Portal in exchange for 100 GHST. When the pre-sale period closes, all Portals are minted and transferred to their owners.

**Voting Period:** 17 - 24 March 2021

**Results:**

table_agip4

**Vote Differential not met. No Haunt 2 for now!**

[Link to vote on Snapshot](https://snapshot.org/#/aavegotchi.eth/proposal/QmNqRry73rWXb9tdyHummihcK58ga83Ru15AJRF3beFJ35)

<hr>

### Give unique non-transferable Background to Haunt 1 Aavegotchis
**Aavegotchi Improvement Proposal #5**

**Proposal Summary:** Many players are worried that Haunt 2 will be too similar to Haunt 1 and the newly-created Haunts will devalue the “Genesis” Haunt. One of the suggestions is to give special backgrounds to each Haunt to make them easily identifiable. This proposal has seen excellent discussion and significant support on the associated Snapshot. Note that irrespective of the DAO’s decision on this issue, all Aavegotchis will be getting special non-transferable "Haunt" badges that identify their Haunt. This proposal focuses specifically on the idea of a non-transferable background that can be equipped in the Aavegotchi’s BG wearable slot. 

Details on the AGIP can be found [here](https://aavegotchi.medium.com/vote-when-haunt-2-making-haunts-more-unique-d975cbda4772).

Option 1: Only Haunt 1 should get a special background

Option 2: Each Haunts should have it’s own unique background

Option 3: Neither, leave it as is

**Voting Period:** 17 - 24 March 2021

**Results:**

table_agip5

[Link to vote on Snapshot](https://snapshot.org/#/aavegotchi.eth/proposal/QmfBrnUmfsX57vXWchr1mUNkqMWNeF6edEqdQq11MCvMHJ)

<hr>

### Add Fee on Baazaar to Support Rarity Farming
**Aavegotchi Improvement Proposal #6**

**Proposal Summary:** With the announcement of SZN1 Rewards now official, we explore how to align the community's interests and rewards structures, as it pertains to Baazaar fees.

Currently, 2% is allocated to Pixelcraft and 1% to DAO treasury. While not exclusive of providing for RF rewards, the treasury funds are currently in no obligation to be allocated in any form of ratio towards the RF pool each season. The proposal aims to increase the Baazaar fees from 3% to 3.5%, with the additional 0.5% going directly to the Rarity Farming rewards pool.

Details on the AGIP can be found [here](https://aavegotchi.medium.com/core-proposal-agip6-add-0-5-fee-on-baazaar-to-support-rarity-farming-5bf923c7f528).

Option 1: Yes, increase fees from 3 to 3.5

Option 2: No, leave the fees as they are

**Voting Period:** 7 - 13 April 2021

**Results:**

table_agip6

[Link to vote on Snapshot](https://snapshot.org/#/aavegotchi.eth/proposal/QmPUueFJwpCz6rBiucnBYPLxTv2tetzxXWwCi2gSQFMJMW)

<hr>

### Earn XP for Successful Signal Proposals
**Aavegotchi Improvement Proposal #7**

**Proposal Summary:** We currently have a lot of Signal / Community Proposals on Snapshot and new posts on our forum everyday. So far none of those proposals were able to even get close to the quorum of 20%. The most popular one by @JG about adding additional fees for rarity farming only got around 2 million GHST in votes (~11%)-even though the team decided to take it as a Core Proposal. After being upgraded to Core we smashed right through the quorum in less than 24h.

I think there are two pretty obvious reasons for this. On the one hand, our Snapshot is a bit chaotic right now, with some Signal Proposals not following the template at all. On the other hand-and I think this is the more important one-voting on Core Proposal gets you 20 Experience (XP) for your Gotchi.

I propose adding a small Experience drop (10 XP) for people who voted on successful Signal Proposals, meaning ones that reach quorum and get upgraded to Core Proposals. Simply dropping XP for all Community Proposals could result in more low quality suggestions, which shouldn't be the goal of this proposal.

Even if 10 XP might not be much, it gives people incentives to actually look through the Signal Proposals and vote on quality proposals with a higher chance of reaching quorum. As a DAO, community involvement is extremely important and I believe this is a small, but decent, step in the right direction.

If this Proposal reaches quorum and passes, all Aavegotchis held by their owners at the end of the vote will receive 10 XP!

Details on the AGIP can be found [here](https://aavegotchi.medium.com/vote-agip7-earn-xp-for-successful-signal-proposals-d5eafdb93aae).

Option 1: Yes, successful SigProps give XP

Option 2: No, SigProps should not give XP

**Voting Period:** 12 - 18 May 2021

**Results:**

table_agip7

[Link to vote on Snapshot](https://snapshot.org/#/aavegotchi.eth/proposal/QmctiApzKZHoVsSpzWVfMVL1abRTUNXsoipupNGS52gEuZ)

<hr>

### Voting power based on BRS
**Aavegotchi Improvement Proposal #8**

**Proposal Summary:** Add Voting Power for Aavegotchis held in a voter’s address, at a rate of 1 GHST per BRS (base rarity score, not including equipped wearables).

Details on the AGIP can be found [here](https://aavegotchi.medium.com/vote-agip8-and-agip9-give-voting-power-to-aavegotchis-and-wearables-9c113373a0a2).

Option 1: Yes, give Voting Power to Aavegotchi based on BRS

Option 2: No, Aavegotchis shouldn’t have Voting Power

**Voting Period:** 11 - 17 June 2021

**Results:**

table_agip8

[Link to vote on Snapshot](https://snapshot.org/#/aavegotchi.eth/proposal/QmZnzgvkEzHvwkYPGLFQLtVvvoMzBXPWhznux1udHzbUim)

<hr>

### Voting power based on Wearables' Maall Price
**Aavegotchi Improvement Proposal #9**

**Proposal Summary:** Add Voting Power for Wearables held by Aavegotchis and in the voting address.

Details on the AGIP can be found [here](https://aavegotchi.medium.com/vote-agip8-and-agip9-give-voting-power-to-aavegotchis-and-wearables-9c113373a0a2).

Option 1: Yes, give Voting Power to Wearables based on Maall Price

Option 2: No, Wearables shouldn’t have Voting Power

**Voting Period:** 11 - 17 June 2021

**Results:**

table_agip9

[Link to vote on Snapshot](https://snapshot.org/#/aavegotchi.eth/proposal/Qmat7jeAS1W3BBq7yDi2jkHjNoywmUEfrF2FdPiS9CcGHa)

<hr>

### Partnership between AavegotchiDAO, Pixelcraft, and DinoSwap
**Aavegotchi Improvement Proposal #10**

**Proposal Summary:** Some community members are worried about the waning liquidity of GHST on Quickswap and their gradually decreasing LP rewards. Rather than simply allocating more liquidity to the pool, we are considering partnering with a soon to launch liquidity aggregator called DinoSwap. The terms include a total of 200k USD worth of GHST tokens to be allocated to their incentivized “extinction pools”, the details of which are fleshed out below.

Details on the AGIP can be found [here](https://dao.aavegotchi.com/t/ghst-liquidity-rewards-on-new-launch-pixelcraft-dao-collaboration/1804).

Option 1: Yes, let's partner with DinoSwap

Option 2: No, don't partner with Dinoswap

**Voting Period:** 13 - 20 June 2021

**Results:**

table_agip10

[Link to vote on Snapshot](https://snapshot.org/#/aavegotchi.eth/proposal/QmV3xdUskpTtd6JYyCgV7tjWeBGira2ZPFcdk2YDy3UPHE)

<hr>

### Liquidity Manager / FRENS Committee
**Aavegotchi Improvement Proposal #11**

**Proposal Summary:** 

*Problem*

To incentivize liquidity on QuickSwap, you can earn additional FRENS rewards for staking Liquidity Pool (LP) tokens on the Aavegotchi website. Depending on the risk of Impermanent Loss (IL) these numbers can vary, originally it was +35% for GHST-QUICK, +20% for GHST-ETH and +10% for GHST-USDC. Because the rates have to be manually adjusted and prices have moved quite a bit since this was introduced, the FRENS rewards are off by quite a lot; GHST-QUICK is at around +90%, while GHST-USDC earns -10%.

*Solution*

Quoted from [coderdan](/team#coder-dan):
"There has been talk of setting up committees for managing certain parts of Aavegotchi, and I believe this could be an interesting candidate for such a committee. Right now we only have two [now three] pairs incentivized by FRENS, but this could change in the future.”

The “committee” could be a multisig of at least nine (maybe up to fifteen) members with strong reputation in the community and high Gotchi dependability counters. At its core, this Liquidity Committee would monitor and adjust FRENS rates to keep in check with the pre-determined rate, by performing contract calls to the GHST Staking contracts only available to a new “rateManager” role created for the committee."

For now the committee should just have one job - keeping the FRENS rates up-to-date. In the future this could be extended to partnerships, monitoring of FRENS inflation, etc.

*Candidates*

Two weeks ago we created a Discourse thread (linked above) for interested parties to apply as candidates. Since then 11 people have applied. All candidates have been members of the community for a while and put forward good reasons as to why they should be chosen. As this is still within the range of 9-15, the easiest way would be to form the committee with all applicants.

So now it's up to you, AavegotchiDAO. Should we take this step in further decentralizing Aavegotchi and put the FRENS rate into the hands of:

Angst, Jarrod, Kenymccornick, UnfitStone, Notorious_BTC, Doxy, Kokusho, Grip, Almond-Stew, Shanekoy and Moon

[Discourse Thread (Idea/Proposal)](https://dao.aavegotchi.com/t/committee-idea-liquidity-managers-for-managing-the-frens-s-of-liquidity-pairs/1905)

[Discourse Thread (Candidates)](https://dao.aavegotchi.com/t/frens-committee-applications/1944)

Option 1: Yes, create the FRENS Committee

Option 2: No, keep everything as it is

**Voting Period:** 17 - 25 August 2021

<hr>

### Launch Haunt 2
**Core Prop**

**Proposal Summary:** Currently Aavegotchis are limited by a maximum possible 10,000 because only that many Haunt 1 Portals exist. This makes acquiring a first Aavegotchi cost prohibitive. With a second Haunt of 15,000 more Portals, we aim to address this problem while respecting unique, collectible aspects of Haunt 1 Aavegotchis.

Our vision is for far wider adoption of playable NFTs, and the first step to achieving that means leaving the scarcity memes behind and focusing on being able to offer meaningfully unique experiences to more people.

Details on the AGIP can be found [here](https://dao.aavegotchi.com/t/coreprop-launch-haunt-2/2034)

Option 1: Yes, launch Haunt 2

Option 2: No, do not launch Haunt 2 now

**Voting Period:** 19 - 26 July 2021

**Results:**

table_launchHaunt2

[Link to vote on Snapshot](https://snapshot.org/#/aavegotchi.eth/proposal/QmTuVnGnZSUC4uWRVQrd3HwmJATtvJVpjNikCkifChyJwY)

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

table_marketplaceName

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

table_ghstUsdcLp

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

table_portalsPurchased

[Link to vote on Snapshot](https://snapshot.page/#/aavegotchi.eth/proposal/QmUhKcn5YjKAPeGA1SfKQkNfw3P3hGRPgSGnTJGsfzw4Xi)
---
author: Coder Dan
date: '2020-04-23T07:00:00.000Z'
title: 'Aavegotchi Improvement Proposals (AGIPs)'
description: 'A list of Aavegotchi Improvement Proposals (AGIPs)'
contributors: ["unintelligent-nerd"]
---

Heya frens. Participating in Aavegotchi Improvement Proposals (AGIPs) are what responsible gotchis do! You need to vote and get your voices heard. 

How far have we progressed as a community? Look at our archives of past votes here!

Psst! Claim your [POAP Badges](/poap) if you have voted on AGIPs before!

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
<li><a href=#add-an-aging-mechanic-to-affect-aavegotchi-rarity-scores>Add an Aging Mechanic to affect Aavegotchi rarity scores</a></li>
<li><a href=#earn-frens-with-ghst-matic-lp-tokens>Earn FRENS with GHST-MATIC LP Tokens</a></li>
<li><a href=#create-a-wearables-taask-force>Create a Wearables Taask Force</a></li>
<li><a href=#stake-100k-ghst-to-generate-minigame-rewards>Stake 100k GHST to generate Minigame Rewards</a></li>
<li><a href=#adding-voting-power-to-realm-parcels>Adding Voting Power to REALM Parcels</a></li>
<li><a href=#gotchiverse-patch-v0-1>Gotchiverse Patch v0.1</a></li>
<li><a href=#providing-ghst-liquidity-on-synfutures>Providing GHST Liquidity on SynFutures</a></li>
<li><a href=#creating-the-dao-treasury-taask-force>Creating the DAO Treasury Taask Force</a></li>
<li><a href=#adding-ghst-to-the-umbria-narni-bridge>Adding GHST to the Umbria Narni Bridge</a></li>
<li><a href=#launch-rarity-farming-szn-3>Launch Rarity Farming SZN 3</a></li>
<li><a href=#co-sponsoring-the-goodghosting-pool>Co-Sponsoring the GoodGhosting Pool</a></li>
<li><a href=#deposit-3m-treasury-ghst-into-aave>Deposit 3M Treasury GHST into Aave</a></li>
<li><a href=#delay-gotchiverse-land-auction---raffle-3>Delay Gotchiverse Land Auction & Raffle 3</a></li>
<li><a href=#reducing-the-parcel-vrf-variance>Reducing the Parcel VRF Variance</a></li>
<li><a href=#alternative-gotchiverse-trait-mapping>Alternative Gotchiverse Trait Mapping</a></li>
<li><a href=#extending-the-dao-treasury-task-force-multisig>Extending the DAO Treasury Task Force Multisig</a></li>
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

**Proposal Summary:** Many players are worried that Haunt 2 will be too similar to Haunt 1 and the newly-created [Haunts](/haunt) will devalue the “Genesis” Haunt. One of the suggestions is to give special backgrounds to each Haunt to make them easily identifiable. This proposal has seen excellent discussion and significant support on the associated Snapshot. Note that irrespective of the DAO’s decision on this issue, all Aavegotchis will be getting special non-transferable "Haunt" badges that identify their Haunt. This proposal focuses specifically on the idea of a non-transferable background that can be equipped in the Aavegotchi’s BG wearable slot. 

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

**Results:**

table_agip11

[Link to vote on Snapshot](https://snapshot.org/#/aavegotchi.eth/proposal/QmdLouPY9ipn2ezC2RR5Fjcz8auhX1uLajk9QS8nrctfsY)

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

### Add an Aging Mechanic to affect Aavegotchi rarity scores
**Aavegotchi Improvement Proposal #13**

**Proposal Summary:**

*Problem*

As new haunts are released, whether or not they include a bug fix that impacts gotchi trait generation, a strong dilution of existing high BRS gotchis occurs. Due to the nature of rarity farming and its rewards, this dilution is exclusively felt by those who invested heavily into older haunts, and who may not have the desire to sell due to emotional attachment, the means to invest more, or the ability to “flip” their way (due to local tax laws) into higher BRS gotchis from the newer haunts. Furthermore, very significant statistical variance can occur in new haunts, making it near impossible to make long term financial decisions, as the variance can render previous haunt gotchis all but obsolete. This leaves far too much entirely up to “luck”.

*Solution*

The Aging Mechanic is a proposal, initially introduced by Tistou on discord, that is designed to address all of the above mentioned issues, as well as create an interesting new dynamic of Aavegotchis that can be built upon in the future (age limits for activities, wearables, new appearance qualities, etc). It provides a buffer of approximately 6 months during which older gotchis have a BRS boost over newly summoned gotchis. As newly summoned gotchis age, they quickly begin to catch up to their older counterparts.

In the spirit of using numbers occurring in nature, the formula is modeled after the Fibonacci numbers x 1 million, but replacing the first 0 with a 1 to better fit the use case. Specifically, the first 10 Fibonacci numbers (replacing the first 0) are 1, 1, 1, 2, 3, 5, 8, 13, 21, 34, the sum of which is 89. Following this formula would mean +1 BRS after 1 million blocks, then another +1 BRS after 2 million blocks, another +1 BRS after 3 million blocks, another +1 BRS after 5 million blocks, …, up to a final sum of +10 BRS after 89 million blocks (approx 6.5 years using average block time of 2.3 seconds — the average since May 1st).

This solution provides for a quicker boost in the first few epochs of age, and greatly flattens over time to avoid anything too OP and allow more recently summoned gotchis to eventually catch up to within a 1 BRS boost of their older and wiser brethren. It incentivizes opening and summoning portals as opposed to sitting on them, both boosting the in-game economy as well as the scarcity of those that are still chosen to remain closed. Most of all, it is a fair system that benefits no one haunt over any other, and simply rewards long term engagement, while counteracting the effects of sudden and aggressive dilution like we are currently witnessing.

*Modifications made to Solution*

* **The implementation will be slightly modified to use the available onchain data of birth block timestamp as opposed to block number,** with epoch times predetermined using the same fibonacci intervals proposed in the sigprop and the current average block time. This makes the implementation much simpler, allows for predictable timelines (since a block time denominator would be constant, as opposed to variable based on chain activity), as well as ensures the functionality of the mechanic should any potential cases of architecture or blockchain network changes occur in the future. The petting time intervals already function using real time, so a precedent for this exists.

* **The 10 BRS cap is removed.** The fibonacci intervals themselves act as a natural cap, as the time to reach further epochs approximates an exponential function. For example, it will take over 4 more years to get an additional BRS bonus (+11 total), then 6.5 years for another, then 10.5 years, etc.

* **The implementation would go live prior to the beginning of Rarity Farming Season 2.** One of the goals of aging is to provide a short term buffer to the effects of statistical variance once a new haunt is released. For Haunt 1’s to be able to experience any of this benefit at all, the implementation must go live as soon as possible, as by the middle of season 2 H2’s will already be mostly caught up to the H1 bonus, with only a 1–2 BRS difference.

Details on the AGIP can be found [here](https://aavegotchi.medium.com/agip13-should-aavegotchi-introduce-an-aging-boost-5ee12e8c9f0)

Option 1: Yes, implement aging incentives

Option 2: No, do not implement right now

**Voting Period:** 2 - 9 October 2021

**Results:**

table_agip13

[Link to vote on Snapshot](https://snapshot.org/#/aavegotchi.eth/proposal/QmcAQLdAyS9n7LWDu9qvRtdNqJa7FBStadrHq3xqjW9kCT)

<hr>

### Earn FRENS with GHST-MATIC LP Tokens
**Aavegotchi Improvement Proposal #14**

**Proposal Summary:** Polygon has been a huge reason behind the success of Aavegotchi. Super low transaction fees paid in MATIC have enabled the team to build a game where there is lots of activity happening on-chain such as petting, bid to earn auctions, Baazaar sales, and storage of the Aavegotchi game art.

As of early September, Sushiswap started offering 2x SUSHI rewards for farming the GHST-MATIC LP pair on Sushiswap.

The FRENS Taask Force recommends enabling a FRENS incentive to be paid for the GHST-MATIC LP pair on their AMM.

We recommend that the target rate of FRENS paid to the GHST-MATIC LP pair is greater than the target incentive for the GHST-ETH LP pair (120%) but lower than the target incentive for the GHST-QUICK pair (135%).

This is because the Impermanent Loss (IL) risk for GHST-MATIC is higher compared to GHST-ETH but lower compared to GHST-QUICK. We would recommend a target rate of 130% for the GHST-MATIC LP pair.

Currently, the majority of the liquidity for GHST resides on Quickswap.

See: [https://frens-taaskforce.vercel.app/](https://frens-taaskforce.vercel.app/)

This offers a great opportunity to move some of the liquidity over to the widely adopted Sushiswap AMM and reduce our dependence on Quickswap.

Details on the AGIP can be found [here](https://dao.aavegotchi.com/t/frens-incentive-for-matic-ghst-lp-pair-on-sushiswap/2336)

Option 1: Yes, give FRENS to GHST-MATIC

Option 2: No, don't give FRENS

**Voting Period:** 12 - 19 November 2021

**Results:**

table_agip14

[Link to vote on Snapshot](https://snapshot.org/#/aavegotchi.eth/proposal/0x42914b268d255efe0eea943d052e5dc7eab0cbbcde9d3cb809f027e3ea1f611f)

<hr>

### Create a Wearables Taask Force
**Aavegotchi Improvement Proposal #15**

**Proposal Summary:** 

*Motivation*

Within the Aavegotchi ecosystem wearables play a vital role, whether it be boosting BRS for rarity farming, improving traits for minigames, utility in the upcoming metaverse, or just showing off. Due to the complexity of the different possible trait ranges of gotchis, and the variety of possible wearable stats, it is not an easy task to arrive at a balanced distribution of equippable items. Releasing new wearables without proper analysis can lead to duplication (and dilution) of existing items and further skew of practical applicable sets for gotchis with trait ranges in certain directions.

*Specification*

This proposal aims to introduce a Wearables Taask Force (WTF), the idea of which arose from discussions regarding the above concerns. Akin to the FRENS Taask Force, the goal of the WTF would be to assist Pixelcraft in the analysis of the current distribution of items within the ecosystem from a slot, rarity, and trait modifiers perspective, and in how this analysis can best be applied to future items. This Taask Force would NOT have the unilateral ability to determine what and how new items are released, but would function entirely in an advisory capacity.

*Nominees*

The nominees for the Taask Force include long term community members who have a wide range of applicable skills, including statistical analysis, programming ability, strong experience in baazaar activity, and prior DAO experience. This Taask Force would greatly benefit from as many voices and perspectives as possible, so all nominations are included.
Establishing this Taask Force would be a major step forward in creating a more balanced ecosystem and helping the AavegotchiDAO mature.

**Full list of nominees:** Kuwlness, JG1 (Fantasma#1777), Bearded, Actaeon, Thunderfish, Letsgobankless, Kokusho, Ader1990.eth, Machete, Aimo217 (AL#4105), Notorious_BTC, MonsterRNG, Goobz, Diddlypoo

Details on the AGIP can be found [here](https://dao.aavegotchi.com/t/wearables-taask-force/2350)

Option 1: Yes, establish the WTF

Option 2: No, don't establish the WTF

**Voting Period:** 12 - 19 November 2021

**Results:**

table_agip15

[Link to vote on Snapshot](https://snapshot.org/#/aavegotchi.eth/proposal/0xa1f06ffcdd5f5d51c5f82022e8a25ecc7672252f8a47d9ee484b9fe3b6cd5b3a)

<hr>

### Stake 100k GHST to generate Minigame Rewards
**Aavegotchi Improvement Proposal #16**

**Proposal Summary:** Some frens have expressed concern over the lack of rewards for participating in Minigame events. Since there currently exists no Aarcade Taask Force with a designated budget, Gotchinomics has come up with the idea of staking 100k GHST in Treasury funds to support future initiatives.

*Problem*

Aavegotchi aims to be one of the top Play2Earn projects in the crypto gaming space, the launch of the Gotchiverse Realm being the cornerstone to achieving this long-term goal. However, there is room for improving the short-term possibilities through seasonal gaming events. The main problem is the lack of structure and funds.

*Solution*

Before creating a dedicated Aarcade DAO, the first step to enable play2earn rewards is to create a sustainable stream of funds. A simple and low-risk solution would be to stake a portion of the main DAO treasury, such as 100k GHST, to generate FRENS. Those could be then transformed into raffle tickets and given away to mini-game players through periodic events.

*Potential risks*

Staking GHST will indirectly imply a dilution of FRENS/tickets. However, since they would be distributed via mini-game rewards, the impact should be minimal compared to the boost on engagement and appeal to new people.

*Alternatives*

Wait for the Aarcade DAO to launch and let the new committee decide how to designate funds. However, this alternative option would mean losing precious time to generate more attractive rewards.

Details on the AGIP can be found [here](https://dao.aavegotchi.com/t/creation-of-an-aarcade-dao/2128)

Option 1: Yes, stake 100k GHST

Option 2: No, wait for Aarcade DAO

**Voting Period:** 10 - 17 December 2021

**Results:**

table_agip16

[Link to vote on Snapshot](https://snapshot.org/#/aavegotchi.eth/proposal/0xd654255f22e694369686e9791ff663f38a9f586bd4126831fc9d8ce384208964)

<hr>

### Adding Voting Power to REALM Parcels
**Aavegotchi Improvement Proposal #17**

**Proposal Summary:**

*Problem:*

With a new asset class added to the Aavegotchi family in the form of realm plots comes a new sink of GHST. This currently leaves those who have heavily invested into the new plots with much lesser voting power in the Aavegotchi DAO.

*Solution:*

Since realm plots and the Gotchiverse are such an integral part of the Aavegotchi ecosystem, I believe it’s only right that realm owners get an amount of voting power that is proportional to the size of their realm plots. This ensures that their vote can be heard, which is of particular importance when future governance proposals will concern the Gotchiverse.

Since every plot has a set size in pixels which is also a scaling factor for the amount of alchemica within the plot, the suggestion brought forward is:

1 pixel = 1 GHST worth of voting power (64, 256, 2056)
OR
1 pixel = 0.5 GHST worth of voting power (32, 128, 1028)

An alternative would be to give every plot flat voting power based on the auction floor, with a vote afterward allowing for fine-tuning of final voting power amounts while ensuring that all land owners will have a say.

This would give 100, 200, and 1300 GHST worth of voting power to humbles, reasonables, and spacious parcels, respectively.

*CoreProp Edits*

An option for “Auction floor” has also been added. This brings the Vote Differential up to 20%, meaning that any option must have 20% higher than the next option to pass.

Details on the AGIP can be found [here](https://dao.aavegotchi.com/t/voting-power-for-land-plots/2508)

Option 1: Voting power of 0.5 GHST/pixel

Option 2: Voting power of 1 GHST/pixel

Option 3: Voting power from auction floor

Option 4: No voting power for REALM

**Voting Period:** 10 - 17 December 2021

**Results:**

table_agip17

[Link to vote on Snapshot](https://snapshot.org/#/aavegotchi.eth/proposal/0x28b630e088240ee4bb4e680b071767b98b962a4006c71e71f00c782b86adfbab)

<hr>

### Gotchiverse Patch v0.1
**Aavegotchi Improvement Proposal #18**

**Proposal Summary:**

*Problem:*

Although the Gotchiverse is not yet live, we have identified a few areas that we believe should be adjusted before the game is released, and would like to bring these items to the community’s attention for discussion and a decision on whether or not to enact.

To ensure no single proposed change can revert the entire batch, we originally created six separate snapshot SigProp Proposals. This CoreProp combines the successful SigProps into the first Gotchiverse Patch v0.1!

*Solution:*

Patch 0.1a

As we were finalizing key details such as build costs and harvesting rates for the upcoming Whitepaper, we discovered that one of our key assumptions had undervalued the amount of Alchemica in each parcel relative to total supply. The patch will increase the amount of Alchemica under each parcel to match our initial Alchemica tokens’ supplies, allocations, and emissions rates.

The SigProp for Patch 0.1a passed with the following numbers:

Yes: 13.14M GHST

No: 41.85k GHST

Patch 0.1b

Although our original intention was to make boosts one-time only, it is clear that many in the community interpreted the GEO paper to mean that boosts would be replenished. This patch allows boosts to also replenish together with the parcel itself after each Great Battle.

However, unlike parcels, the replenish rate is a fixed amount that is the same per round. For example, a parcel with a “5” FUD boost receives 5 servings of FUD per boost round.

The SigProp for Patch 0.1b also passed pretty convincingly:

Yes: 10.36M GHST

No: 2.37M GHST

Patch 0.1c

Even with Patch 0.1b passed, boosts will still be undervalued compared to the value the market has assigned to them, relative to a similar parcel with no boosts. Patch 0.1c proposed increasing boosts by 5x to bring the value of a boost closer to what the market is currently valuing it at.

The SigProp for Patch 0.1c did not pass and WILL NOT BE INCLUDED in Patch v0.1:

Yes: 5.85M GHST

No: 8.04M GHST

Future SigProps may be created to address this issue separately.

Patch 0.1d

The Gotchiverse Litepaper mentions that Kinship will be exchanged for a serving of Alchemica, essentially “burning” kinship. We certainly want to maintain the idea of a “kinship boost” for channeling but after thinking more deeply, we now believe there is a better way to achieve this.

An “achievements” approach does not require depleting an Aavegotchi’s kinship. Instead, high kinship Aavegotchis will channel Alchemica at a slightly higher rate, depending on their achievement level.

The SigProp for Patch 0.1d also passed:

Yes: 12.64M GHST

No: 431.93k GHST

Patch 0.1e & 0.1f

Districts did not exist as a Citaadel concept when the Litepaper was first published. That said, we have always envisioned an area or areas for Pixelcraft to develop in-depth experiences that add value to the overall game. Likewise, one of our earliest ideas, (predating the Citaadel itself!) was to reserve a town square for real time DAO voting. The idea of having a gamified governance experience was one of the very earliest ideas seeding Aavegotchi’s need for its own virtual world.

Patch 0.1e & 0.1f proposed allocating 1000 parcels each to Pixelcraft and the AavegotchiDAO in D27/D30. Both Patches passed convincingly:

Yes: 11.94M GHST / 12.14M GHST

No: 615.78k GHST / 734.92k GHST

Conclusion

And that’s it for the first Gotchiverse Patch! Now it is up to you, the AavegotchiDAO, to decide if Patch v0.1 should be implemented or not.

Option 1: Yes, implement Patch v0.1

Option 2: No, do not implement Patch v0.1

Details on the AGIP can be found [here](https://dao.aavegotchi.com/t/gotchiverse-paatch-v0-1-thread/2791)

Option 1: Yes, implement Patch v0.1

Option 2: No, do not implement Patch v0.1

**Voting Period:** 5 - 12 January 2022

**Results:**

table_agip18

[Link to vote on Snapshot](https://vote.aavegotchi.com/#/proposal/0x396844d504394f7f335f070d443c33455300ee21d90db6c4b089760a3e0469bf)

<hr>

### Providing GHST Liquidity on SynFutures
**Aavegotchi Improvement Proposal #19**

**Proposal Summary:**

Since Aavegotchi has gathered a lot of liquidity on Spot DEXes, it is high time for Aavegotchi to create and boost its Futures market. Derivatives markets make up the majority of global trading activity and allow users to leverage their investments. Adding GHST liquidity on SynFutures would allow people to take on leverage longs (or shorts) on the future of Aavegotchi. But why SynFutures?

Great investors and team background
SynFutures is backed by Polychain, Pantera, Dragonfly, Framework, Standard Crypto, Woo, and more. The team’s background is a great combination of traditional finance and DeFi. SynFutures is the only project of its kind which can support the listing of any assets by anyone in a permissionless manner (in less than 30s).

Security
Backed by solid experience from the TradFi financial engineering and DeFi protocol safety, SynFutures has many risk management features (e.g. anti-flashloan attack, EMA smoothing method, etc.) and has gone through external code audits.

Easy to manage and start
SynFutures supports a single token model to add liquidity which means the Aavegotchi Treasury would only have to deposit GHST instead of offering two tokens with the risk of impermanent loss. We are asking for 200k worth of GHST tokens to kickstart the pool. The liquidity could be withdrawn anytime.

Growth Potential
Trading volume and users are growing fast on SynFutures. For the past 3 months since the SynFutures Alpha launched, we reached 47k users of and $1bn+ in trading volume. All this happened without a native SynFutures token, which could attract even more users.

Volume analysis
Quickswap vs. SynFutures:
Total LPs: 150k / 40K
Total traders: 100k / 20k
Daily trading volume: $100M / $29M

SynFutures trading volume makes up ~1/3rd of QuickSwap, and the amount of traders is 1/5th as big as on QuickSwap, however, the trading volume for different pairs is more concentrated. SynFutures has 108 trading pairs while QuickSwap has more than 22k pairs. For example, the daily trading volume of MATIC-USDC on SynFutures closes in on around $9M, while Quickswap reaches $14M.

Details on the AGIP can be found [here](https://dao.aavegotchi.com/t/provide-ghst-as-liquidity-on-the-derivatives-dex-synfutures/2664)

Option 1: Yes, add $200k in GHST

Option 2: No, do not add $200k in GHST

**Voting Period:** 2 - 9 February 2022

**Results:**

table_agip19

[Link to vote on Snapshot](https://vote.aavegotchi.com/#/proposal/0x560e97ce27e9c99470a0a609e36d4c4cd20e948eae92691ea2ba2afb984e7e41)

<hr>

### Creating the DAO Treasury Taask Force
**Aavegotchi Improvement Proposal #20**

**Proposal Summary:**

We propose the creation of the DAO Treasury Taask Force (DTF). This committee will initially be composed of 8 members with reassessment of membership by the DAO within 6 months.

As of 12/07/2021, the DAO Treasury (https://aavegotchi.com/treasury) boasts nearly ~$11,408,400 worth of DAI and GHST. In its initial form, the committee will form proposals for consideration by the DAO which will subsequently be voted on and, if passed, enacted.

Proposed Mission Statement

The Aavegotchi DAO Treasury Taask Force is a dynamic committee assigned with making DAO treasury management proposals to the community and DAO for consideration. The initial mission and goals of the committee will be: 1) Grow and optimize the DAO treasury with an emphasis on safety, security and transparency; 2) Partner with Pixelcraft to assist in developing and identifying tools and infrastructure for ongoing DAO Treasury management; and 3) foster and encourage growth of the overall Aavegotchi community by increasing awareness, actively promoting adoption, and maintaining current user engagement.

Initial Funding

After lengthy discussions with the task force, the community, and with coderdan, the DTF would like to request an initial 50,000 GHST budget. The 50,000 GHST budget would be transferred from the DAO Treasury to the 8 multi-signature Gnosis Safe. This budget will greatly expand the flexibility of the DAO in incentivizing and rewarding engaged community members, developers, creatives, and overall contributors. This budget will never be used to reward members of the DTF. The DTF’s core main initiative will be to form a proposal for overall use of the DAO Treasury by investing some of the $10 million DAI/GHST in yield bearing opportunities. With effective deployment of the DAO Treasury, even modest returns would more than pay for the DTF budget request. The DTF will ensure comprehensive accounting and provide community facing documentation to ensure transparency. Some potential uses for the budget include the following:

* Reward community engagement and aarcade play
* Reward game developers and designers
* Reward community application developers
* Reward and acknowledge community art contributions
* Reward, acknowledge and grow content creators and general marketing efforts
* Expand Aavegotchi and GHST’s opportunities for decentralized financial applications

The DTF is developing a structured plan and multiple potential pilot projects to best utilize these funds. We will work to develop tools to allow maximum transparency into the budget use. Expenses within this 50,000 GHST budget would not require a DAO approval in order to maximize nimble use of the funds. Any further budget requests beyond the initial 50,000 GHST would require a DAO vote.

The initial 8 members of the DTF

* BowtiedNerd
* Mori
* letsgobankless
* Addison
* Deucehearts
* BackfireCapital
* Swappi
* Dr Wagmi

We appreciate the Aavegotchi community’s support and look forward to our first proposal.

Details on the AGIP can be found [here](https://dao.aavegotchi.com/t/establish-the-dao-treasury-taask-force/2460)

Option 1: Yes, with 50k GHST budget

Option 2: Yes, without 50k GHST budget

Option 3: No, do not create the DTF

**Voting Period:** 2 - 9 February 2022

**Results:**

table_agip20

[Link to vote on Snapshot](https://vote.aavegotchi.com/#/proposal/0x17f3eec096b26e87b3441f7cad53108f6933fd32ac67417de6ef7c94970502e4)

<hr>

### Adding GHST to the Umbria Narni Bridge
**Aavegotchi Improvement Proposal #21**

**Proposal Summary:**

The Umbria Narni Bridge has implemented the GHST token, and is facilitating cheaper migration of GHST between the Ethereum <--> Polygon networks, compared to the official Polygon bridge. The Umbria Narni bridging cost is about 1/2 of the official polygon bridge cost and is also much faster (4 minutes, as opposed to > 1 hour).

The Umbria Narni bridge protocol can bridge a maximum of 20% of its total GHST liquidity, per bridging event. For example, with $100k of GHST tokens in one side of the pool, the bridge can migrate a maximum of $20k of GHST per single transaction.

Currently there is approximately $14,000 of GHST tokens on each side of the bridge. This is mostly funded by the Umbria team. This enables the bridge to be able to bridge a maximum of $700 of GHST tokens per transaction - which is pretty good, but we are aware that some users want to bridge much more in a single transaction.

We propose the Aavegotchi DAO add $100,000 of GHST to each bridge pool (1. Polygon and 2. Ethereum). There are a few advantages for doing so:

The Aavegotchi DAO will earn a 0.2% bridging fee whenever anyone uses the bridge to migrate GHST tokens between Ethereum <--> Polygon. So across time, the Aavegotchi DAO will make money. If the Narni bridge ever becomes an unnecessary solution, the Aavegotchi DAO can easily remove their liquidity and enjoy their profit.

Transactions up to approximately $21,000 of GHST will now be possible.

Details on the AGIP can be found [here](https://dao.aavegotchi.com/t/add-ghst-stake-to-the-umbria-narni-bridge/2836)

Option 1: Yes, add $200k GHST

Option 2: No, do not add any GHST

**Voting Period:** 8 - 15 February 2022

**Results:**

table_agip21

[Link to vote on Snapshot](https://snapshot.org/#/aavegotchi.eth/proposal/0xeaac981066e143c46c7a616d2e6ff004d7d4d354005e077f01e3698041e4780a)

<hr>

### Launch Rarity Farming SZN 3
**Aavegotchi Improvement Proposal #22**

**Proposal Summary:**

*Problem*

Currently, Rarity Farming Seasons happen sporadically and are difficult to account for in the cadence of Aavegotchi releases. It leaves investors wondering if they should hold onto their Gotchis and Wearables, or if they might find better ROI flipping into the next rounds. It would be desirable to have a bit of certainty / predictability for both investor sentiment and for planning purposes.

*Solution*

If possible funding-wise, Rarity Farming should happen three times a year. It would fit in with the seasonal nature we are already following, and if properly planned could be sustainable based on GBM Sales in-between seasons, Treasury revenue via staking and partnerships (such as the Umbra Bridge proposal), and other streams of revenue such as DAO Grants. The author of this proposal believes Rarity Farming is an essential part of the Gotchiverse ecosystem, and something to build out and improve upon rather than scrap.

*Distribution*

For Season 3, I suggest we go back to the standard reward ratio, as was tried and tested in Rarity Farming Season 1. The rookies of the similarly named rookie board are now all grown up and ready to compete with the big boys. This would mean 70% of payouts go to the BRS leaderboard, 20% to the Kinship leaderboard and 10% to the XP leaderboard.

Based on Forum discussions this would be the final model for SZN3:

* 4 Rounds (2 weeks each)
* 1.5 Million GHST Rewards Pool (1.4m GHST funded already)
* 70% BRS
* 20% Kinship
* 10% XP
* Top 5k Gotchis (20%) → Top 7.5k Gotchis (30%)
* 3 Seasons per Year (approx. schedule below)
* SZN 3: February - March
* SZN 4: June - July
* SZN 5: October - November

Updated Rewards Sheet: [Rarity Farming SZN 3 Distribution Model](https://docs.google.com/spreadsheets/d/1jH6IEJ7Xu_YvblgEPX9UpT-phLelJ5XsmknkaxQOg7A/)

Since there is a ~100k GHST discrepancy between the proposed amount to be distributed and GHST currently in the rewards pool, this proposal includes a funding request for the remaining amount to be taken out of the AavegotchiDAO Treasury.

Details on the AGIP can be found [here](https://dao.aavegotchi.com/t/season-3-for-q1-2022/2779)

Option 1: Yes, launch RF SZN 3

Option 2: Yes, but different params

Option 3: No, don't launch RF SZN 3

**Voting Period:** 8 - 15 February 2022

**Results:**

table_agip22

[Link to vote on Snapshot](https://snapshot.org/#/aavegotchi.eth/proposal/0x5ffa4d3b8f4c1d744424af5c0f079ebfa286c9aec9c35e898c2c02bee87a0b60)

<hr>

### Co-Sponsoring the GoodGhosting Pool
**Aavegotchi Improvement Proposal #23**

**Proposal Summary:**

*What is GoodGhosting?*

GoodGhosting is a no-loss savings game, built on top of Aave. We launched our very first DeFi savings pools on Polygon, during the summer of 2021. So far, we have helped over 7000 users to save over $600k worth of assets on Polygon. All while collecting some nice NFTs and climbing our leaderboard.

The GoodGhosting team believes in a world where saving is rewarding, easy and fun. Yet, traditional saving is none of that. We build decentralized social saving applications that combine game design elements with goal-based saving. We want to help our community to develop better financial habits, and have fun at the same time.

*Potential collaboration*

We want to expose the GoodGhosting community to Aavegotchi, by introducing an Aavegotchi-themed savings pool. This pool will require players to save in GHST tokens, and earn them more GHST on top. We see it as a fun opportunity to cross-pollinate the GoodGhosting and Aavegotchi communities.

Aavegotchi is a one-of-a-kind project we have been keeping a close eye on from the very start. Both as players and as ecosystem residents. In our opinion, it envisions everything that DeFi and Web3 is about 👻

Besides inviting all Aavegotchi users and the DAO itself to participate in the upcoming GHST savings pool, GoodGhosting would like to request the AavegotchiDAO to consider co-sponsoring this pool.

*Our Request*

* A total of 7000 GHST in sponsorship for this savings pool. To be shared between all winning players.
* The ability to reward successful savers with Gotchi XP, or alternatively FRENS. Considering GoodGhosting an extensive mini-game that encourages people to stack more GHST.
* An allocation of Aavegotchi NFTs (worth up to 3000 GHST) to be raffled to random participants and/or to all winners. These could be Wearables, Gotchi’s, Raffle tickets or Realm parcels.

These could either be provided by the AavegotchiDAO, or alternatively purchased by the GoodGhosting team on the Bazaar. For these additional incentives, we hope to provide benefits to a small handful of lucky winners (via a raffle system), and/or a smaller reward that is feasible to be delivered to all winners.

*What can GoodGhosting bring to the table?*

* Up to 4000 WMATIC tokens in sponsorship (from our DeFiForAll grant). To be shared between all winning players.
* An influx of new users into the Aavegotchi ecosystem. So far over 20500 users joined our Celo and Polygon savings pools. Most have not yet been exposed to Aavegotchi or GHST, and many are likely to join the Gotchigang.
* We will create a YouTube video explaining Aavegotchi, and how to obtain the GHST token on Polygon. Directed at our community members.
* We will allow users to play GoodGhosting using their Aavegotchis as avatar. This will show up in the shared ‘Players’ tab, as well as in the individual player profiles on Goodghosting.com
* Some very special NFTs by our in-house artist Mali3D
* An increased GG score for all successful savers

Details on the AGIP can be found [here](https://dao.aavegotchi.com/t/aavegotchidao-x-goodghosting-collaboration-request/2975/)

Option 1: Yes, 10k GHST for rewards + XP

Option 2: Yes, but under different terms

Option 3: No, do not support GG

**Voting Period:** 9 - 15 February 2022

**Results:**

table_agip23

[Link to vote on Snapshot](https://snapshot.org/#/aavegotchi.eth/proposal/0xdef7d35ea26832b4edffda176458f86744f402d7db151993ffe34f8122da7113)

<hr>

### Deposit 3M Treasury GHST into Aave
**Aavegotchi Improvement Proposal #24**

**Proposal Summary:**

Alongside the DAO Treasury Taask Force (DTF), Dr Wagmi proposes that we immediately take advantage of the Aave GHST listing by depositing ~80% of our DAO Treasury GHST (3,000,000 GHST) into Aave as collateral to earn passive yield. The current utilisation rate is at 45% with a deposit APR ~2.5%. Given the significant yield and quickly growing utility of the GHST token, we anticipate ongoing borrowing demand, and, thus, yield for GHST depositors and the DAO Treasury. The Aavegotchi DAO can demonstrate its dexterity, effectiveness, and impressive treasury by quickly capitalizing on this passive yield opportunity. This would speak volumes to the broader DeFi and crypto community and immediately provide additional value to GHST token holders through increased borrowing capacity in the Aave pool.

An initial deposit of 3,000,000 GHST would represent approximately 80% of the DAO Treasury GHST. This deposit is completely liquid and could be withdrawn if the DAO designates other uses. A 3% APR is nearly $90,000 which can be used to further invest in the Aavegotchi ecosystem through DAO initiatives. A separate proposal can be considered for the additional 20% and for the 2.4M DAI in the treasury. We do not propose that the received amGHST from this proposed initial deposit be staked for FRENS. This proposal is not requesting DTF multi-sig control over this deposit or the ongoing management.

Details on the AGIP can be found [here](https://dao.aavegotchi.com/t/deposit-3-000-000-ghst-from-the-dao-treasury-into-aave/3007)

Option 1: Yes, deposit 3M GHST

Option 2: No, keep GHST in the Treasury

Option 3: Abstain

**Voting Period:**  23 - 30 March 2022

**Results:**

table_agip24

[Link to vote on Snapshot](https://vote.aavegotchi.com/#/proposal/0x2fd1336f439b29a7096478a1d9571acc83597b2b345103fdb35e02125f5a2dcd)

<hr>

### Delay Gotchiverse Land Auction & Raffle 3
**Aavegotchi Improvement Proposal #25**

**Proposal Summary:**

Pixelcraft has provided a schedule in Chapter 1 in the Gotchiverse Game Bible with the Gotchiverse Land Auction / Raffle 3 scheduled to occur Late February: [https://blog.aavegotchi.com/introducing-the-gotchiverse-game-bible/](https://blog.aavegotchi.com/introducing-the-gotchiverse-game-bible/)

This was scheduled to happen before the following Gotchiverse Game Bible Chapters were published according to that same post. 4 more Chapters were released in March and there are more planned to be released during the following weeks/months.

I propose the Land Auction & Raffle is delayed until the full release of Book One of the Gotchiverse occurs or the community votes for an additional sale.

This is primarily to ensure that the community can make fully informed bids/investments in Land and we reduce the risk of repeating what happened previously with people overbidding and getting rekt.

[CoreProp Edit: Since Book One is going to be fully published soon but there still seems to be little appetite for a REALM Sale, we have added a voting option to only start the next Auction & Raffle if a SigProp reaches Quorum and the respective CoreProp passes. This adjustment has been discussed with Jarrod beforehand.]

Details on the AGIP can be found [here](https://dao.aavegotchi.com/t/chapter-1-the-gotchiverse-release-schedule/2939)

Option 1: Delay until full Book 1

Option 2: Delay until Community Proposal

Option 3: Start Auction 3 ASAP

**Voting Period:** 23 - 30 March 2022

**Results:**

table_agip25

[Link to vote on Snapshot](https://vote.aavegotchi.com/#/proposal/0xa8ae9fff29189ddf79845a7875ccfc696273aa2fca9fed42140a6bbe55f12b97)

<hr>

### Reducing the Parcel VRF Variance
**Aavegotchi Improvement Proposal #26**

**Proposal Summary:**

*Problem:*

The VRF variance for Alchemica under the ground of parcels (0.2 - 1.8 of average) seems very high to me and could lead to some people getting rekt - see the graphic posted on the Discourse Thread.

A very unlucky spacious owner could get less alchemica than a lucky reasonable owner - which is in my opinion very bad UX, especially considering that it was communicated this wouldn’t be possible. Keep in mind that the first round (quarter) will distribute more Alchemica than the rest of them, so losing big in the first round could set someone back by a lot.

*Solution*

I want to propose lowering the variance to AT LEAST 0.5 - 1.5 if not even 0.75 - 1.25 for the first round (Voting Choice 1). My issue with this very high variance is that people made financial decisions based on the average numbers published before the first auction, making people lose 50-80% of Alchemica value underneath the parcel is terrible UX to me.

Another option suggested by Mori would be to create a binomial distribution with the left tail cut off, so it's possible to win big but impossible to get rekt hard (Voting Choice 2). This results in an average pull of 100, a minimum pull of 60, and a maximum pull of ~800. There's a fairly reasonable chance of winning this top prize, with ~0.02% of parcels being able to achieve this. Important note: This option would reduce the previous Median of 100 to roughly 83.

Details on the AGIP can be found [here](https://dao.aavegotchi.com/t/reducing-the-vrf-variance-for-parcels/3069)

Option 1: Round 1 0.75 - 1.25 & 0.5 - 1.5

Option 2: Binomial Distribution

Option 3: No, don't change the Variance

**Voting Period:** 23 - 30 March 2022

**Results:**

table_agip26

[Link to vote on Snapshot](https://vote.aavegotchi.com/#/proposal/0x09c3132896ba5c8e677e018a86ba1a74729955f64799dbfd4e422058f9198817)

<hr>

### Alternative Gotchiverse Trait Mapping
**Aavegotchi Improvement Proposal #27**

**Proposal Summary:**

With the introduction of Gotchiverse trait maps in the Game Bible Chapter 2, a significant discussion kicked off analyzing potential imbalances, weaknesses and areas for innovation in the original proposed trait map for NRG, AGG, SPK & BRN. This CoreProp proposes to change the trait mappings for these 4 traits to:

NRG: HP Capacity (0 NRG) <===> AP Capacity (100 NRG)

AGG: Defense Power (0 AGG) <===> Action Speed (100 AGG)

SPK: HP & AP Regen (0 SPK) <===> Ethereality (100 SPK)

BRN: Melee Power (0 BRN) <===> Ranged Power (100 BRN)

EYS: To Be Confirmed

EYC: To Be Confirmed

Please refer to the DAO forum thread for a full rundown on what these changes mean (including an FAQ section).

Core Effects of the New Trait Map

* Movement speed removed from trait maps will now lead to an improved quality of life user experience (UX) for all players starting out in the Gotchiverse, both new and old,
* Carrying capacity removed from trait maps corrects the imbalance of 1 farming trait vs. 7 combat traits on NRG, AGG, SPK and BRN,
* There is now a clear distinction between physical and ability specialist (mage) gotchis,
* There is now a clear distinction between melee and ranged gotchis,
* Ethereality can now be thought of as “Luck” and influences evasion, critical strikes, slipping through walls and all sorts of other chance based actions in the Gotchiverse.

*End Goal*

For the community and Pixelcraft to build a trait map together that is balanced, has excellent UX, playability and longevity while simultaneously allowing the flexibility to implement wearable buffs and abilities that work with the traits in the future.

*Risks*

There is potential that some players and investors have already purchased gotchis based on the original trait mappings. It is important to note that these traits were always specified as non-immutable in the Game Bible HOWEVER, we strongly believe the new trait maps proposed here will create even moar diverse and entertaining play styles for OG investors and new players alike to experiment with and enjoy playing.

*Final Important Notes*

There are a number of ways these Traits can scale (Yin/Yang linear, asymmetric, buff only starting from 50 and diminishing returns to name a few). The Trait Scaling System is still under review by the community so look forward to further calls with Pixelcraft (to really get into the nitty gritty) and another SigProp!
EYS and EYC are still under review by the community. A number of interesting ideas including farming/alchemica/HUD abilities have been proposed. Make sure you get involved and have your say on how you’d like to see these evolve too!

Details on the AGIP can be found [here](https://dao.aavegotchi.com/t/alternative-gotchiverse-trait-mapping-for-nrg-agg-spk-brn/3135)

Option 1: Yes, use the new Trait Map

Option 2: No, stick with the original

**Voting Period:** 23 - 30 March 2022

**Results:**

table_agip27

[Link to vote on Snapshot](https://vote.aavegotchi.com/#/proposal/0xbe4999b68f97f0e3406d65aff4e36a97768af72eb5cbd16c92641dcfdd6f35c9)

<hr>

### Extending the DAO Treasury Task Force Multisig
**Aavegotchi Improvement Proposal #28**

**Proposal Summary:**

Hi frens, in Chapter 2 we proposed that 10% of the Gotchus Alchemica supply be vested over 30 years to be used for Ecosystem purposes. The primary goal of this allocation is to ensure excellent long-term liquidity across many platforms, including the GAX, various DEXes on Polygon, Mainnet, and even CEXes.

Those who follow the project carefully know that we always try to do everything “by the book”, to make Aavegotchi a model case study for decentralization and legal compliance. We are currently in the final stages of setting up a new legal wrapper for AavegotchiDAO (more specifically, a Panama Foundation) and will soon be making an announcement for applications to serve.

On the technical side, we are also working to implement onchain governance of the Aavegotchi protocol. However, this will take some time, as it requires upgrades to the deployed GHST token on Polygon.

While all of this is happening in the background, we are also launching FIVE new ERC20 Alchemica tokens and locking a sizable amount of them into vesting contracts.

For both legal and strategic reasons, we believe that the Ecosystem allocation should not be managed by Pixelcraft, but instead by AavegotchiDAO. The DAO Treasury Force has already been created to manage some of the DAO treasury, but the number of signers is quite few (six) and in my opinion insufficient to hold such a sum of funds.

Therefore, I propose we create an additional multisig under the current DTF, with fifteen signers instead of the current six. **Eleven** out of fifteen signatures would be required to confirm transactions.

This multisig would be the beneficiary of the Ecosystem Vesting Contract (which holds 10% of each Alchemica’s token supply, vested over 30 years), and could also inherit the 1M GHST originally allocated during the GHST creation for Ecosystem building, to help bootstrap Alchemica liquidity.

On our side, we will deploy the Alchemica and create initial liquidity pools on Quickswap, after which we will transfer ownership of the vesting contract to the multisig. After that point, it will be up to the DTF to coordinate liquidity provision.

Let’s goooo Gotchigang!

Details on the AGIP can be found [here](https://dao.aavegotchi.com/t/dao-treasury-task-force-extension-thread/3119)

[Final note: You can vote for multiple members at once, the top 9 choices will then get elected! Short pitches for everyone can be found in the discussion thread]

Option 1: Kokusho

Option 2: MGG

Option 3: Choyna

Option 4: Pgendreau

Option 5: Diddlypoo

Option 6: Tburd.eth

Option 7: Jarrod

Option 8: MarvinP

Option 9: Notorious_BTC

Option 10: Hardkor

Option 11: Yanik

Option 12: Master_Yin

Option 13: Nestor

Option 14: Chichi

**Voting Period:** 23 - 30 March 2022

**Results:**

table_agip28

[Link to vote on Snapshot](https://vote.aavegotchi.com/#/proposal/0x8b5862698c550b53e57f6ce4628a7a13ed5a4772e541c414e9a27fbcf95cf8c2)

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
---
author: Coder Dan
date: 2020-04-23T07:00:00.000Z
title: Aavegotchi Improvement Proposals (AGIPs)
description: A list of Aavegotchi Improvement Proposals (AGIPs) in Year 2021
contributors:
  - unintelligent-nerd
---

<div class="contentsBox">

\*\* 목차 \*\*

<ol>
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
<li><a href=#name-of-aavegotchi-marketplace>Name of Aavegotchi Marketplace</a></li>
<li><a href=#eligibility-of-ghst-usdc-lp-tokens-to-earn-frens>Eligibility of GHST-USDC LP tokens to earn FRENS</a></li>
<li><a href=#portals-purchased-in-one-transaction>Portals purchased in one transaction</a></li>
</ol>

</div>

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

_Problem_

To incentivize liquidity on QuickSwap, you can earn additional FRENS rewards for staking Liquidity Pool (LP) tokens on the Aavegotchi website. Depending on the risk of Impermanent Loss (IL) these numbers can vary, originally it was +35% for GHST-QUICK, +20% for GHST-ETH and +10% for GHST-USDC. Because the rates have to be manually adjusted and prices have moved quite a bit since this was introduced, the FRENS rewards are off by quite a lot; GHST-QUICK is at around +90%, while GHST-USDC earns -10%.

_Solution_

Quoted from [coderdan](/team#coder-dan):
"There has been talk of setting up committees for managing certain parts of Aavegotchi, and I believe this could be an interesting candidate for such a committee. Right now we only have two [now three] pairs incentivized by FRENS, but this could change in the future.”

The “committee” could be a multisig of at least nine (maybe up to fifteen) members with strong reputation in the community and high Gotchi dependability counters. At its core, this Liquidity Committee would monitor and adjust FRENS rates to keep in check with the pre-determined rate, by performing contract calls to the GHST Staking contracts only available to a new “rateManager” role created for the committee."

For now the committee should just have one job - keeping the FRENS rates up-to-date. In the future this could be extended to partnerships, monitoring of FRENS inflation, etc.

_Candidates_

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

_Problem_

As new haunts are released, whether or not they include a bug fix that impacts gotchi trait generation, a strong dilution of existing high BRS gotchis occurs. Due to the nature of rarity farming and its rewards, this dilution is exclusively felt by those who invested heavily into older haunts, and who may not have the desire to sell due to emotional attachment, the means to invest more, or the ability to “flip” their way (due to local tax laws) into higher BRS gotchis from the newer haunts. Furthermore, very significant statistical variance can occur in new haunts, making it near impossible to make long term financial decisions, as the variance can render previous haunt gotchis all but obsolete. This leaves far too much entirely up to “luck”.

_Solution_

The Aging Mechanic is a proposal, initially introduced by Tistou on discord, that is designed to address all of the above mentioned issues, as well as create an interesting new dynamic of Aavegotchis that can be built upon in the future (age limits for activities, wearables, new appearance qualities, etc). It provides a buffer of approximately 6 months during which older gotchis have a BRS boost over newly summoned gotchis. As newly summoned gotchis age, they quickly begin to catch up to their older counterparts.

In the spirit of using numbers occurring in nature, the formula is modeled after the Fibonacci numbers x 1 million, but replacing the first 0 with a 1 to better fit the use case. Specifically, the first 10 Fibonacci numbers (replacing the first 0) are 1, 1, 1, 2, 3, 5, 8, 13, 21, 34, the sum of which is 89. Following this formula would mean +1 BRS after 1 million blocks, then another +1 BRS after 2 million blocks, another +1 BRS after 3 million blocks, another +1 BRS after 5 million blocks, …, up to a final sum of +10 BRS after 89 million blocks (approx 6.5 years using average block time of 2.3 seconds — the average since May 1st).

This solution provides for a quicker boost in the first few epochs of age, and greatly flattens over time to avoid anything too OP and allow more recently summoned gotchis to eventually catch up to within a 1 BRS boost of their older and wiser brethren. It incentivizes opening and summoning portals as opposed to sitting on them, both boosting the in-game economy as well as the scarcity of those that are still chosen to remain closed. Most of all, it is a fair system that benefits no one haunt over any other, and simply rewards long term engagement, while counteracting the effects of sudden and aggressive dilution like we are currently witnessing.

_Modifications made to Solution_

- **The implementation will be slightly modified to use the available onchain data of birth block timestamp as opposed to block number,** with epoch times predetermined using the same fibonacci intervals proposed in the sigprop and the current average block time. This makes the implementation much simpler, allows for predictable timelines (since a block time denominator would be constant, as opposed to variable based on chain activity), as well as ensures the functionality of the mechanic should any potential cases of architecture or blockchain network changes occur in the future. The petting time intervals already function using real time, so a precedent for this exists.

- **The 10 BRS cap is removed.** The fibonacci intervals themselves act as a natural cap, as the time to reach further epochs approximates an exponential function. For example, it will take over 4 more years to get an additional BRS bonus (+11 total), then 6.5 years for another, then 10.5 years, etc.

- **The implementation would go live prior to the beginning of Rarity Farming Season 2.** One of the goals of aging is to provide a short term buffer to the effects of statistical variance once a new haunt is released. For Haunt 1’s to be able to experience any of this benefit at all, the implementation must go live as soon as possible, as by the middle of season 2 H2’s will already be mostly caught up to the H1 bonus, with only a 1–2 BRS difference.

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

_Motivation_

Within the Aavegotchi ecosystem wearables play a vital role, whether it be boosting BRS for rarity farming, improving traits for minigames, utility in the upcoming metaverse, or just showing off. Due to the complexity of the different possible trait ranges of gotchis, and the variety of possible wearable stats, it is not an easy task to arrive at a balanced distribution of equippable items. Releasing new wearables without proper analysis can lead to duplication (and dilution) of existing items and further skew of practical applicable sets for gotchis with trait ranges in certain directions.

_Specification_

This proposal aims to introduce a Wearables Taask Force (WTF), the idea of which arose from discussions regarding the above concerns. Akin to the FRENS Taask Force, the goal of the WTF would be to assist Pixelcraft in the analysis of the current distribution of items within the ecosystem from a slot, rarity, and trait modifiers perspective, and in how this analysis can best be applied to future items. This Taask Force would NOT have the unilateral ability to determine what and how new items are released, but would function entirely in an advisory capacity.

_Nominees_

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

_Problem_

Aavegotchi aims to be one of the top Play2Earn projects in the crypto gaming space, the launch of the Gotchiverse Realm being the cornerstone to achieving this long-term goal. However, there is room for improving the short-term possibilities through seasonal gaming events. The main problem is the lack of structure and funds.

_Solution_

Before creating a dedicated Aarcade DAO, the first step to enable play2earn rewards is to create a sustainable stream of funds. A simple and low-risk solution would be to stake a portion of the main DAO treasury, such as 100k GHST, to generate FRENS. Those could be then transformed into raffle tickets and given away to mini-game players through periodic events.

_Potential risks_

Staking GHST will indirectly imply a dilution of FRENS/tickets. However, since they would be distributed via mini-game rewards, the impact should be minimal compared to the boost on engagement and appeal to new people.

_Alternatives_

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

_Problem:_

With a new asset class added to the Aavegotchi family in the form of realm plots comes a new sink of GHST. This currently leaves those who have heavily invested into the new plots with much lesser voting power in the Aavegotchi DAO.

_Solution:_

Since realm plots and the Gotchiverse are such an integral part of the Aavegotchi ecosystem, I believe it’s only right that realm owners get an amount of voting power that is proportional to the size of their realm plots. This ensures that their vote can be heard, which is of particular importance when future governance proposals will concern the Gotchiverse.

Since every plot has a set size in pixels which is also a scaling factor for the amount of alchemica within the plot, the suggestion brought forward is:

1 pixel = 1 GHST worth of voting power (64, 256, 2056)
OR
1 pixel = 0.5 GHST worth of voting power (32, 128, 1028)

An alternative would be to give every plot flat voting power based on the auction floor, with a vote afterward allowing for fine-tuning of final voting power amounts while ensuring that all land owners will have a say.

This would give 100, 200, and 1300 GHST worth of voting power to humbles, reasonables, and spacious parcels, respectively.

_CoreProp Edits_

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

- 0-5: 100 GHST each

- 6-15: 200 GHST each

- 16-25: 300 GHST each

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

---
author: Coder Dan
date: '2020-04-23T07:00:00.000Z'
title: 'Aavegotchi Improvement Proposals (AGIPs)'
description: 'A list of Aavegotchi Improvement Proposals (AGIPs) in Year 2022'
contributors: [ "unintelligent-nerd" ]
---

<div class="contentsBox">

**Contents**

<ol>
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
<li><a href=#24h-windows-for-alchemical-channeling>24h Windows for Alchemical Channeling</a></li>
<li><a href=#scheduling-land-auction-raffle--3-for-june>Scheduling Land Auction/Raffle #3 for June</a></li>
<li><a href=#launch-of-rf-szn-4>Launch of RF Szn 4</a></li>
<li><a href=#use-dyst-voting-power-to-support-vqi-qi-on-dystopia>Use DYST voting Power to Support vQi-Qi on Dystopia</a></li>
<li><a href=#change-harvester-recipes>Change Harvester Recipes</a></li>
<li><a href=#aavegotchidao----pixelcraft-studios-1-75m-dai-token-swap>AavegotchiDAO <> Pixelcraft Studios 1.75M DAI Token Swap</a></li>
<li><a href=#delay-the-3rd-land-auction>Delay the 3rd LAND Auction</a></li>
<li><a href=#utilizing-the-channeling--hot-zone->Utilizing the Channeling “Hot Zone”</a></li>
<li><a href=#configure-vp-for-amghst--wapghst--and-all-gltr-staking>Configure VP for amGHST, wapGHST, and all GLTR Staking</a></li>
<li><a href=#stop-new-brs-wearable-emissions-until-further-notice>Stop new BRS Wearable Emissions until further notice</a></li>
<li><a href=#modifying-the-channeling-window>Modifying the Channeling Window</a></li>
<li><a href=#sunsetting-frens-immediately>Sunsetting FRENS Immediately</a></li>
<li><a href=#update-gltr-emissions>Update GLTR Emissions</a></li>
<li><a href=#setting-limits-on-the-number-of-borrowed-gotchis-allowed-per-wallet-address>Setting limits on the number of borrowed gotchis allowed per wallet address</a></li>
<li><a href=#add-dao-liquidity-to-ghst-alchemica-pairs>Add DAO Liquidity to GHST-Alchemica Pairs</a></li>
<li><a href=#mint-and-transfer-50-dao-parcels-and-4m-fud-eq--of-alchemica-to-the-dtf-for-contributor-compensation>Mint and Transfer 50 DAO Parcels and 4M FUD Eq. of Alchemica to the DTF for Contributor Compensation</a></li>
<li><a href=#preventing-owners-from-channeling-gotchis-listed-for-lending>Preventing Owners From Channeling Gotchis Listed For Lending</a></li>
<li><a href=#creating-new-wearable-sets>Creating New Wearable Sets</a></li>
<li><a href=#enacting-a-bonding-curve-emergency-plan>Enacting a Bonding Curve Emergency Plan</a></li>
<li><a href=#the-forge---request-for-funding-and-development>The Forge - Request for Funding and Development</a></li>
<li><a href=#adjust-aaltar-spillover-rates>Adjust Aaltar Spillover Rates</a></li>
<li><a href=#create-aavegotchidao-foundation>Create AavegotchiDAO Foundation</a></li>
<li><a href=#election-for-dao-foundation-s-9-directors-multisig-signers>Election for DAO Foundation’s 9 Directors/Multisig-Signers</a></li>
<li><a href=#rarity-farming-season-5>Rarity Farming Season 5</a></li>
<li><a href=#channel-alchemica-by-burning-kinship>Channel Alchemica by Burning Kinship</a></li>
</ol>

</div>

### Gotchiverse Patch v0.1

**Aavegotchi Improvement Proposal #18**

**Proposal Summary:**

_Problem:_

Although the Gotchiverse is not yet live, we have identified a few areas that we believe should be adjusted before the game is released, and would like to bring these items to the community’s attention for discussion and a decision on whether or not to enact.

To ensure no single proposed change can revert the entire batch, we originally created six separate snapshot SigProp Proposals. This CoreProp combines the successful SigProps into the first Gotchiverse Patch v0.1!

_Solution:_

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

- Reward community engagement and aarcade play
- Reward game developers and designers
- Reward community application developers
- Reward and acknowledge community art contributions
- Reward, acknowledge and grow content creators and general marketing efforts
- Expand Aavegotchi and GHST’s opportunities for decentralized financial applications

The DTF is developing a structured plan and multiple potential pilot projects to best utilize these funds. We will work to develop tools to allow maximum transparency into the budget use. Expenses within this 50,000 GHST budget would not require a DAO approval in order to maximize nimble use of the funds. Any further budget requests beyond the initial 50,000 GHST would require a DAO vote.

The initial 8 members of the DTF

- BowtiedNerd
- Mori
- letsgobankless
- Addison
- Deucehearts
- BackfireCapital
- Swappi
- Dr Wagmi

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

_Problem_

Currently, Rarity Farming Seasons happen sporadically and are difficult to account for in the cadence of Aavegotchi releases. It leaves investors wondering if they should hold onto their Gotchis and Wearables, or if they might find better ROI flipping into the next rounds. It would be desirable to have a bit of certainty / predictability for both investor sentiment and for planning purposes.

_Solution_

If possible funding-wise, Rarity Farming should happen three times a year. It would fit in with the seasonal nature we are already following, and if properly planned could be sustainable based on GBM Sales in-between seasons, Treasury revenue via staking and partnerships (such as the Umbra Bridge proposal), and other streams of revenue such as DAO Grants. The author of this proposal believes Rarity Farming is an essential part of the Gotchiverse ecosystem, and something to build out and improve upon rather than scrap.

_Distribution_

For Season 3, I suggest we go back to the standard reward ratio, as was tried and tested in Rarity Farming Season 1. The rookies of the similarly named rookie board are now all grown up and ready to compete with the big boys. This would mean 70% of payouts go to the BRS leaderboard, 20% to the Kinship leaderboard and 10% to the XP leaderboard.

Based on Forum discussions this would be the final model for SZN3:

- 4 Rounds (2 weeks each)
- 1.5 Million GHST Rewards Pool (1.4m GHST funded already)
- 70% BRS
- 20% Kinship
- 10% XP
- Top 5k Gotchis (20%) → Top 7.5k Gotchis (30%)
- 3 Seasons per Year (approx. schedule below)
- SZN 3: February - March
- SZN 4: June - July
- SZN 5: October - November

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

_What is GoodGhosting?_

GoodGhosting is a no-loss savings game, built on top of Aave. We launched our very first DeFi savings pools on Polygon, during the summer of 2021. So far, we have helped over 7000 users to save over $600k worth of assets on Polygon. All while collecting some nice NFTs and climbing our leaderboard.

The GoodGhosting team believes in a world where saving is rewarding, easy and fun. Yet, traditional saving is none of that. We build decentralized social saving applications that combine game design elements with goal-based saving. We want to help our community to develop better financial habits, and have fun at the same time.

_Potential collaboration_

We want to expose the GoodGhosting community to Aavegotchi, by introducing an Aavegotchi-themed savings pool. This pool will require players to save in GHST tokens, and earn them more GHST on top. We see it as a fun opportunity to cross-pollinate the GoodGhosting and Aavegotchi communities.

Aavegotchi is a one-of-a-kind project we have been keeping a close eye on from the very start. Both as players and as ecosystem residents. In our opinion, it envisions everything that DeFi and Web3 is about 👻

Besides inviting all Aavegotchi users and the DAO itself to participate in the upcoming GHST savings pool, GoodGhosting would like to request the AavegotchiDAO to consider co-sponsoring this pool.

_Our Request_

- A total of 7000 GHST in sponsorship for this savings pool. To be shared between all winning players.
- The ability to reward successful savers with Gotchi XP, or alternatively FRENS. Considering GoodGhosting an extensive mini-game that encourages people to stack more GHST.
- An allocation of Aavegotchi NFTs (worth up to 3000 GHST) to be raffled to random participants and/or to all winners. These could be Wearables, Gotchi’s, Raffle tickets or Realm parcels.

These could either be provided by the AavegotchiDAO, or alternatively purchased by the GoodGhosting team on the Bazaar. For these additional incentives, we hope to provide benefits to a small handful of lucky winners (via a raffle system), and/or a smaller reward that is feasible to be delivered to all winners.

_What can GoodGhosting bring to the table?_

- Up to 4000 WMATIC tokens in sponsorship (from our DeFiForAll grant). To be shared between all winning players.
- An influx of new users into the Aavegotchi ecosystem. So far over 20500 users joined our Celo and Polygon savings pools. Most have not yet been exposed to Aavegotchi or GHST, and many are likely to join the Gotchigang.
- We will create a YouTube video explaining Aavegotchi, and how to obtain the GHST token on Polygon. Directed at our community members.
- We will allow users to play GoodGhosting using their Aavegotchis as avatar. This will show up in the shared ‘Players’ tab, as well as in the individual player profiles on Goodghosting.com
- Some very special NFTs by our in-house artist Mali3D
- An increased GG score for all successful savers

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

_Problem:_

The VRF variance for Alchemica under the ground of parcels (0.2 - 1.8 of average) seems very high to me and could lead to some people getting rekt - see the graphic posted on the Discourse Thread.

A very unlucky spacious owner could get less alchemica than a lucky reasonable owner - which is in my opinion very bad UX, especially considering that it was communicated this wouldn’t be possible. Keep in mind that the first round (quarter) will distribute more Alchemica than the rest of them, so losing big in the first round could set someone back by a lot.

_Solution_

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

- Movement speed removed from trait maps will now lead to an improved quality of life user experience (UX) for all players starting out in the Gotchiverse, both new and old,
- Carrying capacity removed from trait maps corrects the imbalance of 1 farming trait vs. 7 combat traits on NRG, AGG, SPK and BRN,
- There is now a clear distinction between physical and ability specialist (mage) gotchis,
- There is now a clear distinction between melee and ranged gotchis,
- Ethereality can now be thought of as “Luck” and influences evasion, critical strikes, slipping through walls and all sorts of other chance based actions in the Gotchiverse.

_End Goal_

For the community and Pixelcraft to build a trait map together that is balanced, has excellent UX, playability and longevity while simultaneously allowing the flexibility to implement wearable buffs and abilities that work with the traits in the future.

_Risks_

There is potential that some players and investors have already purchased gotchis based on the original trait mappings. It is important to note that these traits were always specified as non-immutable in the Game Bible HOWEVER, we strongly believe the new trait maps proposed here will create even moar diverse and entertaining play styles for OG investors and new players alike to experiment with and enjoy playing.

_Final Important Notes_

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

### 24h Windows for Alchemical Channeling

**Aavegotchi Improvement Proposal #29**

**Proposal Summary:**

As specified in Gotchiverse Bible Chapter 3, solo gotchi channeling will work via a 24 hour cooldown timer that starts immediately after a gotchi channels at an altar. We propose that this be revised to a windowed 24 hour system that runs from 00:00 UTC to 23:59 UTC in which a gotchi can solo channel once, anytime within that 24 hour window.

_TIMELINE_

Proposal to be implemented on or before May 18, 2022 (the commencement date of solo channeling) or as soon thereafter as Pixelcraft can ship...

_RATIONALE_

With the introduction of the 12 hour petting cooldown system a year ago, we have all come to realize that a set interaction time with your gotchi is hard to maintain given real world events, network congestion, family and work commitments. We do not want to repeat this limitation with solo gotchi channeling.

The above limitation has led to the development of automated bots to guarantee interaction efficiency which, arguably, results in lower user engagement. By removing this limitation for solo channeling, it is much more likely that players will organically engage with their gotchi for solo channeling on a daily basis.

Many players have multiple gotchis, multiple parcels and multiple altars spread all throughout the Citaadel. These players have shown amazing support in our community and should not be restricted in their efficiency by a 24 hour cooldown. They should still be able to comfortably channel once per day with all their gotchis when their busy schedules suit.

_BENEFITS_

The 24 hour channeling solution would:
Improve quality of life for gotchi owners,

- Mitigate unfavorable interaction times,
- Mitigate network congestion at interaction time, and,
- Increase daily engagement for time-poor players.

_RISKS_

Proposal implementation date may be delayed if Pixelcraft encounters technical challenges or is otherwise unable to meet the May 18, 2022 implementation date.

Details on the AGIP can be found [here](https://dao.aavegotchi.com/t/giving-gotchi-owners-the-ability-to-reduce-cooldown-time-for-solo-channeling/3107).

Option 1: Yes, once per 24h window

Option 2: No, every 24h interaction

**Voting Period:** 21 - 28 May 2022

**Results:**

table_agip29

[Link to vote on Snapshot](https://snapshot.org/#/aavegotchi.eth/proposal/0xbe89c5f01a02817058d66459cb00a399c45aa8991e29121fb1ca3b0e11e0c84b)

<hr>

### Scheduling Land Auction/Raffle #3 for June

**Aavegotchi Improvement Proposal #30**

**Proposal Summary:**

Land Auction/Raffle #3 Proposal:

- Hold the Auction and Raffle within June
- 8,000 Parcels in total from predominantly districts 1, 6, 13, 23, 24, 25, 26. Parcels from previously auctioned/raffled districts are also included. The exact selection can be seen in the Discussion Thread: [https://dao.aavegotchi.com/t/proposal-for-land-auction-raffle-3-within-1-week-of-citaadel-release/3487/36](https://dao.aavegotchi.com/t/proposal-for-land-auction-raffle-3-within-1-week-of-citaadel-release/3487/36)
- 70% (5,600) of parcels in the auction, 30% (2,400) in the raffle

Proposed Revenue Distribution:

- 40% of Revenue to the Rarity Farming Rewards Pool
- 40% to Pixelcraft Studios
- 20% to the AavegotchiDAO
- 0% Burn

This proposal is synthesized from community feedback over the last few weeks and attempts to balance the following: NFT dilution; an auction/raffle feeling too rushed; inadequate available GHST liquidity; concern for the funding of Rarity Farming Season 4; capitalizing on the momentum and marketing of the full game release. A June Auction will allow >2 weeks of Citaadel gameplay and will allow sufficient time for marketing and business development efforts to capture maximum investment. There is an adequate Gotchiverse Rewards Pool after the first two land auctions, and this sale will help fund RFS4 and perhaps even some of Season 5.

This proposal has been discussed with the Pixelcraft team who support it and feel the target date is feasible.

Details on the AGIP can be found [here](https://dao.aavegotchi.com/t/proposal-for-land-auction-raffle-3-within-1-week-of-citaadel-release/3487/15)

Option 1: Yes, 8k Parcels in June

Option 2: No

**Voting Period:** 21 - 28 May 2022

**Results:**

table_agip30

[Link to vote on Snapshot](https://snapshot.org/#/aavegotchi.eth/proposal/0x658926263e4ce1eca559950bcb0f5d8f203758c5c99b30999bb7f082552695b8)

<hr>

### Launch of RF Szn 4

**Aavegotchi Improvement Proposal #31**

**Proposal Summary:**

In line with the core prop passed via governance on Feb 15th, I’d like to take this moment to formalise the start of rarity farm S4 with the gotchi-DAO.

Since no major changes to the BRS, XP or kinship systems have occurred since the last season and since the passing of the proposal, I suggest we keep parameters equal to what they were for S3.

Following that, this would be the final model for SZN4:

4 Rounds (2 weeks each) 1.5 Million GHST Rewards Pool - to be funded by the land sale of AGIP-30.

- 70% BRS

- 20% Kinship

- 10% XP

- Top 7.5k Gotchis (30%)

In the event where the land sale of AGIP-30 does not lead to a RF pool of 1.5m GHST or higher, I suggest we make the rest of the 1.5m GHST prize pool whole via the DAO treasury as previously discussed in AGIP-23.

The DAO is potentially going to get rebalanced with a lot of GHST due to a recent Pixelcraft-lead proposal for a DAI buyback that might pass governance in the near future, so it would tie in handily to that.

In case you missed it, a short recap for our RF scheduling;

SZN 4 (covered in this core prop): June - July

SZN 5: October - November

SZN 6: February - March 2023

Details on the AGIP can be found [here](https://dao.aavegotchi.com/t/launch-of-rf-szn4/3875)

Option 1: Yes, formally start RF Szn 4

Option 2: No, don't start RF Szn 4

**Voting Period:** 22 - 29 June 2022

**Results:**

table_agip31

[Link to vote on Snapshot](https://vote.aavegotchi.com/#/proposal/0x2ddd04ae165c6f6245f4cdd83abd00bb1644bf78fd6719eae394f9db4e00d910)

<hr>

### Use DYST voting Power to Support vQi-Qi on Dystopia

**Aavegotchi Improvement Proposal #32**

**Proposal Summary:**

The Aavegotchi DAO should use its DYST voting power to support the vQi-Qi pool on DystopiaSwap indefinitely. Any community member can submit an additional signal prop should reallocation be considered.. Indefinite support will avoid overly frequent Sig Prop submissions that are only tangentially related to the Aavegotchi DAO.

_Background:_

Dystopia Swap is an automated market maker with ve(3,3) mechanics which was recently launched on Polygon. They airdropped a big portion of their initial token supply to Polygon dApps including the Aavegotchi protocol, QiDAO, and the GotchiVault. This voting token is used to allocate scheduled rewards similar to QiDAO’s Qi. This means it is up to our Aavegotchi community to decide how to best use our airdropped voting power to support the DeFi aspect for Aavegotchi and GHST. I propose that this voting power be used to support the vQi-Qi pool which secures liquidity and rewards for the ~4M GHST in the vGHST protocol.

A brief overview of why this is good for GHST:

1. GHST users deposit their GHST for vGHST using the GotchiVault (3.83M vGHST exist currently)

2. vGHST can be deposited in QiDAO as collateral for borrowing MAI

3. Qi rewards are paid to borrowers based on a biweekly vote by Qi holders

4. Qi that is staked for 4 years has 4x the voting power- this is known as eQi. vQi is a liquid form of eQi that allows holders to sell the token. vQi voting power is always used for vGHST. 5. The current vQi supply is 833k which means 3.3M eQi voting power.

5. The system requires adequate vQi-Qi liquidity to be sustainable. This vote incentivizes the vQi-Qi pool which will deepen liquidity and create a flywheel effect in increasing vGHST rewards on QiDAO.

6. More rewards for vGHST means more rewards in the hands of the Aavegotchi community

None of the other pools directly benefit GHST holders which is why only vQi-Qi is included in this SigProp (https://www.dystopia.exchange/vote).

Thank you for your support as the GotchiVault runs with the DeFi aspect of our DeFi RPG, seeks to add value to GHST, and solidifies Aavegotchi’s position as a cornerstone of Polygon DeFi and gaming.

Details on the AGIP can be found [here](https://dao.aavegotchi.com/t/use-dyst-voting-power-for-the-vqi-qi-pool/4010)

Option 1: Yes. Vote for vQi-Qi

Option 2: No. Vote for someone else

Option 3: Abstain

**Voting Period:** 22 - 29 June 2022

**Results:**

table_agip32

[Link to vote on Snapshot](https://vote.aavegotchi.com/#/proposal/0x68dc76a5d1069e58f1409d644824044df823c304fc349f85b38ccb0fcd95e4a4)

<hr>

### Change Harvester Recipes

**Aavegotchi Improvement Proposal #33**

**Proposal Summary:**

The original harvester recipes:

- Discourage upgrading parcels beyond levels 3 & 4.

- Are too expensive in cost and punishing in yields at the higher levels.

- Easily allow for the Low Leveloor to extract insanely high yields with very little investment.

- Are too inexpensive from a time-to-build perspective. This diminishes the effectiveness of makers and the utility of GLTR.

After a month and a half of theorising, simulating, and refining MikeyJay, coderdan, letsgobankless, and myself have arrived at a final recipe which we believe best solves the above problem.

The proposed recipe changes to the harvester:

- Promote dynamic gameplay with a multitude of winning strategies

- Make high level harvesters not only viable, but desirable

- Reduces inflation of alchemica

- Handicap the Low Leveloor strategySignificantly increase build time for each installation which promote a healthy GLTR economy. This increase drives more utility to the maaker.

This topic has been discussed at length. For a full understanding, I highly encourage you to read through the [forum thread](https://dao.aavegotchi.com/t/something-aint-right-with-installation-upgrades-resolved-and-in-progress/3715), [simulation results](https://drive.google.com/drive/folders/1WB8L6aEPEdGnEgxcRUD3ysRwko2fjzMU), and recipe changes. The [Bot Strategy](https://github.com/mikey-jay/realm-simulator#readme) provides insight into how the simulation bots operated.

_Associated Risks_

Given the amount of time invested in recreating this recipe, there are few contingencies.

The reduction in alchemica inflation also means a reduced ROI (in terms of alchemica, not necessarily \$$$)

Details on the AGIP can be found [here](https://dao.aavegotchi.com/t/something-aint-right-with-installation-upgrades-resolved-and-in-progress/3715)

Option 1: Yes, Change the Recipes

Option 2: No, Keep Things the Same

**Voting Period:** 22 - 29 June 2022

**Results:**

table_agip33

[Link to vote on Snapshot](https://vote.aavegotchi.com/#/proposal/0x599754e6bf5a683d0a44aadbcad78df0522bdeb448437ff79c70b6077408fe58)

<hr>

### AavegotchiDAO <> Pixelcraft Studios 1.75M DAI Token Swap

**Aavegotchi Improvement Proposal #34**

**Proposal Summary:**

_Summary_

This proposal aims to swap 1.75 million DAI from AavegotchiDAO’s treasury with an equal value of GHST from Pixelcraft Studios’ balance sheet.

_Rationale_

The launch of the Gotchiverse has introduced new and increasing infra costs for Pixelcraft Studios that cannot be paid for in GHST (or any crypto for that matter). These costs primarily consist of usage of AWS and Redis Enterprise for real-time gameplay in the Gotchiverse, and will continue to scale up as the game gets more popular.

To pay for these costs, we have outlined several options:

- Raise funding from VCs

- Liquidate GHST into DAI and swap for fiat

- Use GHST as collateral on Aave to take loans in DAI

- Perform a token swap with AavegotchiDAO

We believe Option 4 (Token Swap) is the best available option at the moment. We strongly value our independence from VCs, prefer not to have debt on our balance sheet, and do not want to market sell GHST acquired from sales.

Therefore, we propose a token swap between AavegotchiDAO and Pixelcraft Studios to ensure adequate fiat runway for several years of further development, no matter how bearish the market becomes.

_Key Details_

At the time of this writing, AavegotchiDAO treasury holds roughly:

- 2.5 Million DAI

- 3.5 Million GHST

- 3 Million Alchemica
  (Live source here: [AavegotchiDAO Treasury Balance](https://aavegotchi.com/treasury))

Pixelcraft Studios, on the other hand, is heavily skewed toward GHST with over 6.7 Million GHST in our primary revenue wallet while our only DAI is coming from [the curve’s monthly 150k DAI faucet](https://aavegotchi.medium.com/vote-before-you-move-to-matic-stop-over-at-aavegotchidao-cb394134f357), 50k of which is already earmarked for GHST purchases.

Pixelcraft Studios has been able to effectively grow the team and support infrastructure costs without needing to liquidate any significant amount of GHST. But last month’s launch of the Gotchiverse and anticipated continued growth has pushed operating costs dramatically higher. Server costs for the April playdrop, for example, exceeded 40k USD, and that is projected to grow in the months ahead.

Such operating expenses are anticipated but we have to acknowledge that these subscriptions and invoices almost always insist on trad banking (fiat). We would prefer to not have to sell GHST in order to achieve the necessary growth budget.

The DAO’s revenue from the GHST bonding curve opens up the possibility of a large-scale exchange of assets between our two parties. With the game live, GHST off its all time highs, and a DAO treasury that is well established, we believe this is the right time to propose an OTC token swap.

For the purposes of this token swap, a valuation for GHST that all can agree on must be established. There are many ways to arrive at such, so in the interest of expediency, I am proposing an intuitive method that also tips the scale generously in the DAO’s direction:

_GHST valuation methodology_

Pixelcraft Studios has calculated GHST’s average price from Tuesday, June 14 to Saturday, June 18 (duration of the SigProp via CoinGecko) with a 5% discount applied to the final price: USD 1.28. If DAO voters find the results agreeable, they may vote to approve this CoreProp.

_Execution_

If the CoreProp passes, the token swap should process in a predictable way. I suggest the token swap occur with the following method of execution:

- Pixelcraft Studios shall first transfer the agreed upon amount of GHST (defined in the CoreProp) to the AavegotchiDAO treasury wallet.

- AavegotchiDAO treasury wallet (currently managed via multisig by Pixelcraft team) shall transfer 1.75 million DAI within 8 hours of receiving the GHST to the Pixelcraft Studios primary revenue wallet.

- Pixelcraft Studios shall make an announcement in Aavegotchi Discord confirming the reception of the DAI, thus concluding the token swap.

Details on the AGIP can be found [here](https://dao.aavegotchi.com/t/token-swap-1-75m-dai-from-aavegotchidao-for-ghst-from-pixelcraft-studios/3769)

Option 1: Yes, perform a swap of 1.75M DAI

Option 2: No, don't perform a token swap

**Voting Period:** 22 - 29 June 2022

**Results:**

table_agip34

[Link to vote on Snapshot](https://vote.aavegotchi.com/#/proposal/0xe9ceb07837c7b04420f33fb324c220694241c84ffd6bb50c2651e3376326adb3)

<hr>

### Delay the 3rd LAND Auction

**Aavegotchi Improvement Proposal #35**

**Proposal Summary:**

We are fast approaching the end of June when the LAND 3 auction/raffle is scheduled for based on the AGIP-30 core prop. However, since this core prop was started (20th May) a lot of things have changed:

- Harvester release has been delayed

- We are in the middle of a bloodbath in the markets

- LAND prices have dropped 30-70%

- LAND bazaar volume has dropped 90%

- There's been huge selling pressure on alchemica prices

Due to these significant changes in the market, its seems right to allow the DAO to have another emergency vote on whether to go ahead with the LAND auction or not as releasing an auction in this market is very likely to drive down assets prices across the ecosystem.

Coderdan confirmed it is viable to stop the auction but we must act quickly frens:

My thoughts are that it's generally not ideal to do a token sale in the middle of a market bloodbath as we are currently experiencing. Assets from all sectors of crypto are down, not just Aavegotchi. We are actually holding fairly strong in comparison.

However, the DAO has voted to do this sale, and it passed overwhelmingly, so the DAO will also need to vote to delay it."

Details on the AGIP can be found [here](https://dao.aavegotchi.com/t/delay-the-3rd-land-auction/4063)

Option 1: Yes, delay LAND 3 Release

Option 2: No, continue as planned

**Voting Period:** 22 - 29 June 2022

**Results:**

table_agip35

[Link to vote on Snapshot](https://vote.aavegotchi.com/#/proposal/0xf614634f7b1864d19ea144dd68280df6c3cb3e514e2e20929767e6ccd2f4022c)

<hr>

### Utilizing the Channeling “Hot Zone”

**Aavegotchi Improvement Proposal #36**

**Proposal Summary:**

There has been a lot of heated discussion about bots, scholars, spillover and more. A lot of it completely misses the point though, at least in my opinion. I went more in-depth on why I don't believe botting to be the primary problem at the moment in a comment [here](https://dao.aavegotchi.com/t/keeping-the-status-quo-of-disabled-spillover-for-a-while/3845/172).

So I started playing around with the numbers for spillover radius & rate, but I just couldn't find a satisfying solution. Reducing them only by a bit would barely have an effect, while reducing them drastically would devalue high level Aaltars. When I went through the blog post on channeling radius it finally clicked though! The mechanic was right there, just not utilized to its full potential (or at all really): The Hot Zone.

It became obvious pretty quickly that the Hot Zone wasn't so hot after all. The name simply implied that statistically speaking, 10% of the spillover would spawn inside of the inner 10% radius, 20% inside of the inner 20%, etc. This results in a slightly higher drop rate closer to the parcel, but in reality it barely makes a difference (only a single digit % of all spillover spawns in the "Hot Zone"). I want to propose allocating a fixed % of the spilled Alchemica based on Aaltar level.

Combined with a proposed radius of 60 Gotchis (compared to the 64x32 measurements of a Spacious), dropping a larger amount of Alchemica inside of the Hot Zone would suddenly make spillover feel much more like actual spillover instead of a random token drop around the map.

Imo this would:

- Create an interesting mechanic around the concept of spillover (as seen in the OG trailer)

- Add an incentive for players to pick up their spilled tokens instead of channeling & logging off (and writing off the spillover completely)

- Reduce the advantage of bots, since picking up spillover becomes less of a grinding & more of a channeling mechanic

- Overall make the Gotchiverse in its current form more interesting

Lastly, I would like to note one thing. This proposal suggests introducing the Hot Zone mechanic as soon as spillover is resumed. However, the reverse is not the case. This proposal is not a vote to turn spillover back on, I merely believe it to be one piece in the larger puzzle.

Details on the AGIP can be found [here](https://dao.aavegotchi.com/t/utilizing-the-channeling-hot-zone/4055)

Option 1: Yes, use the proposed model

Option 2: No, don't change anything

**Voting Period:** 22 - 29 June 2022

**Results:**

table_agip36

[Link to vote on Snapshot](https://vote.aavegotchi.com/#/proposal/0xd610a038fb70717cefa788332d6cfbfd4504723fa2b33dc5689b542752da3cde)

<hr>

### Configure VP for amGHST, wapGHST, and all GLTR Staking

**Aavegotchi Improvement Proposal #37**

**Proposal Summary:**

As we have now launched GLTR staking and most of us have moved our liquidity from the FRENS pools to the GLTR pools, it is time to make those pools officially part of the voting power.

The VP would be as follows, which is simply a continuation of how we have done everything on the FRENS staking side-

The affected pairs and tokens to be added, are as follows -

- amGHST(GHST staked on Aave)

- wapGHST (unstaked, staked on FRENS side, or staked on GLTR side)

- stkGHST-USDC (not added on GLTR side yet)

- stkGHST-MATIC (not added on GLTR side yet)

- stkGHST-GLTR

- stkGHST-FUD

- stkGHST-FOMO

- stkGHST-ALPHA

- stkGHST-KEK

VP is calculated as follows -

- amGHST, wapGHST - 1 VP per token

- All supported pairs that receive GLTR rewards - 1 VP per GHST staked, calculated at time of Snapshot. Again, this is simply a continuation of how we have treated GHST and staking in the past.

Details on the AGIP can be found [here](https://dao.aavegotchi.com/t/vp-for-wapghst-alchemica-lps-and-glitter-lps/4106)

Option 1: Yes, do it

Option 2: No, don't

**Voting Period:** 3 - 10 August 2022

**Results:**

table_agip37

[Link to vote on Snapshot](https://vote.aavegotchi.com/#/proposal/0x9923aab6825158ec2503d88e3ee2f9c5fbb12000581d06343ac9829aa59b66a6)

<hr>

### Stop new BRS Wearable Emissions until further notice

**Aavegotchi Improvement Proposal #38**

**Proposal Summary:**

_Problem_

Over the lifespan of Aavegotchi, we've endured many wearable dilution events which have negatively impacted our community by:

- Loss of investor confidence (and investors)

- Depreciation of asset values

- No known schedule for releases, resulting in uncertainty in the markets

- In bullish conditions, new wearables would be released, capping our upside growth

It makes sense to have a wearables budget. Something the whole community can see and investors can easily digest. A cap based on total live gotchis was proposed, but in truth it does not accurately depict the true usage of assets.

The community by and large agrees on a budget, however at this moment in time, we don't have the metrics or data to create one. This budget is likely going to come from data such as daily active users (once PvP is live).

_Proposal_

This proposal is simple and straightforward:

1. No new BRS-based wearables until the DAO votes on a budget

2. That budget will be developed at a later date once the data is available

The idea is to restore investor confidence and allow us to sleep a bit easier at night, knowing that our assets will not suffer from spontaneous dilution.

Note: this proposal does not include aesthetic wearables, new set creations, or set rebalances (such as Link Marine)

_Associated Risks_

I don't see any potential risks for this proposal.

Details on the AGIP can be found [here](https://dao.aavegotchi.com/t/setting-a-fixed-cap-on-new-wearables/4211)

Option 1: Yes, stop new wearables

Option 2: No, keep things as is

**Voting Period:** 3 - 10 August 2022

**Results:**

table_agip38

[Link to vote on Snapshot](https://vote.aavegotchi.com/#/proposal/0xec282bd937a1d85a17726cc00711b78e2fc2f0125ff9af127ddb77497dd024e5)

<hr>

### Modifying the Channeling Window

**Aavegotchi Improvement Proposal #39**

**Proposal Summary:**

After trying out the 24 hour channeling window, many people were displeased with the results that it achieved.

Issues with the current system include extra server load from Midnight to 1 UTC, the creation of a "prime time" where there is a short window of time where most alchemica is spilled, and problems caused by needing to channel a gotchi before putting it on the market(we do not have the full action control lists yet).

The goal of this sig prop, is to give quality of life improvements to Gotchi owners with creating an exploitable mechanic or causing undue server loads or other issues.

The proposed solutions are to either to A) revert to the original implementation, as presented in the Gotchiverse Bible, B) Leave the system as is and let the issues resolve themselves over time, or C) Keep the current system, but add a feature that lets you burn glitter to move your gotchi(s) channeling window reset time forward by one block, per glitter spent.

The implementation, would be that we are given a way to adjust one or all gotchis channeling window, by spending GLTR to move the window forward one block per GLTR spent. It will only be possible to move the time forward, and you can only do this, if the gotchi(s) are currently able to channel.

The risks associated with this are that there will be unintended consequences, as always.

Details on the AGIP can be found [here](https://dao.aavegotchi.com/t/giving-gotchi-owners-the-ability-to-reduce-cooldown-time-for-solo-channeling/3107)

Option 1: Revert to the original solution

Option 2: Keep the current solution

Option 3: Use GLTR to move channeling

**Voting Period:** 26 August - 2 September 2022

**Results:**

table_agip39

[Link to vote on Snapshot](https://vote.aavegotchi.com/#/proposal/0xb41fe70a12f107d9dc8f0c8aa0346b53d9c35866a5e71ce717253f02ba4ddd7b)

<hr>

### Sunsetting FRENS Immediately

**Aavegotchi Improvement Proposal #40**

**Proposal Summary:**

I propose that we cease FRENS emissions immediately. FRENS emissions have been used as a liquidity mining (LM) incentive by providing GHST holders and liquidity providers access to future content through the raffle system. While this was an initially effective tool for LM, it is now doing more harm than good. Outlined below and in the forum thread are the reasons why Aavegotchi should sunset FRENS:

- Eliminating FRENS will reduce Aaveogotchi protocol pressure to hold dilutional events by eliminating ongoing “content debt” created by FRENS emissions

- GHST has alternative staking utility with GLTR liquidity mining

- Shifting focus to alchemica/GLTR pairs reallocates LM rewards to asset holders who are more directly providing value to the ecosystem in the form of liquidity vs single-sided GHST staking which provides limited and historically overcompensated value

- Future content events can generate protocol revenue instead of paying out content debt. This allows for a more sustainable revenue stream for Pixelcraft and the Aavegotchi DAO

- The value of future content can be captured on-chain with GLTR/Alchemica/GHST instead of off-chain with FRENS

- Capturing on-chain value of the above native assets will significantly add utility to all tokens

- Current FRENS and raffle ticket holders must be acknowledged with raffle(s). There are multiple avenues for this which are outlined in the DAO forum thread. The community can design and publicize events to utilize these FRENS which will be an easier task if we stop further emissions and narrow the scope of the raffle with cessation of FRENS’ emissions.

There will be an additional signal proposal outlining changes to GLTR emissions to support liquidity provision for the GHST token specifically. While the bonding curve is in place, it is important that a sustainable GHST liquidity plan is in place that captures and rewards LPs fairly and sustainably.

Details on the AGIP can be found [here](https://dao.aavegotchi.com/t/sunset-frens-by-october-1st/4255)

Option 1: Sunset FRENS immediately

Option 2: Taper FRENS w/ end date of 10/1

Option 3: Keep FRENS as they are

**Voting Period:** 26 August - 2 September 2022

**Results:**

table_agip40

[Link to vote on Snapshot](https://vote.aavegotchi.com/#/proposal/0x9d8fa69132f66ad8e665549cff91c08de8687a72d2702cb66cd41dbb877f09f7)

<hr>

### Update GLTR Emissions

**Aavegotchi Improvement Proposal #41**

**Proposal Summary:**

I propose that we alter GLTR emissions to optimize GHST liquidity and support the sunsetting of FRENS as outlined in the “Sunset FRENS" proposal.

The above proposal and this one will accomplish the following:

- Retire the GHST-QUICK liquidity pool liquidity mining rewards (currently FRENS)

- Retire the GHST-WETH liquidity pool mining rewards (currently FRENS)

- Retire the GHST-MATIC liquidity pool mining rewards (currently FRENS + GLTR)

- Add 5% weight to the GHST-USDC LM rewards (taken from GHST-MATIC) for a total of 20%

- This consolidation will maximize our most successful pool in GHST-USDC. It will eliminate rewards for unpopular pools and help grow our most successful pool. The GHST-WETH pair was borne from the Dinoswap pool which is a failed project. The GHST-MATIC pair is the only one on SushiSwap which is an inactive exchange on Polygon. Neither project offers ongoing LM incentives. The increase in GHST-USDC LM rewards is necessary to offer compensation for the impermanent loss risk incurred by the pair, otherwise single-sided staking for wapGHST will be prioritized and not afford further depth in the GHST-USDC pool. Below is the chart with highlighted changes to GLTR emissions and resultant estimated APYs.

Details on the AGIP can be found [here](https://dao.aavegotchi.com/t/sunset-frens-by-october-1st/4255)

Option 1: Yes. Increase USDC remove MATIC.

Option 2: No. Leave emissions unchanged.

**Voting Period:** 26 August - 2 September 2022

**Results:**

table_agip41

[Link to vote on Snapshot](https://vote.aavegotchi.com/#/proposal/0x304df0644d5ba0c929066959c5a2d585a2597630fa90a4642ffe8315e256d31a)

<hr>

### Setting limits on the number of borrowed gotchis allowed per wallet address

**Aavegotchi Improvement Proposal #42**

**Proposal Summary:**

Until recently there have been no limits on the number of gotchis an address can borrow at the same time, either from a whitelist or from the open (non whitelisted) market.

This was recently changed to a limit of 1 borrowed gotchi on the open market and 1 by default on all whitelists. A whitelist owner can change the number of allowed borrowed gotchis per address using Louper Dev, and soon, through the official UI.

This change was put in place with no warning as an experiment in anti botting measures. Community members had reported difficulty in securing a gotchi to borrow for channelling, particularly around the 0:00UTC reset time, which has been attributed to bots scraping all the best rental offers before humans get a chance.

The change has so far seen Gotchigang report an increase in available gotchis to borrow around reset time which is a positive.

On the negative side, other Gotchigang have reported being unable to fully channel their aaltars due to not being able to rent enough gotchis. This is particularly for borrowers who’ve paid, say, 20ghst for a long term rental and are now stuck with that 1 gotchi and are unable to channel other parcels using other borrowed gotchis. This issue will tend to grow over time as people level up their aaltars and generate more channelling opportunities. The current limit on the open market is a disincentive to levelling up aaltars and purchasing more land for those without enough gotchis who prefer longer term rentals. It could also severely limit the demand for lending out gotchis long term, however it forces people to approach multiple guilds/whitelist owners for spots which is a positive for the social element of the game.

A poll was run in the weekly DAO Hangout by CoderDan with the results suggesting most community members would prefer the allowed number of borrowed gotchis on the open market to reflect the number of parcels a wallet address holds plus 1, so in theory each parcel could be channelled once per day whilst still holding longer term rentals. For single channel rentals this is less of a concern as people can return a gotchi and borrow another as soon as they’ve finished using it.

Further increasing the borrowing limit up to the number of available channellings per address was suggested by considering aaltar levels as well, but it was deemed too inefficient to be constantly recalculating this number dynamically in the background.

As this was an experiment, I propose we revert these changes back now and continue to monitor the impacts so we can be clearer on the severity of the botting issue and be more confident in the effectiveness of this solution, whilst voting to implement the below.

Details on the AGIP can be found [here](https://dao.aavegotchi.com/t/reform-public-rental-market/4089)

Option 1: Limit market to # of parcels + 1

Option 2: Keep original unlimited system

Option 3: Unlimited open, limit whitelists

Option 4: Limit open market to 1

**Voting Period:** 26 August - 2 September 2022

**Results:**

table_agip42

[Link to vote on Snapshot](https://vote.aavegotchi.com/#/proposal/0x9b2559ed4cd5dd0c4c3c9b90b73e0e93c839aef64cd00df2d65cc8e97886ac0f)

<hr>

### Add DAO Liquidity to GHST-Alchemica Pairs

**Aavegotchi Improvement Proposal #43**

**Proposal Summary:**

I propose that the Aavegotchi DAO add 50,000 GHST + matching alchemica liquidity to the GHST-Alchemica pairs. Further, I propose that we do not stake corresponding LP tokens for GLTR.

The benefits of adding liquidity are multiple:

- Allows for lower slippage trading which will attract more trading and investment

- Legitimizes the Aavegotchi ecosystem, its farming, and the native tokens

- Supports land investors and, more specifically, those actively farming their land

- Allows the DAO to earn trading fees on the liquidity provided

There are also some risks which should be considered:

- Impermanent loss may decrease the net dollar value of DAO treasury funds

- Asks a difficult question of whether or not to stake LP tokens for GLTR and compete directly against community stakers for rewards

- Paying for liquidity is an expense in our ecosystem. In the long term, revenue must outweigh expenses for the Aavegotchi economy to thrive and assets to gain value. We should seriously consider our expenses vs revenues moving forward as we incentivize liquidity, hence the recent passed proposal to terminate FRENS which will both decrease expenses and allow NFT distributions to generate revenues

There is currently only $732,000 TOTAL in liquidity among the four alchemica-GHST pairs. Anything above a 1500 GHST swap has a price impact >1% which is not acceptable for a GameFi blue chip looking to instill investor confidence and attract new, large builders. Let’s bolster liquidity now and develop a sustainable and predictable plan to continue to add DAO liquidity at an, ideally, expense neutral rate. We can partner with the incoming DAO Project Manager(s) and community bounty hunters to further define DAO revenues and expenses to formulate our liquidity plan.

Details on the AGIP can be found [here](https://dao.aavegotchi.com/t/add-dao-liquidity-to-ghst-alchemica-pairs/4309)

Option 1: Add 50k GHST + equal alchemica

Option 2: Add 30k GHST + equal alchemica

Option 3: Do not add GHST/alchemica to LPs

**Voting Period:** 13 - 20 October 2022

**Results:**

table_agip43

[Link to vote on Snapshot](https://vote.aavegotchi.com/#/proposal/0x57055266d44a9c8679807c917fb0518bfd3ea92e6f21e81b977ce9892c191b6a)

<hr>

### Mint and Transfer 50 DAO Parcels and 4M FUD Eq. of Alchemica to the DTF for Contributor Compensation

**Aavegotchi Improvement Proposal #44**

**Proposal Summary:**

I propose that 50 DAO parcels from district 30 be minted and sent to the DTF multisig in addition to 4M FUD Equivalents worth of alchemica.

This will allow us to leverage DAO assets other than GHST to compensate our contributors. We have a variety of assets as a protocol, some of which have considerable goodwill value such as parcels in the DAO district. We can leverage these assets to better compensate and acknowledge past, current, and prospective contributors. Parallel to this effort, a transparent, stepwise process towards earning a DAO parcel will be designed. Potential pros of using alchemica/minted NFT displays/parcels as compensation:

- Gives the DAO more options in reimbursing contributors

- Leverages assets outside of GHST

- Develops and promotes a contributor/builder culture specifically inside the gotchiverse

- May have potential cascade effect where contributors build and develop their earned parcels, keeping assets within the ecosystem

- Fosters building and development in the DAO district which should hopefully be a spotlight of activity in the gotchiverse.

An example of contributor compensation would be a DAO parcel with a LE NFT display and custom NFT – an incredibly meaningful and valuable token of appreciation for DAO contributions.

The specific parcels will be defined in the core proposition if this signal proposition passes. Feedback and ideas on specific parcel allocation is appreciated and should be directed to the included DAO discourse thread above. If the DTF is absorbed by the new DAO structure, the parcels and alchemica can be sent to the same multisig holding the DTF budget funds.

Details on the AGIP can be found [here](https://dao.aavegotchi.com/t/requesting-alchemica-and-30-dao-parcels-for-the-dtf-to-use-as-contributor-compensation/4401)

Option 1: Yes. Transfer Parcels/alchemica

Option 2: No. Don't use parcels/alch.

**Voting Period:** 13 - 20 October 2022

**Results:**

table_agip44

[Link to vote on Snapshot](https://vote.aavegotchi.com/#/proposal/0x1338064afddf6631e90e1a95d12117cf516e5de54e00eb557db5996845f75f47)

<hr>

### Preventing Owners From Channeling Gotchis Listed For Lending

**Aavegotchi Improvement Proposal #45**

**Proposal Summary:**

The idea here is fairly simple. To prevent gotchi owners from channeling their gotchis while they are listed for rent on the aavegotchi site. The reason for this is that we saw at least a few instances of owners listing their gotchis for rent then immediately after channeling. What would happen was that an unexpecting player would check the rental market after the gotchi was rented but before it got channeled and would then be stuck renting a channeled gotchi. The owner would get the channeling alchemica as well as the rental fees from the borrower.

This hasn’t been a widespread issue yet because not many people are maliciously doing it, it also needs to be timed well with someone checking the rental market at the wrong moment. But I don’t believe there is any benefit to allowing owners the ability to make use of this exploit.

As per Dan on the thread, the implementation is ready so it won’t require anymore dev time, there just happened to be some minor pushback on this idea so the devs don’t want to implement it without a vote.

Details on the AGIP can be found [here](https://dao.aavegotchi.com/t/preventing-gotchis-listed-for-rental-from-being-able-to-channel/4388)

Option 1: Stop listed Gotchi from channeling

Option 2: Do nothing

**Voting Period:** 2 - 10 November 2022

**Results:**

table_agip45

[Link to vote on Snapshot](https://vote.aavegotchi.com/#/proposal/0xfa99468d3de270ad12ae805651cae5b7a2a52ac3f1e0ff547308c6c7055ee040)

<hr>

### Creating New Wearable Sets

**Aavegotchi Improvement Proposal #46**

**Proposal Summary:**

During the new wearables moratorium, the opportunities to fix existing sets and to introduce new sets involving ONLY current wearables were identified.

The "broken" sets were successfully fixed via patch, and different members of the community put forth their suggestions for new wearable sets. Existing Pixelcraft guidelines for the composition and bonuses of each wearable set, mainly based on the rarity of the highest component, were applied.

In the referenced forum link, polls were established for all members of the community to be able to express their support for a particular set.

The spreadsheet with details for all proposed sets is available at: [https://docs.google.com/spreadsheets/d/174ea8dzcO3yiBOgCvAIdUuQkK5_AHG3FoZdMunAJZYY](https://docs.google.com/spreadsheets/d/174ea8dzcO3yiBOgCvAIdUuQkK5_AHG3FoZdMunAJZYY)

The ideation Discord thread where the ideas for the sets were brainstormed can be referenced at: [https://discord.com/channels/732491344970383370/992288286271864832/1002569658634862602](https://discord.com/channels/732491344970383370/992288286271864832/1002569658634862602)

It was decided by consensus that Pixelcraft would retain ultimate veto and decision power in the ultimate implementation of these sets. At large, this effort has been also a means to share with the broader Aavegotchi DAO public how the process has previously worked between WTF and Pixelcraft i.e. a volunteer-dependent process, that nonetheless can achieve great things for the ecosystem by harnessing the different talents and creativity of all of our frens.

Details on the AGIP can be found [here](https://dao.aavegotchi.com/t/new-wearable-sets-existing-wearables-only/4421)

Option 1: Yes, create new sets

Option 2: No, don't do anything

Option 3: Abstain

**Voting Period:** 2 - 10 November 2022

**Results:**

table_agip46

[Link to vote on Snapshot](https://vote.aavegotchi.com/#/proposal/0x4955553b76b9bcaaa0bb0cec2928d0bed759cf957c17f02496452f8d1426c85c)

<hr>

### Enacting a Bonding Curve Emergency Plan

**Aavegotchi Improvement Proposal #47**

**Proposal Summary:**

There is a lot of uncertainty concerning the regulation of decentralized smart contracts (Tornado Cash) and stablecoins. Since GHST is closely tied to DAI's value, we need to monitor those developments very closely. If anything happens to DAI, our entire treasury (and GHST's stability) is at risk.

In this proposal I want to define the potential cases of emergency and the actions the multisig currently managing the GHST Bonding Curve on Ethereum mainnet needs to take to mitigate risks. Again, as long as DAI works as intended, this proposal does not suggest messing with the Curve - that is a completely separate discussion.

_Emergency Scenarios_

1. DAI loses dollar peg: As long as USDC backing is intact, no action needed. Signers should however set alerts for $0.95 and $0.90 to be notified of a potential depeg so they're able to act immediately as the situation unrolls.
2. MakerDAO shifts away from a dollar backing: Very long-term strategic consideration, will probably take 2-3 years to unfold. No immediate action needed, more relevant for the discussion surrounding a general Curve shutdown.
3. This is the important one. MakerDAO contracts get blacklisted by Circle (USDC) due to regulatory reasons: Signers would have to act immediately to protect the value of GHST's backing. I propose immediately shutting down the Curve and swapping the DAI for USDC. This ensures that we lock in some of our treasury's value, it does however remove the main source of liquidity for GHST. To make sure GHST doesn't enter a free fall, $5M worth of USDC should immediately be paired with $5M worth of treasury GHST in our main Quickswap pool.

Using the current numbers, this would leave us with ~$18M USDC - the majority of which should be used to buy back the paired GHST and build up a larger LP position. The initial LP position would double our current pool and buy enough time to decide on next steps.

Keep in mind that this is a very unlikely emergency scenario. We should be prepared for everything though, getting caught with our pants down could wipe out a large sum of our treasury value and put GHST in a very vulnerable position.

Details on the AGIP can be found [here](https://dao.aavegotchi.com/t/bonding-curve-emergency-plan/4397)

Option 1: Yes, follow this Emergency Plan

Option 2: No, ignore this Emergency Plan

**Voting Period:** 2 - 10 November 2022

**Results:**

table_agip47

[Link to vote on Snapshot](https://vote.aavegotchi.com/#/proposal/0x73f93b7e65d0e45f5cce9e46b019d60f49a7a3d1b43bf9e3e12a718cccbe7769)

<hr>

### The Forge - Request for Funding and Development

**Aavegotchi Improvement Proposal #48**

**Proposal Summary:**

Introducing the Forge:

TL;DR

- You can turn wearables into other wearables with the forge mechanic

- Wearables are made of alloys + schematics (the recipe) + Frames

- This allows many new wearable designs

- This process can be deflationary, making room for new wearable sales and protecting current asset value

- This 50,000 GHST will go to fund the development of the Forge, its mechanics, smart contracts, art, and educational materials

- The goal is for the DAO to do as much of the work as possible to avoid delaying Pixelcraft’s other efforts

- See the Project Overview and Google Sheet documents for extensive details

- Know that this is all a work in progress and we would all benefit from broad DAO contributions

_Budget Request and Purpose:_

50k GHST to pay for development of smart contract work, economics team, project management, art bounties, dashboard bounties, and event/rewards for launch

Details on the AGIP can be found [here](https://dao.aavegotchi.com/t/the-forge-aalloys-essence-and-smithing-a-massive-proposal/4432)

Option 1: Yes, fund the Project 50k GHST

Option 2: No, don’t fund development

**Voting Period:** 2 - 10 November 2022

**Results:**

table_agip48

[Link to vote on Snapshot](https://vote.aavegotchi.com/#/proposal/0x3f162f96d0bf396cb2cc3f9f39818cbaee7747441e0c50785b84aa243797b940)

<hr>

### Adjust Aaltar Spillover Rates

**Aavegotchi Improvement Proposal #49**

**Proposal Summary:**

There's been a lot of debate in the DAO this week around alchemica inflation. It's clear that our economy cannot handle the amount of tokens being currently issued. Therefore, we have come up with a proposal to increase spillover rate in lower level aaltars to help reduce the amount of alchemica being issued and encourage frens to upgrade their aaltars. We believe this will stabilize the economy until more alchemica sinks are introduced in the eagerly anticipated combat release.

The table in the Discourse thread shows the Daily FUD inflation rate caused by chanelling, broken down by aaltar level. You can see the current inflation levels and spillover rates, our new proposed spillover rates and the reduction in inflation this will cause.

We believe these measures are necessary given current economic conditions but we are always free as a DAO to change them at a later date in light of new information or more alchemica sinks being introduced.

Details on the AGIP can be found [here](https://dao.aavegotchi.com/t/alternative-alchemica-economic-plan/4490)

Option 1: Change to Proposed Aaltar Rates

Option 2: Do Nothing

**Voting Period:** 11 - 19 November 2022

**Results:**

table_agip49

[Link to vote on Snapshot](https://vote.aavegotchi.com/#/proposal/0x534f44397f79c8583ceef44e42ffa8e246e15f3498aac92b3e34b65c313782f3)

<hr>

### Create AavegotchiDAO Foundation

**Aavegotchi Improvement Proposal #50**

**Proposal Summary:**

AavegotchiDAO was summoned as a 100% on-chain DAO in September 2020 via the deployment of the GHST bonding curve. Since then, the DAO has matured into one of the world’s most active with over forty successful AGIPs passed and extremely healthy metrics on Snapshot. Over this period we also graduated across our DAO’s roadmap, going from DAO 1.0 into the more experimental period known as Cocoon, our precursor to Metamorphosis (AKA DAO 2.0). Achieving Metamorphosis requires the DAO to further decentralize and accept more responsibilities currently guarded by the original summoners and Pixelcraft Studios.

Today we propose the next major step forward by suggesting it is time for AavegotchiDAO to add an off-chain presence to our decentralized autonomous organization. The following proposal is rooted in months of research and interfacing with a variety of legal advisors. We also take the practices of leading peers such as ENS and Sushi into consideration, opting for Foundation formation in the Cayman Islands coupled with on-chain governance being secured as primary via the Foundation’s Constitution.

My proposal is for us to form the AavegotchiDAO Foundation in the Cayman Islands as soon as possible by following these steps:

- Gather all interested in serving as one of nine Directors on the Foundation. These nine Directors simultaneously are seated on the Foundation’s newly formed multisig wallet. All serving must be KYC’d.

- Host election via Snapshot where the nine most voted for shall serve as Directors of the Foundation until further notice (The DAO should likely flesh out details for term length etc with a separate AGIP at a later date). The election shall happen in parallel to this proposal’s CoreProp.

- Submit the nine fully KYC’d Directors details to our legal counsel from LEX DAO so that they can immediately begin Foundation formation. This will be completed in days, not weeks.

- Upon formation of the Foundation, the Directors shall create the new Foundation’s primary multisig using Gnosis.

- Pixelcraft Studios shall transfer DAO Treasury multisig funds to the Foundation multisig, including DAI, GHST, and Alchemica on both Ethereum and Polygon networks.

- The Foundation is thus formed, ready to execute transactions according to the will of AavegotchiDAO. Further definitions of responsibilities, scope, goals and limits can be defined by the DAO at a later date.

**FOUNDATION DETAILS**

_Entity_

- A Cayman Islands foundation with a board consisting of 9 Directors, who are also the multisig signers of the DAO Treasury wallet.

- Legal Counsel shall arrange a local officer to act as secretary fulfilling basic administrative requirements until further notice.

- Legal Counsel shall arrange a local corporate secretarial service to assist with Foundation formation, documentation and production of financial statements.

_DAO Treasury_

- All DAO treasury funds present and future shall be transferred to the Board’s multisig.

- The GHST Bonding Curve Council tokens could potentially also be transferred to the multisig signers, via a new AGIP proposal.

- Eventually, all protocol contracts could be owned by this multisig, or if that is deemed not ideal, could be owned by the DAO itself (onchain voting) with the Board multisig action as a last resort Guardian to prevent malicious transactions.

_Bank Account_

Upon formation of the Foundation, legal counsel will confer with our corporate secretary to establish a Cayman Island’s bank account on the Foundation’s behalf. While not immediately useful, we have requested that this bank account be opened so as to futureproof the DAO to be able to natively settle any off-chain expenses (tradfi subscription fees, service providers, etc).

_Board of Directors_

Consists of nine doxxed Directors that also act as multisig signers on the DAO Treasury multisig. The DAO Treasury multisig shall be set at 5/9 signers in order to execute.

Paid position starting at 8000 GHST per year, paying 2000 GHST to each Directory directly from the Treasury multisig every 90 days.

The Board acts as the executor of the DAO’s wishes. If individual Directors disagree with an action of the DAO, they can choose to resign but they cannot vote or act against a verified on-chain AGIP’s intent.

Candidates should:

- Be upstanding members of AavegotchiDAO with good reputations

- Be familiar with smart contract interactions

- Possess a hardware wallet and know how to use it

- Be willing to have your name on a Cayman entity and be doxxed to Pixelcraft Studios

- (Nice to have) Be familiar with creating transactions and signing on Gnosis Safe

_The Officer_

The Foundation also requires at least one Officer to serve an official capacity for signing off-chain documentation. Legal offers a package to deliver one local Officer to fulfill this role. This is not a role for advocacy so this Officer will simply execute signatures at the direction of the Directors. Of course, AavegotchiDAO can always revisit or even expand Officer roles at any point.

_The Constitution_

Legal Counsel will draft and supply a first version of a Constitution that takes best practices from fellow DAOs into consideration. Counsel will submit this Constitution in the form of a commentable Google Sheet for our community to give feedback and suggest changes.

Counsel and the DAO shall go back and forth in up to three drafts before the Constitution is sent to Snapshot for a three-day CoreProp regarding ratification.

If ratification fails, another two drafts shall be edited before re-submitting for another CoreProp vote. This process continues until a ratification of the Constitution is achieved.

Due to the critical nature of this CoreProp and the fact that it skips the SigProp step, the CoreProp vote shall require a voting result with those in approval at 66% or greater.

_Benefits of Formation_

- Independence; greater separation of Pixelcraft Studios from AavegotchiDAO

- Board can execute proposals on behalf of the DAO (Liquidity provision, GHST staking, funding Dework, etc.)

_Risks of Formation_

- More responsibility on AavegotchiDAO governance

- More exposure to any future policy shifts specifically in the Cayman Islands jurisdiction

Details on the AGIP can be found [here](https://dao.aavegotchi.com/t/form-aavegotchidao-foundation-with-9-directors-multisig-signers/4551)

Option 1: Yes, let’s form AavegotchiDAO Foundation

Option 2: No, let’s wait and discuss more

**Voting Period:** 27 November - 4 December 2022

**Results:**

table_agip50

[Link to vote on Snapshot](https://vote.aavegotchi.com/#/proposal/0x345ddec87f19d29b438ac88d0f947798af6edadbe1116cb64f96edc931f06fb3)

<hr>

### Election for DAO Foundation’s 9 Directors/Multisig-Signers

**Aavegotchi Improvement Proposal #51**

**Proposal Summary:**

This COREProp Will serve as the election for the AavegotchiDAO Foundation’s 9 Directors/Multisig-Signers.

The board of Directors Consists of nine doxxed Directors that also act as multisig signers on the DAO Treasury multisig. The DAO Treasury multisig shall be set at 5/9 signers in order to execute.

Director is a paid position starting at 8000 GHST per year, paying 2000 GHST to each Director directly from the Treasury multisig every 90 days.

The Board acts as the executor of the DAO’s wishes. If individual Directors disagree with an action of the DAO, they can choose to resign but they cannot vote or act against a verified on-chain AGIP’s intent.

Directors have no legislative power, execute off-chain commands of the DAO, and simultaneously serve as signers of the Foundation's gnosis multisig.

Their first order of business once elected will be creating that multisig.

Candidates should:

- Be upstanding members of AavegotchiDAO with good reputations

- Be familiar with smart contract interactions

- Possess a hardware wallet and know how to use it

- Be willing to have your name on a Cayman entity and be doxxed to Pixelcraft Studios

- (Nice to have) Be familiar with creating transactions and signing on Gnosis Safe

The following community members have signaled their interest in becoming AavegotchiDAO Foundation Directors:

- CryptoGotchi#9089

- Maxicrouton#1596

- Mori#5912

- Nofuturistic#1972

- Zaunzi#1831

- PG#0811

- MichaelF#0901

- yanik#0015

- Choyna#0001

- Rikige#0073

- fifoooo#8782

- cookheisenberg#9322 (SirLinkiest)

- notorious_BTC#2084

- brillz#7019

- Mycaleum#8283

- 0xzfi#4880

- Zeitgeist#6030

- Umami#9686

- Mcabandonpants#1498

- Kokusho#9945

Details on the AGIP can be found [here](https://dao.aavegotchi.com/t/form-aavegotchidao-foundation-with-9-directors-multisig-signers/4551)

Please read each of their pitches before casting your vote at: [https://discord.com/channels/732491344970383370/1042466123574157382/1042466123574157382](https://discord.com/channels/732491344970383370/1042466123574157382/1042466123574157382)

Option 1: CryptoGotchi#9089

Option 2: Maxicrouton#1596

Option 3: Mori#5912

Option 4: Nofuturistic#1972

Option 5: Zaunzi#1831

Option 6: PG#0811

Option 7: MichaelF#0901

Option 8: yanik#0015

Option 9: Choyna#0001

Option 10: Rikige#0073

Option 11: fifoooo#8782

Option 12: cookheisenberg#9322 (SirLinkiest)

Option 13: notorious_BTC#2084

Option 14: brillz#7019

Option 15: Kokusho#9945

**Voting Period:** 27 November - 4 December 2022

**Results:**

table_agip51

[Link to vote on Snapshot](https://vote.aavegotchi.com/#/proposal/0x1b8438ec161f2b18dad49ebfcc9524340d030f4ec69a5fd71f732290ccb51bb4)

<hr>

### Rarity Farming Season 5

**Aavegotchi Improvement Proposal #52**

**Proposal Summary:**

Gm frens,

I come to you bearing the anticipated S5 sigprop!

In the spirit of “if it ain’t broke don’t fix it”, I propose we keep things business as usual, since I believe our community has been having a bit of "change fatigue" of late - please refresh yourselves on the params of the past four seasons below:

4 Rounds (2 weeks each) 1.5 Million GHST Rewards Pool - to be funded by the DAO Treasury:

- 70% BRS

- 20% Kinship

- 10% XP

Top 7.5k Gotchis (30%)

Ideal launch period in the mind of the author: after the deployment of The Forge, or January 2023, whichever comes first.

Thank you as always for your consideration and your votes.

Stay spooky frens!

Changes from Sigprop:

The author has agreed that the next Rarity Farming Season should come after the deployment of The Forge, or January 2023, whichever comes first.

The source of funds has been updated from Gotchiverse Player Rewards wallet to DAO treasury.

Details on the AGIP can be found [here](https://dao.aavegotchi.com/t/rf-szn-5-kickoff/4424)

Option 1: Yes, have S5 RF

Option 2: No, Don’t have S5 RF

Option 3: Yes, but with different params

**Voting Period:** 27 November - 4 December 2022

**Results:**

table_agip52

[Link to vote on Snapshot](https://vote.aavegotchi.com/#/proposal/0x84119ecd3be2cd0fd2382ffaf2db0490967b3456ff19695e6629fdeeb9058dbb)

<hr>

### Channel Alchemica by Burning Kinship

**Aavegotchi Improvement Proposal #53**

**Proposal Summary:**

I propose to charge -4 kinship each time gotchi is channelling the altar.

This change gives a gotchi a choice to:

(1) accumulate kinship (+2 kinship /day) and improve the character farming specs

(2) take alchemica now and lose on the yield multiplier

By implementing this elegant and relatively simple solution, we are not only changing the alchemica dynamics and cutting the efficient inflation by 50% (in the wild should be closer to 60/40 or 40/60, depending on market conditions), but also making a game more strategic and exciting for long term players.

Such change is an excellent alternative to the current economic proposals and additionally will reduce the MATIC spend for channelling in half.

Details on the AGIP can be found [here](https://dao.aavegotchi.com/t/kinship-og-kinship-economical-proposal/4524)

Option 1: Implement original kinship mechanics

Option 2: Do not implement

**Voting Period:** 27 November - 4 December 2022

**Results:**

table_agip53

[Link to vote on Snapshot](https://vote.aavegotchi.com/#/proposal/0xfb3766f05a6990514c618db06c2a74d8fd36298694740799e2dd23424a297115)
---
author: Coder Dan
date: '2020-04-23T07:00:00.000Z'
title: 'AavegotchiDAO'
description: 'All about AavegotchiDAO'
image: "icons/dao.svg"
contributors:
  - "vanilladelphia"
  - "cinnabarhorse"
  - "hackingmoneyph"
---

<div class="headerImageContainer">
<img class="headerImage" src="/dao/dao.png">
<p class="headerImageText">The AavegotchiDAO Crest</p>
</div>

A [DAO](glossary#dao) is a decentralized form of governance, which allows token holders to vote in order to shape the way the organization makes decisions.

Aavegotchi follows in the footsteps of successful DeFi protocols such as Compound and Synthetix by following a process of “gradual decentralization”, beginning with the founding team, Pixelcraft Studios organizing a DAO-governed token distribution event (DAICO) and culminating in placing governance of Aavegotchi, including all game mechanics, smart contracts, and funding, under the auspices of the AavegotchiDAO, but subject always to the prevailing regulatory environment. This will be accomplished in three phases.

<div class="contentsBox">

** 목차 **

<ol>
<li><a href=#genesis>Genesis</a></li>
<li><a href=#cocoon>Cocoon</a></li>
<li><a href=#metamorphosis>Metamorphosis</a></li>
<li><a href=#oasis>Oasis</a></li>
<li><a href=#participating-in-governance>Participating in Governance</a></li>
<li><a href=#aavegotchidao-forum>AavegotchiDAO Forum</a></li>
<li><a href=#type-of-proposals>Type of Proposals</a></li>
<li><a href=#vote-differentials>Vote Differentials</a></li>
<li><a href=#creating-signal-proposals>Creating Signal Proposals</a></li>
<li><a href=#voting>Voting</a></li>
<li><a href=#aavegotchi-improvement-proposals--agips->Aavegotchi Improvement Proposals (AGIPs)</a></li>
<li><a href=#treasury>Treasury</a></li>
</ol>

</div>

## Genesis

*See* [DAICO](https://wiki.aavegotchi.com/curve/#aavegotchi-daico).

The first iteration of AavegotchiDAO was launched in tandem with the GHST token distribution event. GHST token holders had the power to vote on increasing / maintaining the funds distributed by the tap mechanism of the [token bonding curve (TBC)](/curve) reserve to Pixelcraft Studios (the team behind Aavegotchi) to support development. This initial proposal of raising the tap from 50,000 DAI to 100,000 DAI per month passed with 99% approval on 18 October 2020. When the time comes to migrate to AavegotchiDAO Metamorphosis, token holders will also vote to perform the migration.

Token holders will not receive rewards in GHST for active participation in this iteration of AavegotchiDAO.

Features for Genesis include:

* No smart contract calls
* No contract upgrades
* GHST token based governance
* Platform: Aragon
* Rewards: None
* Layer: Ethereum Mainnet

## Cocoon

V1.5 of AavegotchiDAO. The intermediate point between [Genesis](/dao#genesis) and [Metamorphosis](/dao#metamorphosis). The priority for the Cocoon stage is to influence game mechanics.

Its features include:

* Contract calls called by Pixelcraft
* No contract upgrades
* GHST token based governance
* Platform: Snapshot/Discourse
* Rewards: [XP](/traits#experience) for Core Votes
* Layer: Polygon

There are 2 types of voting in the Cocoon stage: (1) Signal Proposal, and (2) Core Proposal.

A Signal Proposal can be posted by anyone to the Community tab on [Snapshot](https://snapshot.org/#/aavegotchi.eth). These votes are non-binding, but if quorum is achieved, the proposal will automatically be upgraded into a binding Core Proposal. Before you come up with a Signal Proposal, it is mandatory to discuss it with the community on Discord and/or [Discourse/AavegotchiDAO Forum](https://dao.aavegotchi.com/). The rationale is to ideate further and to discover whether there is worthy support to move forward with the Signal Proposal. Please follow the template found in the [Creating Signal Proposals section](/dao#creating-signal-proposals).

The Signal Proposal will be upgraded to a Core Proposal once the former passes with a quorum reaching 20% of circulating GHST eligible to vote on Polygon at the time of proposal creation.

A Core Proposal is a proposal that Pixelcraft puts forward, with options based on Signal Proposals that reached or nearly reached quorum. These votes are binding and are eligible for XP rewards to participants.

If your Signal Proposal is successfully upgraded to a Core Proposal, 150 [XP](/traits#experience)* will be given to the Aavegotchi you have noted in your Signal Proposal.

*May increase or decrease throughout COCOON period

## Metamorphosis

Metamorphosis is the second iteration of AavegotchiDAO, and is charged with managing simple game mechanics of Aavegotchi, such as the total supply of Aavegotchis, adding new collaterals, deciding on their functions, and adding new wearables created by the community. When the time comes to migrate to AavegotchiDAO Oasis, the AavegotchiDAO will again vote to perform the migration.

A full list of actions available to perform by the AavegotchiDAO in this phase is available in the [Governance](https://docs.aavegotchi.com/overview/governance) section of the Aavegotchi smart contract documentation.

Token holders will receive rewards in the form of GHST for active participation in this iteration of AavegotchiDAO.

Its features include:

* Can execute smart contract calls
* Can upgrade certain mechanics
* Aavegotchi + GHST governance
* Platform: Custom dapp front-end
* Rewards: [XP](/traits#experience) + badges for voting
* Layer: Polygon

## Oasis

Although AavegotchiDAO Oasis is the final iteration of AavegotchiDAO’s evolution, it is only the beginning of the realization of a DAO-governed game. All decisions related to Aavegotchi game mechanics, REALM mechanics, ecosystem spending, and even smart contract upgrades will be voted on by the AavegotchiDAO.

Token holders will receive rewards in GHST for active participation in this iteration of AavegotchiDAO.

Its features include:

* Can execute smart contract calls
* Can upgrade certain mechanics
* Aavegotchi + GHST governance
* Platform: Aavegotchi Realm
* Rewards: [XP](/traits#experience) + badges for voting
* Layer: Polygon

## Participating in Governance
I'm psyched up! So how do I participate in the AavegotchiDAO? Fren, we got you covered!

* You can participate in the discussions in the [AavegotchiDAO forum](https://dao.aavegotchi.com/) or the #🌱dao-discussion channel on Discord. We welcome everyone!

* Taking part in AavegotchiDAO votes (when they are available!)

* The [Aavegotchi Docs](https://docs.aavegotchi.com/overview/governance) details the list of DAO functions that members can call/use in order to implement changes that have been voted in. For example, let's say that asUSD has been voted in as a [collateral type](/posts/atokens). AavegotchiDAO could implement the change by using the `addCollateralTypes()` function and specifying asUSD within the function.

## AavegotchiDAO Forum

The AavegotchiDAO Governance Forum is powered by Discourse. Having this forum will help centralize discussion on important topics related to Aavegotchi game mechanics, funding requests, and other proposals.

We hope that #GotchiGang can become a model for DAO-owned games in the future, so get involved and remember to be frenly to your fellows.

The Forum can be found [here](https://dao.aavegotchi.com/).

## Type of Proposals

There are 2 types of proposals in the *Cocoon* stage:

* **Signal Proposal** — A proposal that can be posted by anyone. These votes are non-binding, but if quorum is achieved, the proposal will automatically be upgraded into a binding Core Proposal. Share your proposal idea and discuss it with other community members on the #🌱dao-discussion channel on Discord or on the [AavegotchiDAO Forum](https://dao.aavegotchi.com/). Once you have finalized the details of your proposal, create an official thread for it on the AavegotchiDAO forum using the framework outlined in the [Creating Signal Proposals](/dao#creating-signal-proposals) section below. After which, create a vote for it on [Snapshot](https://snapshot.org/#/aavegotchi.eth).

* **Core Proposal** — If a Signal Proposal achieves 20% or greater quorum (amount of circulating GHST eligible to vote on Polygon), Pixelcraft will reintroduce the proposal as a Core Proposal. These votes are binding and are eligible for [XP](/traits#experience) rewards to participants.

<img class = "bodyImage" src = "/dao/proposal-type.png" alt = "AavegotchiDAO Proposal Type" />

**Core Proposals** are further subdivided into 3 types:

*Reminder: Quorum percentages are calculated from the amount of circulating GHST eligible to vote on Polygon, not the total supply!*

* **Smol votes:** Quorum of 5%. These votes are intended for small decisions that do not affect the overall meta or value of existing Aavegotchis in any significant way (e.g. introduction of a cosmetic feature, proposal for a marketing strategy).

* **Medium votes:** Quorum of 10%. These votes are intended for decisions that may have some notable effect on the meta (e.g. introducing a new game item, allocating XP to some item or event, changing something about an Aavegotchi that does not affect its rarity score).

* **Galaxy votes:** Quorum of 20%. These votes are intended for major decisions that have significant effects on the meta and wider Aavegotchi ecosystem (e.g. a new Haunt, changing something about an Aavegotchi that affects its rarity score).

## Vote Differentials

Vote differentials are the difference between the top two options, and are indicative of whether or not a reasonable consensus has been achieved.

Here is an example Core Proposal with 3 options:

* Option A receives 25%
* Option B receives 35%
* Option C receives 40%.

The required Vote Differential is 5% (the difference between Option C [40%] and Option B [35%]).

This would not be enough to achieve consensus, thus the Proposal is not implemented.

Typically, the more options a vote has, the higher Vote Differential it requires to demonstrate that true consensus has been reached.

For COCOON, we will begin with the following Vote Differential parameters, and course correct if necessary:

2 Options — 10% VD

3 Options — 15% VD

4 Options — 20% VD

## Creating Signal Proposals

To create signal proposals for the #GotchiGang to vote on, please adhere to the following format:

* Author + GotchiID
* Link to the matching Discourse thread (Proposals without significant discussion in the forum will be automatically removed from Snapshot)
* Summary (include rationale, timeline, goals and any key performance indicators) Copy/paste proposals of existing proposals will be removed while proposals with similar but distinct variations are permitted to exist side by side.
* Effect
* Highlight end goal and benefits
* Acknowledge potential risks or unintended consequences
* Any alternative paths (Plan B, Plan C, etc)
* The end time of a proposal should not be longer than 30 days from its starting time, to ensure that only active proposals are displayed on Snapshot Community board.

More details can be found in this [Medium post](https://aavegotchi.medium.com/scaling-aavegotchidao-c7e589de0333).

## Voting

There are two ways to vote: (1) Snapshot Voting, and/or (2) Aragon Voting.

### Snapshot Voting

Snapshot is a voting DApp on Ethereum. Votes made on Snapshot does not require any gas and are not on-chain. Aavegotchi's Snapshot page can be found [here](https://snapshot.org/#/aavegotchi.eth).

To vote on Snapshot, follow the steps below:

1). Go to an open proposal.

2). Connect your wallet.

<img class = "bodyImage" src = "/dao/snapshot1.jpg" alt = "Snapshot Voting Ethereum" />
<img class = "bodyImage" src = "/dao/snapshot2.jpg" alt = "Snapshot Voting Ethereum" />

3). Select a poll option, and click "Vote." A pop-up will appear to confirm your choice.

<img class = "bodyImage" src = "/dao/snapshot3.jpg" alt = "Snapshot Voting Ethereum" />
<img class = "bodyImage" src = "/dao/snapshot4.jpg" alt = "Snapshot Voting Ethereum" />

4). Your Metamask will pop up. Sign the transaction, and you're done!

<img class = "bodyImage" src = "/dao/snapshot5.jpg" alt = "sign transaction on Snapshot Voting" />

### Aragon Voting

Aragon is a tool for creating and participating in decentralized organizations on Ethereum. Votes made on Aragon requires gas and exists on-chain.

Aavegotchi's Aragon page can be found [here](https://client.aragon.org/#/aavegotchi/0xf63e1edbcb3be8d5fb124f4a228f5412f48e5ae7/).

To vote on Aragon, follow the steps below:

1). Go to an open proposal.

2). Connect your wallet.

<img class = "bodyImage" src = "/dao/aragon1.jpg" alt = "Aragon Voting Ethereum" />

3). Choose to vote "Yes" or "No."

<img class = "bodyImage" src = "/dao/aragon2.jpg" alt = "Aragon Voting Ethereum" />

4). A Metamask transaction will pop-up. Take note that your transaction has to be mined to be confirmed, so consult a site like [gasnow](https://gasnow.org/) for the latest gas price.

5). Once your transaction is mined, your vote will be reflected accordingly.


<img class = "bodyImage" src = "/dao/aragon3.jpg" alt = "Aragon Voting Ethereum" />

## Aavegotchi Improvement Proposals (AGIPs)

See those votes on Aragon? They are Aavegotchi Improvement Proposals (AGIPs)!

Visit the [Aavegotchi Improvement Proposals](/aavegotchi-improvement-proposals) page for a list of historical votes. If you'd like to be informed of future proposals, follow [Aavegotchi on social media](/socialmedia).

Vote on AGIPs and get [POAP badges](/poap) for it!

## Treasury

AavegotchiDAO earns 0.3% of all trades on the Aavegotchi [Bonding Curve](/curve) on Ethereum Mainnet. This is the current source of all DAO funds.

As responsible stewards, members of AavegotchiDAO will play a role in determining how these funds are to be allocated.

The AavegotchiDAO treasury is located [here](https://aavegotchi.com/treasury).
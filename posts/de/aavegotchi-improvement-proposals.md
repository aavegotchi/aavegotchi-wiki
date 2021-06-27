---
author: Coder Dan
date: '2020-04-23T07:00:00.000Z'
title: 'Aavegotchi Improvement Proposals (AGIPs)'
description: 'Eine Liste der Aavegotchi Improvement Proposals (AGIPs)'
contributors:
  - "unintelligent-nerd"
---

Hallo zusammen. An Aavegotchi Improvement Proposals (AGIPs) teilnehmen ist das, was verantwortungsvolle Gotchis tun! Du musst wählen gehen und deine Stimme einbringen.

Wie weit sind wir als Community schon gekommen? Schau dir hier unser Archiv der vergangenen Abstimmungen an!

<div class="contentsBox">

**Inhalte**

<ol>
<li><a href=#tap-increase-for-scaling-sprint>Erhöhung des Taps für den Scaling-Sprint</a></li>
<li><a href=#add-fees-to-bonding-curve>Hinzufügen von Gebühren zur Bonding Curve</a></li>
<li><a href=#increase-daico-tap-for-ghst-purchases>Erhöhung des DAICO-Taps für GHST-Käufe</a></li>
<li><a href=#proposal-for-haunt-2>Vorschlag für Haunt 2</a></li>
<li><a href=#give-unique-non-transferable-background-to-haunt-1-aavegotchis>Einzigartiger, nicht-transferierbarer Hintergrund für Haunt 1 Gotchis</a></li>
<li><a href=#add-fee-on-baazaar-to-support-rarity-farming>Hinzufügen einer Baazaar-Gebühr für Rarity Farming</a></li>
<li><a href=#earn-xp-for-successful-signal-proposals>XP für erfolgreiche Signal Proposals verdienen</a></li>
<li><a href=#voting-power-based-on-brs>Stimmgewicht basierend auf BRS</a></li>
<li><a href=#voting-power-based-on-wearables--maall-price>Stimmgewicht basierend auf den Maall-Preisen von Kleidungsstücken</a></li>
<li><a href=#partnership-between-aavegotchidao--pixelcraft--and-dinoswap>Partnerschaft zwischen AavegotchiDAO, Pixelcraft, und DinoSwap</a></li>
<li><a href=#name-of-aavegotchi-marketplace>Name des Aavegotchi-Marktplatzes</a></li>
<li><a href=#eligibility-of-ghst-usdc-lp-tokens-to-earn-frens>Eligibility of GHST-USDC LP tokens to earn FRENS</a></li>
<li><a href=#portals-purchased-in-one-transaction>Portals purchased in one transaction</a></li>
</ol>

</div>

### Erhöhung des Taps für den Scaling-Sprint
**Aavegotchi Improvement Proposal #1**

**Zusammenfassung des Vorschlags:** Die GHST Bonding Curve ist seit fast einem Monat live und damit kommt die erste Gelegenheit für GHST-Halter, den DAICO Tap Mechanismus anzupassen. AavegotchiDAO 1.0 basiert auf der Aragon-Plattform und funktioniert wie ein unkomplizierter DAICO, bei dem GHST-Halter einmal im Monat darüber abstimmen können, den Geldfluss zum Kernteam über den Tap zu erhöhen oder zu verringern. Der Tap liefert DAI direkt aus der GHST Bonding Curve, wo derzeit über 7.5 Millionen DAI gesichert sind.

Wir bitten die Aavegotchi-Community um eine Abstimmung, um den Tap von 50K DAI / 30 Tage auf 100K DAI / 30 Tage zu erhöhen. 50k DAI reichten nicht aus, um alle erreichten Meilensteine (Community-Wachstum, GHST Token, Spielentwicklung) abzudecken und der nächste Sprint ist noch ehrgeiziger. Die programmierten Beschränkungen des AavegotchiDAO 1.0 begrenzen diesen Vorschlag auf eine Erhöhung der DAI um nur 50k für die Abstimmungsperiode in diesem Monat. Daher haben wir unsere Strategie mit einem Gesamt-DAI-Tap von 100k im Hinterkopf geplant.

Das Budget sieht vor, die zusätzlichen 50k DAI in 4 verschiedene Kategorien aufzuteilen:
* Ein Fonds für Spielehersteller, damit wir die Bedingungen mit wichtigen Spieleentwicklern festigen können.
* Zusätzliche Verträge für Schlüsselpositionen in Marketing, Design und Entwicklung.
* Ein Marketing-Boost, der dafür sorgt, dass die Präsenz von Aavegotchi ausgebaut wird.
* Community-Belohnungen, damit wir weiterhin Programme (wie die Aartists- und Aapprentices-Teams) entwickeln können, die Anreize für die Inspiriertesten in unserer Community schaffen.

**Abstimmungszeitraum:** 15. - 19. Oktober 2020

**Ergebnis:**

table_agip1

[Link zur Abstimmung über das Aragon UI](https://client.aragon.org/#/aavegotchi/0xf63e1edbcb3be8d5fb124f4a228f5412f48e5ae7/vote/0/)

<hr />

### Hinzufügen von Gebühren zur Bonding Curve
**Aavegotchi Improvement Proposal #2**

**Zusammenfassung des Vorschlags:** Die Bonding Curve ist die Hauptquelle der Liquidität von GHST. Grosse Spieler im Markt können derzeit ohne Gebühren kaufen und verkaufen.

Unser Market Maker bietet die Möglichkeit, Gebühren für Kauf- und Verkaufsaufträge zu erheben.

Mehrere Community-Mitglieder haben vorgeschlagen, Gebühren von bis zu 0.3% für den Kauf und Verkauf durch die Curve zu erheben.

Dies ist möglich, indem wir die `updateFees` Funktion auf unserer Bonding Curve aufrufen, aber sollten wir das tun? Es liegt an euch, dem AavegotchiDAO.

Alle verdienten Gebühren würden automatisch an die DAO Treasury Adresse 0xffe6280ae4e864d9af836b562359fd828ece8020 überwiesen und als Vermögen des AavegotchiDAO betrachtet werden.

**Abstimmungszeitraum:** 18. - 21. Januar 2021

**Ergebnis:**

table_agip2

[Link zur Abstimmung über das Aragon UI](https://client.aragon.org/#/aavegotchi/0xf63e1edbcb3be8d5fb124f4a228f5412f48e5ae7/vote/1/)

<hr />

### Erhöhung des DAICO-Taps für GHST-Käufe
**Aavegotchi Improvement Proposal #3**

**Zusammenfassung des Vorschlags: ** Spielerbelohnungen und Liquiditätsanreize sind entscheidend, um das Aavegotchi Ökosystem auf ein Level zu heben, auf dem es sich durch Handelsvolumen und wirtschaftliche Aktivität selbst tragen kann.

Immer wenn GHST im Aavegotchi Ökosystem ausgegeben wird, werden 33% davon automatisch an eine Burn Adresse geschickt. Im Gegensatz zu den meisten Kryptowährungen senkt das Verbrennen von GHST (ausser über die Bonding Curve) nicht tatsächlich den Gesamtwert von GHST, da dieser Wert als DAI innerhalb der Bonding Curve gespeichert wird.

Durch das Verbrennen wird DAI in der Bonding Curve gefangen, wodurch sich der Reservesatz mit der Zeit erhöht, was den Preis von GHST stabilisiert.

Um das Verbrennen zu kompensieren (was GHST letztendlich zu einem Stablecoin machen könnte), raten wir der Community, den Tap auf 150'000 DAI pro Monat zu erhöhen. Dies wird dazu beitragen, die Reserve der Bonding Curve auszugleichen und gleichzeitig zusätzliche 50'000 DAI pro Monat bereitzustellen, die in Spielerbelohnungen und Liquiditätsanreize fliessen werden.

**Abstimmungszeitraum:** 18. - 21. Januar 2021

**Ergebnis:**

table_agip3

[Link zur Abstimmung über das Aragon UI](https://client.aragon.org/#/aavegotchi/0xf63e1edbcb3be8d5fb124f4a228f5412f48e5ae7/vote/2/)

<hr />

### Vorschlag für Haunt 2
**Aavegotchi Improvement Proposal #4**

**Zusammenfassung des Vorschlags: ** 10'000 Portale sind wohl nicht genug, um die aktuelle Nachfrage nach Aavegotchis zu befriedigen. Darum könnte es notwendig sein, einen neuen Haunt einzurichten. So wird sichergestellt, dass alle, die teilnehmen wollen, ein Aavegotchi besitzen können. Dieses Core Proposal bietet vier verschiedene Optionen, die von Community-Mitgliedern vorgeschlagen wurden - einschliesslich einer Option, keinen neuen Haunt einzurichten.

Details zum AGIP gibt es [hier](https://aavegotchi.medium.com/vote-when-haunt-2-making-haunts-more-unique-d975cbda4772).

Option 1: Kein neuer Haunt, Erneuter Versuch in einem Monat

Option 2: 10K Portale, 100 GHST, 1 pro txn

Option 3: 25K Portale, 100 GHST, 5 pro txn (mit strenger "Ape Tax")

Option 4: Vorverkauf, bei dem jedes Wallet 1 Portal für 100 GHST kaufen kann. Wenn der Vorverkaufszeitraum endet, werden alle Portale geminted und an ihre Besitzer übertragen.

**Abstimmungszeitraum:** 17. - 24. März 2021

**Ergebnis:**

table_agip4

**Stimmenunterschied nicht erfüllt. Vorerst kein Haunt 2!**

[Link zur Abstimmung auf Snapshot](https://snapshot.org/#/aavegotchi.eth/proposal/QmNqRry73rWXb9tdyHummihcK58ga83Ru15AJRF3beFJ35)

<hr />

### Einzigartiger, nicht-transferierbarer Hintergrund für Haunt 1 Gotchis
**Aavegotchi Improvement Proposal #5**

**Proposal Summary:** Many players are worried that Haunt 2 will be too similar to Haunt 1 and the newly-created Haunts will devalue the “Genesis” Haunt. One of the suggestions is to give special backgrounds to each Haunt to make them easily identifiable. This proposal has seen excellent discussion and significant support on the associated Snapshot. Note that irrespective of the DAO’s decision on this issue, all Aavegotchis will be getting special non-transferable "Haunt" badges that identify their Haunt. This proposal focuses specifically on the idea of a non-transferable background that can be equipped in the Aavegotchi’s BG wearable slot.

Details zum AGIP gibt es [hier](https://aavegotchi.medium.com/vote-when-haunt-2-making-haunts-more-unique-d975cbda4772).

Option 1: Only Haunt 1 should get a special background

Option 2: Each Haunts should have it’s own unique background

Option 3: Neither, leave it as is

**Abstimmungszeitraum:** 17. - 24. März 2021

**Ergebnis:**

table_agip5

[Link zur Abstimmung auf Snapshot](https://snapshot.org/#/aavegotchi.eth/proposal/QmfBrnUmfsX57vXWchr1mUNkqMWNeF6edEqdQq11MCvMHJ)

<hr />

### Hinzufügen einer Baazaar-Gebühr für Rarity Farming
**Aavegotchi Improvement Proposal #6**

**Proposal Summary:** With the announcement of SZN1 Rewards now official, we explore how to align the community's interests and rewards structures, as it pertains to Baazaar fees.

Currently, 2% is allocated to Pixelcraft and 1% to DAO treasury. While not exclusive of providing for RF rewards, the treasury funds are currently in no obligation to be allocated in any form of ratio towards the RF pool each season. The proposal aims to increase the Baazaar fees from 3% to 3.5%, with the additional 0.5% going directly to the Rarity Farming rewards pool.

Details on the AGIP can be found [here](https://aavegotchi.medium.com/core-proposal-agip6-add-0-5-fee-on-baazaar-to-support-rarity-farming-5bf923c7f528).

Option 1: Yes, increase fees from 3 to 3.5

Option 2: No, leave the fees as they are

**Voting Period:** 7 - 13 April 2021

**Ergebnis:**

table_agip6

[Link zur Abstimmung auf Snapshot](https://snapshot.org/#/aavegotchi.eth/proposal/QmPUueFJwpCz6rBiucnBYPLxTv2tetzxXWwCi2gSQFMJMW)

<hr />

### XP für erfolgreiche Signal Proposals verdienen
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

**Ergebnis:**

table_agip7

[Link zur Abstimmung auf Snapshot](https://snapshot.org/#/aavegotchi.eth/proposal/QmctiApzKZHoVsSpzWVfMVL1abRTUNXsoipupNGS52gEuZ)

<hr />

### Stimmgewicht basierend auf BRS
**Aavegotchi Improvement Proposal #8**

**Proposal Summary:** Add Voting Power for Aavegotchis held in a voter’s address, at a rate of 1 GHST per BRS (base rarity score, not including equipped wearables).

Details on the AGIP can be found [here](https://aavegotchi.medium.com/vote-agip8-and-agip9-give-voting-power-to-aavegotchis-and-wearables-9c113373a0a2).

Option 1: Yes, give Voting Power to Aavegotchi based on BRS

Option 2: No, Aavegotchis shouldn’t have Voting Power

**Voting Period:** 11 - 17 June 2021

**Ergebnis:**

table_agip8

[Link zur Abstimmung auf Snapshot](https://snapshot.org/#/aavegotchi.eth/proposal/QmZnzgvkEzHvwkYPGLFQLtVvvoMzBXPWhznux1udHzbUim)

<hr />

### Stimmgewicht basierend auf den Maall-Preisen von Kleidungsstücken
**Aavegotchi Improvement Proposal #9**

**Proposal Summary:** Add Voting Power for Wearables held by Aavegotchis and in the voting address.

Details on the AGIP can be found [here](https://aavegotchi.medium.com/vote-agip8-and-agip9-give-voting-power-to-aavegotchis-and-wearables-9c113373a0a2).

Option 1: Yes, give Voting Power to Wearables based on Maall Price

Option 2: No, Wearables shouldn’t have Voting Power

**Voting Period:** 11 - 17 June 2021

**Ergebnis:**

table_agip9

[Link zur Abstimmung auf Snapshot](https://snapshot.org/#/aavegotchi.eth/proposal/Qmat7jeAS1W3BBq7yDi2jkHjNoywmUEfrF2FdPiS9CcGHa)

<hr />

### Partnerschaft zwischen AavegotchiDAO, Pixelcraft, und DinoSwap
**Aavegotchi Improvement Proposal #10**

**Proposal Summary:** Some community members are worried about the waning liquidity of GHST on Quickswap and their gradually decreasing LP rewards. Rather than simply allocating more liquidity to the pool, we are considering partnering with a soon to launch liquidity aggregator called DinoSwap. The terms include a total of 200k USD worth of GHST tokens to be allocated to their incentivized “extinction pools”, the details of which are fleshed out below.

Details on the AGIP can be found [here](https://dao.aavegotchi.com/t/ghst-liquidity-rewards-on-new-launch-pixelcraft-dao-collaboration/1804).

Option 1: Yes, let's partner with DinoSwap

Option 2: No, don't partner with Dinoswap

**Voting Period:** 13 - 20 June 2021

**Ergebnis:**

table_agip10

[Link zur Abstimmung auf Snapshot](https://snapshot.org/#/aavegotchi.eth/proposal/QmV3xdUskpTtd6JYyCgV7tjWeBGira2ZPFcdk2YDy3UPHE)

<hr />

### Name des Aavegotchi-Marktplatzes
**Snapshot Abstimmungen**

**Proposal Summary:** What should the Aavegotchi NFT Marketplace be called?

Aavegotchi is launching its own NFT marketplace on Polygon in tandem with the game!

What should we call the official Aavegotchi Marketplace?

Choice A: Aavegotchi Baazaar

Choice B: Aavegotchi Maarket

Choice C: Neither

The quorum for this vote is set to 500,000 GHST. If quorum is not reached, Pixelcraft will draw straws.

If "Neither" wins...you guys better start coming up with some good alternatives!

**Voting Period:** 8 - 11 February 2021

**Ergebnis:**

table_marketplaceName

[Link zur Abstimmung auf Snapshot](https://snapshot.page/#/aavegotchi.eth/proposal/QmRiRaQuwLuNr88yxvX61vtKM56NrY3KaMk4bk6w7g47fy)

<hr />

### Eligibility of GHST-USDC LP tokens to earn FRENS

**Snapshot Abstimmungen**

**Proposal Summary:** Should GHST-USDC LP token be eligible to earn FRENS?

Our liquidity migration program has been a huge success, with over 8M GHST migrated to Polygon already. However, as many community members have noted, liquidity for the GHST-USDC pair is still not deep enough to support trading large amounts of USDC for GHST on Quickswap.

We believe one way to remedy this is by adding GHST-USDC as a pair eligible for FRENS on [https://aavegotchi.com/stake-polygon](https://aavegotchi.com/stake-polygon). Just like GHST-QUICK has a receipt token stkGHST-QUICK, staked GHST-USDC can also emit a stkGHST-USDC token, which may be eligible for rewards on Quickswap, if their team deems it necessary.

Since this decision directly affects gameplay, we believe it is a ripe candidate for our first Snapshot vote on Polygon.

We are setting a 500,000 GHST quorum for this vote to be enacted.

The GHST-USDC LP token will earn FRENS at the same rate as just staking GHST, since impermanent loss is minimal and fees are significant.

**Voting Period:** 8 - 11 February 2021

**Ergebnis:**

table_ghstUsdcLp

[Link zur Abstimmung auf Snapshot](https://snapshot.page/#/aavegotchi.eth/proposal/QmUpXPA5JF4ed9GUy5hNUTA7rT7VQjL7QXUTSxbtLQ1RqA)

<hr />

### Portals purchased in one transaction

**Snapshot Abstimmungen**

**Proposal Summary:** How many Portals can be purchased in one transaction?

Discussion period has ended for this topic, and now it's time to vote! The most popular options were: 1, 5, and 10 Portals per transaction.

Our fren [@coderdannn](/team#coder-dan) also threw a spicy idea into the mix: an "Ape Tax" whereby higher numbers of Portals could be bought in a single transaction, but at a higher price. The Portals would be tiered as so:

* 0-5: 100 GHST each

* 6-15: 200 GHST each

* 16-25: 300 GHST each

So this leaves us with four options: 1, 5, 10, and 25 (w/ ape tax).

Let your $GHST token speak for you, and vote!

Voting period: 72 hrs Minimum quorum: 10% of GHST on Matic (~1.1M GHST)

AavegotchiDAO discussion topic 👇

[https://dao.aavegotchi.com/t/how-many-portals-should-be-bought-in-one-txn/17](https://dao.aavegotchi.com/t/how-many-portals-should-be-bought-in-one-txn/17)

**Voting Period:** 23 - 26 February 2021

**Ergebnis:**

table_portalsPurchased

[Link zur Abstimmung auf Snapshot](https://snapshot.page/#/aavegotchi.eth/proposal/QmUhKcn5YjKAPeGA1SfKQkNfw3P3hGRPgSGnTJGsfzw4Xi)
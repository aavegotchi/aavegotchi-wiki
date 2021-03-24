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
<li><a href=#proposal-for-haunt-2>Proposal for Haunt 2</a></li>
<li><a href=#give-unique-non-transferable-background-to-haunt-1-aavegotchis>Give unique non-transferable Background to Haunt 1 Aavegotchis</a></li>
<li><a href=#name-of-aavegotchi-marketplace>Name of Aavegotchi Marketplace</a></li>
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

Ja: 2540143.23957 GHST

Nein: 601.83249 GHST

[Link zur Abstimmung über das Aragon UI](https://client.aragon.org/#/aavegotchi/0xf63e1edbcb3be8d5fb124f4a228f5412f48e5ae7/vote/0/)

<hr />

### Hinzufügen von Gebühren zur Bonding Curve
**Aavegotchi Improvement Proposal #2**

**Proposal Summary:** The bonding curve is the main source of liquidity of GHST. Large buyers and sellers can currently buy in and out without any fees.

Our market maker offers the ability to add fees to buy and sell orders.

Multiple community members have proposed adding fees up to 0.3% to buying and selling on the curve.

This is possible to do by calling the `updateFees` function on our bonding curve, but should we? It’s up to you, AavegotchiDAO.

Any fees earned would automatically be transferred to the DAO Treasury address at 0xffe6280ae4e864d9af836b562359fd828ece8020 and would be considered as assets of AavegotchiDAO.

**Voting Period:** 18 - 21 January 2021

**Ergebnis:**

Yes: 3726567.25851 GHST

No: 108143.33932 GHST

[Link zur Abstimmung über das Aragon UI](https://client.aragon.org/#/aavegotchi/0xf63e1edbcb3be8d5fb124f4a228f5412f48e5ae7/vote/1/)

<hr />

### Erhöhung des DAICO-Taps für GHST-Käufe
**Aavegotchi Improvement Proposal #3**

**Proposal Summary:** Player rewards and liquidity incentives are crucial to bootstrapping the Aavegotchi ecosystem to a level where it becomes self-sustained on trading volume and economic activity.

Whenever GHST is spent in the Aavegotchi ecosystem, 33% of it is automatically sent to a burn address. Unlike most cryptocurrencies, burning GHST (except via the bonding curve) does not actually lower the total value of GHST, since that value is stored as DAI within the bonding curve.

What burning does do is trap DAI within the bonding curve, essentially increasing the reserve ratio over time, which stabilizes the price of GHST.

In order to offset the burning (which could ultimately turn GHST into a stablecoin), we advise the community to increase the tap to 150,000 DAI per month. This will help balance the reserve of the bonding curve, while also providing an extra 50,000 DAI per month that will be put towards player rewards and liquidity incentives.

**Voting Period:** 18 - 21 January 2021

**Ergebnis:**

Yes: 3836093.44669 GHST

No: 33683.04753 GHST

[Link zur Abstimmung über das Aragon UI](https://client.aragon.org/#/aavegotchi/0xf63e1edbcb3be8d5fb124f4a228f5412f48e5ae7/vote/2/)

<hr />

### Proposal for Haunt 2
**Aavegotchi Improvement Proposal #4**

**Proposal Summary:** 10,000 Portals is arguably not enough to satisfy the current level of demand for Aavegotchis. Therefore it may be necessary to deploy a new Haunt to ensure that all who want to participate can own an Aavegotchi. This Core Proposal provides four different options that have been suggested by community members, including one option not to create a new Haunt.

Details on the AGIP can be found [here](https://aavegotchi.medium.com/vote-when-haunt-2-making-haunts-more-unique-d975cbda4772).

Option 1: No new haunt, Revisit in a month

Option 2: 10K Portals, 100 GHST each, 1 per txn

Option 3: 25K portals, 100 GHST each, 5 per txn (w/ stricter ape tax)

Option 4: Pre-sale, in which each wallet can subscribe for 1 Portal in exchange for 100 GHST. When the pre-sale period closes, all Portals are minted and transferred to their owners.

**Voting Period:** 17 - 24 March 2021

**Ergebnis:**

25K portals, 100 GHST each, 5 per txn (w/ stricter ape tax): 3540000 GHST (54.25%)

No new haunt, Revisit in a month: 2510000 GHST (38.46%)

10K Portals, 100 GHST each, 1 per txn: 377550 GHST (5.78%)

Pre-sale option: 98410 GHST (1.51%)

**Vote Differential not met. No Haunt 2 for now!**

[Link to vote on Snapshot](https://snapshot.org/#/aavegotchi.eth/proposal/QmNqRry73rWXb9tdyHummihcK58ga83Ru15AJRF3beFJ35)

<hr />

### Give unique non-transferable Background to Haunt 1 Aavegotchis
**Aavegotchi Improvement Proposal #5**

**Proposal Summary:** Many players are worried that Haunt 2 will be too similar to Haunt 1 and the newly-created Haunts will devalue the “Genesis” Haunt. One of the suggestions is to give special backgrounds to each Haunt to make them easily identifiable. This proposal has seen excellent discussion and significant support on the associated Snapshot. Note that irrespective of the DAO’s decision on this issue, all Aavegotchis will be getting special non-transferable "Haunt" badges that identify their Haunt. This proposal focuses specifically on the idea of a non-transferable background that can be equipped in the Aavegotchi’s BG wearable slot.

Details on the AGIP can be found [here](https://aavegotchi.medium.com/vote-when-haunt-2-making-haunts-more-unique-d975cbda4772).

Option 1: Only Haunt 1 should get a special background

Option 2: Each Haunts should have it’s own unique background

Option 3: Neither, leave it as is

**Voting Period:** 17 - 24 March 2021

**Ergebnis:**

Only Haunt 1 should get a special background: 3670000 GHST (63.09%)

Each Haunts should have it’s own unique background: 2010000 GHST (34.53%)

Neither, leave it as is: 138240 GHST (2.37%)

[Link to vote on Snapshot](https://snapshot.org/#/aavegotchi.eth/proposal/QmfBrnUmfsX57vXWchr1mUNkqMWNeF6edEqdQq11MCvMHJ)

<hr />

### Name of Aavegotchi Marketplace
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

Aavegotchi Baazaar: 973380 GHST

Aavegotchi Maarket: 683420 GHST

Neither: 150380 GHST

[Link to vote on Snapshot](https://snapshot.page/#/aavegotchi.eth/proposal/QmRiRaQuwLuNr88yxvX61vtKM56NrY3KaMk4bk6w7g47fy)

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

Yes: 2560000

No: 354030

[Link to vote on Snapshot](https://snapshot.page/#/aavegotchi.eth/proposal/QmUpXPA5JF4ed9GUy5hNUTA7rT7VQjL7QXUTSxbtLQ1RqA)

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

25 per txn (w/ Ape Tax): 1500000

5 per txn: 921830

10 per txn: 201760

1 per txn: 169000

[Link to vote on Snapshot](https://snapshot.page/#/aavegotchi.eth/proposal/QmUhKcn5YjKAPeGA1SfKQkNfw3P3hGRPgSGnTJGsfzw4Xi)
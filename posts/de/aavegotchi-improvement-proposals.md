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
<li><a href=#name-of-aavegotchi-marketplace>Name of Aavegotchi Marketplace</a></li>
<li><a href=#eligibility-of-ghst-usdc-lp-tokens-to-earn-frens>Eligibility of GHST-USDC LP tokens to earn FRENS</a></li>
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

### Hinzufügen von Gebühren zur Bonding Curve
**Aavegotchi Improvement Proposal #2**

**Zusammenfassung des Vorschlags:** Die Bonding Curve ist die Hauptquelle der Liquidität von GHST. Grosse Spieler im Markt können derzeit ohne Gebühren kaufen und verkaufen.

Unser Market Maker bietet die Möglichkeit, Gebühren für Kauf- und Verkaufsaufträge zu erheben.

Mehrere Community-Mitglieder haben vorgeschlagen, Gebühren von bis zu 0,3% für den Kauf und Verkauf durch die Curve zu erheben.

Dies ist möglich, indem wir die `updateFees` Funktion auf unserer Bonding Curve aufrufen, aber sollten wir das tun? Es liegt an euch, dem AavegotchiDAO.

Alle verdienten Gebühren würden automatisch an die DAO Treasury Adresse 0xffe6280ae4e864d9af836b562359fd828ece8020 überwiesen und als Vermögen des AavegotchiDAO betrachtet werden.

**Abstimmungszeitraum:** 18. - 21. Januar 2021

**Ergebnis:**

Ja: 3726567.25851 GHST

Nein: 108143.33932 GHST

[Link zur Abstimmung über das Aragon UI](https://client.aragon.org/#/aavegotchi/0xf63e1edbcb3be8d5fb124f4a228f5412f48e5ae7/vote/1/)

### Erhöhung des DAICO-Taps für GHST-Käufe
**Aavegotchi Improvement Proposal #3**

**Zusammenfassung des Vorschlags: ** Spielerbelohnungen und Liquiditätsanreize sind entscheidend, um das Aavegotchi Ökosystem auf ein Level zu heben, auf dem es sich durch Handelsvolumen und wirtschaftliche Aktivität selbst tragen kann.

Immer wenn GHST im Aavegotchi Ökosystem ausgegeben wird, werden 33% davon automatisch an eine Burn Adresse geschickt. Im Gegensatz zu den meisten Kryptowährungen senkt das Verbrennen von GHST (ausser über die Bonding Curve) nicht tatsächlich den Gesamtwert von GHST, da dieser Wert als DAI innerhalb der Bonding Curve gespeichert wird.

Durch das Verbrennen wird DAI in der Bonding Curve gefangen, wodurch sich der Reservesatz mit der Zeit erhöht, was den Preis von GHST stabilisiert.

Um das Verbrennen zu kompensieren (was GHST letztendlich zu einem Stablecoin machen könnte), raten wir der Community, den Tap auf 150'000 DAI pro Monat zu erhöhen. Dies wird dazu beitragen, die Reserve der Bonding Curve auszugleichen und gleichzeitig zusätzliche 50'000 DAI pro Monat bereitzustellen, die in Spielerbelohnungen und Liquiditätsanreize fliessen werden.

**Abstimmungszeitraum:** 18. - 21. Januar 2021

**Ergebnis:**

Ja: 3836093.44669 GHST

Nein: 33683.04753 GHST

[Link zur Abstimmung über das Aragon UI](https://client.aragon.org/#/aavegotchi/0xf63e1edbcb3be8d5fb124f4a228f5412f48e5ae7/vote/2/)

### Name of Aavegotchi Marketplace
**Snapshot Abstimmungen**

**Proposal Summary:** What should the Aavegotchi NFT Marketplace be called?

Aavegotchi is launching its own NFT marketplace on Matic in tandem with the game!

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

### Eligibility of GHST-USDC LP tokens to earn FRENS

**Snapshot Abstimmungen**

**Proposal Summary:** Should GHST-USDC LP token be eligible to earn FRENS?

Our liquidity migration program has been a huge success, with over 8M GHST migrated to Matic already. However, as many community members have noted, liquidity for the GHST-USDC pair is still not deep enough to support trading large amounts of USDC for GHST on Quickswap.

We believe one way to remedy this is by adding GHST-USDC as a pair eligible for FRENS on [https://aavegotchi.com/stake-matic](https://aavegotchi.com/stake-matic). Just like GHST-QUICK has a receipt token stkGHST-QUICK, staked GHST-USDC can also emit a stkGHST-USDC token, which may be eligible for rewards on Quickswap, if their team deems it necessary.

Since this decision directly affects gameplay, we believe it is a ripe candidate for our first Snapshot vote on Matic.

We are setting a 500,000 GHST quorum for this vote to be enacted.

The GHST-USDC LP token will earn FRENS at the same rate as just staking GHST, since impermanent loss is minimal and fees are significant.

**Voting Period:** 8 - 11 February 2021

**Ergebnis:**

Yes: 2560000

No: 354030

[Link to vote on Snapshot](https://snapshot.page/#/aavegotchi.eth/proposal/QmUpXPA5JF4ed9GUy5hNUTA7rT7VQjL7QXUTSxbtLQ1RqA)


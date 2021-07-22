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
<li><a href=#launch-haunt-2>Launch Haunt 2</a></li>
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

**Zusammenfassung des Vorschlags:** Viele Spieler sind besorgt, dass Haunt 2 dem Haunt 1 zu ähnlich sein wird und die neu geschaffenen Portale den "Genesis" Haunt abwerten werden. Einer der Vorschläge ist, jedem Haunt spezielle Hintergründe zu geben, um sie leicht identifizierbar zu machen. Dieser Vorschlag wurde hervorragend diskutiert und fand im zugehörigen Snapshot grosse Unterstützung. Beachte, dass unabhängig von der Entscheidung des DAOs in dieser Angelegenheit alle Aavegotchis spezielle, nicht übertragbare "Haunt" Badges erhalten werden. Dieser Vorschlag konzentriert sich speziell auf die Idee eines nicht übertragbaren Hintergrunds, der in den BG (Background) Kleidungsstück-Slot des Aavegotchi eingebaut werden kann.

Details zum AGIP gibt es [hier](https://aavegotchi.medium.com/vote-when-haunt-2-making-haunts-more-unique-d975cbda4772).

Option 1: Nur Haunt 1 sollte einen speziellen Hintergrund bekommen

Option 2: Jeder Haunt sollte seinen eigenen einzigartigen Hintergrund haben

Option 3: Weder noch, so belassen wie es ist

**Abstimmungszeitraum:** 17. - 24. März 2021

**Ergebnis:**

table_agip5

[Link zur Abstimmung auf Snapshot](https://snapshot.org/#/aavegotchi.eth/proposal/QmfBrnUmfsX57vXWchr1mUNkqMWNeF6edEqdQq11MCvMHJ)

<hr />

### Hinzufügen einer Baazaar-Gebühr für Rarity Farming
**Aavegotchi Improvement Proposal #6**

**Zusammenfassung des Vorschlags: ** Mit der offiziellen Ankündigung der SZN1-Belohnungen untersuchen wir, wie die Interessen der Community und die Belohnungsstrukturen in Bezug auf die Baazaar-Gebühren in Einklang gebracht werden können.

Derzeit gehen 2% an Pixelcraft und 1% an das DAO Treasury. Obwohl ein Teil der Treasury-Gelder aktuell für Rarity Farming (RF) Belohnungen zur Verfügung stehen, muss dies nicht jede Saison in einem bestimmten Verhältnis erfolgen. Dieser Vorschlag zielt darauf ab, die Baazaar-Gebühren von 3% auf 3.5% zu erhöhen, wobei die zusätzlichen 0.5% direkt in den Rarity Farming Belohnungspool fliessen.

Details zum AGIP gibt es [hier](https://aavegotchi.medium.com/core-proposal-agip6-add-0-5-fee-on-baazaar-to-support-rarity-farming-5bf923c7f528).

Option 1: Ja, Erhöhung der Gebühren von 3% auf 3.5%

Option 2: Nein, die Gebühren bleiben wie sie sind

**Abstimmungszeitraum:** 7. - 13. April 2021

**Ergebnis:**

table_agip6

[Link zur Abstimmung auf Snapshot](https://snapshot.org/#/aavegotchi.eth/proposal/QmPUueFJwpCz6rBiucnBYPLxTv2tetzxXWwCi2gSQFMJMW)

<hr />

### XP für erfolgreiche Signal Proposals verdienen
**Aavegotchi Improvement Proposal #7**

**Zusammenfassung des Vorschlags:** Wir haben derzeit eine Menge Signal-/Community-Vorschläge auf Snapshot und täglich neue Beiträge in unserem Forum. Bisher konnte keiner dieser Vorschläge auch nur in die Nähe des Quorums von 20% kommen. Der beliebteste Vorschlag von @JG, zusätzliche Gebühren für Rarity Farming zu erheben, erhielt nur etwa 2 Millionen GHST an Stimmen (~11%) - und das, obwohl das Team beschlossen hat, ihn als Kernvorschlag aufzunehmen. Nachdem der Vorschlag zu einem "Core Proposal" geändert wurde, haben wir das Quorum in weniger als 24 Stunden durchbrochen.

Ich denke, es gibt zwei ziemlich offensichtliche Gründe dafür. Auf der einen Seite ist unser Snapshot im Moment etwas chaotisch, da einige Signalvorschläge überhaupt nicht der Vorlage folgen. Auf der anderen Seite - und ich denke, das ist der wichtigere Punkt - bekommt man 20 Erfahrungspunkte (EXP) für sein Aavegotchi, wenn man für einen Kernvorschlag (Core Proposal) stimmt.

Ich schlage vor, einen kleinen Erfahrungsbonus (10 EXP) für Leute einzuführen, die über erfolgreiche Community-Vorschläge (Signal Proposals) abgestimmt haben, d.h. Vorschläge, die das Quorum erreichen und zu Kernvorschlägen aufgewertet werden. Einfach EXP für alle Community-Vorschläge zu verschenken, könnte zu mehr qualitativ schlechten Vorschlägen führen, was nicht das Ziel dieses Vorschlags sein sollte.

Auch wenn 10 EXP vielleicht nicht viel sind, gibt es Leuten einen Anreiz, die Signal Proposals tatsächlich durchzusehen und über hochwertige Vorschläge abzustimmen, die eine höhere Chance auf das Erreichen des Quorums haben. Als DAO ist das Engagement der Community extrem wichtig und ich glaube, dass dies ein kleiner, aber wichtiger Schritt in die richtige Richtung ist.

Wenn dieser Vorschlag das Quorum erreicht und angenommen wird, erhalten alle Aavegotchis im Besitz von Leuten, die abgestimmt haben, 10 EXP!

Details zum AGIP gibt es [hier](https://aavegotchi.medium.com/vote-agip7-earn-xp-for-successful-signal-proposals-d5eafdb93aae).

Option 1: Ja, erfolgreiche SigProps geben EXP

Option 2: Nein, SigProps sollten kein EXP geben

**Abstimmungszeitraum:** 12. - 18. Mai 2021

**Ergebnis:**

table_agip7

[Link zur Abstimmung auf Snapshot](https://snapshot.org/#/aavegotchi.eth/proposal/QmctiApzKZHoVsSpzWVfMVL1abRTUNXsoipupNGS52gEuZ)

<hr />

### Stimmgewicht basierend auf BRS
**Aavegotchi Improvement Proposal #8**

**Zusammenfassung des Vorschlags:** Hinzufügen von Stimmgewicht für Aavegotchis, die in der Adresse eines Wählers gehalten werden - mit einer Rate von 1 GHST pro BRS (Base Rarity Score, ohne ausgerüstete Kleidungsstücke).

Details zum AGIP gibt es [hier](https://aavegotchi.medium.com/vote-agip8-and-agip9-give-voting-power-to-aavegotchis-and-wearables-9c113373a0a2).

Option 1: Ja, Aavegotchis erhalten Stimmrecht basierend auf BRS

Option 2: Nein, Aavegotchis sollten kein Stimmrecht haben

**Abstimmungszeitraum:** 11. - 17. Juni 2021

**Ergebnis:**

table_agip8

[Link zur Abstimmung auf Snapshot](https://snapshot.org/#/aavegotchi.eth/proposal/QmZnzgvkEzHvwkYPGLFQLtVvvoMzBXPWhznux1udHzbUim)

<hr />

### Stimmgewicht basierend auf den Maall-Preisen von Kleidungsstücken
**Aavegotchi Improvement Proposal #9**

**Zusammenfassung des Vorschlags:** Hinzufügen von Stimmgewicht für Kleidungsstücke in der abstimmenden Adresse.

Details zum AGIP gibt es [hier](https://aavegotchi.medium.com/vote-agip8-and-agip9-give-voting-power-to-aavegotchis-and-wearables-9c113373a0a2).

Option 1: Ja, Kleidungsstücke erhalten Stimmrecht basierend auf dem Maall-Preis

Option 2: Nein, Kleidungsstücke sollten kein Stimmgewicht geben

**Abstimmungszeitraum:** 11. - 17. Juni 2021

**Ergebnis:**

table_agip9

[Link zur Abstimmung auf Snapshot](https://snapshot.org/#/aavegotchi.eth/proposal/Qmat7jeAS1W3BBq7yDi2jkHjNoywmUEfrF2FdPiS9CcGHa)

<hr />

### Partnerschaft zwischen AavegotchiDAO, Pixelcraft, und DinoSwap
**Aavegotchi Improvement Proposal #10**

**Zusammenfassung des Vorschlags: ** Einige Community-Mitglieder sind besorgt über die schwindende Liquidität von GHST auf Quickswap und ihre allmählich abnehmenden LP-Belohnungen. Anstatt dem Pool einfach mehr Liquidität zuzuweisen, erwägen wir eine Partnerschaft mit einem bald startenden Liquiditätsaggregator namens DinoSwap. Die Bedingungen beinhalten insgesamt 200k USD an GHST Token, die den "Extinction Pools" zugeteilt werden, deren Details weiter unten beschrieben werden.

Details zum AGIP gibt es [hier](https://dao.aavegotchi.com/t/ghst-liquidity-rewards-on-new-launch-pixelcraft-dao-collaboration/1804).

Option 1: Ja, gehen wir eine Partnerschaft mit DinoSwap ein

Option 2: Nein, keine Partnerschaft mit DinoSwap

**Abstimmungszeitraum:** 13. - 20. Juni 2021

**Ergebnis:**

table_agip10

[Link zur Abstimmung auf Snapshot](https://snapshot.org/#/aavegotchi.eth/proposal/QmV3xdUskpTtd6JYyCgV7tjWeBGira2ZPFcdk2YDy3UPHE)

<hr />

### Launch Haunt 2
**Core Prop**

**Proposal Summary:** Currently Aavegotchis are limited by a maximum possible 10,000 because only that many Haunt 1 Portals exist. This makes acquiring a first Aavegotchi cost prohibitive. With a second Haunt of 15,000 more Portals, we aim to address this problem while respecting unique, collectible aspects of Haunt 1 Aavegotchis.

Our vision is for far wider adoption of playable NFTs, and the first step to achieving that means leaving the scarcity memes behind and focusing on being able to offer meaningfully unique experiences to more people.

Details on the AGIP can be found [here](https://dao.aavegotchi.com/t/coreprop-launch-haunt-2/2034)

Option 1: Yes, launch Haunt 2

Option 2: No, do not launch Haunt 2 now

**Voting Period:** 19 - 26 July 2021

[Link zur Abstimmung auf Snapshot](https://snapshot.org/#/aavegotchi.eth/proposal/QmTuVnGnZSUC4uWRVQrd3HwmJATtvJVpjNikCkifChyJwY)

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

* 0-5: je 100 GHST

* 6-15: je 200 GHST

* 16-25: je 300 GHST

So this leaves us with four options: 1, 5, 10, and 25 (w/ ape tax).

Let your $GHST token speak for you, and vote!

Voting period: 72 hrs Minimum quorum: 10% of GHST on Matic (~1.1M GHST)

AavegotchiDAO discussion topic 👇

[https://dao.aavegotchi.com/t/how-many-portals-should-be-bought-in-one-txn/17](https://dao.aavegotchi.com/t/how-many-portals-should-be-bought-in-one-txn/17)

**Voting Period:** 23 - 26 February 2021

**Ergebnis:**

table_portalsPurchased

[Link zur Abstimmung auf Snapshot](https://snapshot.page/#/aavegotchi.eth/proposal/QmUhKcn5YjKAPeGA1SfKQkNfw3P3hGRPgSGnTJGsfzw4Xi)
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

**Proposal Summary:** Many players are worried that Haunt 2 will be too similar to Haunt 1 and the newly-created [Haunts](/haunt) will devalue the “Genesis” Haunt. Einer der Vorschläge ist, jedem Haunt spezielle Hintergründe zu geben, um sie leicht identifizierbar zu machen. Dieser Vorschlag wurde hervorragend diskutiert und fand im zugehörigen Snapshot grosse Unterstützung. Beachte, dass unabhängig von der Entscheidung des DAOs in dieser Angelegenheit alle Aavegotchis spezielle, nicht übertragbare "Haunt" Badges erhalten werden. Dieser Vorschlag konzentriert sich speziell auf die Idee eines nicht übertragbaren Hintergrunds, der in den BG (Background) Kleidungsstück-Slot des Aavegotchi eingebaut werden kann.

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

### Liquidity Manager / FRENS Committee
**Aavegotchi Improvement Proposal #11**

**Proposal Summary:**

*Problem*

To incentivize liquidity on QuickSwap, you can earn additional FRENS rewards for staking Liquidity Pool (LP) tokens on the Aavegotchi website. Depending on the risk of Impermanent Loss (IL) these numbers can vary, originally it was +35% for GHST-QUICK, +20% for GHST-ETH and +10% for GHST-USDC. Because the rates have to be manually adjusted and prices have moved quite a bit since this was introduced, the FRENS rewards are off by quite a lot; GHST-QUICK is at around +90%, while GHST-USDC earns -10%.

*Solution*

Quoted from [coderdan](/team#coder-dan): "There has been talk of setting up committees for managing certain parts of Aavegotchi, and I believe this could be an interesting candidate for such a committee. Right now we only have two [now three] pairs incentivized by FRENS, but this could change in the future.”

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

**Ergebnis:**

table_agip11

[Link zur Abstimmung auf Snapshot](https://snapshot.org/#/aavegotchi.eth/proposal/QmdLouPY9ipn2ezC2RR5Fjcz8auhX1uLajk9QS8nrctfsY)

<hr />

### Launch Haunt 2
**Core Prop**

**Proposal Summary:** Currently Aavegotchis are limited by a maximum possible 10,000 because only that many Haunt 1 Portals exist. This makes acquiring a first Aavegotchi cost prohibitive. With a second Haunt of 15,000 more Portals, we aim to address this problem while respecting unique, collectible aspects of Haunt 1 Aavegotchis.

Our vision is for far wider adoption of playable NFTs, and the first step to achieving that means leaving the scarcity memes behind and focusing on being able to offer meaningfully unique experiences to more people.

Details on the AGIP can be found [here](https://dao.aavegotchi.com/t/coreprop-launch-haunt-2/2034)

Option 1: Yes, launch Haunt 2

Option 2: No, do not launch Haunt 2 now

**Voting Period:** 19 - 26 July 2021

**Ergebnis:**

table_launchHaunt2

[Link zur Abstimmung auf Snapshot](https://snapshot.org/#/aavegotchi.eth/proposal/QmTuVnGnZSUC4uWRVQrd3HwmJATtvJVpjNikCkifChyJwY)

<hr />

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

**Ergebnis:**

table_agip13

[Link zur Abstimmung auf Snapshot](https://snapshot.org/#/aavegotchi.eth/proposal/QmcAQLdAyS9n7LWDu9qvRtdNqJa7FBStadrHq3xqjW9kCT)

<hr />

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

**Ergebnis:**

table_agip14

[Link zur Abstimmung auf Snapshot](https://snapshot.org/#/aavegotchi.eth/proposal/0x42914b268d255efe0eea943d052e5dc7eab0cbbcde9d3cb809f027e3ea1f611f)

<hr />

### Create a Wearables Taask Force
**Aavegotchi Improvement Proposal #15**

**Proposal Summary:**

*Motivation*

Within the Aavegotchi ecosystem wearables play a vital role, whether it be boosting BRS for rarity farming, improving traits for minigames, utility in the upcoming metaverse, or just showing off. Due to the complexity of the different possible trait ranges of gotchis, and the variety of possible wearable stats, it is not an easy task to arrive at a balanced distribution of equippable items. Releasing new wearables without proper analysis can lead to duplication (and dilution) of existing items and further skew of practical applicable sets for gotchis with trait ranges in certain directions.

*Specification*

This proposal aims to introduce a Wearables Taask Force (WTF), the idea of which arose from discussions regarding the above concerns. Akin to the FRENS Taask Force, the goal of the WTF would be to assist Pixelcraft in the analysis of the current distribution of items within the ecosystem from a slot, rarity, and trait modifiers perspective, and in how this analysis can best be applied to future items. This Taask Force would NOT have the unilateral ability to determine what and how new items are released, but would function entirely in an advisory capacity.

*Nominees*

The nominees for the Taask Force include long term community members who have a wide range of applicable skills, including statistical analysis, programming ability, strong experience in baazaar activity, and prior DAO experience. This Taask Force would greatly benefit from as many voices and perspectives as possible, so all nominations are included. Establishing this Taask Force would be a major step forward in creating a more balanced ecosystem and helping the AavegotchiDAO mature.

**Full list of nominees:** Kuwlness, JG1 (Fantasma#1777), Bearded, Actaeon, Thunderfish, Letsgobankless, Kokusho, Ader1990.eth, Machete, Aimo217 (AL#4105), Notorious_BTC, MonsterRNG, Goobz, Diddlypoo

Details on the AGIP can be found [here](https://dao.aavegotchi.com/t/wearables-taask-force/2350)

Option 1: Yes, establish the WTF

Option 2: No, don't establish the WTF

**Voting Period:** 12 - 19 November 2021

**Ergebnis:**

table_agip15

[Link zur Abstimmung auf Snapshot](https://snapshot.org/#/aavegotchi.eth/proposal/0xa1f06ffcdd5f5d51c5f82022e8a25ecc7672252f8a47d9ee484b9fe3b6cd5b3a)

<hr />

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

**Ergebnis:**

[Link zur Abstimmung auf Snapshot](https://snapshot.org/#/aavegotchi.eth/proposal/0xd654255f22e694369686e9791ff663f38a9f586bd4126831fc9d8ce384208964)

<hr />

### Adding Voting Power to REALM Parcels
**Aavegotchi Improvement Proposal #17**

**Proposal Summary:**

*Problem:*

With a new asset class added to the Aavegotchi family in the form of realm plots comes a new sink of GHST. This currently leaves those who have heavily invested into the new plots with much lesser voting power in the Aavegotchi DAO.

*Solution:*

Since realm plots and the Gotchiverse are such an integral part of the Aavegotchi ecosystem, I believe it’s only right that realm owners get an amount of voting power that is proportional to the size of their realm plots. This ensures that their vote can be heard, which is of particular importance when future governance proposals will concern the Gotchiverse.

Since every plot has a set size in pixels which is also a scaling factor for the amount of alchemica within the plot, the suggestion brought forward is:

1 pixel = 1 GHST worth of voting power (64, 256, 2056) OR 1 pixel = 0.5 GHST worth of voting power (32, 128, 1028)

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

**Ergebnis:**

[Link zur Abstimmung auf Snapshot](https://snapshot.org/#/aavegotchi.eth/proposal/0x28b630e088240ee4bb4e680b071767b98b962a4006c71e71f00c782b86adfbab)

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
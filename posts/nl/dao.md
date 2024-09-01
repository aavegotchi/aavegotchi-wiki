---
author: Coder Dan
date: '2020-04-23T07:00:00.000Z'
title: 'AavegotchiDAO'
description: 'Alles over AavegotchiDAO'
image: "icons/dao.svg"
contributors:
  - "vanilladelphia"
  - "cinnabarhorse"
  - "hackingmoneyph"
  - "unintelligent-nerd"
---

<div class="headerImageContainer">
<img class="headerImage" src="/dao/dao.png">
<p class="headerImageText">Het AavegotchiDAO Kruis</p>
</div>

Een [DAO](glossary#dao) is een gedecentraliseerde vorm van governance, waarmee token houders kunnen stemmen om de besluitvormingsprocedure van de organisatie vorm te geven.

Aavegotchi volgt in de voetstappen van succesvolle DeFi protocollen zoals Compound en Synthetix door een proces van "geleidelijke decentralisatie" te volgen, beginnen met het oprichtingsteam, Pixelcraft Studios dat een DAO-bestuurde token distributie evenement (DAICO) organizeert en zal culmineren in het plaatsen van governance van Aavegotchi, inclusief alle game mechanismen, smart contracts en financiering onder auspiciën van de AavegotchiDAO, maar onderworpen aan de heersende regelgevingsomgeving. Dat zal in drie fasen gebeuren.

<div class="contentsBox">

**Inhoud**

<ol>
<li><a href=#genesis>Genesis</a></li>
<li><a href=#cocoon>Cocon</a></li>
<li><a href=#metamorphosis>Metamorfose</a></li>
<li><a href=#oasis>Oasis</a></li>
<li><a href=#participating-in-governance>Deelnemen aan Governance</a></li>
<li><a href=#type-of-proposals>Type Voorstellen</a></li>
<li><a href=#vote-differentials>Stem Verschillen</a></li>
<li><a href=#creating-signal-proposals>Signal Proposals maken</a></li>
<li><a href=#voting>Stemmen</a></li>
<li><a href=#aavegotchi-improvement-proposals--agips->Aavegotchi Verbetervoorstellen (AGIP's)</a></li>
<li><a href=#treasury>Schatkist</a></li>
</ol>

</div>

## Genesis

*Zie* [DAICO](https://wiki.aavegotchi.com/curve/#aavegotchi-daico).

De eerste versie van AavegotchiDAO lanceerde in combinatie met de GHST token distributie. GHST token houders hebben de macht gehad om te stemmen over het verhogen / onderhouden van de fondsen verdeeld door het kraanmechanisme van de [token bonding curve (TBC)](/curve) reserve aan Pixelcraft Studios (het team achter Aavegotchi) ter ondersteuning van de ontwikkeling. Dit oorspronkelijke voorstel om de kraan te verhogen van 50.000 DAI naar 100.000 DAI per maand werd op 18 oktober 2020 met 99 procent goedgekeurd. Wanneer het tijd is om te migreren naar AavegotchiDAO Metamorphose, zullen tokenhouders ook stemmen om de migratie uit te voeren.

Token houders zullen geen beloningen ontvangen in GHST voor actieve deelname aan deze herhaling van AavegotchiDAO.

Mogelijkheden voor Genesis omvatten:

* Geen smart contract oproepen
* Geen contract upgrades
* Op GHST token gebaseerd bestuur
* Platform: Aragon
* Beloningen: Geen
* Layer: Ethereum Mainnet

## Cocon

V1.5 van AavegotchiDAO. Het tussenpunt tussen [Genesis](/dao#genesis) en [Metamorphose](/dao#metamorphosis). De prioriteit van het Cocoon-stadium is om invloed uit te oefenen op spelmechanismen.

Kenmerken houden in:

* Contractoproepen opgeroepen door Pixelcraft
* Geen contract upgrades
* Op GHST token gebaseerd bestuur
* Platform: Snapshot/Discord
* Beloningen: [XP](/traits#experience) voor Core Votes
* Layer: Polygon

Er zijn twee soorten stemmen in de Cocoon-fase: (1) Signaal-voorstel en (2) Core-voorstel.

A Signal Proposal can be posted by anyone to the Community tab on [Snapshot](https://snapshot.org/#/aavegotchi.eth). Deze stemmingen zijn niet bindend, maar als het quorum is bereikt, zal het voorstel automatisch worden opgewaardeerd tot een bindend kernvoorstel. Before you come up with a Signal Proposal, it is mandatory to discuss it with the community on the [DAO channel](https://discord.com/channels/732491344970383370/1031189663152623747) on Discord. De redenering is om verder te gaan en te ontdekken of er de nodige steun is om verder te gaan met het Signaal-voorstel. Volg het sjabloon gevonden in de [Signaal Voorstellen sectie](/dao#creating-signal-proposals).

Het Signaalvoorstel zal worden opgewaardeerd tot een kernvoorstel, zodra dit met een quorum van 20 procent van het aantal circulerende GHST dat in aanmerking komt om te stemmen op Polygon op het moment dat het voorstel wordt ingediend.

Een kernvoorstel is een voorstel dat Pixelcraft presenteert, met opties op basis van Signaal voorstellen die bereikt zijn of bijna het quorum hebben bereikt. Deze stemmen zijn bindend en komen in aanmerking voor XP beloningen voor deelnemers. Following the passing of [AGIP-127](/aavegotchi-improvement-proposals#increasing-xp-award-to-250-xp-for-successful-core-agips), the XP rewards have been increased to 250 XP and certain limitations and boundaries have been introduced for successful Core Proposals.

Als uw signaalvoorstel met succes is opgewaardeerd naar een kernvoorstel, zal 150 [XP](/traits#experience)* worden gegeven aan de Aavegotchi die u hebt genoteerd in uw Signaal-voorstel.

*Kan verhogen of verminderen gedurende de gehele COCOON periode

## Metamorfose

Metamorfose is de tweede uitgave van AavegotchiDAO, en is belast met het beheren van eenvoudige game mechanismen van Aavegotchi, zoals het totale aanbod van Aavegotchis, het toevoegen van nieuwe collaterals, het beslissen over hun functies en het toevoegen van nieuwe wearables gemaakt door de gemeenschap. Wanneer het tijd is om te migreren naar AavegotchiDAO Oasis, zal de AavegotchiDAO opnieuw stemmen om de migratie uit te voeren.

Een volledige lijst met beschikbare acties voor uitvoering door de AavegotchiDAO in deze fase is beschikbaar in de [Governance](https://docs.aavegotchi.com/overview/governance) sectie van de Aavegotchi smart contract-documentatie.

Token houders zullen beloningen ontvangen in de vorm van GHST voor actieve deelname aan deze uitgave van AavegotchiDAO.

Kenmerken houden in:

* Kan smart contract oproepen uitvoeren
* Kan bepaalde mechanisme upgraden
* Aavegotchi + GHST governance
* Platform: Aangepaste dapp front-end
* Beloningen: [XP](/traits#experience) + badges voor stemmen
* Layer: Polygon

## Oasis

Hoewel AavegotchiDAO Oasis de laatste uitgave is van de evolutie van AavegotchiDAO, is het slechts het begin van de realisatie van een spel dat door een DAO wordt bestuurd. Alle besluiten met betrekking tot Aavegotchi spelmechanismen, REALM mechanismen, uitgaven van het ecosysteem en zelfs smart contract upgrades zullen worden gestemd door de AavegotchiDAO.

Token houders zullen beloningen ontvangen in de vorm van GHST voor actieve deelname aan deze uitgave van AavegotchiDAO.

Kenmerken houden in:

* Kan smart contract oproepen uitvoeren
* Kan bepaalde mechanisme upgraden
* Aavegotchi + GHST governance
* Platform: Aavegotchi Realm
* Beloningen: [XP](/traits#experience) + badges voor stemmen
* Layer: Polygon

## Deelnemen aan Governance
Ik ben wakker! Dus hoe neem ik deel aan de AavegotchiDAO? Wij staan voor je klaar, Fren!

* You can participate in the discussions in the [DAO channel](https://discord.com/channels/732491344970383370/1031189663152623747) on Discord. We heten iedereen welkom!

* Deelnemen aan de stemming in AavegotchiDAO (wanneer ze beschikbaar zijn!)

* De [Aavegotchi Docs](https://docs.aavegotchi.com/overview/governance) details over de lijst van DAO functies die leden kunnen aanroepen en gebruiken om wijzigingen waar gestemd is uit te voeren. Laten we bijvoorbeeld zeggen dat asUSD is gestemd als een [onderpand](/posts/atokens). AavegotchiDAO zou de wijziging kunnen implementeren door gebruik te maken van de functie `addCollateralTypes()` en het specificeren van asUSD binnen de functie.

## Type Voorstellen

Er zijn 2 soorten voorstellen in de *Cocoon* fase:

* **Signaal Voorstel** - Een voorstel dat door iedereen kan worden geplaatst. Deze stemmingen zijn niet bindend, maar als het quorum is bereikt, zal het voorstel automatisch worden opgewaardeerd tot een bindend kernvoorstel. Share your proposal idea and discuss it with other community members in the [DAO channel](https://discord.com/channels/732491344970383370/1031189663152623747) on Discord. Once you have finalized the details of your proposal, create an official thread for it on the DAO channel using the framework outlined in the [Creating Signal Proposals](/dao#creating-signal-proposals) section below. After which, create a vote for it on [Snapshot](https://snapshot.org/#/aavegotchi.eth).

* **Kernvoorstel** - Als een signaalvoorstel 20% of groter quorum bereikt (hoeveelheid circulerende GHST in aanmerking om te stemmen op Polygon), Pixelcraf introduceert het voorstel opnieuw als een kernvoorstel. Deze stemmen zijn bindend en komen in aanmerking voor [XP](/traits#experience) beloningen voor deelnemers.

<img class = "bodyImage" src = "/dao/proposal-type.png" alt = "AavegotchiDAO Voorstel Type" />

**Kernvoorstellen** zijn verder onderverdeeld in 3 types:

*Herinnering: Quorum percentages worden berekend op basis van het aantal circulerende GHST dat in aanmerking komt om te stemmen op Polygon, niet op het totale aanbod!*

* **Smol stemmen:** Quorum van 5%. Deze stemmingen zijn bedoeld voor kleine besluiten die geen invloed hebben op de totale meta-cijfers of de waarde van de bestaande Aavegotchis (bijvoorbeeld. – Een voorstel voor een marketingstrategie is bedoeld om cosmetische producten in te voeren).

* **Middelgrote stemmen:** Quorum van 10%. Deze stemmingen zijn bedoeld voor besluiten die een noemenswaardig effect op de meta kunnen hebben (bijv. introduceer een nieuw spel voorwerp, door XP toe te wijzen aan een of ander item of evenement, iets te veranderen over een Aavegotchi die geen invloed heeft op de zeldzaamheid score).

* **Galaxy stemmen:** Quorum van 20%. Deze stemmingen zijn bedoeld voor belangrijke besluiten die aanzienlijke gevolgen hebben voor het Aavegotchi-ecosysteem (bv. een nieuwe Haunt, verandert iets over een Aavegotchi die zijn zeldzaamheids score) beïnvloedt.

## Stem Verschillen

Stemverschillen vormen het verschil tussen de twee topopties en zijn tekenend voor de vraag of er al dan niet een redelijke consensus is bereikt.

Hier is een voorbeeld Kern voorstel met 3 opties:

* Optie A ontvangt 25%
* Optie B ontvangt 35%
* Optie C ontvangt 40%.

Het vereiste stemmen Differentiële is 5% (het verschil tussen Optie C [40%] en Optie B [35%]).

Dat zou niet voldoende zijn om consensus te bereiken en dus wordt het voorstel niet uitgevoerd.

Hoe meer opties een stem heeft, hoe groter het verschil is dat moet worden aangetoond dat er een echte consensus is bereikt.

Voor COCON zullen we beginnen met de volgende stem Differentiële parameters en indien nodig corrigeren:

2 opties - 10% VD

3 opties - 15% VD

4 opties - 20% VD

## Signal Proposals maken

Om signaalvoorstellen te maken waarop de #GotchiGang kan stemmen, moet u zich houden aan het volgende formaat:

* Auteur + GotchiID
* Link to the [DAO channel](https://discord.com/channels/732491344970383370/1031189663152623747) thread on Discord (Proposals without significant discussion will be automatically removed from Snapshot)
* Samenvatting (inclusief rationele, tijdlijn, doelstellingen en belangrijke prestatie-indicatoren) Kopie/plak voorstellen van bestaande voorstellen zullen worden verwijderd, terwijl voorstellen met gelijksoortige maar specifieke variaties naast elkaar mogen bestaan.
* Effect
* Markeer einddoel en voordelen
* Erkennen van potentiële risico's of onbedoelde gevolgen
* Alle alternatieve paden (Plan B, Plan C, etc)
* De eindtijd van een voorstel mag niet langer zijn dan 30 dagen vanaf de begintijd. om ervoor te zorgen dat alleen actieve voorstellen worden weergegeven op het communautaire bestuur Snapshot.

Meer details zijn te vinden in dit [Medium bericht](https://aavegotchi.medium.com/scaling-aavegotchidao-c7e589de0333).

## Stemmen

Snapshot is een stem-DApp op Ethereum. Votes made on Snapshot do not require any gas and are not on-chain. Aavegotchi's Snapshot page can be found [here](https://snapshot.org/#/aavegotchi.eth).

Om te stemmen op Snapshot, volg de onderstaande stappen:

1). Ga naar een open voorstel.

2). Verbind uw Wallet.

<img class = "bodyImage" src = "/dao/snapshot1.jpg" alt = "Snapshot Stemming Ethereum" />
<img class = "bodyImage" src = "/dao/snapshot2.jpg" alt = "Snapshot Stemming Ethereum" />

3). Selecteer een poll optie en klik op "Stemmen." Er verschijnt een pop-up om je keuze te bevestigen.

<img class = "bodyImage" src = "/dao/snapshot3.jpg" alt = "Snapshot Stemming Ethereum" />
<img class = "bodyImage" src = "/dao/snapshot4.jpg" alt = "Snapshot Stemming Ethereum" />

4). Uw Metamask zal verschijnen. Onderteken de transactie, en je bent klaar!

<img class = "bodyImage" src = "/dao/snapshot5.jpg" alt = "onderteken Snapshot Stemming transactie" />

## Aavegotchi Verbetervoorstellen (AGIP's)

Bezoek de [Aavegotchi verbeteringsvoorstellen](/aavegotchi-improvement-proposals) pagina voor een lijst met historische stemmen.

Stem op AGIPs en krijg er[POAP badges](/poap) voor!

## Schatkist

As responsible stewards, members of AavegotchiDAO will play a role in determining how these funds are to be allocated.

The AavegotchiDAO treasury is located [here](https://aavegotchi.com/treasury).

MikeyJay and Eitri proposed the creation of a DAO Treasury Dashboard in [AGIP-76](/aavegotchi-improvement-proposals#create-a-dao-treasury-dashboard). The completed dashboard can be found [here](https://dune.com/eitri/aavegotchi-dao-treasury)

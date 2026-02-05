---
author: wagyuchicken
date: '2020-04-23T07:00:00.000Z'
title: 'Eigenschappen'
description: 'Alles wat je moet weten over Aavegotchi Eigenschappen!'
contributors:
  - "cinnabarhorse"
  - "wagyuchicken"
  - "unintelligent-nerd"
---

Aavegotchis worden geboren met eigenschappen. Net als hoe je eigenschappen definieert wie je bent als persoon, zijn de eigenschappen van Aavegotchi ook belangrijk voor het bepalen van hun levensonderhoud als spook! Deze meerdere eigenschappen hebben invloed op hun [Trait Base Rarity](/rarity-farming#base-rarity-score), hun prestaties in [mini-games](/minigames), en de [wearables](/wearables) die ze mogen dragen. Aavegotchis opgeroepen door [portalen](/portals) worden geboren met een combinatie van willekeurig gegenereerde eigenschappen. De eigenschappen van de Aavegotchi kunnen echter veranderen met <a href=#level>niveau</a>, uitgeruste wearables en verbruiksartikelen gebruikt. 

<div class="contentsBox">

**Inhoud**

<ol>
<li><a href=#randomly-generated-traits>Willekeurig Gegenereerde Eigenschappen </a></li>
<li><a href=#spirit-force-trait-modifiers>Spirit Force Eigenschappen Modifiers</a></li>
<li><a href=#kinship>Kinship</a></li>
<li><a href=#experience>Ervaring</a></li>
<li><a href=#level>Level</a></li>
<li><a href=#haunt>Haunt</a></li>
<li><a href=#alchemica-carrying-capacity>Alchemica Carrying Capacity</a></li>
<li><a href=#aging-mechanic>Aging Mechanic</a></li>
<li><a href=#trait-mappings>Eigenschap Mappings</a></li>
</ol>

</div>

## Willekeurig Gegenereerde Eigenschappen
Aavegotchis hebben zes eigenschappen:

* AGG = Agressiviteit
* NRG = Energie
* SPK = Spookiness
* BRN = Hersengrootte
* EYS = Oogvorm
* EYC = Oogkleur

Gebruik van RPG (Role-playing Game) terminologie, `AGG` is gelijkwaardig aan Sterkte, `NRG` is gelijk aan beweging, `BRN` is gelijk aan Intelligentie en `SPK` is een wildcard eigenschap. Houd er rekening mee dat deze eigenschappen niet precies hetzelfde zijn als de standaard RPGs; lagere waarde in de Aavegotchi metaverse zijn ook zeer krachtig!

Eigenschappen worden bepaald op het punt van het openen van een [Portaal](/portals). Bij het openen van een Portal, wordt [Willekeurige VRF generator functie van Chainlink](/glossary#chainlink-vrf) aangeroepen om Aavegotchis toe te wijzen met willekeurige vaardigheid waarden. Eigenschapwaarden worden verdeeld op een bell-curve, en elke eigenschap heeft een waarde van Common, Uncommon, Rare of Mythisch toegewezen afhankelijk van zijn zeldzaamheid. De kansen om elke vaardigheid zeldzaamheid te krijgen worden weergegeven in de onderstaande tabel:

tabel_TraitsProbabites

De bel-curve voor de verdeling van de waarde zou er ongeveer als volgt uitzien:

<img class="bodyImage" src="/traits/bell_curve.png" alt = "bel curve" />

Aavegotchis heeft in eerste instantie zes vaardigheden, hoewel deze in de toekomst verlengd kunnen worden door te stemmen in [AavegotchiDAO](/dao). Sommige eigenschappen, zoals de lichaamskleur van Aavegotchi (behalve gewone oude wit), zullen voor elke nieuwe haunt door de AavegotchiDAO bepaald worden!

In tegenstelling tot andere spellen, is er in Aavegotchi geen "optimale" eigenschap. Elk attribuut (behalve voor oogvorm en oogkleur) heeft verschillende effecten in verschillende mini-games. Aavegotchis met meer energie kan bijvoorbeeld bij racen goed presteren, maar zou in een minispel met meditatie niet goed presteren.

De tabellen hieronder geven details over elke vaardigheid per zeldzaamheid. *Let op: de twee tabellen moeten als één worden gezien. Het is gescheiden om te renderen op mobiele apparaten.*

tabel_TraitsByRarity1 tabel_VerkoopByRarity2
<p style="margin-left: 3.0em"><i> (L) geeft "Laag"; (H) geeft "Hoog" aan </i></p>
<p style="margin-left: 3.0em"><i> *Common kleuren van de ogen staan op de kleuren van de belegerde onderpand op je Aavegotchi. bv. oranje voor aDAI, lucht blauw voor aAAVE, paars voor aETH etc. </i></p>

Bekijk de [Oogvorm](/eye-shape) voor meer gedetailleerde informatie over elke Oogvorm.

## Spirit Force Eigenschappen Modifiers

Het type [spirit force](/spirit-force) dat uw Aavegotchi heeft heeft ook invloed op hun trait waarden:

tabel_spiritForceModifiers

## Kinship
Kinship is het loyaliteitsgevoel van je Aavegotchi. Meer informatie is te vinden op de [Kinship page](/kinship).

## Ervaring
Aavegotchis krijgen ervaring (XP) voor:
* Stemmen in een belangrijke [AavegotchiDAO](/dao) stem
* Deelnemen aan evenementen gehouden op Aavegotchi Discord (een Typeform zal worden vrijgegeven tijdens het evenement voor mensen om XP te ontvangen voor hun Gotchis)
* [min-games afspelen](/minigames) (alleen in bepaalde periodes als aangekondigd op Discord)

Aavegotchis kunnen ook worden geofferd om hun [spirit force](/spirit-force) te verwijderen en worden overgebracht naar een andere Aavegotchi. De ontvanger Aavegotchi zal 100% van de opgeofferde Aavegotchi's opgebouwde XP ontvangen.

XP bestaat als een intern saldo op het Aavegotchi smart contract.

XP kan worden bekeken op de [Aavegotchi profielpagina](/aavegotchi-profile).

## Level
Aavegotchis lgaan een evel omhoog als ze meer XP krijgen. Elke drie niveausontvangt je Aavegotchis één [Spirit Punt](/glossary#spirit-point) dat kan worden toegewezen aan het verhogen of verlagen van een bepaalde vaardigheid. Sommige wearables kunnen alleen worden gedragen door Aavegotchis van een bepaald niveau.

Hoe hoger je Gotchi niveau, hoe meer [gildes](/guild) ze mogen toetreden.

Klik [hier](/xp) voor gedetailleerde informatie over de benodigde XP voor elk niveau.

Je Aavegotchi niveau kan worden bekeken op de [Aavegotchi profielpagina](/aavegotchi-profile).

## Haunt
Net als pioniers naar de Nieuwe Wereld, reizen Aavegotchis vanuit het Netherrijk naar het Ether Rijk in groepen die bekend staan als [Haunts](/haunt). De oorspronkelijke Haunt bevatte 10.000 Aavegotchis. Daarna moeten er nieuwe Haunts worden goedgekeurd door de [AavegotchiDAO](/dao). Sommige wearables kunnen alleen worden gedragen door Aavegotchis die tot een bepaalde Haunt behoren.

Denk aan Haunts als edities, waarbij het nummer van Haunt op de Gotchi wordt aangegeven. Er zijn geen statistiekverschillen tussen Haunts.

## Alchemica Carrying Capacity

[BRS](/rarity-farming#base-rarity-score) is used to boost a gotchi's carrying capacity with the follow formula:

```
Carrying Capacity = 100 * (BRS/300)^2
```

Bv. a Gotchi with:

* BRS = 600 has a carrying capacity of 400 [Alchemica](/gotchus-alchemica) chunks

* BRS = 900 has a carrying capacity of 900 Alchemica chunks

## Aging Mechanic

[Aavegotchi verbeteringsvoorstel](/aavegotchi-improvement-proposals#add-an-aging-mechanic-to-affect-aavegotchi-rarity-scores) introduceerde een aging mechanic voor Aavegotchis.

Gotchis zouden een kleine boost krijgen van hun [BRS](/rarity-farming#base-rarity-score) naarmate ze ouder worden. Dit is bedoeld om statistische verschillen tussen haunts tegen te gaan en betrokkenheid op lange termijn te belonen.

Voor meer informatie, bekijk de [Aging Mechanic](/aging-mechanic) pagina.

## Eigenschap Mappings

These 6 traits are the base traits. To turn Aavegotchi into a full-fledged game in the [Gotchiverse](/gotchiverse), we need more nuanced variables.

Find out what these base traits map into in the [Trait Mappings page](/trait-mappings).
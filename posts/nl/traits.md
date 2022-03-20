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
<li><a href=#aging-mechanic>Aging Mechanisme</a></li>
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

Using RPG (Role-playing Game) terminology, `AGG` is equivalent to Strength, `NRG` is equivalent to Agility, `BRN` is equivalent to Intelligence, and `SPK` is a wildcard trait. Do note that these traits are not exactly the same as standard RPGs; lower trait values in the Aavegotchi metaverse are also very powerful!

Traits are determined at the point of opening a [Portal](/portals). Upon opening of a Portal, [Chainlink’s VRF random number generator function](/glossary#chainlink-vrf) is called to assign Aavegotchis with random trait values. These trait values are distributed on a bell-curve, and each trait is assigned a value of Common, Uncommon, Rare, or Mythical, depending on its rarity. The chances of getting each trait rarity is shown in the table below:

table_TraitsProbabilities

The bell curve for trait value distribution would look something like the following:

<img class="bodyImage" src="/traits/bell_curve.png" alt = "bell curve" />

Aavegotchis possess six traits initially, although these may be extended in the future via voting in [AavegotchiDAO](/dao). Some traits, like the Aavegotchi's body colour (other than plain old white), will be defined by the AavegotchiDAO for every new haunt!

Unlike other games, in Aavegotchi, there is no “optimal” trait. Each attribute (except for eye shape and eye color) has different effects in different mini-games. For example, Aavegotchis with higher energy may perform well in races, but would not perform well in a meditation mini-game.

The tables below detail each trait by rarity. *Note: The two tables should be seen as one. It has been split apart to render on mobile devices.*

table_TraitsByRarity1 table_TraitsByRarity2
<p style="margin-left: 3.0em"><i> (L) denotes "Low"; (H) denotes "High" </i></p>
<p style="margin-left: 3.0em"><i> *Common eye colours take on the colours of the staked collateral on your Aavegotchi. i.e. orange for aDAI, sky blue for aAAVE, purple for aETH etc. </i></p>

For more detailed information on every single Eye Shape, check out the [Eye Shape page](/eye-shape).

## Spirit Force Eigenschappen Modifiers

The type of [spirit force](/spirit-force) that your Aavegotchi has also influences their trait values:

table_spiritForceModifiers

## Kinship
Kinship is your Aavegotchi’s feeling of loyalty towards you. More information can be found on the [Kinship page](/kinship).

## Ervaring
Aavegotchis receive experience (XP) for:
* Voting in [AavegotchiDAO](/dao)
* Participating in events held on Aavegotchi Discord (a Typeform will be released during the event for people to complete to receive XP for their Gotchis)
* Playing [mini-games](/minigames) (only during certain periods as announced on Discord)

Aavegotchis can also be sacrificed to remove their [spirit force](/spirit-force) and have it transferred to another Aavegotchi. The recipient Aavegotchi will receive 100% of the sacrificed Aavegotchi’s accrued XP.

XP exists as an internal balance on the Aavegotchi smart contract.

XP can be viewed on the [Aavegotchi profile page](/aavegotchi-profile).

## Level
Aavegotchis level up as they gain more XP. Elke drie niveausontvangt je Aavegotchis één [Spirit Punt](/glossary#spirit-point) dat kan worden toegewezen aan het verhogen of verlagen van een bepaalde vaardigheid. Some wearables can only be worn by Aavegotchis of a certain level.

The higher your Gotchi level, the more [guilds](/guild) they are allowed to join.

For detailed information on the XP required for each level, click [here](/xp).

Your Aavegotchi level can be viewed on the [Aavegotchi profile page](/aavegotchi-profile).

## Haunt
Like pioneers to the New World, Aavegotchis travel from the Nether Realm to the Ether Realm in groups known as [Haunts](/haunt). The initial Haunt contains 10,000 Aavegotchis. Thereafter, new Haunts must be approved for travel by the [AavegotchiDAO](/dao). Some wearables can only be worn by Aavegotchis belonging to a certain Haunt.

Think of Haunts as editions, with Haunt numbers being indicated on the Gotchi. There will be no stats differences between Haunts.

## Aging Mechanisme

[Aavegotchi verbeteringsvoorstel](/aavegotchi-improvement-proposals#add-an-aging-mechanic-to-affect-aavegotchi-rarity-scores) introduceerde een aging mechanic voor Aavegotchis.

Gotchis zouden een kleine boost krijgen van hun [BRS](/rarity-farming#base-rarity-score) naarmate ze ouder worden. Dit is bedoeld om statistische verschillen tussen haunts tegen te gaan en betrokkenheid op lange termijn te belonen.

Voor meer informatie, bekijk de [Aging Mechanic](/aging-mechanic) pagina.
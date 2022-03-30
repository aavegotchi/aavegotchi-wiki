---
author: wagyuchicken
date: '2020-04-23'
title: 'Traits'
description: 'Tout ce que vous devez savoir sur les traits Aavegotchi !'
contributors:
  - "cinnabarhorse"
  - "wagyuchicken"
  - "unintelligent-nerd"
---

Aavegotchis are born with traits. Just like how your traits define who you are as a person, an Aavegotchi's traits are important in determining their livelihood as a ghost too! These multiple traits that they possess influence their [Trait Base Rarity](/rarity-farming#base-rarity-score), their performance in [mini-games](/minigames), and the [wearables](/wearables) that they are allowed to wear. Aavegotchis summoned from [portals](/portals) are born with a combination of randomly-generated traits. However, the Aavegotchi’s traits can change with <a href=#level>level</a>, equipped wearables and consumables used. 

<div class="contentsBox">

**Contenu**

<ol>
<li><a href=#randomly-generated-traits>Traits générées aléatoirement </a></li>
<li><a href=#spirit-force-trait-modifiers>Spirit Force Trait Modifiers</a></li>
<li><a href=#kinship>Parenté</a></li>
<li><a href=#experience>Expérience</a></li>
<li><a href=#level>Niveau</a></li>
<li><a href=#haunt>Haunt</a></li>
<li><a href=#aging-mechanic>Mécanique du vieillissement</a></li>
</ol>

</div>

## Traits générées aléatoirement
Les Aavegotchis ont six traits :

* AGG = Agressivité
* NRG = Énergie
* SPK = Effrayant
* BRN = Taille du cerveau
* EYS = Forme des yeux
* EYC = Couleur des yeux

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

## Spirit Force Trait Modifiers

The type of [spirit force](/spirit-force) that your Aavegotchi has also influences their trait values:

table_spiritForceModifiers

## Parenté
La parenté est le sentiment de fidélité de votre Aavegotchi. Plus d'informations peuvent être trouvées sur la [page Parenté](/kinship).

## Expérience
Aavegotchis receive experience (XP) for:
* Voting in [AavegotchiDAO](/dao)
* Participating in events held on Aavegotchi Discord (a Typeform will be released during the event for people to complete to receive XP for their Gotchis)
* Playing [mini-games](/minigames) (only during certain periods as announced on Discord)

Aavegotchis can also be sacrificed to remove their [spirit force](/spirit-force) and have it transferred to another Aavegotchi. The recipient Aavegotchi will receive 100% of the sacrificed Aavegotchi’s accrued XP.

XP exists as an internal balance on the Aavegotchi smart contract.

XP can be viewed on the [Aavegotchi profile page](/aavegotchi-profile).

## Niveau
Aavegotchis level up as they gain more XP. Tous les trois niveaux, les Aavegotchis reçoivent un [point d'esprit](/glossary#spirit-point) qui peut être alloué à l'augmentation ou à la diminution d'une certaine caractéristique (trait). Some wearables can only be worn by Aavegotchis of a certain level.

The higher your Gotchi level, the more [guilds](/guild) they are allowed to join.

For detailed information on the XP required for each level, click [here](/xp).

Your Aavegotchi level can be viewed on the [Aavegotchi profile page](/aavegotchi-profile).

## Haunt
Like pioneers to the New World, Aavegotchis travel from the Nether Realm to the Ether Realm in groups known as [Haunts](/haunt). The initial Haunt contains 10,000 Aavegotchis. Thereafter, new Haunts must be approved for travel by the [AavegotchiDAO](/dao). Some wearables can only be worn by Aavegotchis belonging to a certain Haunt.

Think of Haunts as editions, with Haunt numbers being indicated on the Gotchi. There will be no stats differences between Haunts.

## Mécanique de vieillissement

[La proposition d'amélioration Aavegotchi 13](/aavegotchi-improvement-proposals#add-an-aging-mechanic-to-affect-aavegotchi-rarity-scores) a introduit un mécanisme de vieillissement pour les Aavegotchis.

Les Gotchis peuvent recevoir un petit coup de pouce à leur [BRS](/rarity-farming#base-rarity-score) au fur et à mesure qu'ils vieillissent. Il s'agit de doser plus justement la différence statistique entre les Haunts et la récompense de l'engagement sur le long terme.

For more information, check out the [Aging Mechanic](/aging-mechanic) page.
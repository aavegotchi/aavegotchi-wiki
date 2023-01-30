---
author: wagyuchicken
date: '2020-04-23T07:00:00.000Z'
title: 'Traits'
description: 'Everything you need to know about Aavegotchi traits!'
contributors:
  - "cinnabarhorse"
  - "wagyuchicken"
  - "chinyh"
---

Aavegotchis are born with traits. Just like how your traits define who you are as a person, an Aavegotchi's traits are important in determining their livelihood as a ghost too! These multiple traits that they possess influence their [Trait Base Rarity](/rarity-farming#base-rarity-score), their performance in [mini-games](/minigames), and the [wearables](/wearables) that they are allowed to wear. Aavegotchis summoned from [portals](/portals) are born with a combination of randomly-generated traits. However, the Aavegotchi’s traits can change with <a href=#level>level</a>, equipped wearables and consumables used. 

<div class="contentsBox">

**内容**

<ol>
<li><a href=#randomly-generated-traits>Randomly Generated Traits </a></li>
<li><a href=#spirit-force-trait-modifiers>Spirit Force Trait Modifiers</a></li>
<li><a href=#kinship>Kinship</a></li>
<li><a href=#experience>Experience</a></li>
<li><a href=#level>Level</a></li>
<li><a href=#haunt>Haunt</a></li>
<li><a href=#alchemica-carrying-capacity>Alchemica Carrying Capacity</a></li>
<li><a href=#aging-mechanic>Aging Mechanic</a></li>
<li><a href=#trait-mappings>Trait Mappings</a></li>
</ol>

</div>

## Randomly Generated Traits
Aavegotchis have six traits:

* AGG = Aggressiveness
* NRG = Energy
* SPK = Spookiness
* BRN = Brain Size
* EYS = Eye Shape
* EYC = Eye Color

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

## Kinship
Kinship is your Aavegotchi’s feeling of loyalty towards you. More information can be found on the [Kinship page](/kinship).

## Experience
Aavegotchis receive experience (XP) for:
* Voting in [AavegotchiDAO](/dao)
* Participating in events held on Aavegotchi Discord (a Typeform will be released during the event for people to complete to receive XP for their Gotchis)
* Playing [mini-games](/minigames) (only during certain periods as announced on Discord)

Aavegotchis can also be sacrificed to remove their [spirit force](/spirit-force) and have it transferred to another Aavegotchi. The recipient Aavegotchi will receive 100% of the sacrificed Aavegotchi’s accrued XP.

XP exists as an internal balance on the Aavegotchi smart contract.

XP can be viewed on the [Aavegotchi profile page](/aavegotchi-profile).

## Level
Aavegotchis level up as they gain more XP. Every three levels, Aavegotchis receive one [Spirit Point](/glossary#spirit-point) that can be allocated towards increasing or decreasing a certain trait. Some wearables can only be worn by Aavegotchis of a certain level.

The higher your Gotchi level, the more [guilds](/guild) they are allowed to join.

For detailed information on the XP required for each level, click [here](/xp).

Your Aavegotchi level can be viewed on the [Aavegotchi profile page](/aavegotchi-profile).

## Haunt
Like pioneers to the New World, Aavegotchis travel from the Nether Realm to the Ether Realm in groups known as [Haunts](/haunt). The initial Haunt contains 10,000 Aavegotchis. Thereafter, new Haunts must be approved for travel by the [AavegotchiDAO](/dao). Some wearables can only be worn by Aavegotchis belonging to a certain Haunt.

Think of Haunts as editions, with Haunt numbers being indicated on the Gotchi. There will be no stats differences between Haunts.

## Alchemica Carrying Capacity

[BRS](/rarity-farming#base-rarity-score) is used to boost a gotchi's carrying capacity with the follow formula:

```
Carrying Capacity = 100 * (BRS/300)^2
```

E.g. a Gotchi with:

* BRS = 600 has a carrying capacity of 400 [Alchemica](/gotchus-alchemica) chunks

* BRS = 900 has a carrying capacity of 900 Alchemica chunks

## Aging Mechanic

[Aavegotchi Improvement Proposal 13](/aavegotchi-improvement-proposals#add-an-aging-mechanic-to-affect-aavegotchi-rarity-scores) introduced an aging mechanic for Aavegotchis.

Gotchis would receive a small boost to their [BRS](/rarity-farming#base-rarity-score) as they age. This is to counteract statistical variance between haunts and reward long term engagement.

For more information, check out the [Aging Mechanic](/aging-mechanic) page.

## Trait Mappings

These 6 traits are the base traits. To turn Aavegotchi into a full-fledged game in the [Gotchiverse](/gotchiverse), we need more nuanced variables.

Find out what these base traits map into in the [Trait Mappings page](/trait-mappings).
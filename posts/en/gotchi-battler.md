---
author: Unintelligent Nerd
date: '2020-04-23T07:00:00.000Z'
title: 'Gotchi Battler'
description: "Overview of Gotchi Battler gameplay, team setup, combat loop, and reward context for players exploring Aavegotchi auto-battler modes."
contributors: ["unintelligent-nerd"]
---

Gotchi Battler is a captivating auto-battler game where two teams of five Gotchis each face off until one emerges victorious. The strength and special moves of each Gotchi are defined by their unique traits, opening the door to a multitude of strategic combinations. 

Your mission is to assemble a formidable team, finding the perfect blend of Gotchis whose traits harmonize on the battlefield, and deciding on the formation that will outmaneuver your opponents. Once your team is set, sit back and watch the drama unfold as your Gotchis engage in a captivating battle to the death, bringing your strategic foresight to life!

<div class="contentsBox">

**Contents**

<ol>
<li><a href=#trait-mapping>Trait Mapping</a></li>
<li><a href=#speed-turn-mechanics>Speed/Turn Mechanics</a></li>
<li><a href=#attacking>Attacking</a></li>
<li><a href=#classes>Classes</a></li>
<li><a href=#links>Links</a></li>
</ol>

</div>

## Trait Mapping


There are 9 core stats that are used in Gotchi Battler, these stats are mapped from the Aavegotchi's 6 on-chain [traits](/traits) (NRG, AGG, SPK, BRN, EYC, EYS) as follows:

table_traitMapping

## Speed/Turn Mechanics

In order to determine which Gotchi is to act each turn a counter for each Gotchi is stored called the Action Delay. The Gotchi with the lowest Action Delay at the start of each turn will be the one to act that turn, if multiple Gotchis have the same Action Delay then the Gotchi with the highest Speed stat will act. If multiple Gotchis have the same Action Delay and the same Speed stat then one of those Gotchis is randomly chosen to act.

The formula for calculating the initial Action Delay is:

```
100 / Speed
```

After a Gotchis has acted its current Action Delay is calculated by 100 / Speed and added to their existing Action Delay.

## Attacking

In Gotchi Battler, battles are automated, allowing players to watch the action unfold based on the strengths, abilities, and tactics of their assembled teams.

More details could be found in the docs [here](https://gotchi-battler-1.gitbook.io/gotchi-battler/battle-mechanics/attacking).

## Classes

There are 8 classes of Gotchi in Gotchi Battler. The class of a Gotchi is determined by its best trait. Each Class has its own special move and a leader skill.

table_classes

The Gotchi Battler Docs contain more information on [Special Attacks](https://gotchi-battler-1.gitbook.io/gotchi-battler/battle-mechanics/special-attacks) and [Leader Skills](https://gotchi-battler-1.gitbook.io/gotchi-battler/battle-mechanics/leader-skills).

## Links

* [Gotchi Battler Website](https://gotchibattler.com/)

* [Gotchi Battler Docs](https://gotchi-battler-1.gitbook.io/gotchi-battler)

## Related Pages

- [Game Center](/games)
- [Gotchi Guardians](/gotchi-guardians)
- [Spirit Force Arena](/spirit-force-arena)
- [Traits](/traits)

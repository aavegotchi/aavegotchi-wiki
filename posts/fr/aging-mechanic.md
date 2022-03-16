---
author: Unintelligent Nerd
date: '2020-04-23T07:00:00.000Z'
title: 'Aging Mechanic'
description: 'Aging Mechanic'
contributors:
  - "unintelligent-nerd"
---

Vos amis gotchi sont en vie ! Comme vous, ils vieillissent — de l'enfance à l'âge adulte.

N'oubliez pas de célébrer l'anniversaire de votre lil fren ! Ils en ont également un !

<div class="headerImageContainer">
<img class="headerImage" src="/aging-mechanic/aging-mechanic.png">
<p class="headerImageText">Deckaard Caain: Restez un instant et écoutez</p>
</div>

<div class="contentsBox">

**Contenu**

<ol>
<li><a href=#rationale>Raisonnement</a></li>
<li><a href=#brs-boost>Boost de BRS</a></li>
</ol>

</div>

## Raisonnement

[Aavegotchi Improvement Proposal 13](/aavegotchi-improvement-proposals#add-an-aging-mechanic-to-affect-aavegotchi-rarity-scores) introduced an aging mechanic for Aavegotchis.

Gotchis would receive a small boost to their [BRS](/rarity-farming#base-rarity-score) as they age. This is to counteract statistical variance between haunts and reward long term engagement.

This provides a buffer of approximately 6 months during which older gotchis have a BRS boost over newly summoned gotchis. As newly summoned gotchis age, they quickly begin to catch up to their older counterparts.

The formula that is used to calculate the BRS boost is modeled after the Fibonacci numbers x 1 million, but replacing the first 0 with a 1 to better fit the use case.

This solution provides for a quicker boost in the first few epochs of age, and greatly flattens over time to avoid anything too OP and allow more recently summoned gotchis to **eventually** catch up to **within a 1 BRS boost** of their older and wiser brethren. It incentivizes opening and summoning portals as opposed to sitting on them, both boosting the in-game economy as well as the scarcity of those that are still chosen to remain closed. Most of all, it is a fair system that benefits no one haunt over any other, and simply rewards long term engagement, while counteracting the effects of sudden and aggressive dilution like we are currently witnessing.

## Boost de BRS

table_brsBoost


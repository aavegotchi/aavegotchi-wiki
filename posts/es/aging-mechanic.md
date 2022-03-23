---
author: Unintelligent Nerd
date: '2020-04-23T07:00:00.000Z'
title: 'Mecánica de envejecimiento'
description: 'Mecánica de envejecimiento'
contributors:
  - "unintelligent-nerd"
---

¡Tus amigos gotchi están vivos! Al igual que usted, también envejecen, desde la infancia hasta la adultez.

¡Recuerda celebrar el cumpleaños de tu pequeño amigo! ¡También lo tienen!

<div class="headerImageContainer">
<img class="headerImage" src="/aging-mechanic/aging-mechanic.png">
<p class="headerImageText">Deckaard Caain: Stay awhile and listen</p>
</div>

<div class="contentsBox">

**Contenidos**

<ol>
<li><a href=#rationale>Rationale</a></li>
<li><a href=#brs-boost>BRS Boost</a></li>
</ol>

</div>

## Rationale

[Aavegotchi Improvement Proposal 13](/aavegotchi-improvement-proposals#add-an-aging-mechanic-to-affect-aavegotchi-rarity-scores) introduced an aging mechanic for Aavegotchis.

Gotchis would receive a small boost to their [BRS](/rarity-farming#base-rarity-score) as they age. This is to counteract statistical variance between haunts and reward long term engagement.

This provides a buffer of approximately 6 months during which older gotchis have a BRS boost over newly summoned gotchis. As newly summoned gotchis age, they quickly begin to catch up to their older counterparts.

The formula that is used to calculate the BRS boost is modeled after the Fibonacci numbers x 1 million, but replacing the first 0 with a 1 to better fit the use case.

This solution provides for a quicker boost in the first few epochs of age, and greatly flattens over time to avoid anything too OP and allow more recently summoned gotchis to **eventually** catch up to **within a 1 BRS boost** of their older and wiser brethren. It incentivizes opening and summoning portals as opposed to sitting on them, both boosting the in-game economy as well as the scarcity of those that are still chosen to remain closed. Most of all, it is a fair system that benefits no one haunt over any other, and simply rewards long term engagement, while counteracting the effects of sudden and aggressive dilution like we are currently witnessing.

## BRS Boost

table_brsBoost


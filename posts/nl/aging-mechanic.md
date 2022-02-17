---
author: Unintelligent Nerd
date: '2020-04-23T07:00:00.000Z'
title: 'Aging Mechanic'
description: 'Aging Mechanic'
contributors:
  - "unintelligent-nerd"
---

Your gotchi friends are alive! Like you, too, they age — growing from infancy to adulthood.

Remember to celebrate your lil fren's birthday! They have one as well!

<div class="headerImageContainer">
<img class="headerImage" src="/aging-mechanic/aging-mechanic.png">
<p class="headerImageText">Deckaard Caain: Stay awhile and listen</p>
</div>

<div class="contentsBox">

**Contents**

<ol>
<li><a href=#rationale>Rationale</a></li>
<li><a href=#brs-boost>BRS Boost</a></li>
</ol>

</div>

## Rationale

[Aavegotchi Improvement Proposal 13](/aavegotchi-improvement-proposals#add-an-aging-mechanic-to-affect-aavegotchi-rarity-scores) introduced an aging mechanic for Aavegotchis.

Gotchis would receive a small boost to their [BRS](/rarity-farming#base-rarity-score) as they age. This is to counteract statistical variance between haunts and reward long term engagement.

This provides a buffer of approximately 6 months during which older gotchis have a BRS boost over newly summoned gotchis. Naarmate ze net naar gotchis kwamen, beginnen ze snel hun oudere tegenhangers in te halen.

The formula that is used to calculate the BRS boost is modeled after the Fibonacci numbers x 1 million, but replacing the first 0 with a 1 to better fit the use case.

This solution provides for a quicker boost in the first few epochs of age, and greatly flattens over time to avoid anything too OP and allow more recently summoned gotchis to **eventually** catch up to **within a 1 BRS boost** of their older and wiser brethren. Het stimuleert de opening en summoning van portalen in plaats van er op te gaan zitten, beiden verbeteren zowel de economie in het spel als de schaarste van portalen die nog steeds gesloten zijn. Bovenal is het een eerlijk systeem dat niemand ten goede komt op een ander gebied en betrokkenheid op de lange termijn beloont. terwijl we de effecten van plotselinge en agressieve verwatering tegengaan, zoals we nu zien.

## BRS Boost

table_brsBoost


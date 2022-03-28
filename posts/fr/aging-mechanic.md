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

[La proposition d'amélioration Aavegotchi 13](/aavegotchi-improvement-proposals#add-an-aging-mechanic-to-affect-aavegotchi-rarity-scores) a introduit un mécanisme de vieillissement pour les Aavegotchis.

Les Gotchis peuvent recevoir un petit coup de pouce à leur [BRS](/rarity-farming#base-rarity-score) au fur et à mesure qu'ils vieillissent. Il s'agit de doser plus justement la différence statistique entre les Haunts et la récompense de l'engagement sur le long terme.

Cela fournit un tampon d'environ 6 mois au cours desquels les gotchis plus anciens ont un boost BRS par rapport aux gotchis nouvellement invoqués. À mesure qu'un gotchi qui vient d'être invoqué prend de l'âge, ils commence rapidement à rattraper ses homologues plus âgés.

La formule utilisée pour calculer le boost BRS est modélisée suivant les nombres de Fibonacci x 1 million mais en remplaçant le premier 0 par un 1 pour mieux s'adapter.

Cette solution assure un boost plus rapide dans les premiers instant de vie, et s'aplanit grandement au fil du temps pour éviter que ce soit trop OP et permettre aux gotchis plus récemment invoqués de **éventuellement** finir par rattraper **à moins de 1 boost de BRS** leurs frères plus âgés et plus sages. Il encourage l'ouverture de portail et l'invocation de gotchi plutôt que de les garder au chaud. Celà stimule l'économie du jeu ainsi que la rareté des portails restant fermés. Surtout, c'est un système juste qui ne profite à personne, qui ne hante personne et qui récompense simplement l'engagement à long terme, tout en luttant contre les effets d'une dilution soudaine et agressive comme nous en sommes actuellement témoins.

## Boost de BRS

table_brsBoost


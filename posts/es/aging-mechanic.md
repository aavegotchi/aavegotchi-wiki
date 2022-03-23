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
<p class="headerImageText">Deckaard Caain: Manténgase un rato y escuche</p>
</div>

<div class="contentsBox">

**Contenidos**

<ol>
<li><a href=#rationale>Razonamiento</a></li>
<li><a href=#brs-boost>Potenciar BRS</a></li>
</ol>

</div>

## Razonamiento

[La Propuesta de Mejora 13 de Aavegotchi](/aavegotchi-improvement-proposals#add-an-aging-mechanic-to-affect-aavegotchi-rarity-scores) introdujo un mecanismo de envejecimiento para los Aavegotchis.

Los Gotchis recibiría un pequeño impulso a su [BRS](/rarity-farming#base-rarity-score) a medida que envejecen. Esto es para contrarrestar la diferencia estadística entre los rituales y recompensar el compromiso a largo plazo.

Esto proporciona una defensa de aproximadamente 6 meses durante los cuales gotchis antiguos tienen un impulso BRS sobre los gotchis recién invocados. A medida que envejecen los gotchis recién invocados, rápidamente comienzan a ponerse a la altura de sus homólogos más antiguos.

La fórmula que se utiliza para calcular el impulso de BRS se basa en los números de Fibonacci x 1 millón, pero reemplazando el primer 0 con un 1 para que se ajuste mejor al caso.

Esta solución proporciona un impulso más rápido en los primeros fases de la edad, y se aplana mucho con el tiempo para evitar cualquier cosa demasiado OP y permitir a los gotchis invocados más recientemente**eventualmente** alcanzar**con 1 impulso de BRS** a sus hermanos más viejos y sabios. Esto incentiva a abrir e invocar portales, en vez de dejarlos cerrados, ambas propuestas impulsan la economía en el juego, así como la escasez de los que siguen siendo elegidos para permanecer cerrados. Sobre todo, se trata de un sistema justo que no beneficia a nadie por encima de los demás y simplemente recompensa el compromiso a largo plazo. al contrarrestar los efectos de una dilución repentina y agresiva, como estamos presenciando actualmente.

## Potenciar BRS

tabla_brsBoost


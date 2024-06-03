---
author: Unintelligent Nerd
date: '2020-04-23T07:00:00.000Z'
title: 'Experiencia del Aavegotchi (XP)'
description: '¡Aprende sobre la experiencia del Aavegotchi (XP) aquí!'
contributors:
  - "unintelligent-nerd"
---

Aavegotchis sube de nivel a medida que ganan más experiencia (XP). Pero, ¿cuánta XP necesitan exactamente para cada nivel? Analistas de datos, ¡tenemos algunos números para que rompáis!

<div class="contentsBox">

**Contenidos**

<ol>
<li><a href=#gaining-xp>Ganando XP</a></li>
<li><a href=#formula>Fórmula</a></li>
<li><a href=#experience-table>Tabla de experiencia</a></li>
<li><a href=#claiming-xp>Claiming XP</a></li>
<li><a href=#tracking-xp-received>Tracking XP received</a></li>
</ol>

</div>

## Ganando XP
Los Aavegotchis reciben experiencia (XP) por:
* Votar en [AavegotchiDAO](/dao)
* Participación en eventos celebrados en Aavegotchi Discord (se publicará un Typeform durante el evento para que la gente complete y reciba XP por sus Gotchis)
* Jugando [minijuegos](/minigames) (solo durante ciertos periodos según lo anunciado en Discord)

## Fórmula
La siguiente fórmula se utiliza para determinar el XP requerido para alcanzar el siguiente nivel:

(Nivel actual ^ 2) Constante, donde Constante = 0.02

## Tabla de experiencia

La siguiente tabla muestra el XP requerido para cada nivel. Antes de profundizar en los datos, aquí hay algunas definiciones útiles de los términos clave utilizados:

* Nivel Actual: Nivel Actual de tu Gotchi
* Siguiente nivel: Siguiente nivel de tu Gotchi
* EXP: Se requiere experiencia para alcanzar el siguiente nivel que se especifica en la columna **de siguiente nivel**
* Diferencia: Diferencia en la XP necesaria para alcanzar el nivel en la columna **Nivel siguiente** en comparación con la misma columna en la fila anterior
* Constante: Un valor fijo que se utiliza en el cálculo de la XP requerido para el siguiente nivel de Fórmula

El nivel máximo que un aavegotchi podría alcanzar es 99. Cualquier cambio en el nivel máximo podría hacerse a través de propuestas en el [AavegotchiDAO](/dao).

*Nota: Los avegotchis comienza en el Nivel 1. El "nivel 0" está incluido en la tabla para las personas interesadas en aplicar la fórmula y observar cómo funciona el cálculo de XP.*

tabla_XP

## Claiming XP

XP has to be claimed manually at the airdrop page here: https://dapp.aavegotchi.com/u/[XXXXX]/airdrops.

Replace the [XXXXX] with your wallet address in the URL above.

After voting on an [Aavegotchi Improvement Proposal (AGIP)](/aavegotchi-improvement-proposals), all Aavegotchis you owned at the block the AGIP was created are eligible for the XP claim. There is a bulk claim ("CLAIM ALL") function that allows you to claim the XP for all AGIPs you have voted on. If the CLAIM ALL function fails, you can claim the XP for each AGIP individually.

## Tracking XP received

Our frenly [aarchitect](/aarchitect) Frank Pfeift has created an application to track the XP that a Gotchi has received over its lifetime.

His app can be accessed [here](https://aavegotchi-xp-dashboard.vercel.app). Your Gotchi ID is the digits that are found at the end of the URL at your [Gotchi Profile Page](/aavegotchi-profile).
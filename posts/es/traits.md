---
author: wagyuchicken
date: '2020-04-23T07:00:00.000Z'
title: 'Rasgos'
description: '¡Todo lo que necesitas saber sobre los rasgos de Aavegotchi!'
contributors:
  - "cinnabarhorse"
  - "wagyuchicken"
  - "unintelligent-nerd"
---

Aavegotchis nacen con rasgos. ¡Al igual que tus rasgos definen quién eres como persona, los rasgos de Aavegotchi son importantes para determinar su capacidad como fantasma también! Estas características múltiples que poseen influyen en su [Rareza base](/rarity-farming#base-rarity-score), su rendimiento en [minijuegos](/minigames)y los [portables](/wearables) que se les permite usar. Aavegotchis invocados desde [portales](/portals) nacen con una combinación de rasgos generados aleatoriamente. Sin embargo, los rasgos de los Aavegotchi pueden cambiar con <a href=#level>nivel</a>, los wearables equipados y los consumibles utilizados. 

<div class="contentsBox">

**Contenidos**

<ol>
<li><a href=#randomly-generated-traits>Rasgos generados aleatoriamente </a></li>
<li><a href=#spirit-force-trait-modifiers>Modificadores de fuerza espiritual</a></li>
<li><a href=#kinship>Kinship</a></li>
<li><a href=#experience>Experiencia</a></li>
<li><a href=#level>Nivel</a></li>
<li><a href=#haunt>Ritual</a></li>
<li><a href=#alchemica-carrying-capacity>Alchemica Carrying Capacity</a></li>
<li><a href=#aging-mechanic>Aging Mechanic</a></li>
<li><a href=#trait-mappings>Mapeo de Rasgos</a></li>
</ol>

</div>

## Rasgos generados aleatoriamente
Los avegotchis tienen seis características:

* AGG = Agresividad
* NRG = Energía
* SPK = Espanto
* BRN = Inteligencia
* EYS = Forma de ojos
* EYC = Color de Ojos

Usando terminología RPG (Role-playing Game), `AGG` es equivalente a Fuerza, `NRG` es equivalente a Agilidad, `BRN` es equivalente a Inteligencia y `SPK` es un rasgo de comodín. Tenga en cuenta que estos rasgos no son exactamente los mismos que los RPG estándar; los valores de rasgos más bajos en el metaverso Aavegotchi también son muy poderosos!

Los rasgos se determinan en el momento de apertura de un [Portal](/portals). Al abrir un Portal, [la función generadora de números aleatorios VRF de Chainlink](/glossary#chainlink-vrf) es llamada para asignar Aavegotchis con valores de rasgo aleatorios. Estos valores de rasgo se distribuyen en una curva de campana, y cada rasgo se le asigna un valor de Común, Poco Común, Rara o Mítica, dependiendo de su rareza. Las posibilidades de obtener cada rareza de rasgos se muestran en la siguiente tabla:

table_TraitsProbabilities

La curva de campana para la distribución de valores de rasgos se vería algo así:

<img class="bodyImage" src="/traits/bell_curve.png" alt = "curva de campana" />

Aavegotchis tiene seis rasgos inicialmente, aunque estos pueden ser extendidos en el futuro votando en [AavegotchiDAO](/dao). Algunos rasgos, como el color corporal de Aavegotchi (además del blanco), serán definidos por el AavegotchiDAO para cada nuevo ritual!

A diferencia de otros juegos, en Aavegotchi, no hay rasgos “óptico”. Cada atributo (excepto para la forma del ojo y el color) tiene diferentes efectos en diferentes minijuegos. Por ejemplo, Aavegotchis con mayor energía puede funcionar bien en carreras, pero no funcionaría bien en un minijuego meditativo.

Las tablas a continuación detallan cada rasgo por rareza. *Nota: Las dos tablas deben ser vistas como una. Se ha dividido para renderizarse en dispositivos móviles.*

table_TraitsByRarity1 table_TraitsByRarity2
<p style="margin-left: 3.0em"><i> (L) indica "Bajo"; (H) indica "Alto" </i></p>
<p style="margin-left: 3.0em"><i> *Los colores comunes de los ojos toman los colores del colateral depositado en tu Aavegotchi. es decir, naranja para aDAI, azul celeste para aAAVE, púrpura para aETH etc. </i></p>

Para obtener información más detallada sobre cada forma de ojos, consulta la página [Forma de ojo](/eye-shape).

## Modificadores de fuerza espiritual

El tipo de fuerza del espíritu [](/spirit-force) de tus Aavegotchis también influye en sus valores de rasgos:

table_spiritForceModifiers

## Kinship
Kinship es el sentimiento de lealtad de tu Aavegotchi. Puede encontrar más información en la página [Kinship](/kinship).

## Experiencia
Los Aavegotchis reciben experiencia (XP) por:
* Votar en [AavegotchiDAO](/dao)
* Participación en eventos celebrados en Aavegotchi Discord (se publicará un Typeform durante el evento para que la gente complete y reciba XP por sus Gotchis)
* Jugando [minijuegos](/minigames) (solo durante ciertos periodos según lo anunciado en Discord)

Aavegotchis también puede sacrificarse para eliminar su [fuerza espiritual](/spirit-force) y transferirla a otro Aavegotchi. El receptor Aavegotchi recibirá el 100% del XP acumulado sacrificado de Aavegotchi.

XP existe como un balance interno en el contrato inteligente de Aavegotchi.

Se puede ver XP en la página de perfil de [Aavegotchi](/aavegotchi-profile).

## Nivel
El Aavegotchi sube de nivel a medida que ganan más experiencia XP. Cada tres niveles, el Aavegotchis recibe un [Punto de Espíritu](/glossary#spirit-point) que puede asignarse para aumentar o disminuir un determinado rasgo. Algunos wearables sólo pueden ser usados por Aavegotchis de cierto nivel.

Cuanto más alto sea tu nivel de Gotchi, a más [gremios](/guild) podrá unirse.

Para obtener información detallada sobre la XP necesaria para cada nivel, haz clic [aquí](/xp).

El nivel de tu Aavegotchi puede verse en la página de perfil de [Aavegotchi](/aavegotchi-profile).

## Ritual
Como los pioneros en el Nuevo Mundo, Aavegotchi viaja desde el Reino del Nether al Reino del Éter en grupos conocidos como [Rituales](/haunt). La Ritual inicial contiene 10.000 Aavegotchis. Por lo tanto, los nuevos Rituales deben ser aprobados por el [AavegotchiDAO](/dao). Algunos wearables sólo pueden ser usados por Aavegotchis de cierto ritual.

Piense en Rituales como ediciones, con números de Ritual indicados en el Gotchi. No habrá diferencias de rasgos entre Rituales.

## Alchemica Carrying Capacity

[BRS](/rarity-farming#base-rarity-score) is used to boost a gotchi's carrying capacity with the follow formula:

```
Carrying Capacity = 100 * (BRS/300)^2
```

Por ejemplo,. a Gotchi with:

* BRS = 600 has a carrying capacity of 400 [Alchemica](/gotchus-alchemica) chunks

* BRS = 900 has a carrying capacity of 900 Alchemica chunks

## Aging Mechanic

[La Propuesta de Mejora 13 de Aavegotchi](/aavegotchi-improvement-proposals#add-an-aging-mechanic-to-affect-aavegotchi-rarity-scores) introdujo un mecanismo de envejecimiento para los Aavegotchis.

Los Gotchis recibiría un pequeño impulso a su [BRS](/rarity-farming#base-rarity-score) a medida que envejecen. Esto es para contrarrestar la diferencia estadística entre los rituales y recompensar el compromiso a largo plazo.

For more information, check out the [Aging Mechanic](/aging-mechanic) page.

## Mapeo de Rasgos

These 6 traits are the base traits. To turn Aavegotchi into a full-fledged game in the [Gotchiverse](/gotchiverse), we need more nuanced variables.

Find out what these base traits map into in the [Trait Mappings page](/trait-mappings).
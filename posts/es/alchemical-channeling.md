---
author: Unintelligent Nerd
date: '2020-04-23T07:00:00.000Z'
title: 'Alchemical Channeling'
description: 'Alchemical Channeling'
contributors:
  - "unintelligent-nerd"
---

<div class="headerImageContainer">
<img class="headerImage" src="/alchemical-channeling/alchemical-channeling.png">
<p class="headerImageText">Alchemical Channeling</p>
</div>

Alchemical Channeling (occasionally referred to as a “Gotchi UBI”) is a basic daily stipend earned by Aavegotchis that comes directly from the Gotchiverse ether, instead of being harvested from the parcel.

<div class="contentsBox">

**Contenidos**

<ol>
<li><a href=#how-to-channel-alchemica>How to channel Alchemica</a></li>
<li><a href=#how-much-alchemica-will-i-receive>How much Alchemica will I receive</a></li>
<li><a href=#limits-on-alchemical-channeling>Limits on Alchemical Channeling</a></li>
<li><a href=#alchemical-channeling-and-kinship-burning>Alchemical Channeling and Kinship Burning</a></li>
</ol>

</div>

## How to channel Alchemica

Aavegotchis can participate in Alchemical Channeling by walking up to an Alchemical Aaltar on a REALM parcel owned by their owner (or for borrowed gotchis, by the original owner) and clicking the “Channel Alchemica” action button. This will initiate an onchain transaction that transfers a portion of Alchemica directly to the Gotchi owner (or into the Gotchi Pocket, for borrowed Gotchis), while another portion will spillover on the nearby map.

**Note that channeled Alchemica is not taken from the REALM Parcel’s surveyed amount!**

## How much Alchemica will I receive

Exactly how much Alchemica (FUD, FOMO, ALPHA, and KEK) the Gotchi receives through Alchemical Channeling depends primarily on its [Kinship](/kinship) level.

The base rate for channeling is 20 FUD, 10 FOMO, 5 ALPHA, and 2 KEK. This base rate then gets multiplied by a modifier, depending on the Aavegotchi’s kinship level (see table below).

table_alchemicaRecibido por Canalización

Cada punto de Kinship incrementa el modificador de canalización alquímica, por la fórmula:

<img class="bodyImage" src="/alchemical-channeling/alchemical-channeling-modifier.png" />

Cada Aavegotchi es elegible para participar en la canaización alquímica **una vez cada 24 horas.**

The final amount is then divided into two portions – the amount the Gotchi (or its owner) receives directly, and the amount that spills nearby.

Higher level Alchemical Aaltars reduce the [spillover rate](/glossary#spillover-rate) by 10% per level.

table_aaltarAndSpilloverRate

## Limits on Alchemical Channeling

Every Aavegotchi is eligible to engage in Alchemical Channeling once every 24 hours.

However, Alchemical Channeling does take a toll on the Alchemical Aaltar, which means it needs to recharge between channelings. Higher level Aaltars have more Spirit energy, which allows them to engage in Alchemical Channeling with a shorter cooldown:

table_aaltarLevelAndAlchemicalChannelings

## Alchemical Channeling and Kinship Burning

Following the implementation of [AGIP-82](/aavegotchi-improvement-proposals#channel-alchemica-through-a--2-kinship-burn), Aavegotchis will experience a -2 [kinship](/kinship) point burn for each alchemical channeling event.
---
author: Unintelligent-nerd
date: '2020-04-23T07:00:00.000Z'
title: 'Kinship'
description: 'Everything you need to know about Kinship and petting your Gotchi!'
contributors:
  - "chinyh"
---

<div class="headerImageContainer">
<img class="headerImage" src="/kinship/petgotchi.gif">
<p class="headerImageText">Petting your gotchi!</p>
</div>

<div class="contentsBox">

**内容**

<ol>
<li><a href=#what-is-kinship>What is Kinship</a></li>
<li><a href=#kinship-levels>Kinship Levels</a></li>
<li><a href=#kinship-and-alchemical-channeling>Kinship and Alchemical Channeling</a></li>
<li><a href=#kinship-burning>Kinship Burning</a></li>
</ol>

</div>

## What is Kinship

Kinship is your Aavegotchi’s feeling of loyalty towards you. Kinship is not randomly assigned, but rather starts at a fixed value (50) upon summon and increases or decreases based on various factors, such as how long the Aavegotchi has been with the same owner, and how often the owner interacts with it. The minimum kinship value is 0. There is no maximum kinship value.

Typically, longer ownership equals higher kinship, but neglecting your Aavegotchi for long periods of time will lower its kinship level. Aavegotchis aren’t just vessels to store your crypto bags. They’re living, breathing ghosts, and they need your affection!

A maximum of 1 Kinship point is accrued for every 12 hour period in which you interact with your Aavegotchi. Conversely, there will be a -1 Kinship point penalty if your Aavegotchi is left unengaged for 24 hours.

Kinship exists as an internal balance on the Aavegotchi smart contract.

Potions could also be used to improve kinship scores. However, they are limited edition consumables.

## Kinship Levels

The table below shows the kinship level and their value range.

table_kinship

Kinship can be viewed on the [Aavegotchi profile page](/aavegotchi-profile).

## Kinship and Alchemical Channeling

Kinship is used for [Alchemical Channeling](/alchemical-channeling). Alchemical Channeling is a basic daily stipend earned by Aavegotchis that comes directly from the Gotchiverse ether, instead of being harvested from the [parcel](/gotchiverse).

How much Alchemica (FUD, FOMO, ALPHA, and KEK) the Gotchi receives through Alchemical Channeling depends primarily on its Kinship level.

The base rate for channeling is **20 FUD, 10 FOMO, 5 ALPHA, and 2 KEK.** This base rate then gets multiplied by a modifier, depending on the Aavegotchi’s kinship level (see table below).

table_alchemicaReceivedPerChanneling

Each point of Kinship increases the Alchemical Channeling modifier, by the formula:

<img class="bodyImage" src="/kinship/alchemical-channeling-modifier.png" />

Every Aavegotchi is eligible to engage in Alchemical Channeling **once every 24 hours.**

## Kinship Burning

Following the implementation of [AGIP-82](/aavegotchi-improvement-proposals#channel-alchemica-through-a--2-kinship-burn), Aavegotchis will experience a -2 kinship point burn for each alchemical channeling event.
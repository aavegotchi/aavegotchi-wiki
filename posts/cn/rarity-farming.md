---
author: wagyuchicken
date: '2020-04-23T07:00:00.000Z'
title: 'Rarity Farming'
description: 'Everything you need to know about Rarity Farming!'
contributors:
  - "cinnabarhorse"
  - "wagyuchicken"
---

<div class="headerImageContainer">
<img class="headerImage" src="/rarity-farming/rarity-farming.png">
<p class="headerImageText">A Rarity Farmer</p>
</div>

Rarity farming, as the name suggests, is where you farm for the rarest Aavegotchis, and get rewarded in GHST for training Aavegotchis with the highest <a href=#final-rarity-score>Final Rarity Score</a>!

The rarity of the Aavegotchi is determined by the rareness of the Aavegotchi's [traits](https://wiki.aavegotchi.com/en/traits) and the [wearables](https://wiki.aavegotchi.com/en/wearables)  that it equips. However, the rarity of a single Aavegotchi can change over time as the overall distribution of the traits and wearables in the Aavegotchi universe changes. All of these are the core of the rarity farming concept.

There are 2 types of rarity scores in play here - Base Rarity Score (for traits and wearables) & Absolute Rarity Score.

<div class="contentsBox">

**内容**

<ol>
<li><a href=#base-rarity-score>Base Rarity Score</a></li>
<li><a href=#absolute-rarity-score>Absolute Rarity Score</a></li>
<li> <a href=#final-rarity-score>Final Rarity Score</a></li>
<li><a href=#rewards>Rewards</a></li>
</ol>

</div>

## Base Rarity Score

Base Rarity Score (BRS) is derived from the overall rarity of both the Aavegotchi's traits and equipped wearables.

### Trait BRS

BRS of the Aavegotchi's traits is derived using the following formula:

<p style="margin-left: 4.8em"><b>Trait BRS = traitValue >= 50 ? traitValue : 100-traitValue </b> (coding language)</p> 
<p style="margin-left: 4.8em"><i>If trait value is more than or equal to 50, BRS = trait value. </i></p> 
<p style="margin-left: 4.8em"><i>If trait value is less than 50, BRS = 100 - trait value. </i></p>

### Wearables BRS

Wearables BRS on the other hand, is dependent on its rarity. For example, rare [wearables](https://wiki.aavegotchi.com/en/wearables) yield 5 BRS and godlike wearables 50 BRS.

## Absolute Rarity Score

Absolute Rarity Score (ARS) is derived from the particular rarity of the Aavegotchi's traits in the overall Aavegotchi ecosystem. For example, if a lot of players have trained their Aavegotchis to have highest Energy Level, then the ARS for high Energy Level - TURNT would be lower than that of lowest Energy Level - WASTED. ARS is calculated in terms of percentiles out of 100 for each of the Aavegotchi traits. So if 5% of all Aavegotchis possess a WASTED trait for example, then the WASTED trait will contribute to a total score of 95 to the Aavegotchi's energy trait ARS.

## Final Rarity Score

<b>Final Rarity Score = Traits BRS + Wearables BRS + Traits ARS</b>

Example of the Final Rarity Score calculation is as shown below:

table_RarityScoreCalculationTable
<p style="margin-left: 2.8em"><i>BRS denotes Base Rarity Score; ARS denotes Absolute Rarity Score</i></p>

## Rewards

In each period (length determined by AavegotchiDAO), the few rarest Aavegotchis with the <b>highest Final Rarity Scores</b> will receive a distribution of GHST rewards (derived from all sales involving GHST) that can be claimed by their owners.

The final rarity score of an Aavegotchi in the overall Aavegotchi Universe is constantly shifting as players summon more Aavegotchis, equip more wearables, and level up their Aavegotchis. Thus, players must make strategic decisions on how they train and equip their Aavegotchis. That is how Aavegotchi's rarity farming encourage thoughtful gameplay and active participation from users, while rewarding the best farmers for their ghostly harvests.

There is currently no limit to how many interactions an Aavegotchi can perform each period, but if bot activity became a problem then the AavegotchiDAO could vote to add circuit breakers to reduce bot activity.




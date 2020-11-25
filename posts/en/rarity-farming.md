---
author: Coder Dan
date: '2020-04-23T07:00:00.000Z'
title: 'Rarity Farming'
description: 'All about Rarity Farming'
---

Rarity farming, as the name suggests, is where you farm for the rarest Aavegotchis, and get rewarded in GHST for training the rarest Aavegotchis!

The rarity of the Aavegotchi is determined by the rareness of the Aavegotchi's traits and the wearables that it equips. However, the rarity of a single Aavegotchi can change over time as the overall distribution of the traits and wearables in the Aavegotchi universe changes. All of these are the core of the rarity farming concept.

There are 2 types of rarity scores in play here - Base Rarity Score & Absolute Rarity Score.

## Base Rarity Score (BRS)

Base Rarity Score (BRS) is derived from the overall rarity of both the Aavegotchi's traits and equipped wearables.

BRS of the Aavegotchi's traits is derived using the following formula:

<p style="margin-left: 4.8em"><b>BRS = traitValue >= 50 ? traitValue : 100-traitValue </b></p> 
<p style="margin-left: 4.8em"><i>If traitvalue is more than or equal to 50, BRS = traitvalue. </i></p> 
<p style="margin-left: 4.8em"><i>If traitvalue is less than 50, BRS = 100 - traitvalue. </i></p>

[Wearables](https://wiki.aavegotchi.com/en/wearables) BRS on the other hand, is dependent on its rarity. For example, rare wearables yield 10 BRS and godlike wearables 50 BRS (values to be confirmed). 

## Absolute Rarity Score (ARS)

Absolute Rarity Score (ARS) is derived from the particular rarity of the Aavegotchi's traits in the overall Aavegotchi ecosystem. For example, if a lot of players have trained their Aavegotchis to have highest Energy Level, then the ARS for high Energy Level - TURNT would be lower than that of lowest Energy Level - WASTED. ARS is calculated in terms of percentiles out of 100 for each of the Aavegotchi traits, so if 5% of all Aavegotchis possess a WASTED trait for example, then the WASTED trait will contribute to a total score of 95 to the Aavegotchi's energy trait ARS. 

## Final Rarity Score

Final Rarity Score = Traits BRS + Wearables BRS + Traits ARS

Example of the Final Rarity Score calculation is as shown below:

table_RarityScoreCalculationTable



In each period (length determined by AavegotchiDAO), the rarest Aavegotchis will receive a distribution of GHST rewards (derived from all sales involving GHST) that can be claimed by their owners. 

The final rarity score of an Aavegotchi in the overall Aavegotchi Universe is constantly shifting as players summon more Aavegotchis, equip more wearables, and level up their Aavegotchis. Thus, players must make strategic decisions on how they train and equip their Aavegotchis. That is how Aavegotchi's rarity farming encourage thoughtful gameplay and active participation from users, while rewarding the best farmers for their ghostly harvests.

There is currently no limit to how many interactions an Aavegotchi can perform each period, but if bot activity became a problem then the AavegotchiDAO could vote to add circuit breakers to reduce bot activity.




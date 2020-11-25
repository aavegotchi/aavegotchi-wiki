---
author: Coder Dan
date: '2020-04-23T07:00:00.000Z'
title: 'Rarity Farming'
description: 'All about Rarity Farming'
---




==============================================
What's rarity farming, you ask? As the name suggests, you farm for the rarest Aavegotchis, and get rewarded in GHST for training the rarest Aavegotchis.

The rarity of the Aavegotchi is determined by the rareness of the Aavegotchi's traits and the wearables that it equips. However, the rarity of a single Aavegotchi can change over time as the overall distribution of the traits and wearables in the Aavegotchi universe changes. All of these are the core of the rarity farming concept.

There are 2 types of rarity scores in play here - Base Rarity Score & Absolute Rarity Score.

Base Rarity Score (BRS) is derived from the overall rarity of both the Aavegotchi's traits and equipped wearables using the following formula:

BRS = traitValue >= 50 ? traitValue : 100-traitValue  

Absolute Rarity Score (ARS) is derived from the particular rarity of the Aavegotchi's traits in the overall Aavegotchi ecosystem. For example, if many players have trained their Aavegotchis to have maximum Energy Level, then the Absolute Rarity Score (ARS) for Energy Level - TURNT would be lower than that of Energy Level - WASTED (minimum energy level). ARS is calculated in terms of percentiles out of 100 for each of the Aavegotchi traits, so if only 5% of all Aavegotchis possess a WASTED (minimum energy level) trait for example, then the WASTER trait will contribute to a total score of 95 to the Aavegotchi's energy trait ARS. 

Final Rarity Score = Traits BRS + Wearables BRS + Traits ARS

Example of the Final Rarity Score calculation is as shown below:

table_RarityScoreCalculationTable




---
author: wagyuchicken
date: '2020-04-23T07:00:00.000Z'
title: 'Rarity Farming'
description: 'Alles wat je moet weten over Rarity Farming!'
contributors:
  - "cinnabarhorse"
  - "wagyuchicken"
  - "appellants"
---

<div class="headerImageContainer">
<img class="headerImage" src="/rarity-farming/rarity-farming.png">
<p class="headerImageText">Een Rarity Farmer</p>
</div>

**Introductie**

Rarity Farming is een innovatief spelmechanisme dat door Aavegotchi is geïnitieerd. Het streeft ernaar de gebruikers die het meest bedachtzaam en enthousiast met het ecosysteem bezig zijn, te belonen. Zoals de naam al aangeeft, is dit een proces waarbij u probeert de zeldzaamste Aavegotchis op te voeden en hiervoor beloond wordt.

Deze wikipagina legt uit hoe u kunt deelnemen aan Rarity Farming en hoe de zeldzaamste Aavegotchis bepaald worden. Blijf lezen om meer te leren!

<div class="contentsBox">

**Inhoud**

<ol>
<li><a href=#how-do-i-rarity-farm->Hoe doe ik Rarity Farming?</a></p>
<li><a href=#calculating-rarity>Zeldzaamheid berekenen</a></li>
<p><a href=#base-rarity-score>Basis Zeldzaamheid Score</a></p>
<p><a href=#absolute-rarity-score>Absolute Zeldzaamheid Score</a></p>
<p><a href=#final-rarity-score>Totale Zeldzaamheid Score</a></p>
<li><a href=#rewards>Beloningen</a></li>
<p><a href=#rarity-farming-seasons>Rarity Farming Seizoen</a></p>
<p><a href=#collecting-rarity-farming-rewards>Verzamel Rarity Farming Beloningen</a></p>
</ol>

</div>

## **Hoe doe ik Rarity Farming?**
Er zijn verschillende manieren waarop u zich kunt bezighouden met de Rarity Farming. Het gaat daarbij om:

* **Selecteer voorzichtig een Aavegotchi met zeldzame eigenschappen tijdens het [oproepingsproces](/portals)**

* **Uitrusten met [wearables](/wearables) om de eigenschappen van je Aavegotchi aan te passen**

* **Deelnemen aan [mini-games](/minigames)**

Voor meer informatie over elk proces, volg de links naar de respectievelijke pagina's op de zijbalk.

Dat gezegd hebbende, is het zeldzaamheidsniveau van een enkele Aavegotchi dynamisch en zal in de loop van de tijd veranderen. als de distributie van eigenschappen en wearables in het Aavegotchi universum verandert. Met andere woorden, het is niet genoeg om simpelweg een bepaalde eigenschap in je Aavegotchi uit te halen. Je moet ook kijken naar het optreden van andere spelers. Bijvoorbeeld, als te veel spelers proberen het uit te delen voor een oorlog zoals gotchi met hoge agressie scores, deze eigenschap wordt minder zeldzaam en je Aavegotchi is minder zeldzaam.

## **Zeldzaamheid berekenen**

There are 2 types of rarity scores in play here - Base Rarity Score (for traits and wearables) & Absolute Rarity Score.

### Basis Zeldzaamheid Score

Base Rarity Score (BRS) is derived from the overall rarity of both the Aavegotchi's traits, equipped wearables, and their [age](/aging-mechanic).

#### Trait BRS

BRS of the Aavegotchi's traits is derived using the following formula:

```
if (number < 50) return 100 - number;
    else return number + 1;
```

*If trait value is **less than** 50, BRS = 100 - trait value*

*If trait value is **equal to or greater than** 50, BRS = trait value + 1*

#### Wearables BRS

Wearables BRS on the other hand, is dependent on its rarity. For example, rare [wearables](/wearables) yield 5 BRS and godlike wearables 50 BRS.

#### Age

As your gotchi ages, they gain additional BRS. For more information, check out the [Aging Mechanic](/aging-mechanic) page.

### Absolute Zeldzaamheid Score

Absolute Rarity Score (ARS) is derived from the particular rarity of the Aavegotchi's traits in the overall Aavegotchi ecosystem. For example, if a lot of players have trained their Aavegotchis to have highest Energy Level, then the ARS for high Energy Level - TURNT would be lower than that of lowest Energy Level - WASTED. ARS is calculated in terms of percentiles out of 100 for each of the Aavegotchi traits. So if 5% of all Aavegotchis possess a WASTED trait for example, then the WASTED trait will contribute to a total score of 95 to the Aavegotchi's energy trait ARS.

### Totale Zeldzaamheid Score

<b>Final Rarity Score = Traits BRS + Wearables BRS + Traits ARS</b>

Example of the Final Rarity Score calculation is as shown below:

table_RarityScoreCalculationTable
<p style="margin-left: 2.8em"><i>BRS denotes Base Rarity Score; ARS denotes Absolute Rarity Score</i></p>

**The formula for ARS is not determined yet. As a result, the values in the ARS column in the above table are imaginary.**

## Beloningen

In each season of Rarity Farming, the rarest Aavegotchis will receive a distribution of GHST rewards (derived from all sales involving GHST) that can be claimed by their owners.

Initially, there were 3 categories of rarity farming rewards:

* Aavegotchi Rarity Scores (by BRS, ARS coming later)
* [Kinship](/traits#kinship) Scores
* [Experience](/traits#experience)

For each category, rarity farming rewards are distributed based on a descending curve, with the top few Aavegotchis earning more GHST rewards than other Gotchis who are positioned lower on the curve. There will be a cut-off point where Gotchis below that point do not receive any rewards. So try your best to be above that cut-off point. You will at least win something! (For [Rarity Farming Season 1](https://aavegotchi.medium.com/aavegotchi-rarity-farming-season-1-rewards-finalized-2db81e9f66e8), the top 5000 Gotchis in each category would qualify for rarity farming rewards).

The proportion of rewards allocated to each of the categories will be decided by the AavegotchiDAO.

More categories will be added later as the Aavegotchi game continues to develop.

Player Rewards will be distributed every two weeks via onchain snapshots. Initially, this will be a manual process handled by Pixelcraft, but eventually can be automated by the DAO. After each snapshot, rewards can be claimed by all successful rarity farmers and the next round immediately begins.

How are the GHST rewards for Rarity Farming funded? [40% of all GHST spent from wearables, consumables, and other game items are redirected into the Rarity Farming rewards pool](https://aavegotchi.medium.com/rarity-farming-has-arrived-heres-how-to-play-1f1d3342dbc8).

The final rarity score of an Aavegotchi in the overall Aavegotchi Universe is constantly shifting as players summon more Aavegotchis, equip more wearables, and level up their Aavegotchis. Thus, players must make strategic decisions on how they train and equip their Aavegotchis. That is how Aavegotchi's rarity farming encourage thoughtful gameplay and active participation from users, while rewarding the best farmers for their ghostly harvests.

There is currently no limit to how many interactions an Aavegotchi can perform each period, but if bot activity became a problem then the AavegotchiDAO could vote to add circuit breakers to reduce bot activity.

### Rarity Farming Seizoen

Rarity Farming is divided into different seasons. Each season has its own competition categories, size of reward pool, and reward distribution curve.

For data pertaining to the Rarity Farming Seasons, check out this [page](/rarity-farming-seasons).

### Verzamel Rarity Farming Beloningen

Rarity Farming Rewards are disbursed to your Aavegotchi inventories (Yes! Each of your Aavegotchi has their own personal inventory!).

Eerst moet je naar [Mijn Aavegotchis pagina](https://aavegotchi.com/aavegotchis) gaan. Click on any one of your Aavegotchi. Aan de rechterbenedenhoek van het scherm staat een "Pocket" knop. Click on it to view your Aavegotchi's inventory. You can see the amount of GHST your Gotchi has won from Rarity Farming (as well as their equipped wearables).
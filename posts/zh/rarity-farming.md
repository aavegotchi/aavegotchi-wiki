---
author: wagyuchicken
date: '2020-04-23T07:00:00.000Z'
title: 'Rarity Farming'
description: 'Everything you need to know about Rarity Farming!'
contributors:
  - "cinnabarhorse"
  - "wagyuchicken"
  - "appellants"
---

<div class="headerImageContainer">
<img class="headerImage" src="/rarity-farming/rarity-farming.png">
<p class="headerImageText">A Rarity Farmer</p>
</div>

**Introduction**

Rarity farming is an innovative game mechanism pioneered by Aavegotchi. It strives to reward the users who are the most thoughtfully and enthusiastically engaged with the ecosystem. As its name suggests, this is a process where you attempt to raise the rarest Aavegotchis, and get rewarded for doing so.

This wiki page will explain how you can engage in rarity farming, and how the rarest Aavegotchis are determined. Keep reading to learn more!

<div class="contentsBox">

**内容**

<ol>
<li><a href=#how-do-i-rarity-farm->How Do I Rarity Farm?</a></p>
<li><a href=#calculating-rarity>Calculating Rarity</a></li>
<p><a href=#base-rarity-score>Base Rarity Score</a></p>
<p><a href=#absolute-rarity-score>Absolute Rarity Score</a></p>
<p><a href=#final-rarity-score>Final Rarity Score</a></p>
<li><a href=#rewards>Rewards</a></li>
<p><a href=#rarity-farming-seasons>Rarity Farming Seasons</a></p>
<p><a href=#collecting-rarity-farming-rewards>Collecting Rarity Farming Rewards</a></p>
</ol>

</div>

## **How Do I Rarity Farm?**
There are several ways you can engage in the rarity farming exercise. These include:

* **Carefully selecting an Aavegotchi with rare traits during the [summoning process](/portals)**

* **Equipping [wearables](/wearables) to modify the traits of your Aavegotchi**

* **Engaging in [mini-games](/minigames)**

For more information on each process, just follow the links to the respective pages on the sidebar.

That said, the rarity level of a single Aavegotchi is dynamic and will change over time, as the distribution of traits and wearables in the Aavegotchi universe changes. In other words, it isn't enough to simply max out a particular trait in your Aavegotchi. You also have to consider the actions of other players. For instance, if too many players try to grind it out for a war-like gotchi with high aggression scores, this trait becomes less rare, and your Aavegotchi's rarity level goes down.

## **Calculating Rarity**

There are 2 types of rarity scores in play here - Base Rarity Score (for traits and wearables) & Absolute Rarity Score.

### Base Rarity Score

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

### Absolute Rarity Score

Absolute Rarity Score (ARS) is derived from the particular rarity of the Aavegotchi's traits in the overall Aavegotchi ecosystem. For example, if a lot of players have trained their Aavegotchis to have highest Energy Level, then the ARS for high Energy Level - TURNT would be lower than that of lowest Energy Level - WASTED. ARS is calculated in terms of percentiles out of 100 for each of the Aavegotchi traits. So if 5% of all Aavegotchis possess a WASTED trait for example, then the WASTED trait will contribute to a total score of 95 to the Aavegotchi's energy trait ARS.

### Final Rarity Score

<b>Final Rarity Score = Traits BRS + Wearables BRS + Traits ARS</b>

Example of the Final Rarity Score calculation is as shown below:

table_RarityScoreCalculationTable
<p style="margin-left: 2.8em"><i>BRS denotes Base Rarity Score; ARS denotes Absolute Rarity Score</i></p>

**The formula for ARS is not determined yet. As a result, the values in the ARS column in the above table are imaginary.**

## Rewards

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

### Rarity Farming Seasons

Rarity Farming is divided into different seasons. Each season has its own competition categories, size of reward pool, and reward distribution curve.

For data pertaining to the Rarity Farming Seasons, check out this [page](/rarity-farming-seasons).

### Collecting Rarity Farming Rewards

Rarity Farming Rewards are disbursed to your Aavegotchi inventories (Yes! Each of your Aavegotchi has their own personal inventory!).

First, head over to the [My Aavegotchis page](https://aavegotchi.com/aavegotchis). Click on any one of your Aavegotchi. At the bottom-right corner of the screen, there will be a "Pocket" button. Click on it to view your Aavegotchi's inventory. You can see the amount of GHST your Gotchi has won from Rarity Farming (as well as their equipped wearables).
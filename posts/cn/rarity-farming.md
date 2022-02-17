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
<p class="headerImageText">稀有农民</p>
</div>

**介绍**

稀有农业是Aavegotchi倡导的一种创新游戏机制。 它努力奖励那些最深思熟虑和最热情地参与生态系统的用户。 正如它的名称所表明的那样，这是一个你试图提高最稀少的Aavegotchis的过程，并且因为这样做而得到奖励。

这个wiki页面将解释你如何从事稀有农业，以及如何确定最稀有的Aavegotchis。 继续阅读以了解更多！

<div class="contentsBox">

**内容**

<ol>
<li><a href=#how-do-i-rarity-farm->我如何进行稀有农场？</a></p>
<li><a href=#calculating-rarity>计算稀有度</a></li>
<p><a href=#base-rarity-score>基础稀有分</a></p>
<p><a href=#absolute-rarity-score>绝对稀有分</a></p>
<p><a href=#final-rarity-score>最终得分</a></p>
<li><a href=#rewards>奖励</a></li>
<p><a href=#rarity-farming-seasons>Rarity Farming Seasons</a></p>
<p><a href=#collecting-rarity-farming-rewards>Collecting Rarity Farming Rewards</a></p>
</ol>

</div>

## **我如何稀有农作？**
你们可以通过几种方式从事稀有的耕作。 这些包括：

* **在 [召唤过程中，仔细选择一个稀有特性的 Aavegotchi](/portals)**

* **Equipping [wearables](/wearables) to modify the traits of your Aavegotchi**

* **Engaging in [mini-games](/minigames)**

关于每个进程的更多信息，请点击侧边栏上相应页面的链接。

尽管如此，单个Aavegotchi的稀有水平是动态的，将随着时间的推移而变化。 Aavegotchi 宇宙中特性和织物分布的变化。 换言之，仅仅在您的 Aavegotchi 中最大化某个特性是不够的。 你还必须考虑其他玩家的行动。 例如，如果太多的玩家试图为侵略得分很高的战争之类的争斗而磨难， 这个特性变得更少了，你的 Aavegotchi 的稀有水平下降。

## **计算稀有度**

稀有度分数在这里有2种类型-基本稀有度分数（针对特质和可穿戴设备）和 绝对稀有度分数。

### 基础稀有分

Base Rarity Score (BRS) is derived from the overall rarity of both the Aavegotchi's traits, equipped wearables, and their [age](/aging-mechanic).

#### 特性 BRS

Aavegotchi特征的BRS采用以下公式：

```
if (number < 50) return 100 - number;
    else return number + 1;
```

*If trait value is **less than** 50, BRS = 100 - trait value*

*If trait value is **equal to or greater than** 50, BRS = trait value + 1*

#### 可穿戴装备 BRS

Wearables BRS on the other hand, is dependent on its rarity. For example, rare [wearables](/wearables) yield 5 BRS and godlike wearables 50 BRS.

#### Age

As your gotchi ages, they gain additional BRS. For more information, check out the [Aging Mechanic](/aging-mechanic) page.

### 绝对稀有分

Absolute Rarity Score (ARS) is derived from the particular rarity of the Aavegotchi's traits in the overall Aavegotchi ecosystem. For example, if a lot of players have trained their Aavegotchis to have highest Energy Level, then the ARS for high Energy Level - TURNT would be lower than that of lowest Energy Level - WASTED. ARS is calculated in terms of percentiles out of 100 for each of the Aavegotchi traits. So if 5% of all Aavegotchis possess a WASTED trait for example, then the WASTED trait will contribute to a total score of 95 to the Aavegotchi's energy trait ARS.

### 最终得分

<b>最终稀有分 = Traits BRS + Wearables BRS + Traits ARS</b>

Example of the Final Rarity Score calculation is as shown below:

table_RarityScoreCalculationTable
<p style="margin-left: 2.8em"><i>BRS denotes Base Rarity Score; ARS denotes Absolute Rarity Score</i></p>

**The formula for ARS is not determined yet. As a result, the values in the ARS column in the above table are imaginary.**

## 奖励

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
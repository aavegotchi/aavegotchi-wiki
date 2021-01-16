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
<p> <a href=#final-rarity-score>最终得分</a></p>
<li><a href=#rewards>奖励</a></li>
</ol>

</div>

## **我如何稀有农作？**
你们可以通过几种方式从事稀有的耕作。 这些包括：

* **在 [召唤过程中，仔细选择一个稀有特性的 Aavegotchi](/portals)**

* **装备 [可穿戴装备](/posts/wearables) 来修改你的 Aavegotchi 的特性**

* **进行迷你游戏**

关于每个进程的更多信息，请点击侧边栏上相应页面的链接。

尽管如此，单个Aavegotchi的稀有水平是动态的，将随着时间的推移而变化。 Aavegotchi 宇宙中特性和织物分布的变化。 换言之，仅仅在您的 Aavegotchi 中最大化某个特性是不够的。 你还必须考虑其他玩家的行动。 例如，如果太多的玩家试图为侵略得分很高的战争之类的争斗而磨难， 这个特性变得更少了，你的 Aavegotchi 的稀有水平下降。

## **计算稀有度**

稀有度分数在这里有2种类型-基本稀有度分数（针对特质和可穿戴设备）和 绝对稀有度分数。

### 基础稀有分

基础稀有分数（BRS）来自Aavegotchi的特征和装备的磨损的总体稀有程度。

#### 特性 BRS

Aavegotchi特征的BRS采用以下公式：

<p style="margin-left: 4.8em"><b>特性BRS = 特性值 >= 50 ? 特性值: 100-traitValue </b> (编码语言)</p> 
<p style="margin-left: 4.8em"><i>如果特性值大于或等于 50，BRS = 特性值。 </i></p> 
<p style="margin-left: 4.8em"><i>如果特性值小于50，BRS = 100 - 特性值。 </i></p>

#### 可穿戴装备 BRS

另一方面，可穿戴装备的BRS取决于其稀少。 例如，稀有的 [可穿戴装备](https://wiki.aavegotchi.com/en/wearables) 产生5 BRS 和类似神的可磨损50 BRS。

### 绝对稀有分

绝对稀有度分数（ARS）来自整个Aavegotchi生态系统中Aavegotchi特征的特殊稀有性。 例如，如果许多玩家将他们的Aavegotchis训练为具有最高能量水平，那么高能量水平-TURNT的ARS将低于最低能量水平-WASTED的ARS。 ARS是按照Aavegotchi特征每个特征100个百分点计算的。 因此，例如，如果所有Aavegotchi的5％具有WASTED特质，则WASTED特质将使Aavegotchi的能量特质ARS达到95分。

### 最终得分

<b>最终稀有分 = Traits BRS + Wearables BRS + Traits ARS</b>

最后分数计算的示例如下：

表_稀有计分表
<p style="margin-left: 2.8em"><i>BRS 表示基础稀有分数；ARS 表示绝对稀有分数</i></p>

## 奖励

In each period (length determined by AavegotchiDAO), the few rarest Aavegotchis with the **highest Final Rarity Scores** will receive a distribution of GHST rewards (derived from all sales involving GHST) that can be claimed by their owners.

Initially, there will be three categories of rewards:
* Top 100 Rarest Aavegotchis (by BRS, ARS coming later)
* Top 100 Highest [Kinship](/traits#kinship) Score
* Top 100 Highest [Experience](/traits#experience)

The proportion of rewards allocated to each of the categories will be decided by the AavegotchiDAO.

More categories will be added later as the Aavegotchi game continues to develop.

Player Rewards will be distributed every two weeks via onchain snapshots. Initially, this will be a manual process handled by Pixelcraft, but eventually can be automated by the DAO. After each snapshot, rewards can be claimed by all successful rarity farmers and the next round immediately begins.

How are the GHST rewards for Rarity Farming funded? [40% of all GHST spent from wearables, consumables, and other game items are redirected into the Rarity Farming rewards pool](https://aavegotchi.medium.com/rarity-farming-has-arrived-heres-how-to-play-1f1d3342dbc8).

The final rarity score of an Aavegotchi in the overall Aavegotchi Universe is constantly shifting as players summon more Aavegotchis, equip more wearables, and level up their Aavegotchis. Thus, players must make strategic decisions on how they train and equip their Aavegotchis. That is how Aavegotchi's rarity farming encourage thoughtful gameplay and active participation from users, while rewarding the best farmers for their ghostly harvests.

There is currently no limit to how many interactions an Aavegotchi can perform each period, but if bot activity became a problem then the AavegotchiDAO could vote to add circuit breakers to reduce bot activity.




---
author: wagyuchicken
date: '2020-04-23T07:00:00.000Z'
title: 'Traits'
description: '关于Aavegotchi特征的一切！'
contributors:
  - "cinnabarhorse"
  - "wagyuchicken"
---

Aavegotchis是带着特征出生的。 就像你的特征如何定义你是什么人一样，Aavegotchi的特征对于确定他们作为幽灵的生计非常重要！ 这些他们拥有的多个特性影响他们的 [特征基础稀有度](/rarity-farming#base-rarity-score)， 他们在小游戏中的性能，以及 [可穿戴的设备](/wearables) 从 [传送门召唤的 Aavegotchis](/portals) 自出生，自带一系列随机生成的特性。 然而，Aavegotchi的特性可以根据 <a href=#level>等级</a>、可穿戴设备和消耗品而改变。 

<div class="contentsBox">

**内容**

<ol>
<li><a href=#randomly-generated-traits>随机生成的特征 </a></li>
<li><a href=#spirit-force-trait-modifiers>Spirit Force Trait Modifiers</a></li>
<li><a href=#kinship>Kinship</a></li>
<li><a href=#experience>Experience</a></li>
<li><a href=#level>Level</a></li>
<li><a href=#haunt>Haunt</a></li>
</ol>

</div>

## 随机生成的特征
Aavegotchis有六个特征：

* AGG = 攻击值
* NRG = 能量值
* SPK = 惊悚值
* BRN = 脑力值
* EYS = 眼形状
* EYC = 眼色

使用 RPG (角色游戏) 术语， `AGG` 等于强度。 `NRG` 等于敏捷性 `BRN` 等于智能， `SPK` 是通配符。 请注意，这些特征与标准RPG并不完全相同。其中一些低特质值在 Aavegotchi虚拟世界中也非常强大！

特性是在打开 [传送门](/portals) 时确定的。 打开传送门时， [Chainlink的 VRF 随机数字生成器函数](https://blog.chain.link/verifiable-random-functions-vrf-random-number-generation-rng-feature/) 将会倍调用从而随机生成Aavegotchis 的随机特性。 这些特征值分布在钟形曲线上，并且根据其稀有性，为每个特征分配一个“共同”，“罕见”，“稀有”或“神话”值。 下表显示了获得每种性状稀有性的机会：

特征概率

特性值分布的钟形曲线如下所示：

<img class="bodyImage" src="/traits/bell_curve.png" alt = "bell curve" />

Aavegotchis最初拥有6个特征，尽管这些特征将来可能会通过 [AavegotchiDAO](/dao) 的投票加以扩展。 一些特征，如Aavegotchi的身体颜色(普通白色除外)，将可以由AavegotchiDAO来决定！

与其他游戏不同，在Aavegotchi，没有“最佳”特征。 每个属性(眼睛形状和眼睛颜色除外)在不同的小游戏中具有不同的效果。 例如，能量较高的Aavegotchis可能在一些大型战斗类游戏中表现良好，但在一场小型“偏静态”的游戏中表现不好。

下面的表格按稀有程度详细说明了每个特性。 *注：两张表格应视为一个。 它已被拆分在移动设备上呈现。*

table_TraitsByRarity1 table_TraitsByRarity2
<p style="margin-left: 3.0em"><i> (L) 表示“低”；(H) 表示“高” </i></p>
<p style="margin-left: 3.0em"><i> *眼睛颜色与你的Aavegotchi上的押注抵押品颜色相同， 即橙色代表aDAI，天蓝色代表aAAVE，紫色代表aETH等。 </i></p>

## Spirit Force Trait Modifiers

The type of [spirit force](/atokens) that your Aavegotchi has also influences their trait values:

table_spiritForceModifiers

## Kinship
Kinship is your Aavegotchi’s feeling of loyalty towards you. Kinship is not randomly assigned, but rather starts at a fixed value (50) upon summon and increases or decreases based on various factors, such as how long the Aavegotchi has been with the same owner, and how often the owner interacts with it. The minimum kinship value is 0. The maximum kinship value is 500.

Typically, longer ownership equals higher kinship, but neglecting your Aavegotchi for long periods of time will lower its kinship level. Aavegotchis aren’t just vessels to store your crypto bags. They’re living, breathing ghosts, and they need your affection!

A maximum of 1 Kinship point is accrued for every 12 hour period in which you interact with your Aavegotchi. Conversely, there will be a -1 Kinship point penalty if your Aavegotchi is left unengaged for 24 hours.

Potions could also be used to improve kinship scores. However, they are limited edition consumables and may not always be available in the Aavegotchi store. More details on potions will be available soon.

High kinship levels can boost your Aavegotchi’s performance in mini-games, and may also act as a multiplier for GHST rewards on governance and [rarity farming](/rarity-farming). Low kinship levels will have the opposite effect.

Some ways to boost your Aavegotchi’s kinship level:

* Aavegotchis是带着公民责任感出生的。 将你的Aavegotchi带到市政厅，让它在AavegotchiDAO投票；
* Aavegotchis可能是小鬼，但他们有着贪婪的欲望！ 给他们喂食Aavegotchi消费品，让他们展开笑颜；
* Aavegotchis喜欢尝试新衣服。 给你的Aavegotchi穿上新装备，以形成一种持久的纽带；
* Aavegotchis喜欢玩！ 带着你的Aavegotchi在Aavegotchi领域里溜一溜，玩玩小游戏从而提升它的等级。

The table below shows the kinship level and their value range.

table_kinship


## Experience
Aavegotchis receive experience (XP) for voting in AavegotchiDAO and playing mini-games. Aavegotchis can also be sacrificed to remove their [collateral stake](/atokens) and have it transferred to another Aavegotchi. The recipient Aavegotchi will receive 100% of the sacrificed Aavegotchi’s accrued XP.

## Level
Aavegotchis level up as they gain more XP. 每升三级，Aavegotchis 就会获得一个灵魂点，可以用于增加或减少某个特性。 Some wearables can only be worn by Aavegotchis of a certain level.

For detailed information on the XP required for each level, click [here](/xp).

## Haunt
Like pioneers to the New World, Aavegotchis travel from the Nether Realm to the Ether Realm in groups known as Haunts. The initial Haunt contains 10,000 Aavegotchis. Thereafter, new Haunts must be approved for travel by the AavegotchiDAO. Some wearables can only be worn by Aavegotchis belonging to a certain Haunt.

---
author: wagyuchicken
date: '2020-04-23T07:00:00.000Z'
title: 'Traits'
description: '关于Aavegotchi特征的一切！'
contributors:
  - "cinnabarhorse"
  - "wagyuchicken"
  - "unintelligent-nerd"
---

Aavegotchis是带着特征出生的。 就像你的特征如何定义你是什么人一样，Aavegotchi的特征对于确定他们作为幽灵的生计非常重要！ These multiple traits that they possess influence their [Trait Base Rarity](/rarity-farming#base-rarity-score), their performance in [mini-games](/minigames), and the [wearables](/wearables) that they are allowed to wear. 从 [传送门召唤的 Aavegotchis](/portals) 自出生，自带一系列随机生成的特性。 然而，Aavegotchi的特性可以根据 <a href=#level>等级</a>、可穿戴设备和消耗品而改变。 

<div class="contentsBox">

**内容**

<ol>
<li><a href=#randomly-generated-traits>随机生成的特征 </a></li>
<li><a href=#spirit-force-trait-modifiers>Spirit Force Trait Modifiers</a></li>
<li><a href=#kinship>Kinship</a></li>
<li><a href=#experience>Experience</a></li>
<li><a href=#level>Level</a></li>
<li><a href=#haunt>Haunt</a></li>
<li><a href=#alchemica-carrying-capacity>Alchemica Carrying Capacity</a></li>
<li><a href=#aging-mechanic>Aging Mechanic</a></li>
<li><a href=#trait-mappings>Trait Mappings</a></li>
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

特性是在打开 [传送门](/portals) 时确定的。 Upon opening of a Portal, [Chainlink’s VRF random number generator function](/glossary#chainlink-vrf) is called to assign Aavegotchis with random trait values. 这些特征值分布在钟形曲线上，并且根据其稀有性，为每个特征分配一个“共同”，“罕见”，“稀有”或“神话”值。 下表显示了获得每种性状稀有性的机会：

特征概率

特性值分布的钟形曲线如下所示：

<img class="bodyImage" src="/traits/bell_curve.png" alt = "bell curve" />

Aavegotchis最初拥有6个特征，尽管这些特征将来可能会通过 [AavegotchiDAO](/dao) 的投票加以扩展。 一些特征，如Aavegotchi的身体颜色(普通白色除外)，将可以由AavegotchiDAO来决定！

与其他游戏不同，在Aavegotchi，没有“最佳”特征。 每个属性(眼睛形状和眼睛颜色除外)在不同的小游戏中具有不同的效果。 例如，能量较高的Aavegotchis可能在一些大型战斗类游戏中表现良好，但在一场小型“偏静态”的游戏中表现不好。

下面的表格按稀有程度详细说明了每个特性。 *注：两张表格应视为一个。 它已被拆分在移动设备上呈现。*

table_TraitsByRarity1 table_TraitsByRarity2
<p style="margin-left: 3.0em"><i> (L) 表示“低”；(H) 表示“高” </i></p>
<p style="margin-left: 3.0em"><i> *眼睛颜色与你的Aavegotchi上的押注抵押品颜色相同， 即橙色代表aDAI，天蓝色代表aAAVE，紫色代表aETH等。 </i></p>

For more detailed information on every single Eye Shape, check out the [Eye Shape page](/eye-shape).

## Spirit Force Trait Modifiers

The type of [spirit force](/spirit-force) that your Aavegotchi has also influences their trait values:

table_spiritForceModifiers

## Kinship
Kinship is your Aavegotchi’s feeling of loyalty towards you. More information can be found on the [Kinship page](/kinship).

## Experience
Aavegotchis receive experience (XP) for:
* Voting in [AavegotchiDAO](/dao)
* Participating in events held on Aavegotchi Discord (a Typeform will be released during the event for people to complete to receive XP for their Gotchis)
* Playing [mini-games](/minigames) (only during certain periods as announced on Discord)

Aavegotchis can also be sacrificed to remove their [spirit force](/spirit-force) and have it transferred to another Aavegotchi. The recipient Aavegotchi will receive 100% of the sacrificed Aavegotchi’s accrued XP.

XP exists as an internal balance on the Aavegotchi smart contract.

XP can be viewed on the [Aavegotchi profile page](/aavegotchi-profile).

## Level
Aavegotchis level up as they gain more XP. 每升三级，Aavegotchis 就会获得一个灵魂点，可以用于增加或减少某个特性。 Some wearables can only be worn by Aavegotchis of a certain level.

The higher your Gotchi level, the more [guilds](/guild) they are allowed to join.

For detailed information on the XP required for each level, click [here](/xp).

Your Aavegotchi level can be viewed on the [Aavegotchi profile page](/aavegotchi-profile).

## Haunt
Like pioneers to the New World, Aavegotchis travel from the Nether Realm to the Ether Realm in groups known as [Haunts](/haunt). The initial Haunt contains 10,000 Aavegotchis. Thereafter, new Haunts must be approved for travel by the [AavegotchiDAO](/dao). Some wearables can only be worn by Aavegotchis belonging to a certain Haunt.

Think of Haunts as editions, with Haunt numbers being indicated on the Gotchi. There will be no stats differences between Haunts.

## Alchemica Carrying Capacity

[BRS](/rarity-farming#base-rarity-score) is used to boost a gotchi's carrying capacity with the follow formula:

```
Carrying Capacity = 100 * (BRS/300)^2
```

E.g. a Gotchi with:

* BRS = 600 has a carrying capacity of 400 [Alchemica](/gotchus-alchemica) chunks

* BRS = 900 has a carrying capacity of 900 Alchemica chunks

## Aging Mechanic

[Aavegotchi Improvement Proposal 13](/aavegotchi-improvement-proposals#add-an-aging-mechanic-to-affect-aavegotchi-rarity-scores) introduced an aging mechanic for Aavegotchis.

Gotchis would receive a small boost to their [BRS](/rarity-farming#base-rarity-score) as they age. This is to counteract statistical variance between haunts and reward long term engagement.

For more information, check out the [Aging Mechanic](/aging-mechanic) page.

## Trait Mappings

These 6 traits are the base traits. To turn Aavegotchi into a full-fledged game in the [Gotchiverse](/gotchiverse), we need more nuanced variables.

Find out what these base traits map into in the [Trait Mappings page](/trait-mappings).
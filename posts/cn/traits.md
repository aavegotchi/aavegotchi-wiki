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
<li><a href=#kinship>亲属关系</a></li>
<li><a href=#experience>经验</a></li>
<li><a href=#level>等级</a></li>
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

特性是在打开 [传送门](/portals) 时确定的。 打开传送门时， [链路的 VRF 随机数字生成器函数](https://blog.chain.link/verifiable-random-functions-vrf-random-number-generation-rng-feature/) 被调用来分配带有随机特性的Aavegotchis 。 这些特征值分布在钟形曲线上，并且根据其稀有性，为每个特征分配一个“共同”，“罕见”，“稀有”或“神话”值。 下表显示了获得每种性状稀有性的机会：

特征概率

特性值分布的钟形曲线如下所示：

<img class="bodyImage" src="/traits/bell_curve.png" alt = "bell curve" />

Aavegotchis最初拥有6个特征，尽管这些特征将来可能会通过 [AavegotchiDAO](/dao) 的投票加以扩展。 一些特征，如Aavegotchi的身体颜色(普通白色除外)，将由AavegotchiDAO定义为每个新的头发！

与其他游戏不同，在Aavegotchi，没有“最佳”特征。 每个属性(眼睛形状和眼睛颜色除外)在不同的小游戏中具有不同的效果。 例如，能量较高的Aavegotchis可能在种族中表现良好，但在一场静默的小型游戏中表现不好。

下面的表格按稀有程度详细说明了每个特性。 *注：两张表格应视为一个。 它已被拆分在移动设备上呈现。*

table_TraitsByRarity1 table_TraitsByRarity2
<p style="margin-left: 3.0em"><i> (L) 表示“低”；(H) 表示“高” </i></p>
<p style="margin-left: 3.0em"><i> *常见眼睛颜色占用您Aavegotchi上的隐藏着的颜色。 即aDAI的橙色，aAAVE的蓝色，aETH的蓝色，等等。 </i></p>

## 亲属关系
亲属关系是您Aavegotchi对您的忠诚感。 亲子关系不是随机分配的，而是从召唤时的固定数值(50)开始，然后根据各种因素增加或减少。 例如，Aavegotchi与同一所有人的关系有多长时间，以及所有人与同一所有人的互动频率。 最小亲属关系值为 0。 没有最大亲属关系值。

通常，较长的所有权等于较高的亲属关系，但长时间忽略您的Aavegotchi会降低亲属关系。 Aavegotchis不仅仅是用来存放您的加密袋的工具。 他们活着，呼吸着幽灵，他们需要你的爱！

每12小时与您的 Aavegotchi 交互时，最多可以累计1个亲属点。 相反，如果你的Aavegotchi没有工作24小时，将处以-1亲属点的惩罚。

药水也可以用来提高血缘关系分数。 然而，它们只是有限的版本消耗品，在Aavegotchi商店可能并不总是能够买到。 不久将提供关于药剂的更多详情。

高亲属等级可以提升您的 Aavegotchi 在小游戏中的性能， 并且也可以作为GHST的倍数来奖励施政和 [稀有农业](/rarity-farming) 低亲属关系水平将产生相反的效果。

提升您的 Aavegotchi 亲属等级的一些方法：

* Aavegotchis是带着公民责任感出生的。 将你的Aavegotchi带到市政厅，让它在AavegotchiDAO投票；
* Aavegotchis可能是幽灵，但他们有贪婪的欲望！ 喂你的Aavegotchi消耗品，看到它的笑脸笑脸；
* Aavegotchis喜欢尝试新衣服。 装备到你的Aavegotchi身上新的装备，以形成一种持久的纽带；
* Aavegotchis喜欢玩！ 把你的 Aavegotchi 拿走来在 Aavegotchi 领域的旋转，平整它正在玩小游戏。


## 经验
Aavegotchis获得了参加AavegotchiDAO投票和玩小型游戏的经验(XP)。 Aavegotchis 也可以被牺牲掉来移除他们的 [质押代币](/atokens) 并将它转移到另一个Aavegotchi。 收款人Aavegotchi将获得牺牲的 Aavegotchi 应计XP的100%。

## 等级
Aavegotchis级别提高，因为他们获得了更多的 XP。 每升三级，Aavegotchis 就会获得一个灵魂点，可以用于增加或减少某个特性。 有些穿戴物品只能由一定级别的Aavegotchis穿戴。

若要获取每个级别所需的 XP 详细信息，请点击 [这里](/xp)。

## Haunt
就像新世界的先驱者一样，Aavegotchis从地狱领域来到Ether Realm，团体称为Haunts。 最初的野蛮人包括10 000名Aavegotchis人。 此后，AavegotchiDAO必须批准新的Haunts旅行。 某些可穿戴设备只能由属于某个困扰的Aavegotchis穿戴。

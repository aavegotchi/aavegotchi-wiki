---
author: wagyuchicken
date: '2020-04-23T07:00:00.000Z'
title: '特性'
description: 'Aavegotchiの特性の全て！'
contributors:
  - "cinnabarhorse"
  - "wagyuchicken"
  - "unintelligent-nerd"
---

アベゴッチは生まれながらにして特徴を持っています。 ちょうどあなたの特徴が人としてのあなたを定義するように、Avegotchiの特徴もゴーストとしての生活を決定するのに重要です。 複数の特性を持つことで、[特性の基本レアリティ](/rarity-farming#base-rarity-score)、[ミニゲーム](/minigames)でのパフォーマンス、そして装備可能な[アイテム](/wearables)が変化します。 [ポータル](/portals)から召喚されたAavegotchiは、ランダムに生成された特性の組み合わせで生まれます。 ただし、Aavegotchiの特性は<a href=#level>レベル</a>や装備品、消耗品の使用によって変化します。 

<div class="contentsBox">

**目次**

<ol>
<li><a href=#randomly-generated-traits>ランダム生成された特性 </a></li>
<li><a href=#spirit-force-trait-modifiers>スピリットフォース特性修正</a></li>
<li><a href=#kinship>キンシップ</a></li>
<li><a href=#experience>経験値</a></li>
<li><a href=#level>レベル</a></li>
<li><a href=#haunt>ハウント</a></li>
<li><a href=#aging-mechanic>エージングメカニズム</a></li>
</ol>

</div>

## ランダム生成された特性
Avegotchiには6つの特性があります：

* AGG＝攻撃性
* NRG＝エネルギー
* SPK＝不気味さ（おどろおどろしさ）
* BRN＝脳の大きさ
* EYS＝アイ・シェイプ（目の形）
* EYC＝アイ・カラー（目の色）

RPG（ロールプレイングゲーム）用語で、`AGG`はStrength（強さ）、`NRG`はAgility（機敏さ）、`BRN`はIntelligence（知能）に相当し、`SPK`はワイルドカードの特性である。 これらの特性は標準的なRPGと全く同じではないことに注意してください。Aavegotchiメタバースでは低い特性値も非常に強力です！

特性は、[ポータル](/portals)を開いた時点で決定されます。 ポータルを開くと、[ChainlinkのVRFランダム数生成関数](/glossary#chainlink-vrf)が呼び出され、アアベゴッチにランダムな特性値が割り当てられます。 特性値はベルカーブで分布しており、各特性にはそのレアリティに応じてCommon、Uncommon、Rare、Mythicalの値が割り当てられている。 各特性のレアリティが得られる確率は、以下の表のとおりです：

表_特性確率

The bell curve for trait value distribution would look something like the following:

<img class="bodyImage" src="/traits/bell_curve.png" alt = "bell curve" />

Aavegotchis possess six traits initially, although these may be extended in the future via voting in [AavegotchiDAO](/dao). Some traits, like the Aavegotchi's body colour (other than plain old white), will be defined by the AavegotchiDAO for every new haunt!

Unlike other games, in Aavegotchi, there is no “optimal” trait. Each attribute (except for eye shape and eye color) has different effects in different mini-games. For example, Aavegotchis with higher energy may perform well in races, but would not perform well in a meditation mini-game.

The tables below detail each trait by rarity. *Note: The two tables should be seen as one. It has been split apart to render on mobile devices.*

table_TraitsByRarity1 table_TraitsByRarity2
<p style="margin-left: 3.0em"><i> (L) denotes "Low"; (H) denotes "High" </i></p>
<p style="margin-left: 3.0em"><i> *Common eye colours take on the colours of the staked collateral on your Aavegotchi. i.e. orange for aDAI, sky blue for aAAVE, purple for aETH etc. </i></p>

For more detailed information on every single Eye Shape, check out the [Eye Shape page](/eye-shape).

## スピリットフォース特性修正

The type of [spirit force](/spirit-force) that your Aavegotchi has also influences their trait values:

table_spiritForceModifiers

## キンシップ
Kinship is your Aavegotchi’s feeling of loyalty towards you. More information can be found on the [Kinship page](/kinship).

## 経験値
Aavegotchis receive experience (XP) for:
* Voting in [AavegotchiDAO](/dao)
* Participating in events held on Aavegotchi Discord (a Typeform will be released during the event for people to complete to receive XP for their Gotchis)
* Playing [mini-games](/minigames) (only during certain periods as announced on Discord)

Aavegotchis can also be sacrificed to remove their [spirit force](/spirit-force) and have it transferred to another Aavegotchi. The recipient Aavegotchi will receive 100% of the sacrificed Aavegotchi’s accrued XP.

XP exists as an internal balance on the Aavegotchi smart contract.

XP can be viewed on the [Aavegotchi profile page](/aavegotchi-profile).

## レベル
Aavegotchis level up as they gain more XP. Every three levels, Aavegotchis receive one [Spirit Point](/glossary#spirit-point) that can be allocated towards increasing or decreasing a certain trait. Some wearables can only be worn by Aavegotchis of a certain level.

The higher your Gotchi level, the more [guilds](/guild) they are allowed to join.

For detailed information on the XP required for each level, click [here](/xp).

Your Aavegotchi level can be viewed on the [Aavegotchi profile page](/aavegotchi-profile).

## ハウント
Like pioneers to the New World, Aavegotchis travel from the Nether Realm to the Ether Realm in groups known as [Haunts](/haunt). The initial Haunt contains 10,000 Aavegotchis. Thereafter, new Haunts must be approved for travel by the [AavegotchiDAO](/dao). Some wearables can only be worn by Aavegotchis belonging to a certain Haunt.

Think of Haunts as editions, with Haunt numbers being indicated on the Gotchi. There will be no stats differences between Haunts.

## エージングメカニズム

Aavegotchi改善提案13番は、ゴッチにエージングメカニズムを導入しました。

ゴッチは、年をとる事につれてレア度が少しブーストされるはずです。 それは、召喚の統計的差異を打ち消し、長期的な関与に報いるためです。

For more information, check out the [Aging Mechanic](/aging-mechanic) page.
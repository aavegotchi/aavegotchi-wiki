---
author: wagyuchicken
date: '2020-04-23T07:00:00.000Z'
title: 'Rarity Farming（レアリティ・ファーミング）'
description: '知っておきたい！レアリティ・ファーミングのすべて！'
contributors:
  - "cinnabarhorse"
  - "wagyuchicken"
  - "appellants"
---

<div class="headerImageContainer">
<img class="headerImage" src="/rarity-farming/rarity-farming.png">
<p class="headerImageText">レアリティ・ファーマー</p>
</div>

**はじめに**

はじめに レアリティ・ファーミングは、Aavegotchiが開拓した革新的なゲームメカニズムです。 エコシステムに最も深く関わり、熱中しているユーザーに報いることを目的としています。 その名の通り、レアリティ（レア度）の高いAavegotchiを育て、その報酬を得るというものです。

このウィキでは、レアリティファーミングに参加する方法と、最も希少なAavegotchiがどのように決定されるかを説明します。 詳しくはもっと読み進めてください！

<div class="contentsBox">

**目次**

<ol>
<li><a href=#how-do-i-rarity-farm->レアリティファームの方法とは？</a></p>
<li><a href=#calculating-rarity>レアリティの算出方法</a></li>
<p><a href=#base-rarity-score>ベースレアリティスコア</a></p>
<p><a href=#absolute-rarity-score>アブソリュートレアリティスコア</a></p>
<p><a href=#final-rarity-score>ファイナルレアリティスコア</a></p>
<li><a href=#rewards>リワード</a></li>
<p><a href=#rarity-farming-seasons>レアリティファーミングシーズン</a></p>
<p><a href=#collecting-rarity-farming-rewards>レアリティファーミングの報酬を収集する</a></p>
</ol>

</div>

## **How Do I Rarity Farm?**
レアリティファームを行うには、いくつかの方法があります。 次のような方法があります：

* **[召喚時](/portals)にレアリティの高いAavegotchiを選択する**

* **[ウェアラブル](/wearables)を装着してAavegotchiの特性を変更する**

* **[ミニゲーム](/minigames)で遊ぶ**

各工程の詳細については、サイドバーの各ページにリンクがあります。

ただし、ひとつの Aavegotchi のレア度は動的なもので、Aavegotchi の世界における特性やウェアラブルの分布が変化するのに伴って変化します。 つまり、Aavegotchiの特定の特性を最大にするだけでは不十分です。 また、他のプレイヤーの行動も考慮する必要があります。 たとえば、多くのプレイヤーが高い攻撃性のスコアを持つ戦争好きなゴッチを獲得しようとすると、この特性の希少性が低下し、Aavegotchiのレア度が下がります。

## **レアリティの算出方法**

レアリティスコアには、ベース（基本）レアリティスコア (特性および消耗品) とアブソリュート（絶対的）レアリティスコアの2種類があります。

### ベースレアリティスコア

ベースレアリティスコア（Base Rarity Score - BRS）は、Aavegotchiの特性、装備している消耗品、および[年齢](/aging-mechanic)の総合的なレアリティから算出されます。

#### 特性BRS

Aavegotchiの特性のBRSは、以下の式で算出されます：

```
if (number < 50) return 100 - number;
    else return number + 1;
```

*特性値が50**未満**の場合、BRS = 100 - 特性値*

*特性値が50**以上**の場合、BRS = 特性値 + 1*

#### ウェアラブルBRS

一方、ウェアラブルのBRSは、そのレアリティに依存します。 例えば、レアな[ウェアラブル](/wearables)は5BRS追加に比べ、ゴッドライクなウェアラブルは50BRS追加となります。

#### 年齢

ゴッチは年齢を重ねることで、さらにBRSを獲得します。 詳しくは、[エイジングメカニズム](/aging-mechanic)のページをご覧ください。

### アブソリュートレアリティスコア

アブソリュート（絶対的）レアリティ スコア (ARS) は、Aavegotchiエコシステム全体におけるAavegotchiの特性のレアリティから算出されます。 たとえば、多くのプレイヤーがAavegotchiのエネルギーレベルを最高にするように訓練した場合、エネルギーレベルが高い - TURNTのARSはエネルギーレベルが低い - WASTEDのそれよりも低くなります。 ARSは、各アベゴッチの特性を100としたときのパーセンタイルで計算されます。 例えば、全体の5%のAavegotchiがWASTEDの特性を持つ場合、WASTEDの特性はAavegotchiのエネルギー特性ARSの合計スコア95に貢献することになります。

### ファイナルレアリティスコア

<b>Final Rarity Score = Traits BRS + Wearables BRS + Traits ARS</b>

Example of the Final Rarity Score calculation is as shown below:

table_RarityScoreCalculationTable
<p style="margin-left: 2.8em"><i>BRS denotes Base Rarity Score; ARS denotes Absolute Rarity Score</i></p>

**The formula for ARS is not determined yet. As a result, the values in the ARS column in the above table are imaginary.**

## リワード

In each season of Rarity Farming, the rarest Aavegotchis will receive a distribution of GHST rewards (derived from all sales involving GHST) that can be claimed by their owners.

Initially, there were 3 categories of rarity farming rewards:

* Aavegotchi Rarity Scores (by BRS, ARS coming later)
* [Kinship](/traits#kinship) Scores
* [経験値](/traits#experience)

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

### レアリティファーミングの報酬を収集する

Rarity Farming Rewards are disbursed to your Aavegotchi inventories (Yes! Each of your Aavegotchi has their own personal inventory!).

First, head over to the [My Aavegotchis page](https://aavegotchi.com/aavegotchis). Click on any one of your Aavegotchi. At the bottom-right corner of the screen, there will be a "Pocket" button. Click on it to view your Aavegotchi's inventory. You can see the amount of GHST your Gotchi has won from Rarity Farming (as well as their equipped wearables).
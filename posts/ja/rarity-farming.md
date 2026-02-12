---
author: wagyuchicken
date: "2025-09-18T00:00:00.000Z"
title: "Rarity Farming（レアリティ・ファーミング）"
description: "知っておきたい！レアリティ・ファーミングのすべて！"
contributors: '["cinnabarhorse", "wagyuchicken", "appellants", "unintelligent-nerd"] ---'
---

<div class="headerImageContainer">
<img class="headerImage" src="/rarity-farming/rarity-farming.png">
<p class="headerImageText">レアリティ・ファーマー</p>
</div>

Rarity farming is an innovative game mechanism pioneered by Aavegotchi. It strives to reward the users who are the most thoughtfully and enthusiastically engaged with the ecosystem. As its name suggests, this is a process where you attempt to raise the rarest Aavegotchis, and get rewarded for doing so.

This wiki page will explain how you can engage in rarity farming, and how the rarest Aavegotchis are determined. Keep reading to learn more!

<div class="contentsBox">

**目次**

<ol>
<li><a href=#how-do-i-rarity-farm->レアリティファームの方法とは？</a></p>
<li><a href=#components-of-rarity-score>Components of Rarity Score</a></li>
<li><a href=#calculating-rarity-score>Calculating Rarity Score</a></li>
<li><a href=#rewards>リワード</a></li>
<p><a href=#rarity-farming-seasons>レアリティファーミングシーズン</a></p>
<p><a href=#collecting-rarity-farming-rewards>レアリティファーミングの報酬を収集する</a></p>
</ol>

</div>

## レアリティファームの方法とは？


レアリティファームを行うには、いくつかの方法があります。 次のような方法があります：

- **[召喚時](/portals)にレアリティの高いAavegotchiを選択する**

- **[ウェアラブル](/wearables)を装着してAavegotchiの特性を変更する**

各工程の詳細については、サイドバーの各ページにリンクがあります。

ただし、ひとつの Aavegotchi のレア度は動的なもので、Aavegotchi の世界における特性やウェアラブルの分布が変化するのに伴って変化します。 つまり、Aavegotchiの特定の特性を最大にするだけでは不十分です。 また、他のプレイヤーの行動も考慮する必要があります。 For instance, if other players [sacrifice](/traits#experience) a number of Gotchis to boost a particular Gotchi, they could overtake you on the Experience/XP category of the Rarity Farming leaderboards.

## Components of Rarity Score

### ベースレアリティスコア

ベースレアリティスコア（Base Rarity Score - BRS）は、Aavegotchiの特性、装備している消耗品、および[年齢](/aging-mechanic)の総合的なレアリティから算出されます。

#### 特性BRS

Aavegotchiの特性のBRSは、以下の式で算出されます：

```
if (number < 50) return 100 - number;
    else return number + 1;
```

_特性値が50**未満**の場合、BRS = 100 - 特性値_

_特性値が50**以上**の場合、BRS = 特性値 + 1_

#### ウェアラブルBRS

一方、ウェアラブルのBRSは、そのレアリティに依存します。 例えば、レアな[ウェアラブル](/wearables)は5BRS追加に比べ、ゴッドライクなウェアラブルは50BRS追加となります。

#### 年齢

ゴッチは年齢を重ねることで、さらにBRSを獲得します。 詳しくは、[エイジングメカニズム](/aging-mechanic)のページをご覧ください。

## Calculating Rarity Score

Example of Rarity Score calculation is as shown below:

table_RarityScoreCalculationTable

## リワード

In each season of Rarity Farming, the rarest Aavegotchis receive GHST rewards that can be claimed by their owners. Recent seasons (e.g., Season 10/11) have run on Base.

当初、レアリティファーミングの報酬は3つのカテゴリーに分かれていました：

- Aavegotchi レアリティスコア（BRSによる、ARSは後日公開予定）
- [キンシップ](/traits#kinship)スコア
- [経験値](/traits#experience)

各カテゴリーについて、レアリティファーミングの報酬は降下曲線に基づいて分配され、上位数名のAavegotchiは、曲線上の下位に位置する他のゴッチよりも多くのGHST報酬を獲得します。 また、上位数名のゴッチには、下位に位置する他のゴッチよりも多くのGHST報酬が与えられますが、それ以下のゴッチには報酬が与えられないカットオフポイントが存在します。 そのため、そのカットオフポイントより上になるように頑張ってください。 少なくとも何かは獲得することができます！

各カテゴリーに配分される報酬の割合は、AavegotchiDAOによって決定される予定です。

Aavegotchiのゲームの発展に伴い、より多くのカテゴリが後に追加される予定です。 Some of these new one-off categories include:

- Rookie Kinship
- Rookie Experience/XP
- Gotchi Battler

プレイヤー報酬は、2週間ごとにオンチェーン・スナップショットで配布されます。 当初はPixelcraftによる手作業で行われますが、最終的にはDAOによって自動化される予定です。 各スナップショットの後、報酬は成功したレアリティファーマーが請求することができ、次のラウンドがすぐに開始されます。

レアリティファーミングのGHST報酬はどのように調達されているのでしょうか？ [ウェアラブル、消耗品、その他のゲームアイテムで使用されたすべてのGHSTの40%が、レアリティファーミングの報酬プールにリダイレクトされます。](https://aavegotchi.medium.com/rarity-farming-has-arrived-heres-how-to-play-1f1d3342dbc8)

Aavegotchiの世界全体のなかでのAavegotchiの最終的なレアリティスコアは、プレイヤーがより多くのAavegotchiを召喚し、より多くのウェアラブルを装備し、Aavegotchiをレベルアップすることによって常に変化します。 そのため、プレイヤーはAavegotchiたちをどのように育成し、どのように装備するかという戦略的な判断が必要となります。 このように、Aavegotchiのレアリティファーミングは、思慮深いゲームプレイとユーザーの積極的な参加を促し、幽霊のような収穫をした最高の農家に報酬を与えます。

現在、Aavegotchiが各期間に実行できるインタラクションの数に制限はありませんが、ボット活動が問題になった場合、AavegotchiDAOはボット活動を減らすためのサーキットブレーカーを追加することを決定することができます。

### レアリティファーミングシーズン

レアリティファーミングは様々な季節（シーズン）に分かれています。 各シーズンには独自の競技カテゴリー、報酬プールのサイズ、報酬分配曲線があります。

For data pertaining to the Rarity Farming Seasons (including Base-era seasons), check out this [page](/rarity-farming-seasons) and the official blog.

### レアリティファーミングの報酬を収集する

レアリティファーミングの報酬は、Aavegotchiのインベントリに分配されます（そうです！ Aavegotchiはそれぞれ自分専用のインベントリを持っています！）。

まず、[私のAavegotchi](https://aavegotchi.com/lending/aavegotchis)ページに移動します。 いずれかの Aavegotchi をクリックします。 画面右下に「ポケット」ボタンがあります。 これをクリックすると、Aavegotchiのインベントリが表示されます。 レアリティファーミングで獲得したGHSTの量や、装備しているウェアラブルの確認ができます。

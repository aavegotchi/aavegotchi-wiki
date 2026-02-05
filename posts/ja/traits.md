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

Aavegotchiは生まれながらにして特徴を持っています。 ちょうどあなたの特徴が人としてのあなたを定義するように、Avegotchiの特徴もゴーストとしての生活を決定するのに重要です。 複数の特性を持つことで、[特性の基本レアリティ](/rarity-farming#base-rarity-score)、[ミニゲーム](/minigames)でのパフォーマンス、そして装備可能な[アイテム](/wearables)が変化します。 [ポータル](/portals)から召喚されたAavegotchiは、ランダムに生成された特性の組み合わせで生まれます。 ただし、Aavegotchiの特性は<a href=#level>レベル</a>や装備品、消耗品の使用によって変化します。 

<div class="contentsBox">

**目次**

<ol>
<li><a href=#randomly-generated-traits>ランダム生成された特性 </a></li>
<li><a href=#spirit-force-trait-modifiers>スピリットフォース特性モディファイア</a></li>
<li><a href=#kinship>キンシップ</a></li>
<li><a href=#experience>経験値</a></li>
<li><a href=#level>レベル</a></li>
<li><a href=#haunt>ハウント</a></li>
<li><a href=#alchemica-carrying-capacity>Alchemica Carrying Capacity</a></li>
<li><a href=#aging-mechanic>Aging Mechanic</a></li>
<li><a href=#trait-mappings>特性マッピング</a></li>
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

table_TraitsProbabilities

特性値の分布のベルカーブは次のようなものです：

<img class="bodyImage" src="/traits/bell_curve.png" alt = "ベル曲線" />

Avegotchiは当初6つの特性を持っていますが、将来的には[AvegotchiDAO](/dao)の投票によって拡張される可能性があります。 Aavegotchi の体の色（白以外）のようないくつかの特性は、新しいハウントごとに AavegotchiDAO によって定義されます。

他のゲームとは異なり、Aavegotchi には「最適」な特性はありません。 各属性（目の形と目の色を除く）は、異なるミニゲームで異なる効果を発揮します。 たとえば、エネルギーが高いAavegotchiはレースでは好成績を残すかもしれませんが、瞑想のミニゲームではうまくいかないかもしれません。

以下の表は、各特性のレアリティ別の詳細です。 *注：2つの表は1つのものとして見てください。 モバイル用に分割されています。*

表_レアリティ別特性1 表_レアリティ別特性2
<p style="margin-left: 3.0em"><i> (L)は "低"、(H)は "高 "を表す。 </i></p>
<p style="margin-left: 3.0em"><i> *Aavegotchiにステークされるコラテラル・トークンの色がコモン・アイ・カラー（目の色）になります。 例えば、aDAIはオレンジ、aAAVEはスカイブルー、aETHはパープルなどといった感じです。 </i></p>

各アイシェイプの詳細については、[アイシェイプのページ](/eye-shape)を参照してください。

## スピリットフォース特性モディファイア

あなたのAavegotchiが持っている[スピリットフォース](/spirit-force)の種類も、特性の値に影響を及ぼします。

table_spiritForceModifiers

## キンシップ
キンシップとは、あなたのAavegotchiがあなたに対して抱く忠誠心のことです。 詳しくは[キンシップ](/kinship)のページをご覧ください。

## 経験値
Aavegotchiは以下のことで経験値（XP）を得ることができます：
* [AvegotchiDAO](/dao)で投票する
* Aavegotchi Discordで開催されるイベントに参加する（イベント中にタイプフォームが公開され、それに記入することでゴッチのXPがもらえます）。
* [ミニゲーム](/minigames)で遊ぶ（Discordで告知された特定の期間のみ）

また、Aavegotchiを生け贄にして[スピリットフォース](/spirit-force)を取り除き、他のAavegotchiに移し替えることも可能です。 受け取ったAavegotchiは、生け贄にしたAavegotchiのXPの100%を受け取ります。

XP は Aavegotchi スマートコントラクトの内部残高として存在します。

XP は Aavegotchi の[プロフィールページ](/aavegotchi-profile)で確認することができます。

## レベル
AavegotchiはXPをより多く獲得することでレベルアップします。 Aavegotchiは3レベルごとに1[スピリットポイント](/glossary#spirit-point)を受け取り、このポイントを特定の特性の増減に割り当てることができます。 一部のウェアラブルは、特定のレベルのAavegotchiだけが着用できます。

ゴッチレベルが高いほど、より多くの[ギルド](/guild)に参加することができます。

各レベルに必要なXPの詳細については、[こちら](/xp)をご覧ください。

あなたのAavegotchiのレベルは[Aavegotchiプロフィールページ](/aavegotchi-profile)で確認することができます。

## ハウント
Aavegotchiは新世界の開拓者のように、ネザー界からエーテル界へ、「[ハウント](/haunt)」と呼ばれる集団で移動します。 最初のハウントには10,000匹のAavegotchiがいます。 その後、新たなハウントは[AavegotchiDAO](/dao)の許可を得なければなりません。 一部のウェアラブルは、特定のハウントに所属するAavegotchiのみが着用できます。

ハウントはエディションと考え、ハウント番号はゴッチに表示されます。 なお、各ハウントのステータスに違いはありません。

## Alchemica Carrying Capacity

[BRS](/rarity-farming#base-rarity-score) is used to boost a gotchi's carrying capacity with the follow formula:

```
Carrying Capacity = 100 * (BRS/300)^2
```

例： a Gotchi with:

* BRS = 600 has a carrying capacity of 400 [Alchemica](/gotchus-alchemica) chunks

* BRS = 900 has a carrying capacity of 900 Alchemica chunks

## Aging Mechanic

Aavegotchi改善提案13番は、ゴッチにエージングメカニズムを導入しました。

ゴッチは、年をとる事につれてレア度が少しブーストされるはずです。 それは、召喚の統計的差異を打ち消し、長期的な関与に報いるためです。

詳しくは、[エイジングメカニズム](/aging-mechanic)のページをご覧ください。

## 特性マッピング

These 6 traits are the base traits. To turn Aavegotchi into a full-fledged game in the [Gotchiverse](/gotchiverse), we need more nuanced variables.

Find out what these base traits map into in the [Trait Mappings page](/trait-mappings).
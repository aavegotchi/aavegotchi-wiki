---
author: Unintelligent Nerd
date: '2020-04-23T07:00:00.000Z'
title: 'Aavegotchi XP'
description: 'Aavegotchi XPについてはここで学びます。'
contributors:
  - "unintelligent-nerd"
---

ゴッチがXPを稼ぐとレベルアップします。 しかし、レベルアップをするにはどれだけのXPが必要ですか? データアナリスト、私たちはあなたが計算するためのいくつかの数字を持っています!

<div class="contentsBox">

**内容**

<ol>
<li><a href=#gaining-xp>XPを獲得</a></li>
<li><a href=#formula>数式</a></li>
<li><a href=#experience-table>XPテーブル</a></li>
<li><a href=#tracking-xp-received>受信されたXPを追跡する</a></li>
</ol>

</div>

## XPを獲得する方法
AavegotchisはXPを獲得する方法いくつかあります：
* [AavegotchiDAO](/dao)で投票
* Aavegotchi Discordでイベントを参加する。(GotchiでXPを受け取るため、イベント中に入力するタイプフォームをリリースします)
* [ミニゲーム](/minigames) をプレイする (Discordで発表された一定期間のみ)

## 数式
XPをレベルアップを決定するに、次の式を使用しています。

(現在のレベル^2)÷定数, ここで定数=0.02

## XPテーブル

以下の表は、各レベルに必要なXPを示しています。 Before delving into the data, here are some helpful definitions of the key terms used:

* Current Level: Current Level of your Gotchi
* Next Level: Next Level of your Gotchi
* XP: Experience required to reach the next level that is specified in the **Next Level** column
* Difference: Difference in the XP required to reach the level in the **Next Level** column compared to the same column in the previous row
* Constant: A fixed value that is used in the computation of the XP required for the next level Formula

The maximum level that an aavegotchi could attain is 99. Any changes to the maximum level could be done through [AavegotchiDAO](/dao) proposals.

*Note: Aavegotchis start at Level 1. "Level 0" is included in the table for individuals who are interested to apply the formula and observe how XP computation works.*

table_XP

## 受信されたXPを追跡する

Our frenly [aarchitect](/aarchitect) Frank Pfeift has created an application to track the XP that a Gotchi has received over its lifetime.

His app can be accessed [here](https://aavegotchi-xp-dashboard.vercel.app). Your Gotchi ID is the digits that are found at the end of the URL at your [Gotchi Profile Page](/aavegotchi-profile).
---
author: Unintelligent Nerd
date: '2020-04-23T07:00:00.000Z'
title: 'Aavegotchi XP'
description: 'Aavegotchi XPについてはここで学びます。'
contributors:
  - "unintelligent-nerd"
---

ゴッチがXPを稼ぐとレベルアップします。 では、レベルアップをするにはどれだけのXPが必要なのでしょうか。 データアナリストが、計算するためのいくつかの方法を示しています。

<div class="contentsBox">

**内容**

<ol>
<li><a href=#gaining-xp>XPを獲得</a></li>
<li><a href=#formula>数式</a></li>
<li><a href=#experience-table>XPテーブル</a></li>
<li><a href=#claiming-xp>Claiming XP</a></li>
<li><a href=#tracking-xp-received>Tracking XP received</a></li>
</ol>

</div>

## XPを獲得する方法
AavegotchisはXPを獲得する方法いくつかあります：
* [AavegotchiDAO](/dao)で投票
* Aavegotchi Discordで開催されるイベントに参加する（イベント中にタイプフォームが公開され、それに記入することでゴッチのXPがもらえます）。
* [ミニゲーム](/minigames)で遊ぶ（Discordで告知された特定の期間のみ）

## 計算式
XPをレベルアップを決定するに、次の式を使用しています。

(現在のレベル^2)÷定数, ここで定数=0.02

## XPテーブル

以下の表は、各レベルに必要なXPを示しています。 データを調べる前に、以下に使用されるキーワードの用な定義を示します。

* 現在のレベル：あなたのゴッチの現在のレベル
* 次のレベル：ゴッチの次のレベル
* XP: **次のレベル** の列で指定されている到達するためのXPの必要な数値
* 違い：前の行の同じ列と比較した, **次のレベル** 列のレベルに到達するために必要なXPの違い
* 定数：次のレベルの数式に必要なXPの計算に使用される固定値

Aavegotchiが最大達成出来るレベルは99です。 最大レベルへの変更は, [AavegotchiDAO](/dao) の投票で出来ます。

*注意: ゴッチはレベル1から始まります。 XPの計算がどのように機能するかを観察するために、「レベル0」がテーブルに含まれています。*

table_XP

## Claiming XP

XP has to be claimed manually at the airdrop page here: https://dapp.aavegotchi.com/u/[XXXXX]/airdrops.

Replace the [XXXXX] with your wallet address in the URL above.

After voting on an [Aavegotchi Improvement Proposal (AGIP)](/aavegotchi-improvement-proposals), all Aavegotchis you owned at the block the AGIP was created are eligible for the XP claim. There is a bulk claim ("CLAIM ALL") function that allows you to claim the XP for all AGIPs you have voted on. If the CLAIM ALL function fails, you can claim the XP for each AGIP individually.

## Tracking XP received

Our frenly [aarchitect](/aarchitect) Frank Pfeift has created an application to track the XP that a Gotchi has received over its lifetime.

His app can be accessed [here](https://aavegotchi-xp-dashboard.vercel.app). Your Gotchi ID is the digits that are found at the end of the URL at your [Gotchi Profile Page](/aavegotchi-profile).
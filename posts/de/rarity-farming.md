---
author: wagyuchicken
date: "2025-09-18T00:00:00.000Z"
title: "Rarity Farming"
description: "Alles was du über Rarity Farming wissen musst!"
contributors: '["cinnabarhorse", "wagyuchicken", "appellants", "unintelligent-nerd"] ---'
---

<div class="headerImageContainer">
<img class="headerImage" src="/rarity-farming/rarity-farming.png">
<p class="headerImageText">Ein Rarity Farmer</p>
</div>

Rarity farming is an innovative game mechanism pioneered by Aavegotchi. It strives to reward the users who are the most thoughtfully and enthusiastically engaged with the ecosystem. As its name suggests, this is a process where you attempt to raise the rarest Aavegotchis, and get rewarded for doing so.

This wiki page will explain how you can engage in rarity farming, and how the rarest Aavegotchis are determined. Keep reading to learn more!

<div class="contentsBox">

**Inhalte**

<ol>
<li><a href=#how-do-i-rarity-farm->Wie betreibe ich Rarity Farming?</a></p>
<li><a href=#components-of-rarity-score>Components of Rarity Score</a></li>
<li><a href=#calculating-rarity-score>Calculating Rarity Score</a></li>
<li><a href=#rewards>Belohnungen</a></li>
<p><a href=#rarity-farming-seasons>Rarity Farming Seasons</a></p>
<p><a href=#collecting-rarity-farming-rewards>Collecting Rarity Farming Rewards</a></p>
</ol>

</div>

## Wie betreibe ich Rarity Farming?


Es gibt mehrere Möglichkeiten, Rarity Farming zu betreiben. Dazu gehören:

- **Sorgfältige Auswahl eines Aavegotchi mit seltenen Eingenschaften während des [Beschwörungsprozesses](/portals)**

- **Equipping [wearables](/wearables) to modify the traits of your Aavegotchi**

Für weitere Informationen zu den einzelnen Prozessen, folge einfach den Links zu den jeweiligen Seiten in der Sidebar.

Der Seltenheitsgrad eines einzelnen Aavegotchi ist dynamisch und wird sich im Laufe der Zeit ändern, da sich die Verteilung der Eigenschaften und Kleidungsstücke im Aavegotchi-Universum ändert. Mit anderen Worten, es reicht nicht aus, einfach eine bestimmte Eigenschaft deines Aavegotchi zu maximieren. Du musst auch die Aktionen der anderen Spieler berücksichtigen. For instance, if other players [sacrifice](/traits#experience) a number of Gotchis to boost a particular Gotchi, they could overtake you on the Experience/XP category of the Rarity Farming leaderboards.

## Components of Rarity Score

### Base Rarity Score

Base Rarity Score (BRS) is derived from the overall rarity of both the Aavegotchi's traits, equipped wearables, and their [age](/aging-mechanic).

#### BRS von Eigenschaften

Der Base Rarity Score (BRS) der Eigenschaften des Aavegotchis wird mit der folgenden Formel berechnet:

```
if (number < 50) return 100 - number;
    else return number + 1;
```

_If trait value is **less than** 50, BRS = 100 - trait value_

_If trait value is **equal to or greater than** 50, BRS = trait value + 1_

#### BRS von Kleidungsstücken

Wearables BRS on the other hand, is dependent on its rarity. For example, rare [wearables](/wearables) yield 5 BRS and godlike wearables 50 BRS.

#### Age

As your gotchi ages, they gain additional BRS. For more information, check out the [Aging Mechanic](/aging-mechanic) page.

## Calculating Rarity Score

Example of Rarity Score calculation is as shown below:

table_RarityScoreCalculationTable

## Belohnungen

In each season of Rarity Farming, the rarest Aavegotchis receive GHST rewards that can be claimed by their owners. Recent seasons (e.g., Season 10/11) have run on Base.

Initially, there were 3 categories of rarity farming rewards:

- Aavegotchi Rarity Scores (by BRS, ARS coming later)
- [Kinship](/traits#kinship) Scores
- [Experience](/traits#experience)

For each category, rarity farming rewards are distributed based on a descending curve, with the top few Aavegotchis earning more GHST rewards than other Gotchis who are positioned lower on the curve. There will be a cut-off point where Gotchis below that point do not receive any rewards. So try your best to be above that cut-off point. You will at least win something!

The proportion of rewards allocated to each of the categories will be decided by the AavegotchiDAO.

More categories will be added later as the Aavegotchi game continues to develop. Some of these new one-off categories include:

- Rookie Kinship
- Rookie Experience/XP
- Gotchi Battler

Player Rewards will be distributed every two weeks via onchain snapshots. Initially, this will be a manual process handled by Pixelcraft, but eventually can be automated by the DAO. After each snapshot, rewards can be claimed by all successful rarity farmers and the next round immediately begins.

How are the GHST rewards for Rarity Farming funded? [40% of all GHST spent from wearables, consumables, and other game items are redirected into the Rarity Farming rewards pool](https://aavegotchi.medium.com/rarity-farming-has-arrived-heres-how-to-play-1f1d3342dbc8).

The final rarity score of an Aavegotchi in the overall Aavegotchi Universe is constantly shifting as players summon more Aavegotchis, equip more wearables, and level up their Aavegotchis. Thus, players must make strategic decisions on how they train and equip their Aavegotchis. That is how Aavegotchi's rarity farming encourage thoughtful gameplay and active participation from users, while rewarding the best farmers for their ghostly harvests.

There is currently no limit to how many interactions an Aavegotchi can perform each period, but if bot activity became a problem then the AavegotchiDAO could vote to add circuit breakers to reduce bot activity.

### Rarity Farming Seasons

Rarity Farming is divided into different seasons. Each season has its own competition categories, size of reward pool, and reward distribution curve.

For data pertaining to the Rarity Farming Seasons (including Base-era seasons), check out this [page](/rarity-farming-seasons) and the official blog.

### Collecting Rarity Farming Rewards

Rarity Farming Rewards are disbursed to your Aavegotchi inventories (Yes! Each of your Aavegotchi has their own personal inventory!).

First, head over to the [My Aavegotchis page](https://aavegotchi.com/aavegotchis). Click on any one of your Aavegotchi. At the bottom-right corner of the screen, there will be a "Pocket" button. Click on it to view your Aavegotchi's inventory. You can see the amount of GHST your Gotchi has won from Rarity Farming (as well as their equipped wearables).

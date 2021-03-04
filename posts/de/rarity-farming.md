---
author: wagyuchicken
date: '2020-04-23T07:00:00.000Z'
title: 'Rarity Farming'
description: 'Alles was du über Rarity Farming wissen musst!'
contributors:
  - "cinnabarhorse"
  - "wagyuchicken"
  - "appellants"
---

<div class="headerImageContainer">
<img class="headerImage" src="/rarity-farming/rarity-farming.png">
<p class="headerImageText">Ein Rarity Farmer</p>
</div>

**Einleitung**

Rarity Farming ist ein innovativer Spielmechanismus, der von Aavegotchi erfunden wurde. Es möchte die Nutzer belohnen, die sich am aufmerksamsten und enthusiastischsten mit dem Ökosystem beschäftigen. Wie der Name schon sagt, versuchst du dabei, die seltensten Aavegotchis aufzuziehen und wirst dafür belohnt.

Auf dieser Wiki-Seite wird erklärt, wie du Rarity Farming betreiben kannst und wie die seltensten Aavegotchis bestimmt werden. Lies weiter, um mehr zu erfahren!

<div class="contentsBox">

**Inhalte**

<ol>
<li><a href=#how-do-i-rarity-farm->Wie betreibe ich Rarity Farming?</a></p>
<li><a href=#calculating-rarity>Seltenheit berechnen</a></li>
<p><a href=#base-rarity-score>Base Rarity Score</a></p>
<p><a href=#absolute-rarity-score>Absolute Rarity Score</a></p>
<p> <a href=#final-rarity-score>Final Rarity Score</a></p>
<li><a href=#rewards>Belohnungen</a></li>
</ol>

</div>

## **Wie betreibe ich Rarity Farming?**
Es gibt mehrere Möglichkeiten, Rarity Farming zu betreiben. Dazu gehören:

* **Sorgfältige Auswahl eines Aavegotchi mit seltenen Eingenschaften während des [Beschwörungsprozesses](/portals)**

* **Das Ausrüsten von [Kleidungsstücken](/posts/wearables), um die Eigenschaften deines Aavegotchi zu verändern**

* **Mitmachen in Minispielen**

Für weitere Informationen zu den einzelnen Prozessen, folge einfach den Links zu den jeweiligen Seiten in der Sidebar.

Der Seltenheitsgrad eines einzelnen Aavegotchi ist dynamisch und wird sich im Laufe der Zeit ändern, da sich die Verteilung der Eigenschaften und Kleidungsstücke im Aavegotchi-Universum ändert. Mit anderen Worten, es reicht nicht aus, einfach eine bestimmte Eigenschaft deines Aavegotchi zu maximieren. Du musst auch die Aktionen der anderen Spieler berücksichtigen. Wenn zum Beispiel zu viele Spieler versuchen, ein kriegerisches Gotchi mit hohen Aggressionswerten zu ergattern, wird diese Eigenschaft weniger selten, und der Seltenheitsgrad deines Aavegotchis sinkt.

## **Seltenheit berechnen**

Es gibt 2 Arten von Seltenheitswerten - Base Rarity Score (für Eigenschaften und Kleidungsstücke) & Absolute Rarity Score.

### Base Rarity Score

Der Base Rarity Score (BRS) ergibt sich aus der gesamten Seltenheit der Eigenschaften des Aavegotchi und der ausgerüsteten Kleidungsstücke.

#### BRS von Eigenschaften

Der Base Rarity Score (BRS) der Eigenschaften des Aavegotchis wird mit der folgenden Formel berechnet:

```
if (number < 50) return 100 - number;
    else return number + 1;
```

*If trait value is **less than** 50, BRS = 100 - trait value*

*If trait value is **equal to or greater than** 50, BRS = trait value + 1*

#### BRS von Kleidungsstücken

Wearables BRS on the other hand, is dependent on its rarity. For example, rare [wearables](https://wiki.aavegotchi.com/en/wearables) yield 5 BRS and godlike wearables 50 BRS.

### Absolute Rarity Score

Absolute Rarity Score (ARS) is derived from the particular rarity of the Aavegotchi's traits in the overall Aavegotchi ecosystem. For example, if a lot of players have trained their Aavegotchis to have highest Energy Level, then the ARS for high Energy Level - TURNT would be lower than that of lowest Energy Level - WASTED. ARS is calculated in terms of percentiles out of 100 for each of the Aavegotchi traits. So if 5% of all Aavegotchis possess a WASTED trait for example, then the WASTED trait will contribute to a total score of 95 to the Aavegotchi's energy trait ARS.

### Final Rarity Score

<b>Final Rarity Score = BRS von Eigenschaften + BRS von Kleidungsstücken + ARS von Eigenschaften</b>

Example of the Final Rarity Score calculation is as shown below:

table_RarityScoreCalculationTable
<p style="margin-left: 2.8em"><i>BRS denotes Base Rarity Score; ARS denotes Absolute Rarity Score</i></p>

## Belohnungen

In each period (length determined by AavegotchiDAO), the few rarest Aavegotchis with the **highest Final Rarity Scores** will receive a distribution of GHST rewards (derived from all sales involving GHST) that can be claimed by their owners.

Initially, there will be three categories of rewards:
* Top 100 seltenste Aavegotchis (nach BRS, ARS kommt später)
* Top 100 [Freundschafts](/traits#kinship)-Werte
* Top 100 [Erfahrungspunkte (EXP)](/traits#experience)

The proportion of rewards allocated to each of the categories will be decided by the AavegotchiDAO.

More categories will be added later as the Aavegotchi game continues to develop.

Player Rewards will be distributed every two weeks via onchain snapshots. Initially, this will be a manual process handled by Pixelcraft, but eventually can be automated by the DAO. After each snapshot, rewards can be claimed by all successful rarity farmers and the next round immediately begins.

How are the GHST rewards for Rarity Farming funded? [40% of all GHST spent from wearables, consumables, and other game items are redirected into the Rarity Farming rewards pool](https://aavegotchi.medium.com/rarity-farming-has-arrived-heres-how-to-play-1f1d3342dbc8).

The final rarity score of an Aavegotchi in the overall Aavegotchi Universe is constantly shifting as players summon more Aavegotchis, equip more wearables, and level up their Aavegotchis. Thus, players must make strategic decisions on how they train and equip their Aavegotchis. That is how Aavegotchi's rarity farming encourage thoughtful gameplay and active participation from users, while rewarding the best farmers for their ghostly harvests.

There is currently no limit to how many interactions an Aavegotchi can perform each period, but if bot activity became a problem then the AavegotchiDAO could vote to add circuit breakers to reduce bot activity.




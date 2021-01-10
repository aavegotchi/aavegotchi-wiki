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

<p style="margin-left: 4.8em"><b>Trait BRS = traitValue >= 50 ? traitValue : 100-traitValue </b> (Programmiersprache)</p> 
<p style="margin-left: 4.8em"><i>Wenn der Eigenschaftswert grösser oder gleich 50 ist, ist BRS = Eigenschaftswert. </i></p> 
<p style="margin-left: 4.8em"><i>Wenn der Eigenschaftswert kleiner als 50 ist, ist BRS = 100 - Eigenschaftswert. </i></p>

#### BRS von Kleidungsstücken

Der BRS von Kleidungsstücken hingegen ist abhängig von seiner Seltenheit. Zum Beispiel bringen seltene [Kleidungsstücke](https://wiki.aavegotchi.com/en/wearables) 5 BRS und göttliche Kleidungsstücke 50 BRS.

### Absolute Rarity Score

Der Absolute Rarity Score (ARS) ergibt sich aus der besonderen Seltenheit der Eigenschaften des Aavegotchis im gesamten Aavegotchi-Ökosystem. For example, if a lot of players have trained their Aavegotchis to have highest Energy Level, then the ARS for high Energy Level - TURNT would be lower than that of lowest Energy Level - WASTED. ARS is calculated in terms of percentiles out of 100 for each of the Aavegotchi traits. So if 5% of all Aavegotchis possess a WASTED trait for example, then the WASTED trait will contribute to a total score of 95 to the Aavegotchi's energy trait ARS.

### Final Rarity Score

<b>Final Rarity Score = Traits BRS + Wearables BRS + Traits ARS</b>

Example of the Final Rarity Score calculation is as shown below:

table_RarityScoreCalculationTable
<p style="margin-left: 2.8em"><i>BRS denotes Base Rarity Score; ARS denotes Absolute Rarity Score</i></p>

## Belohnungen

In each period (length determined by AavegotchiDAO), the few rarest Aavegotchis with the <b>highest Final Rarity Scores</b> will receive a distribution of GHST rewards (derived from all sales involving GHST) that can be claimed by their owners.

The final rarity score of an Aavegotchi in the overall Aavegotchi Universe is constantly shifting as players summon more Aavegotchis, equip more wearables, and level up their Aavegotchis. Thus, players must make strategic decisions on how they train and equip their Aavegotchis. That is how Aavegotchi's rarity farming encourage thoughtful gameplay and active participation from users, while rewarding the best farmers for their ghostly harvests.

There is currently no limit to how many interactions an Aavegotchi can perform each period, but if bot activity became a problem then the AavegotchiDAO could vote to add circuit breakers to reduce bot activity.




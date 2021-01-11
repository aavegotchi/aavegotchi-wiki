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

Der Absolute Rarity Score (ARS) ergibt sich aus der besonderen Seltenheit der Eigenschaften des Aavegotchis im gesamten Aavegotchi-Ökosystem. Wenn zum Beispiel viele Spieler ihre Aavegotchis auf die höchste Energiestufe trainiert haben, dann wären die ARS für die hohe Energiestufe - plötzlich niedriger als die der niedrigsten Energiestufe - verschwendet. ARS wird in Form von Perzentilen von 100 für jedes der Aavegotchi-Merkmale berechnet. Wenn also z.B. 5% aller Aavegotchis eine verschwendete Eigenschaft besitzen, dann trägt die verschwendete Eigenschaft zu einem Gesamtscore von 95 zur Energie-Eigenschaft ARS des Aavegotchis bei.

### Final Rarity Score

<b>Final Rarity Score = BRS von Eigenschaften + BRS von Kleidungsstücken + ARS von Eigenschaften</b>

Ein Beispiel für die Berechnung des Final Rarity Scores ist unten abgebildet:

table_RarityScoreCalculationTable
<p style="margin-left: 2.8em"><i>BRS bezeichnet den Base Rarity Score; ARS bezeichnet den Absolute Rarity Score</i></p>

## Belohnungen

In jeder Periode (Länge wird von AavegotchiDAO festgelegt) erhalten die seltensten Aavegotchis mit den <b>höchsten Final Rarity Scores</b> eine Ausschüttung von GHST Belohnungen (abgeleitet von allen Verkäufen, die GHST beinhalten), die von ihren Besitzern eingefordert werden können.

Der Final Rarity Score eines Aavegotchis im gesamten Aavegotchi-Universum ändert sich ständig, wenn Spieler mehr Aavegotchis beschwören, mehr Kleidungsstücke ausrüsten und ihre Aavegotchis aufleveln. So müssen die Spieler strategische Entscheidungen treffen, wie sie ihre Aavegotchis trainieren und ausrüsten. So fördert das Rarity Farming von Aavegotchi ein durchdachtes Gameplay und eine aktive Beteiligung der Nutzer, während die besten Farmer für ihre geisterhaften Ernten belohnt werden.

Derzeit gibt es kein Limit, wie viele Interaktionen ein Aavegotchi pro Periode durchführen kann. Sollte Bot-Aktivität jedoch zu einem Problem werden, könnte der AavegotchiDAO über das Hinzufügen von Sicherungen abstimmen, um die Bot-Aktivität zu reduzieren.




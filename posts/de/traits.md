---
author: wagyuchicken
date: '2020-04-23T07:00:00.000Z'
title: 'Eigenschaften'
description: 'Alles was du über Aavegotchi Eigenschaften wissen musst!'
contributors:
  - "cinnabarhorse"
  - "wagyuchicken"
---

Aavegotchis werden mit (Charakter-)Eigenschaften geboren. Genauso wie deine Eigenschaften bestimmen, wer du als Person bist, sind auch die Eigenschaften eines Aavegotchis wichtig, um sein Leben als Geist zu bestimmen! Diese vielfältigen Eigenschaften, die sie besitzen, beeinflussen ihre [Eigenschafts Base Rarity](/rarity-farming#base-rarity-score), ihre Leistung in Minispielen und die [Kleidungsstücke](/wearables), die sie tragen dürfen. Aavegotchis, die von [Portalen](/portale) beschwört werden, kommen mit einer Kombination von zufällig generierten Eigenschaften auf die Welt. Die Eigenschaften des Aavegotchi können sich jedoch mit dem <a href=#level>Level</a>, den ausgerüsteten Kleidungsstücken und den verwendeten Consumables verändern. 

<div class="contentsBox">

**Inhalte**

<ol>
<li><a href=#randomly-generated-traits>Zufällig generierte Eigenschaften </a></li>
<li><a href=#kinship>Freundschaft</a></li>
<li><a href=#experience>Erfahrung</a></li>
<li><a href=#level>Level</a></li>
<li><a href=#haunt>Haunt</a></li>
</ol>

</div>

## Zufällig generierte Eigenschaften
Aavegotchis haben sechs Eigenschaften:

* AGG = Aggressivität
* NRG = Energie
* SPK = Spookiness
* BRN = Hirngrösse (Engl. = Brain Size)
* EYS = Augenform (Engl. = Eye Shape)
* EYC = Augenfarbe (Engl. = Eye Color)

In der RPG (Role-playing Game) Terminologie entspricht `AGG` der Stärke, `NRG` der Agilität, `BRN` der Intelligenz und `SPK` ist eine Wildcard Eigenschaft. Beachte bitte, dass diese Eigenschaften nicht genau den Standard-RPGs entsprechen; niedrigere Eigenschaftswerte im Aavegotchi-Metaverse sind ebenfalls sehr mächtig!

Eigenschaften werden beim Öffnen eines [Portals](/portals) festgelegt. Beim Öffnen eines Portals wird [Chainlink's VRF Zufallszahlengenerator Funktion](https://blog.chain.link/verifiable-random-functions-vrf-random-number-generation-rng-feature/) aufgerufen, um Aavegotchis mit zufälligen Eigenschaftswerten zu versehen. Diese Eigenschaftswerte sind auf einer Glockenkurve verteilt und jeder Eigenschaft wird ein Wert von Gewöhnlich, Ungewöhnlich, Selten oder Mythisch zugewiesen, abhängig von ihrer Seltenheit. Die Chancen, jede Seltenheitswerte zu erhalten, sind in der folgenden Tabelle aufgeführt:

table_TraitsProbabilities

Die Glockenkurve für die Verteilung der Eigenschaftswerte würde in etwa wie folgt aussehen:

<img class="bodyImage" src="/traits/bell_curve.png" alt = "bell curve" />

Aavegotchis besitzen zunächst sechs Eigenschaften, wobei diese in Zukunft durch Abstimmung im [AavegotchiDAO](/dao) erweitert werden können. Einige Eigenschaften, wie z.B. die Körperfarbe des Aavegotchis (anders als einfach nur weiss), werden von der AavegotchiDAO für jeden neuen "Haunt" (Dt. = Spuk) definiert!

Im Gegensatz zu anderen Spielen, gibt es in Aavegotchi keine "optimale" Eigenschaft. Jedes Attribut (ausser Augenform und Augenfarbe) hat unterschiedliche Auswirkungen in verschiedenen Minispielen. Zum Beispiel können Aavegotchis mit höherer Energie gut in Rennen abschneiden, würden aber nicht gut in einem Meditations-Minispiel abschneiden.

Die folgenden Tabellen zeigen jede Eigenschaft nach Seltenheit. *Hinweis: Die beiden Tabellen sollten als eine gesehen werden. Sie wurde aufgespalten, um sie auf mobilen Geräten zu rendern.*

table_TraitsByRarity1 table_TraitsByRarity2
<p style="margin-left: 3.0em"><i> (L) steht für "Low" / Niedrig; (H) steht für "High" / Hoch </i></p>
<p style="margin-left: 3.0em"><i> *Gewöhnliche Augenfarben nehmen die Farben der hinterlegten Sicherheiten in deinem Aavegotchi an. z.B. orange für aDAI, himmelblau für aAAVE, lila für aETH etc. </i></p>

## Freundschaft
Freundschaft ist das Gefühl der Loyalität deines Aavegotchis dir gegenüber. Freundschaft wird nicht zufällig zugewiesen, sondern beginnt mit einem festen Wert (50) bei der Beschwörung und erhöht oder verringert sich basierend auf verschiedenen Faktoren, wie z.B. wie lange das Aavegotchi bei demselben Besitzer ist und wie oft der Besitzer mit ihm interagiert. Der Mindestwert für die Freundschaft ist 0. Es gibt keinen maximalen Wert für die Freundschaft.

Normalerweise bedeutet längerer Besitz eine höhere Freundschaft, aber wenn du dein Aavegotchi über einen längeren Zeitraum vernachlässigst, sinkt sein Level der Freundschaft. Aavegotchis sind nicht nur Gefässe zur Aufbewahrung deiner Krypto-Bags. Sie sind lebendige, atmende Geister und sie brauchen deine Zuneigung!

Für jede 12-Stunden-Periode, in der du mit deinem Aavegotchi interagierst, erhältst du maximal 1 Freundschaftspunkt. Umgekehrt gibt es einen Abzug von -1 Freundschaftspunkt, wenn dein Aavegotchi 24 Stunden lang vernachlässigt wird.

Tränke können auch verwendet werden, um Freundschaftspunkte zu verbessern. Allerdings handelt es sich dabei um limitierte Consumables, die nicht immer im Aavegotchi-Store erhältlich sind. Mehr Details zu Tränken werden bald verfügbar sein.

Hohe Level an Freundschaft können die Leistung deines Aavegotchis in Minispielen erhöhen und können auch als Multiplikator für GHST-Belohnungen bei Governance und [Rarity Farming](/rarity-farming) dienen. Ein niedriges Level an Freundschaft wird den gegenteiligen Effekt haben.

Einige Möglichkeiten, den Freundschaftswert deines Aavegotchis zu erhöhen:

* Aavegotchis werden mit einem Sinn für staatsbürgerliche Pflichten geboren. Bring dein Aavegotchi zum Rathaus und lass es im AavegotchiDAO abstimmen;
* Aavegotchis mögen Geister sein, aber sie haben einen unersättlichen Appetit! Füttere dein Aavegotchi mit Consumables, um sein gespenstisches Lächeln zu sehen;
* Aavegotchis lieben es, neue Kleidung anzuprobieren. Statte dein Aavegotchi mit neuen Kleidungsstücken aus, um eine dauerhafte Bindung zu schaffen;
* Aavegotchis lieben es zu spielen! Nimm dein Aavegotchi mit in den Aavegotchi Realm und level es in Minispielen auf.


## Erfahrung
Aavegotchis erhalten Erfahrung (EXP) für das Abstimmen im AavegotchiDAO und das Spielen von Minispielen. Aavegotchis können auch geopfert werden, um ihre [Sicherheiten](/atokens) zu entfernen und auf ein anderes Aavegotchi übertragen zu lassen. Das Empfänger-Aavegotchi erhält 100% der gesammelten EXP des geopferten Aavegotchis.

## Level
Aavegotchis leveln auf, wenn sie mehr EXP erhalten. Nach jeweils drei Levels erhalten Aavegotchis einen [Spirit Point](/glossary#spirit-point), der zur Erhöhung oder Verringerung einer bestimmten Eigenschaft eingesetzt werden kann. Einige Kleidungsstücke können nur von Aavegotchis eines bestimmten Levels getragen werden.

For detailed information on the XP required for each level, click [here](/xp).

## Haunt
Like pioneers to the New World, Aavegotchis travel from the Nether Realm to the Ether Realm in groups known as Haunts. The initial Haunt contains 10,000 Aavegotchis. Thereafter, new Haunts must be approved for travel by the AavegotchiDAO. Some wearables can only be worn by Aavegotchis belonging to a certain Haunt.

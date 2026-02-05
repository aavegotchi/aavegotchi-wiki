---
author: wagyuchicken
date: '2020-04-23T07:00:00.000Z'
title: 'Rarity Farming'
description: 'Alles wat je moet weten over Rarity Farming!'
contributors:
  - "cinnabarhorse"
  - "wagyuchicken"
  - "appellants"
---

<div class="headerImageContainer">
<img class="headerImage" src="/rarity-farming/rarity-farming.png">
<p class="headerImageText">Een Rarity Farmer</p>
</div>

**Introductie**

Rarity Farming is een innovatief spelmechanisme dat door Aavegotchi is geïnitieerd. Het streeft ernaar de gebruikers die het meest bedachtzaam en enthousiast met het ecosysteem bezig zijn, te belonen. Zoals de naam al aangeeft, is dit een proces waarbij u probeert de zeldzaamste Aavegotchis op te voeden en hiervoor beloond wordt.

Deze wikipagina legt uit hoe u kunt deelnemen aan Rarity Farming en hoe de zeldzaamste Aavegotchis bepaald worden. Blijf lezen om meer te leren!

<div class="contentsBox">

**Inhoud**

<ol>
<li><a href=#how-do-i-rarity-farm->Hoe doe ik Rarity Farming?</a></p>
<li><a href=#calculating-rarity>Zeldzaamheid berekenen</a></li>
<p><a href=#base-rarity-score>Basis Zeldzaamheid Score</a></p>
<p><a href=#absolute-rarity-score>Absolute Zeldzaamheid Score</a></p>
<p><a href=#final-rarity-score>Totale Zeldzaamheid Score</a></p>
<li><a href=#rewards>Beloningen</a></li>
<p><a href=#rarity-farming-seasons>Rarity Farming Seizoen</a></p>
<p><a href=#collecting-rarity-farming-rewards>Verzamel Rarity Farming Beloningen</a></p>
</ol>

</div>

## **Hoe doe ik Rarity Farming?**
Er zijn verschillende manieren waarop u zich kunt bezighouden met de Rarity Farming. Het gaat daarbij om:

* **Selecteer voorzichtig een Aavegotchi met zeldzame eigenschappen tijdens het [oproepingsproces](/portals)**

* **Uitrusten met [wearables](/wearables) om de eigenschappen van je Aavegotchi aan te passen**

* **Deelnemen aan [mini-games](/minigames)**

Voor meer informatie over elk proces, volg de links naar de respectievelijke pagina's op de zijbalk.

Dat gezegd hebbende, is het zeldzaamheidsniveau van een enkele Aavegotchi dynamisch en zal in de loop van de tijd veranderen. als de distributie van eigenschappen en wearables in het Aavegotchi universum verandert. Met andere woorden, het is niet genoeg om simpelweg een bepaalde eigenschap in je Aavegotchi uit te halen. Je moet ook kijken naar het optreden van andere spelers. Bijvoorbeeld, als te veel spelers proberen het uit te delen voor een oorlog zoals gotchi met hoge agressie scores, deze eigenschap wordt minder zeldzaam en je Aavegotchi is minder zeldzaam.

## **Zeldzaamheid berekenen**

Er zijn 2 soorten Rarity Scores die hier spelen - Basis Rarity Score (eigenschappen en wearables) & Absolute Zeldzaamheids Score.

### Basis Zeldzaamheid Score

Base Rarity Score (BRS) is afgeleid van de algehele zeldzaamheid van zowel de Aavegotchi's eigenschappen, uitgeruste wearabelen, als hun [leeftijd](/aging-mechanic).

#### BRS Eigenschap

BRS van de eigenschappen van Aavegotchi wordt afgeleid met de volgende formule:

```
als (nummer < 50) geeft 100 - nummer;
    anders retourneer nummer + 1;
```

*Als de waarde van de eigenschap **minder dan** 50, BRS = 100 - waarde*

*Als de waarde van de eigenschap **gelijk aan of groter is dan** 50, BRS = de waarde van eigenschap + 1*

#### Wearables BRS

Wearables BRS daarentegen is afhankelijk van zijn zeldzaamheid. Bijvoorbeeld, zeldzame [wearables](/wearables) renderen 5 BRS en god wearables 50 BRS.

#### Leeftijd

Wanneer jouw gotchi ouder worden, krijgen ze extra BRS. Voor meer informatie, bekijk de [Aging Mechanic](/aging-mechanic) pagina.

### Absolute Zeldzaamheid Score

Absolute Rarity Score (ARS) is afgeleid van de bijzondere zeldzaamheid van de Aavegotchi's eigenschappen in het globale Aavegotchi ecosysteem. Als veel spelers bijvoorbeeld hun Aavegotchis hebben getraind om het hoogste Energieniveau te hebben, dan zou het ARS voor hoog energieniveau - TURNT lager zijn dan dat van het laagste energieniveau - WASTED. ARS wordt berekend in termen van percentielen van de 100 voor elk van de Aavegotchi eigenschappen. Dus als 5% van alle Aavegotchis een WASTED eigenschap heeft, bijvoorbeeld. dan zal de WASTED vaardigheid bijdragen aan een totale score van 95 aan de energieeigenschap van Aavegotchi.

### Totale Zeldzaamheid Score

<b>Totale-Score = Eigenschappen BRS + Wearables BRS + Eigenschappen ARS</b>

Voorbeeld van de finale Rarity Score berekening is zoals hieronder weergegeven:

tabel_RarityScoreCalculationTabel
<p style="margin-left: 2.8em"><i>BRS denieert Base Rarariteits score; ARS denotes Absolute Rarity Score</i></p>

**De formule voor ARS is nog niet vastgesteld. Als gevolg daarvan zijn de waarden in de ARS-kolom in de bovenstaande tabel denkbeeldig.**

## Beloningen

In elk seizoen van Rarity Farming, zal de zeldzaamste Aavegotchis een verdeling van GHST beloningen ontvangen (afgeleid van alle verkopen in GHST) door hun eigenaren kan worden opgeëist.

In eerste instantie waren er 3 categorieënRarity Farming beloningen:

* Aavegotchi Rarity Scores (door BRS, ARS komt later)
* [Kinship](/traits#kinship) Scores
* [Ervaring](/traits#experience)

Voor elke categorie worden Rarity Farming beloningen verdeeld op basis van een aflopende curve, met de top paar Aavegotchis verdienen meer GHST beloningen dan andere Gotchis die lager op de curve staan. Er zal een cut-off punt zijn waar Gotchis onder dat punt geen beloningen ontvangen. Probeer dus uw best te doen om boven die grens uit te komen. U zult ten minste iets winnen! (Voor [Rarity Farming Seizoen 1](https://aavegotchi.medium.com/aavegotchi-rarity-farming-season-1-rewards-finalized-2db81e9f66e8)zou de top 5000 Gotchis in elke categorie in aanmerking komen voor Rarity Farming beloningen).

De AavegotchiDAO zal bepalen welk deel van de beloningen aan elk van de categorieën wordt toegewezen.

Meer categorieën zullen later toegevoegd worden als het Aavegotchi spel zich blijft ontwikkelen.

Speler beloningen worden elke twee weken verdeeld via onchain snapshots. Oorspronkelijk was dit een handmatig proces dat door Pixelcraft wordt afgehandeld, maar uiteindelijk kan het geautomatiseerd worden door de DAO. Na elke snapshot, kunnen beloningen worden opgeëist door alle succesvolle Rarity Farmers en de volgende ronde begint meteen.

Hoe worden de GHST beloningen voor Rarity Farming gefundeerd? [40% van alle GHST dat gespendeerd wordt aan wearables, consumables, en andere spel items worden gedoneerd aan de Rarity Farming beloningen pool](https://aavegotchi.medium.com/rarity-farming-has-arrived-heres-how-to-play-1f1d3342dbc8).

De laatste zeldzaamheidsscore van een Aavegotchi in het totale Aavegotchi Universe verschuift constant als spelers meer Aavegotchis oproepen, rust meer wearabels uit en verhoog hun Aavegotchis. Daarom moeten de spelers strategische beslissingen nemen over de opleiding en de uitrusting van hun Aavegotchis. Dat is hoe door Rarity Farming Aavegotchi doordachte gameplay en actieve deelname van gebruikers aanmoedigt, terwijl ze de beste farmers belonen voor hun spookoogsten.

Er is momenteel geen limiet voor hoeveel interacties een Aavegotchi elke periode kan uitvoeren, maar als bot activiteit een probleem wordt dan kan de AavegotchiDAO stemmen om circuitonderbrekers toe te voegen om bot activiteit te verminderen.

### Rarity Farming Seizoen

Rarity Farming is georganiseerd in verschillende seizoenen. Elk seizoen heeft zijn eigen competitie-categorieën, grootte van beloningspool, en beloningsdistributie curve.

Voor data met betrekking tot de Rarity Farming Seizoen, bekijk deze [pagina](/rarity-farming-seasons).

### Verzamel Rarity Farming Beloningen

Rarity Farming Beloningen worden uitbetaald aan je Aavegotchi inventaris (Ja! Elk van uw Aavegotchi heeft zijn eigen persoonlijke inventaris!).

Eerst moet je naar [Mijn Aavegotchis pagina](https://aavegotchi.com/aavegotchis) gaan. Klik op een van je Aavegotchis. Aan de rechterbenedenhoek van het scherm staat een "Pocket" knop. Klik erop om de Aavegotch's inventaris te bekijken. U kunt de hoeveelheid GHST zien die uw Gotchi heeft gewonnen van de Rarity Farming (evenals hun uitgeruste wearables).